import {WeatherStationOutput} from "../src/weather-station-output";

export class WeatherStationOutputSpy implements WeatherStationOutput {
    public capturedOutput: string = "";

    public print(content: string): void {
        this.capturedOutput = content;
    }
}