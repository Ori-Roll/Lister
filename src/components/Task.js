import React, { useState, useEffect } from "react";
import cloneDeep from "lodash/cloneDeep";

function Task(props) {
	const [tasks, setTasks] = useState([
		{ key: 1, description: "This is task", class: 1 },
		{ key: 2, description: "This is tasker", class: 2 },
		{ key: 3, description: "This is taskererst", class: 3 },
	]);

	useEffect(() => console.log("start"), []);
	/* useEffect(() => console.log(tasks), [tasks]); */

	function setDescriptionOf(e, task, newTasksSet) {
		newTasksSet[newTasksSet.findIndex((oldTask) => task.key === oldTask.key)].description =
			e.target.value;
		return newTasksSet;
	}

	function onChange(changeItem, e, task) {
		setTasks(changeItem(e, task, cloneDeep(tasks)));
	}

	return tasks.map((task, i) => {
		return (
			<div className='task' key={task.key}>
				<div className='taskClass'>o</div>
				<textarea
					className='task-description'
					onChange={(e) => onChange(setDescriptionOf, e, task)}
					value={task.description}
				/>
			</div>
		);
	});
}

export default Task;
