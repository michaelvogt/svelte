import * as assert from 'assert';
import './main.svelte';
import './screen.svelte';

export default function (target) {
	target.innerHTML = `<custom-element></custom-element>`;

	const [a] = target.querySelectorAll('custom-element');

	assert.htmlEqual(a.shadowRoot.innerHTML, `
		<p>not slotted</p>
		<slot>screen1</slot>
	`);
}
