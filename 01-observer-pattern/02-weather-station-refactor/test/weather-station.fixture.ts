import {FakeClock} from "test/clock.fake";
import {FakeWeatherRecordingGateway} from "test/weather-recording-gateway.fake";
import {TemperatureDisplaySpy} from "src/temperature/test/temperature-display.spy";
import {WeatherStation} from "src/weather-station";
import {ForecastObserver} from "src/forecast/forecast-observer.ts";
import {WeatherStationOutputSpy} from "test/weather-station-output.spy.ts";

export class WeatherStationFixture {
    public clock =  new FakeClock();
    public weatherRecordingGateway = new FakeWeatherRecordingGateway();
    public forecastOutput = new WeatherStationOutputSpy();
    public temperatureDisplay = new TemperatureDisplaySpy();

    public create() {
        const weatherStation = new WeatherStation(
            this.clock,
            this.weatherRecordingGateway,
            this.temperatureDisplay);

        weatherStation.register(new ForecastObserver(this.forecastOutput));

        return weatherStation;
    }
}