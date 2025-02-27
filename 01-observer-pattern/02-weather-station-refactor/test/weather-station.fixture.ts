import {FakeClock} from "test/clock.fake";
import {FakeWeatherRecordingGateway} from "test/weather-recording-gateway.fake";
import {ForecastDisplaySpy} from "src/forecast/test/forecast-display.spy";
import {TemperatureDisplaySpy} from "src/temperature/test/temperature-display.spy";
import {WeatherStation} from "src/weather-station";

export class WeatherStationFixture {
    public clock =  new FakeClock();
    public weatherRecordingGateway = new FakeWeatherRecordingGateway();
    public forecastDisplay = new ForecastDisplaySpy();
    public temperatureDisplay = new TemperatureDisplaySpy();

    public create() {
        return new WeatherStation(
            this.clock,
            this.weatherRecordingGateway,
            this.forecastDisplay,
            this.temperatureDisplay);
    }
}