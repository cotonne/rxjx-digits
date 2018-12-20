# RxjxDigit

## TL;DR

```bash
 $ npm install
 $ ng serve
```

And look for **TODO** and `throw new Error('Implement me')`

## Description

This project is to let you discover and understand how RxJS and Angular works. It aims also to make you produce quality code
(aka. testable and maintenable code).

At the end of this session, you will understand how :
 - RxJS works
 - RxJS can communicate with Angular
 - Business logic can be separated from the technical framework 

## The Kata

The kata is to build an simple eletronic board composed of:

 - A 1Hz **clock**, producing ticks (0 follows by 1).
 - A 4-Bit **counter** which increments by one at every tick, from 0 to F.
 - A **memory** chip containing glitchs (random values)
 - A **multiplexer** that selects outputs from the counter or memory with a **switch button**
 - A 7-Segment LCD **display**
 - A **reset button**

![alt text](/doc/2018-12-15-074320_938x410_scrot.png "Electronic schema")

## What to do?

You need to 
 - make the LCD displays the number from the counter
 - display the content of the memory when the switch button is pressed
 - reset the board when the reset button is pressed
 
## Where to start?

 - If you want to do testing, the easiest way is to have an outside-in approach,
starting from the LCD display and finishing with the clock, adding tests and features. 
You should not have to create a lot of tests involving Observable or Angular elements.
Observables or Angular should be only tested to check that components are "connected"
one to each other. You should try to test as many things as possible with simple unit
tests. 

 - If you want to discover more the framework, you can start from the clock and try to make
 things works. Try to explore the Angular and RxJS frameworks to understand how everything
 works and if you can find a simpler or cleaner way to do it. 
 
## Useful ressources

 - [RxMarbles](http://rxmarbles.com/)
 - [RxJs Reference](https://rxjs-dev.firebaseapp.com/api?type=function)  
 - [RxJs pipe/map/...](https://www.learnrxjs.io/operators/transformation/map.html)

# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
