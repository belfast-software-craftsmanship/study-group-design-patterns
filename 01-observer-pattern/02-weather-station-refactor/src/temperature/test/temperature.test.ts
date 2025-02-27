import {beforeEach, describe, expect, test} from "vitest";
import {FakeClock} from "test/clock.fake";
import {TemperatureDisplaySpy} from "src/temperature/test/temperature-display.spy";
import {WeatherStation} from "src/weather-station";
import {WeatherStationFixture} from "test/weather-station.fixture";

describe('temperature status should', () => {
    let clock: FakeClock;
    let temperatureDisplay: TemperatureDisplaySpy;

    let weatherStation: WeatherStation;

    beforeEach(() => {
        const fixture = new WeatherStationFixture();

        clock = fixture.clock;
        temperatureDisplay = fixture.temperatureDisplay;

        weatherStation = fixture.create();
    });

    test('show midnight reading along with calculated heat index', () => {
        clock.hour = 0;

        weatherStation.broadcast();

        expect(temperatureDisplay.capturedOutput).toBe("Current conditions: 9 C, with heat index 432");
    });

    test('show morning reading along with calculated heat index', () => {
        clock.hour = 8;

        weatherStation.broadcast();

        expect(temperatureDisplay.capturedOutput).toBe("Current conditions: 8 C, with heat index 445");
    });

    test('show afternoon reading along with calculated heat index', () => {
        clock.hour = 15;

        weatherStation.broadcast();

        expect(temperatureDisplay.capturedOutput).toBe("Current conditions: 11 C, with heat index 384");
    });
});
