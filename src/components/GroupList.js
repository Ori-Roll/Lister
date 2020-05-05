import React, { useState } from "react";
import Group from "./Group.js";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { changeToGroup, loadGroupFromAPI, changeLoading } from "../store/Reducer.js";

function GroupList() {
	console.log("--------------------GL---------------------");

	const groups = useSelector((state) => state.data);
	/* const currentGroup = useSelector((state) => state.currentGroup);
	const loading = useSelector((state) => state.loading); */

	const dispatch = useDispatch();
	const changeToGroupOnStore = (groupName) => dispatch(changeToGroup(groupName));
	const loadGroupToStore = (groupData, groupName) =>
		dispatch(loadGroupFromAPI(groupData, groupName));
	const changeLoadingOnStore = (loadingState) => dispatch(changeLoading(loadingState));

	function askAPIForGroup(groupName) {
		function setReturnedDataFronAPI(groupName, groupData) {
			loadGroupToStore(groupData, groupName);
			changeToGroupOnStore(groupName);
			changeLoadingOnStore(false);
			console.log("new data from API is : ", groupData);
		}

		changeLoadingOnStore(true);
		const currentAPI = "https://swapi.py4e.com/api/"; // TMP - THIS NEEDS TO COME FROM HELPERS

		axios
			.get(`${currentAPI}${groupName}`)
			.then((res) => setReturnedDataFronAPI(groupName, res.data.results))
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
