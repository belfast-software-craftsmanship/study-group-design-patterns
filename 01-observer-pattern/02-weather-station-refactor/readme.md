## Weather Station Refactor

In this project, you will find an implementation of a weather station that broadcasts to various displays.
Each display is concerned with different elements associated with weather change throughout the day.

The current implementation has a major problem though. There's a lot going on.

Every time you want to add a new display, you have to modify the weather station and couple it with more
calculations and references. There has to be a better way.

Refactor the weather station to utilise the observable pattern, ensuring that each part of weather change
is isolated, allowing for a more cohesive and flexible solution. You should also clean up the code around
the current calculations, there's lots of code smells going on there too.

Consider that refactoring is changing the structure of code, but not behaviours. Therefore, you can use the
currently passing tests to ensure that your changes are only to structure.

You also shouldn't change any of the tests, only the setup and creation of the weather station will change.

After you successfully implement the observable pattern. Try adding a new display for winds, there are ignored
tests that will guide you to what is needed.

### Getting started

You will need the Node.js runtime. The recommended version is the latest long-term support (v22.14.0). You can 
install and easily manage your node versions with [nvm](https://github.com/nvm-sh/nvm).

Install the required dependencies via npm with `npm install`.

### Running the tests

This project uses [vitest](https://vitest.dev/). You can run all tests via npm with `npm test`.

Alternatively, if your IDE supports vitest, you can use it to run the whole suite or individual tests.

### Acknowledgements 

This kata is inspired by the observable chapter from [Head First Design Patterns](https://wickedlysmart.com/head-first-design-patterns).
