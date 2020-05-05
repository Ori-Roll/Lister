const defaultItemsList = [
	{ key: 1, description: "This is task", class: 1 },
	{ key: 2, description: "This is tasker", class: 2 },
	{ key: 3, description: "This is taskererst", class: 3 },
];

const defaultItem = {};

function defaultGroups() {
	return {
		people: null,
		planets: null,
		films: null,
		species: null,
		vehicles: null,
		starship: null,
	};
}

function defaultGroup() {
	return null;
}

export { defaultItemsList, defaultItem, defaultGroups, defaultGroup };
