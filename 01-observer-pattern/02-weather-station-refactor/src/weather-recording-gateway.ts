import {WeatherRecording} from "src/weather-recording";

export interface WeatherRecordingGateway {
    getRecordingFor(timestamp: Date): WeatherRecording;
}