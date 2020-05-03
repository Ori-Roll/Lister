import cloneDeep from "lodash/cloneDeep";
import { defaultGroups, defaultGroup } from "../components/helpers/Defaults";

const redux = require("redux");

/* function addTask(group = "default", task = defaultGroup()) {
	return { type: "ADD_TASK", group: group, task: task };
} */

function changeToGroup(group = defaultGroup()) {
	return { type: "CHANGE_GROUP_TO", group: group };
}

const initialState = {
	currentGroup: null,
	data: defaultGroups(),
};

function Reducer(oldData = initialState, action) {
	const newData = cloneDeep(oldData);

	switch (action.type) {
		case "CHANGE_GROUP_TO":
			newData.currentGroup = action.group;
			console.log("newData", newData);
			return newData;
		default:
			return oldData;
	}
}

const store = redux.createStore(Reducer);

store.dispatch(changeToGroup("planets"));

export { changeToGroup };
export default store;
