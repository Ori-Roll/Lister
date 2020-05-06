import React, { useState, useReducer } from "react";
import Item from "./Item.js";
import { defaultItemsList } from "./helpers/Defaults.js";
import { checkedItemValue, checkedItemKey } from "./helpers";
import { useSelector } from "react-redux";

function ItemList() {
	const currentGroupName = useSelector((state) => state.currentGroup);
	const data = useSelector((state) => state.data);
	const loading = useSelector((state) => state.loading);

	/* dispalyItems = data[currentGroupName] === null ? defaultItemsList : dispalyItems; */
	/* console.log("---------------------------------");
	console.log("loading? : " + loading);
	console.log("currentGroupName : " + currentGroupName);
	console.log("data : ", data); */

	function displayMode() {
		if (currentGroupName === null) {
			return <div className='items-loading-screen'>Please select category</div>;
		} else if (data[currentGroupName] !== null) {
			return data[currentGroupName].map((item) => (
				<Item key={checkedItemKey(item)} item={checkedItemValue(item)} />
			));
		} else {
			return <div className='items-loading-screen'>Please select item</div>;
		}
	}

	return (
		<div>
			{loading === true ? <div className='items-loading-screen'>loading...</div> : null}
			<ul className='item-list'>{displayMode()}</ul>;
		</div>
	);
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
