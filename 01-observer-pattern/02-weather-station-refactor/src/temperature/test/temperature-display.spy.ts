import {TemperatureDisplay} from "src/temperature/temperature-display";

export class TemperatureDisplaySpy implements TemperatureDisplay {
    public capturedOutput: string = "";

    public output(status: string): void {
        this.capturedOutput = status;
    }
}