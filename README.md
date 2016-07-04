# React Redux Weather

![React Redux Weather](https://raw.githubusercontent.com/argelius/react-onsenui-redux-weather/master/react_redux_weather.png)

Weather app using Onsen UI, Redux, React and Webpack.

This app was built using [Onsen UI](https://onsen.io/), a hybrid app framework that provides both Material Design and iOS flat design. We recently released [React Components](https://onsen.io/v2/react.html).

Check out the demo [here](http://argelius.github.io/react-onsenui-redux-weather/demo.html).

## How to run it

To run it simply do:

```bash
npm install
npm start
```

The app will run at [http://localhost:9000](http://localhost:9000).

## How to build it

You can build it using Cordova.

- [Install Cordova](https://cordova.apache.org/docs/en/latest/guide/cli/index.html#installing-the-cordova-cli):

```
npm install -g cordova
```

You need to build the project:

```
npm run build
```

Add a platform to run it on a device or emulator. For Android:

```
cordova platform add android
cordova run android
```

This assumes that you have the Android SDK installed.

## Contributing

1. Fork it ( https://github.com/argelius/react-onsenui-redux-weather/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
