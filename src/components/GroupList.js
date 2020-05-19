import React from "react";
import Group from "./Group.js";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
	changeToGroup,
	loadGroupFromAPI,
	changeLoading,
	setNextAPIPageForGroup,
} from "../store/Reducer.js";

function GroupList() {
	const groups = useSelector((state) => state.data);

	const dispatch = useDispatch();
	const changeToGroupOnStore = (groupName) => dispatch(changeToGroup(groupName));
	const loadGroupToStore = (groupData, groupName) =>
		dispatch(loadGroupFromAPI(groupData, groupName));
	const changeLoadingOnStore = (loadingState) => dispatch(changeLoading(loadingState));
	const setNextGroupPageOnStore = (nextPage, groupName) =>
		dispatch(setNextAPIPageForGroup(nextPage, groupName));

	function askAPIForGroup(groupName) {
		function processDataFromAPI(groupName, returnedData) {
			let groupData = returnedData.results;
			setNextGroupPageOnStore(returnedData.next, groupName);
			loadGroupToStore(groupData, groupName);
			changeToGroupOnStore(groupName);
			changeLoadingOnStore(false);
		}

		changeLoadingOnStore(true);
		const currentAPI = "https://swapi.py4e.com/api/"; // TMP - THIS NEEDS TO COME FROM HELPERS

		axios
			.get(`${currentAPI}${groupName}`)
			.then((res) => setTimeout(() => processDataFromAPI(groupName, res.data), 2000))
			.catch((err) => console.log("err loading from API", err));
	}

	function onGroupClick(groupName) {
		groups[groupName] ? changeToGroupOnStore(groupName) : askAPIForGroup(groupName);
	}

	return (
		<div className='group-list'>
			{Object.keys(groups).map((groupKey) => (
				<Group key={groupKey} onGroupClick={onGroupClick} groupName={groupKey} />
			))}
		</div>
	);
}

export default GroupList;
