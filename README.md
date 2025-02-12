# Radio Widget

A React component to handle switching between radio stations.

![screenshot](./public/radio.png)

Radio Widget is a React Based Widget that manages radio stations. It is mostly static but can be very dynamic once connected to an Api endpoint and data is passed to the `StationBody` component using the `stations` props. Api calls can be made in the `getStations` and `toggleStation` actions using redux. The Radio widget is accessibility compliant.

&nbsp;

## Built With

- JavaScript, TypeScript, React
- Hooks, Redux, Redux thunk,
- Sass, Css modules.
- Jest, React-testing-library, Jest-axe

&nbsp;

## Live Demo

[Live Demo Link](https://radio-widget-three.vercel.app/)

&nbsp;

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

To run this project, you will need to have `node`,`npm` or `yarn`, `TypeScript` already installed locally

### Setup

`Clone the project and cd into the directory`

### Install

run `npm install` or `yarn install` to install all the dependencies of the project

### Usage

run `npm start` or `yarn start` to get the project running

open browser and navigate to `http://localhost:3000/`

- Widget is mostly static - selecting station is the only action available. After selecting station, it toggles the station and displays its name at the bottom of the widget

- The rest of the buttons are clickable but it will trigger no action.

### Customizations

The styles are written using SASS Module and each React component has a corresponding sass file.

To tweak react components navigate to `/src/components`

To access related component styles navigate to `/src/components/styles`

To access global styles navigate to `/src/index.css`

### Running Tests

run `npm test` or `yarn test` to get the tests running

#### Analysis report

Analysis Report shows
![screenshot](./public/analysis.png)

```bash

 85.14% Statements 63/7478.57% Branches 33/4288.89% Functions 24/2784.29% Lines 59/70

```

Analysis Report can be generated by running `npm test -- --coverage`

&nbsp;

## Deployment

run `npm build` or `yarn build` to generate build folder. You can now serve the build folder on any static server. for more information visit [https://create-react-app.dev/docs/deployment/](https://create-react-app.dev/docs/deployment/).

&nbsp;

## Authors

👤 **Author**

- Github: [solomonakp](https://github.com/solomonakp)
- twitter: [@dev_chuck](https://twitter.com/dev_chuck)

&nbsp;

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/solomonakp/Conercase-task-/issues).

&nbsp;

## Show your support

Give a ⭐️ if you like this project!

&nbsp;

## 📝 License

This project is [MIT](lic.url) licensed.
