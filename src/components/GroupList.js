import React from "react";
import Group from "./Group.js";
import { useSelector, useDispatch } from "react-redux";
import { changeToGroup } from "../store/Reducer.js";

function GroupList() {
	console.log("--------------------GL---------------------");
	const groups = useSelector((state) => state.data);
	const currentGroup = useSelector((state) => state.currentGroup);
	const dispatch = useDispatch();

	function onGroupClick(groupName) {
		if (currentGroup !== groupName) {
			dispatch(changeToGroup(groupName));
		}
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
