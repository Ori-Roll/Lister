import React, { useState, useEffect } from "react";
import Item from "./Item.js";
import axios from "axios";
import { checkedItemValue, checkedItemKey } from "./helpers";
import { useSelector, useDispatch } from "react-redux";
import { loadNextPageToGroup, setNextAPIPageForGroup } from "../store/Reducer";

function ItemList() {
	const currentGroupName = useSelector((state) => state.currentGroup);
	const data = useSelector((state) => state.data);
	const loading = useSelector((state) => state.loading);
	const nextPageForGroup = useSelector((state) => state.nextPageForGroup[currentGroupName]);
	const dispatch = useDispatch();
	const loadNextDataToGroupInStore = (nextPageData, groupName) =>
		dispatch(loadNextPageToGroup(nextPageData, groupName));
	const setNextGroupPageOnStore = (nextPage, groupName) =>
		dispatch(setNextAPIPageForGroup(nextPage, groupName));

	const [moreIsLoading, setMoreIsLoading] = useState(false);
	const [blink, setBlink] = useState(true);

	useEffect(() => {
		setTimeout(() => setBlink((blink) => !blink), 800);
	}, [blink]);

	function displayMode() {
		if (data[currentGroupName] !== null) {
			return data[currentGroupName].map((item) => (
				<Item key={checkedItemKey(item)} item={checkedItemValue(item)} />
			));
		} else if (loading) {
			return null;
		} else {
			return (
				<div className='items-loading-screen' style={{ visibility: blink ? "visible" : "hidden" }}>
					Please select category
				</div>
			);
		}
	}

	function onLoadMoreClick(moreDataLink) {
		setMoreIsLoading(true);
		axios
			.get(moreDataLink)
			.then((res) => {
				processDataFromAPI(res.data);
			})
			.catch((res) => console.log("err", res));

		function processDataFromAPI(returnedData) {
			/* const nextPageData = returnedData; */
			console.log(returnedData);
			loadNextDataToGroupInStore(returnedData.results, currentGroupName);
			setNextGroupPageOnStore(returnedData.next, currentGroupName);
			setMoreIsLoading(false);
		}
	}

	return (
		<div>
			{loading ? <div className='items-loading-screen'>loading...</div> : null}
			<ul className='item-list'>{displayMode()}</ul>
			{nextPageForGroup ? (
				<button onClick={() => onLoadMoreClick(nextPageForGroup)} className='load-more item'>
					{moreIsLoading ? "loading..." : "LOAD MORE ->"}
				</button>
			) : null}
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

/* dispalyItems = data[currentGroupName] === null ? defaultItemsList : dispalyItems; */
/* console.log("---------------------------------");
	console.log("loading? : " + loading);
	console.log("currentGroupName : " + currentGroupName);
	console.log("data : ", data); */
