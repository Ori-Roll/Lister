import cloneDeep from "lodash/cloneDeep";
import {
	defaultGroups,
	defaultGroup,
	defaultNextPagesForGroups,
} from "../components/helpers/Defaults";

const redux = require("redux");

/* function addTask(group = "default", task = defaultGroup()) {
	return { type: "ADD_TASK", group: group, task: task };
} */

function changeToGroup(group = defaultGroup()) {
	return { type: "CHANGE_GROUP_TO", group: group };
}

function loadGroupFromAPI(group, groupName = defaultGroup()) {
	return { type: "ADD_GROUP_FROM_API", group: group, groupName: groupName };
}

function changeLoading(loadingState) {
	return { type: "CHANGE_LOADING", payload: loadingState };
}

function setNextAPIPageForGroup(nextPage, groupName) {
	return { type: "SET_NEXT_PAGE_FOR_GROUP", nextPage: nextPage, groupName: groupName };
}

const initialState = {
	currentGroup: null,
	data: defaultGroups(),
	nextPageForGroup: defaultNextPagesForGroups(),
	loading: false,
};

function Reducer(oldData = initialState, action) {
	const newData = cloneDeep(oldData);

	switch (action.type) {
		case "CHANGE_GROUP_TO":
			newData.currentGroup = action.group;
			/* console.log("newData", newData); */
			return newData;
		case "ADD_GROUP_FROM_API":
			newData.data[action.groupName] = action.group;
			/* console.log(action.groupName);
			console.log("1newData.data", newData.data); */
			/* setTimeout(console.log("2newData.data", newData.data), 0); */
			return newData;
		case "CHANGE_LOADING":
			newData.loading = action.payload;
			return newData;
		case "SET_NEXT_PAGE_FOR_GROUP":
			newData.nextPageForGroup[action.groupName] = action.nextPage;
			return newData;
		default:
			return oldData;
	}
}

const store = redux.createStore(Reducer);
store.dispatch(changeToGroup("people"));

export { changeToGroup, loadGroupFromAPI, changeLoading, setNextAPIPageForGroup };
export default store;
