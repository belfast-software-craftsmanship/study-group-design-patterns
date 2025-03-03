import {Observer} from "src/subject.ts";
import { WeatherRecording } from "src/weather-recording";
import {WeatherStationOutput} from "src/weather-station-output.ts";

export class ForecastObserver implements Observer {
    private lastPressure: number = 0;

    private output: WeatherStationOutput;

    constructor(output: WeatherStationOutput) {
        this.output = output;
    }

    public update(recording: WeatherRecording): void {
        if (Math.round(recording.pressure.reading) > this.lastPressure) {
            this.output.print("Forecast: Improving weather on the way!");
            this.lastPressure = Math.round(recording.pressure.reading);
        } else if (Math.round(recording.pressure.reading) == this.lastPressure) {
            this.output.print("Forecast: More of the same");
            this.lastPressure = Math.round(recording.pressure.reading);
        } else if (Math.round(recording.pressure.reading) < this.lastPressure) {
            this.output.print("Forecast: Watch out for cooler, rainy weather");
            this.lastPressure = Math.round(recording.pressure.reading);
        }
    }

}