import {Clock} from "src/clock";
import {WeatherRecordingGateway} from "src/weather-recording-gateway";
import {ForecastDisplay} from "src/forecast/forecast-display";
import {TemperatureDisplay} from "src/temperature/temperature-display";

export class WeatherStation {
    private lastPressure: number = 0;

    private clock: Clock;
    private weatherRecordingGateway: WeatherRecordingGateway;
    private forecastDisplay: ForecastDisplay;
    private temperatureDisplay: TemperatureDisplay;

    constructor(
        clock: Clock,
        weatherRecordingGateway: WeatherRecordingGateway,
        forecastDisplay: ForecastDisplay,
        temperatureDisplay: TemperatureDisplay) {
        this.clock = clock;
        this.weatherRecordingGateway = weatherRecordingGateway;
        this.forecastDisplay = forecastDisplay;
        this.temperatureDisplay = temperatureDisplay;
    }

    public broadcast(): void {
        const now = this.clock.getCurrent();
        const recording = this.weatherRecordingGateway.getRecordingFor(now);

        if (Math.round(recording.pressure.reading) > this.lastPressure) {
            this.forecastDisplay.output("Forecast: Improving weather on the way!");
            this.lastPressure = Math.round(recording.pressure.reading);
        } else if (Math.round(recording.pressure.reading) == this.lastPressure) {
            this.forecastDisplay.output("Forecast: More of the same");
            this.lastPressure = Math.round(recording.pressure.reading);
        } else if (Math.round(recording.pressure.reading) < this.lastPressure) {
            this.forecastDisplay.output("Forecast: Watch out for cooler, rainy weather");
            this.lastPressure = Math.round(recording.pressure.reading);
        }

        const t = recording.temperature.reading;
        const rh = Number(recording.humidity.replace('%', ''));
        const heatIndex = ((16.923 + (0.185212 * t) + (5.37941 * rh) - (0.100254 * t * rh)
                + (0.00941695 * (t * t)) + (0.00728898 * (rh * rh))
                + (0.000345372 * (t * t * rh)) - (0.000814971 * (t * rh * rh)) +
                (0.0000102102 * (t * t * rh * rh)) - (0.000038646 * (t * t * t)) + (0.0000291583 *
                    (rh * rh * rh)) + (0.00000142721 * (t * t * t * rh)) +
                (0.000000197483 * (t * rh * rh * rh)) - (0.0000000218429 * (t * t * t * rh * rh)) +
                0.000000000843296 * (t * t * rh * rh * rh)) -
            (0.0000000000481975 * (t * t * t * rh * rh * rh)));
        this.temperatureDisplay.output(
            `Current conditions: ${recording.temperature.reading} ${recording.temperature.unit}, with heat index ${heatIndex.toFixed(0)}`);
    }
}