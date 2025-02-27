import {beforeEach, describe, expect, test} from "vitest";
import {FakeClock} from "test/clock.fake";
import {WeatherStation} from "src/weather-station";
import {WeatherStationFixture} from "test/weather-station.fixture";

describe.skip('wind feature should', () => {
    let clock: FakeClock;

    let weatherStation: WeatherStation;

    beforeEach(() => {
        const fixture = new WeatherStationFixture();

        clock = fixture.clock;

        weatherStation = fixture.create();
    });

    test('translate wind blowing in west direction', () => {
        clock.hour = 0;

        weatherStation.broadcast();

        expect(null).toBe("Wind status: 10 mph at a direction of West");
    });

    test('translate wind blowing in south west direction', () => {
        clock.hour = 5;

        weatherStation.broadcast();

        expect(null).toBe("Wind status: 11 mph at a direction of Southwest");
    });

    test('translate wind blowing in north west direction', () => {
        clock.hour = 16;

        weatherStation.broadcast();

        expect(null).toBe("Wind status: 8 mph at a direction of Northwest");
    });
});
