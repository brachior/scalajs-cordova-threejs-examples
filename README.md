# Some tests using ScalaJS, Cordova and ThreeJS

You can see the result on your browser [here](http://brachior.github.io/scalajs-cordova-threejs-examples/).

## Installation

First, you need [Cordova](http://cordova.apache.org/):

    npm install -g cordova

The *"app"* directory is a [ScalaJS](http://www.scala-js.org/) project,
to compile we need [SBT](http://www.scala-sbt.org/).
In a terminal, go to the app directory and type:

    sbt
    > packageJSDependencies
    > fullOptJS

We test the accelerometer, but the default [Cordova plugin](https://github.com/apache/cordova-plugin-device-motion)
generates random values for the browser so, we use a modified plugin:

    cordova plugin add https://github.com/brachior/cordova-plugin-device-motion.git

### Browser

To use the browser version, add the platform (once):

    cordova platform add browser

And type the following command to execute it:

    cordova run browser

The default browser is google-chrome,
to use a specific browser, type:

    cordova run browser --target <browser_name>

### Android

To use the android version (Android 4.x), add the plateform (once):

    cordova platform add android@3.6.4

And type the following command to execute it:

    cordova run android

If an Android device is connected, it will be used.
Else, an emulator will be launch.

#### Debugging

To retrieve the ID of your Android devices type:

    adb devices

And type the following command to show the log of your application:

    adb -s [device-id] logcat "CordovaLog:* CordovaWebViewClient:* *:S"
