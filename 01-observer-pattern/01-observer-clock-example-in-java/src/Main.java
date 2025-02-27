import console.ConsoleDisplay;
import example.Clock;
import swing.SwingDisplay;

public class Main {
    public static void main(String[] args) {
        var consoleDisplay = new ConsoleDisplay();

        var swingDisplay = new SwingDisplay();
        swingDisplay.create();

        var clock = new Clock();
        clock.register(consoleDisplay);
        clock.register(swingDisplay);

        clock.tic();
    }
}