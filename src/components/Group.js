import React from "react";

function Group({ onGroupClick, groupName }) {
	return (
		<div className='group' onClick={() => onGroupClick(groupName)}>
			{groupName}
		</div>
	);
}

export default Group;
