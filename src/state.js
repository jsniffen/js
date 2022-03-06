const state = initialValue => ({
	value: initialValue,
	get: function() {
		return this.value;
	},
	set: function(newValue) {
		this.value = newValue;
		this.listeners.forEach(fn => fn(newValue));
	},
	subscribe: function(fn) {
		fn(this.value);
		this.listeners.push(fn);
	},
	listeners: [],
});

export { state };
