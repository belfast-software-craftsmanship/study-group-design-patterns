package example;

import java.util.ArrayList;
import java.util.List;

public class Subject<T> {
    private final List<Observer<T>> observers = new ArrayList<>();

    public void register(Observer<T> observer) {
        this.observers.add(observer);
    }

    protected void notifyObservers(T value) {
        this.observers.forEach(o -> o.update(value));
    }
}
