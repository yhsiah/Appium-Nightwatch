# Nightwatch js & appium

Requirements:
* Node js
* yarn

Appium requirements for testing iOS:
* Xcode
* Xcode Command Line Tools
* Carthage


## Getting Started

Note that this is only currently working for web testing on chrome for mac / windows and safari on ios

After installing the above:

    yarn

This will install all dependencies.

Then, run the nightwatch config file to grab the latest selenium server:

    node nightwatch.conf.js

### Setting up Appium for ios

Run appium-doctor to check that your Appium is set up correctly for ios.

    ./node_modules/.bin/appium-doctor --ios

Follow instructions from this.

## Running tests

Once this is done, you can run tests on chrome for desktop using selenium:

    ./node_modules/.bin/nightwatch


To run the same tests on safari for ios, on simulator:

    ./node_modules/.bin/nightwatch --env ios

Note that there are two example tests, one is designed to fail and one is designed to pass.
