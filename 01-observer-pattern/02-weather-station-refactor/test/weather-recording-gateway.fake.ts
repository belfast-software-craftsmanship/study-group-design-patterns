import {DailyWeatherRecording, WeatherRecording} from "src/weather-recording";
import {WeatherRecordingGateway} from "src/weather-recording-gateway";
import recordingsJson from 'test/captured-weather-recording.json';

export class FakeWeatherRecordingGateway implements WeatherRecordingGateway {

    public getRecordingFor(timestamp: Date): WeatherRecording {
        const hour = timestamp.getHours().toString().padStart(2, "0");
        const recordings = recordingsJson as DailyWeatherRecording;

        return recordings[hour];
    }

}