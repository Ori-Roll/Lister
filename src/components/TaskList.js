import React, { useState } from "react";
import axios from "axios";
import Task from "./Task.js";

function getData(data) {
	axios.get(data).then((res) => console.log(res.data));
}

getData("https://api.jsonbin.io/b/5eabe07e66e603359fe1bb8a/2");

function setData() {}

function TaskList() {
	const [displayTasks, setDisplayTasks] = useState([{ name: "bla" }, { name: "blu" }]);

	return (
		<div className='task-list'>
			<Task name={displayTasks.map((task) => task.name)} />
		</div>
	);
}

export default TaskList;

/* 
fetch("https://swapi.py4e.com/api/people/1")
	.then(function (response) {
		response.json().then(function (data) {
			console.log(data);
		});
	})
	.catch(function (err) {
		console.log("bug!", err);
	});
 */
