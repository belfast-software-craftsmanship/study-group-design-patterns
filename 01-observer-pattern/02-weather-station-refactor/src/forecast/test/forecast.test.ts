import {beforeEach, describe, expect, test} from "vitest";
import {FakeClock} from "test/clock.fake";
import {ForecastDisplaySpy} from "src/forecast/test/forecast-display.spy";
import {WeatherStation} from "src/weather-station";
import {WeatherStationFixture} from "test/weather-station.fixture";

describe('forecast should', () => {
    let clock: FakeClock;
    let forecastDisplay: ForecastDisplaySpy;

    let weatherStation: WeatherStation;

    beforeEach(() => {
        const fixture = new WeatherStationFixture();

        clock = fixture.clock;
        forecastDisplay = fixture.forecastDisplay;

        weatherStation = fixture.create();
    });

    test('translate pressure increase as improvement', () => {
        simulateHoursPassing(0);

        expect(forecastDisplay.capturedOutput).toBe("Forecast: Improving weather on the way!");
    });

    test('translate maintained pressure', () => {
        simulateHoursPassing(2);

        expect(forecastDisplay.capturedOutput).toBe("Forecast: More of the same");
    });

    test('translate pressure decrease as caution', () => {
        simulateHoursPassing(23);

        expect(forecastDisplay.capturedOutput).toBe("Forecast: Watch out for cooler, rainy weather");
    });

    const simulateHoursPassing = (until: number) => {
        for (let hour = 0; hour <= until; hour++) {
            clock.hour = hour;
            weatherStation.broadcast();
        }
    };
});
