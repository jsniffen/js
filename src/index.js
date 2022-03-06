import { header } from "./header.js";
import { ol, li } from "./elements.js";
import { state }  from "./state.js";

const list = (items, hidden) => {
	const list = ol({});

	items.subscribe(value => {
		Array.from(list.children).forEach(e => e.remove());
		value.map(item => li({ textContent: item }))
			.forEach(li => list.appendChild(li));
	});

	hidden.subscribe(value => list.hidden = value);

	return list;
};

const form = items => {
	const div = document.createElement("div");

	const submit = () => {
		if (input.value === "") return;

		const duplicates = items.get().filter(item => item === input.value)
		if (duplicates.length > 0) return;

		items.set(items.get().concat(input.value))
		input.value = "";
	}

	const input = document.createElement("input");
	input.onkeydown = e => {
		if (e.key === "Enter") {
			submit();
		};
	};

	const button = document.createElement("button");
	button.innerHTML = "submit";
	button.onclick = submit;

	div.appendChild(input);
	div.appendChild(button);
	return div;
}

const button = hidden => {
	const button = document.createElement("button");
	button.onclick = () => hidden.set(!hidden.get());
	hidden.subscribe(value => button.innerHTML = value ? "show" : "hide");
	return button;
};

const loading = loading => {
	const span = document.createElement("span");
	span.innerHTML = "loading!!!";

	loading.subscribe(value => span.hidden = value);
	return span;
}

const items = state(["take out the trash"]);
const hidden = state(false);

const root = document.querySelector("div#root");
root.appendChild(header());
root.appendChild(list(items, hidden));
root.appendChild(form(items));
root.appendChild(button(hidden));

