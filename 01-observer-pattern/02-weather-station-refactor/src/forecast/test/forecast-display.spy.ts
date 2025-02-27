import {ForecastDisplay} from "src/forecast/forecast-display";

export class ForecastDisplaySpy implements ForecastDisplay {
    public capturedOutput: string = "";

    public output(forecast: string): void {
        this.capturedOutput = forecast;
    }
}