export type DailyWeatherRecording = {
    [hour: string]: WeatherRecording;
}

export type WeatherRecording  = {
    temperature: TemperatureRecording;
    humidity: string;
    wind: WindRecording;
    pressure: PressureRecording;
    precipitation: PrecipitationRecording;
}

type TemperatureRecording = {
    reading: number;
    unit: 'C' | 'F';
}

type WindRecording = {
    degrees: number;
    speed: number;
    unit: 'mph';
}

type PressureRecording = {
    reading: number;
    unit: 'hPa';
}

type PrecipitationRecording = {
    reading: number;
    unit: 'mm';
}
