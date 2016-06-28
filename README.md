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

- [Create another project for Cordova](https://cordova.apache.org/docs/en/latest/guide/cli/index.html#create-the-app)

```
cordova create <MY-APP-NAME>
```

- Copy the content of `dist` folder to `wwww` in your Cordova project.

- [Add Platforms](https://cordova.apache.org/docs/en/latest/guide/cli/index.html#add-platforms):

```
cordova platform add android --save
```

- [Build for your platform](https://cordova.apache.org/docs/en/latest/guide/cli/index.html#build-the-app)

```
cordova build android
```

## Contributing

1. Fork it ( https://github.com/argelius/react-onsenui-redux-weather/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request