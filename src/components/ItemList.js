import React, { useState, useReducer } from "react";
import Item from "./Item.js";
import { defaultItemsList } from "./helpers/Defaults.js";
import { checkedItemValue, checkedItemKey } from "./helpers";
import { useSelector } from "react-redux";

function ItemList({ dispalyItems = defaultItemsList }) {
	const currentGroupName = useSelector((state) => state.currentGroup);
	const data = useSelector((state) => state.data);
	const loading = useSelector((state) => state.loading);
	dispalyItems = data[currentGroupName] === null ? defaultItemsList : dispalyItems;
	console.log("---------------------------------");
	console.log("loading? : " + loading);
	console.log("currentGroupName : " + currentGroupName);
	console.log("data : ", data);
	function displayMode() {
		if (loading === true) {
			return <div className='items-loading-screen'>LOADING!</div>;
		} else if (data[currentGroupName] !== null) {
			return data[currentGroupName].map((item) => (
				<Item key={checkedItemKey(item)} item={checkedItemValue(item)} />
			));
		} else {
			return <div>Please select group</div>;
		}
	}

	return <ul className='item-list'>{displayMode()}</ul>;
}

export default ItemList;

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
