package example;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Clock extends Subject<String> {
    private static final DateTimeFormatter ClockFormat = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");

    public void tic() {
        while (true) {
            var now = LocalDateTime.now();
            everySecond(() -> display(now));
        }
    }

    private void everySecond(Runnable action) {
        try {
            action.run();
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }

    private void display(LocalDateTime time) {
        var formatted = time.format(ClockFormat);
        this.notifyObservers(formatted);
    }
}
