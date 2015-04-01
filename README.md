# Ember-cli-inspectlet

Injects inspectlet scripts into your Ember CLI app.

## Installation

* `npm install --save-dev ember-cli-inspectlet`
* Put `config.APP.INSPECTLET_WID = XXXXXXXXXX;` in the environment that you want
  inspectlet enabled, where XXXXXXXXXX is your Inspectlet wid. For example:

  environment.js
  ```
  if (environment === 'production') {
    ENV.APP.INSPECTLET_WID = 1234567890;
  }
  ```

## Running Tests

* `ember test`
* `ember test --server`

