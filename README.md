# Testing react-refresh

This is to try and debug react-react + react-refresh's webpack plugin bug issues.

## Start

1. `npm install`
1. `npm start`
1. Open `localhost:8081`
1. Make a change to `app2/other.js`
1. Note the browser console: HMR says the update was successful, but the change to the component doesn't actually get rendered
1. However! Click the button, which forces a state update, and you'll see that the HMR update gets applied in that case!
