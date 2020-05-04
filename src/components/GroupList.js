import React, { useState } from "react";
import Group from "./Group.js";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { changeToGroup, loadGroupFromAPI } from "../store/Reducer.js";

function GroupList() {
	console.log("--------------------GL---------------------");
	const groups = useSelector((state) => state.data);
	const currentGroup = useSelector((state) => state.currentGroup);
	const dispatch = useDispatch();
	const changeToGroupOnStore = (groupName) => dispatch(changeToGroup(groupName));
	const loadGroupToStore = (groupName, group) => dispatch(loadGroupFromAPI(groupName, group));
	const [loading, setLoading] = useState(false);

	function setReturnedDataFronAPI(groupName, data) {
		setLoading(false);
		loadGroupToStore(groupName, data);
		console.log("new data from API is : ", data);
	}

	function askAPIForGroup(groupName) {
		setLoading(true);
		const currentAPItmp = "https://swapi.py4e.com/api/"; // TMP - THIS NEEDS TO COME FROM HELPERS
		console.log(`${currentAPItmp}${groupName}`);

		axios
			.get(`${currentAPItmp}${groupName}`)
			.then((res) => setReturnedDataFronAPI(groupName, res.data.results));
	}

	function onGroupClick(groupName) {
		if (currentGroup !== groupName) {
			groups[groupName] ? changeToGroupOnStore(groupName) : askAPIForGroup(groupName);
		}
	}

	return (
		<div className='group-list'>
			{loading ? (
				<div className='items-loading-screen'>LOADING!</div>
			) : (
				Object.keys(groups).map((groupKey) => (
					<Group key={groupKey} onGroupClick={onGroupClick} groupName={groupKey} />
				))
			)}
		</div>
	);
}

export default GroupList;
