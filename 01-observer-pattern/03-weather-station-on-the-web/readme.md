## Weather Station on the Web

In this project, you will find a basic and vanilla development server for launching a web application.
Generated via [Vite](https://github.com/vitejs/vite), the purpose is to provide the bare minimum you need
to get something serving up your weather station.

Drop in your observable weather station implementation, from the previous exercise, and try to build a display 
implementation that works for the Web.

```typescript
export class WebDisplay implements WeatherStationDisplay {
    
    public output(...): void {
        const element = ...;
        element.innerHTML = ...;
    }
   
}
```

Use the provided template to guide you on how to append information to the browser document. You'll then set up 
and inject your dependencies in `main.ts`.

Here are some other things you can do:

- Add buttons that allow the user to click through the different hours of the day, then use that hour to retrieve the related weather information
- Simulate time passing by setting up a fake clock with a timed loop, using that to cause the weather information to render dynamically
- Map the weather information to user-friendly icons

You'll probably have to change the behaviour of the weather station, clock, and/or gateway for these extra parts.

You could also try implementing [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller), 
a popular approach for web development many years ago. Many assume MVC to be its own architectural pattern, 
but it's actually just an implementation of the observable pattern.

### Getting started

You will need the Node.js runtime. The recommended version is the latest long-term support (v22.14.0). You can 
install and easily manage your node versions with [nvm](https://github.com/nvm-sh/nvm).

Install the required dependencies via npm with `npm install`.

### Running the application

You can run a local dev server via npm with `npm run dev`. This will deploy a local instance that you can access
to check your changes.
