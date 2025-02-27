import {Clock} from "src/clock";

export class FakeClock implements Clock {
    private now: Date = new Date();

    public set hour(value: number) {
        this.now.setHours(value);
    }

    public getCurrent(): Date {
        return this.now;
    }
}