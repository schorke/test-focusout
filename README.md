# test-focusout

Simple Ember app to show the bug with focusOut, ember-test-helpers and integration test.

## Installation

* `git clone <repository-url>` this repository
* `cd test-focusout`
* `npm install`

### Running Tests

* `ember t -s --filter='Integration | Component | my-component'`
* Open dev tools in test window.
* Click in console and refresh page (click inside test window if you want to re-focusin).
* Same behaviour when running the test while focusing another window.
* => Reproduced on Chrome 76.0.3809.87 and Firefox 68.0.1 */
