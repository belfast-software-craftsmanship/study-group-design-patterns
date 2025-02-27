package swing;

import example.Observer;

import javax.swing.*;
import java.awt.*;

public class SwingDisplay extends Frame implements Observer<String> {
    private JLabel label;

    public void create() {
        label = new JLabel("", SwingConstants.CENTER);
        add(label);

        setSize(250, 250);
        setVisible(true);
    }

    @Override
    public void update(String value) {
        label.setText(value);
    }
}
