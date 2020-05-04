import React, { useState } from "react";
import Item from "./Item.js";
import { defaultItemsList } from "./helpers/Defaults.js";
import { checkedItemValue, checkedItemKey } from "./helpers";
import { useSelector } from "react-redux";

function ItemList({ dispalyItems = defaultItemsList }) {
	const currentGroupName = useSelector((state) => state.currentGroup);
	const data = useSelector((state) => state.data);
	console.log("ItemList render");

	dispalyItems = data[currentGroupName] === null ? defaultItemsList : dispalyItems;
	console.log(dispalyItems);

	return (
		<ul className='item-list'>
			
			{loading ? (
				<div className='items-loading-screen'>LOADING!</div>
			) : (
				dispalyItems.map((item) => {
					return <Item key={checkedItemKey(item)} item={checkedItemValue(item)} />
				)
			)}
			
			{dispalyItems.map((item) => {
				return <Item key={checkedItemKey(item)} item={checkedItemValue(item)} />;
			})}
		</ul>
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
