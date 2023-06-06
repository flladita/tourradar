# tourradar

This project contains end to end tests for different areas of Tourradar website. The tests are written with CodeceptJS framework for the purpose of a case study challenge.

## Getting started

### Requirements

* Node.js
* npm
* CodeceptJS
* Puppeteer

### Installing

Follow the instructions in this page https://www.npmjs.com/get-npm in order to install Node.js and npm.

Follow the commands below in order to install CodeceptJS and Puppeteer:

```bash
$ cd tourradar
$ npm install codeceptjs puppeteer --save
```

## Running the tests

To run end-2-end tests type:

```bash
$ npx codeceptjs run --steps
```