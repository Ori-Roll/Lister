import React from "react";
import Item from "./Item.js";
import { defaultItemsList } from "./helpers/Defaults.js";
import { checkedItemValue, checkedItemKey } from "./helpers";

function ItemList({ dispalyItems = defaultItemsList }) {
	return (
		<ul className='item-list'>
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
