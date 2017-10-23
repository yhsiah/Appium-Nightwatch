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

from the the home directory.

Next, run appium-doctor to check that your Appium is set up correctly for ios.

  ./node_modules/.bin/appium-doctor --ios

Once this is done, you can run tests on chrome, using selenium:

  ./node_modules/.bin/nightwatch

This will run all tests - which are currently two example tests (one is designed to pass, the other is designed to fail)

To run the same tests on ios:

  ./node_modules/.bin/nightwatch --env ios
