import {WeatherRecording} from "src/weather-recording.ts";

export class Subject {
    private readonly observers: Observer[] = [];

    public register(observer: Observer): void {
        this.observers.push(observer);
    }

    protected notify(recording: WeatherRecording) {
        this.observers.forEach(o => o.update(recording))
    }
}

export interface Observer {
    update(recording: WeatherRecording): void;
}
