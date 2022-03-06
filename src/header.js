import { button, div } from "./elements.js";

const header = () => {
	const login = button({
		textContent: "Login",
		onclick: e => console.log("Logged in!"),
	});

	const demo = button({
		textContent: "Demo",
		onclick: e => console.log("Demoing!"),
	});

	return div({}, login, demo);
}

export { header };
