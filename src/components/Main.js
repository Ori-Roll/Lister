import React, { useState, useEffect } from "react";
import TaskList from "./TaskList.js";
import TaskGroups from "./TaskGroups.js";
import axios from "axios";
import { isElement } from "react-dom/test-utils";

function Main() {
	const [currentItems, setCurrentItems] = useState();

	function getAndSetData(data) {
		axios.get(data).then((res) => setCurrentItems(res.data.results));
	}

	useEffect(() => getAndSetData("https://api.jsonbin.io/b/5eabe07e66e603359fe1bb8a/3"), []);
	useEffect(() => {
		currentItems ? console.log("ci= ", currentItems[0].name) : console.log("not there yet");
	}, [currentItems]);

	function setData() {}

	return (
		<div className='interface'>
			<TaskList />
			<TaskGroups />
		</div>
	);
}

export default Main;
