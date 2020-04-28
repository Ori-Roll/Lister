import React, { useState } from "react";
import Task from "./Task.js";

function TaskList() {
	const [displayTasks, setDisplayTasks] = useState([{ name: "bla" }, { name: "blu" }]);

	return (
		<div className='task-list'>
			<Task name={displayTasks.map((task) => task.name)} />
		</div>
	);
}

export default TaskList;
