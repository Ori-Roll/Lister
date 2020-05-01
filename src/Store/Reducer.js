const redux = require("redux");
import cloneDeep from "lodash/cloneDeep";

function defaultTask(){
    return{key: new Date().toString(), description: ""}
}

function addTask(group = "default", task = {defaultTask()}) {
	return { type: "ADD_TASK", group: group, task: task };
}

function Reducer(allTasks = {}, action) {
    
    const oldTasks = cloneDeep(allTasks);

    switch (action.type) {
		case "ADD_TASK":
			return { oldTasks,  };

		default:
			return { allTasks };
	}
}

const store = redux.createStore(Reducer);

store.dispatch(addTask());
