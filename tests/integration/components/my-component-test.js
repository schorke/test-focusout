import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { fillIn, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | my-component', function(hooks) {
  setupRenderingTest(hooks);

  test('DDAU test', async function(assert) {
    assert.expect(2);

    this.set('valueChanged', () => {
      assert.step('valueChanged');
    });

    await render(hbs`<MyComponent @onValueChanged={{action valueChanged}} />`);

    await fillIn('.my-input', 'aze');
    await fillIn('.other-input', 'blbl');

    assert.verifySteps([ 'valueChanged' ], 'All steps have been called');
  });
});
