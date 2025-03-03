import {beforeEach, describe, expect, test} from "vitest";
import {FakeClock} from "test/clock.fake";
import {WeatherStation} from "src/weather-station";
import {WeatherStationFixture} from "test/weather-station.fixture";
import {WeatherStationOutputSpy} from "test/weather-station-output.spy.ts";

describe('forecast should', () => {
    let clock: FakeClock;
    let output: WeatherStationOutputSpy;

    let weatherStation: WeatherStation;

    beforeEach(() => {
        const fixture = new WeatherStationFixture();

        clock = fixture.clock;
        output = fixture.forecastOutput;

        weatherStation = fixture.create();
    });

    test('translate pressure increase as improvement', () => {
        simulateHoursPassing(0);

        expect(output.capturedOutput).toBe("Forecast: Improving weather on the way!");
    });

    test('translate maintained pressure', () => {
        simulateHoursPassing(2);

        expect(output.capturedOutput).toBe("Forecast: More of the same");
    });

    test('translate pressure decrease as caution', () => {
        simulateHoursPassing(23);

        expect(output.capturedOutput).toBe("Forecast: Watch out for cooler, rainy weather");
    });

    const simulateHoursPassing = (until: number) => {
        for (let hour = 0; hour <= until; hour++) {
            clock.hour = hour;
            weatherStation.broadcast();
        }
    };
});
