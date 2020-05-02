import React, { useState, useEffect } from "react";
import ItemList from "./ItemList.js";
import GroupList from "./GroupList.js";
import axios from "axios";

function Main() {
	const [currentItems, setCurrentItems] = useState();

	function getAndSetData(data) {
		axios.get(data).then((res) => setCurrentItems(res.data.results));
	}

	/* useEffect(() => getAndSetData("https://api.jsonbin.io/b/5eabe07e66e603359fe1bb8a/3"), []); */
	useEffect(() => {
		currentItems ? console.log("ci= ", currentItems[0].name) : console.log("not there yet");
	}, [currentItems]);

	function setData() {}

	return (
		<div className='interface'>
			<ItemList dispalyItems={[{ name: "one" }, { name: "two" }]} />
			<GroupList />
		</div>
	);
}

export default Main;
