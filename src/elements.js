const element = (tag, properties, ...children) => {
	const element = document.createElement(tag);
	Object.keys(properties).forEach(key => element[key] = properties[key]);
	children.forEach(child => element.appendChild(child));
	return element;
};

const a = (properties, ...children) => element("a", properties, ...children);
const button = (properties, ...children) => element("button", properties, ...children);
const div = (properties, ...children) => element("div", properties, ...children);
const li = (properties, ...children) => element("li", properties, ...children);
const ol = (properties, ...children) => element("ol", properties, ...children);

export { a, button, div, element, li, ol };
