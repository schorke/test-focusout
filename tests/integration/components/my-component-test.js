import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { fillIn, render, triggerEvent } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const FOCUSOUT_INPUT = '.my-input';
const OTHER_INPUT = '.other-input';

/* How to test :
1. ember t -s --filter='Integration | Component | my-component'
2. Open dev tools in test window.
3. Click in console and refresh to focusout window test (or click inside test window to re-focus).
4. Same behaviour when running the test while focusing another window.
=> Reproduced on Chrome 76.0.3809.87 and Firefox 68.0.1 */
module('Integration | Component | my-component', function(hooks) {
  setupRenderingTest(hooks);

  test('Test fails when window test is not focused', async function(assert) {
    assert.expect(2);

    this.set('valueChanged', () => {
      assert.step('valueChanged');
    });

    await render(hbs`<MyComponent @onValueChanged={{action valueChanged}} />`);

    await fillIn(FOCUSOUT_INPUT, 'test');
    await fillIn(OTHER_INPUT, 'other test');

    assert.verifySteps([ 'valueChanged' ], 'All steps have been called');
  });

  test('Test fails when window test is focused', async function(assert) {
    assert.expect(2);

    this.set('valueChanged', () => {
      assert.step('valueChanged');
    });

    await render(hbs`<MyComponent @onValueChanged={{action valueChanged}} />`);

    await fillIn(FOCUSOUT_INPUT, 'test');
    await triggerEvent(FOCUSOUT_INPUT, 'blur');
    await fillIn(OTHER_INPUT, 'other test');

    assert.verifySteps([ 'valueChanged' ], 'All steps have been called');
  });
});
