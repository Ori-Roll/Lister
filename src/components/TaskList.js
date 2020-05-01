import React, { useState } from "react";
import Task from "./Task.js";

fetch("https://swapi.py4e.com/api/people/1")
	.then(function (response) {
		/* const dataPars = JSON.parse(data); */
		response.json().then(function (data) {
			console.log(data);
		});
	})
	.catch(function (err) {
		console.log("bug!", err);
	});

function TaskList() {
	const [displayTasks, setDisplayTasks] = useState([{ name: "bla" }, { name: "blu" }]);

	return (
		<div className='task-list'>
			<Task name={displayTasks.map((task) => task.name)} />
		</div>
	);
}

export default TaskList;
