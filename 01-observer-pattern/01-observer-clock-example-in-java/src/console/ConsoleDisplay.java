package console;

import example.Observer;

public class ConsoleDisplay implements Observer<String> {
    @Override
    public void update(String value) {
        System.out.printf("\r%s", value);
    }
}
