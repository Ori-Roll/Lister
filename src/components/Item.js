import React from "react";
import { checkedItemKey } from "./helpers";
import { isNotStringOrIsHTTP } from "./helpers";

function Item({ item }) {
	const listKeys = Object.keys(item);

	listKeys.forEach((element) => {});

	function itemContent(key) {
		const entryKey = `${key.substring(0, 1).toUpperCase()}${key.substring(1)}`.replace("_", " ");
		const entryValue = `${item[key].substring(0, 1).toUpperCase()}${item[key].substring(
			1
		)}`.replace("_", " ");
		return isNotStringOrIsHTTP(item[key]) ? null : `${entryKey}:  ${entryValue}`;
	}

	return (
		<li className='item'>
			{listKeys.map((key) => {
				if (!isNotStringOrIsHTTP(item[key])) {
					return (
						<span key={checkedItemKey(key)} className={`${key}`}>
							{itemContent(key)}
						</span>
					);
				} else {
					return <span key={checkedItemKey("noItem")}>NO ITEM HERE</span>;
				}
			})}
		</li>
	);
}

export default Item;

/* useEffect(() => console.log("item : name is ", item), []); */
/* useEffect(() => console.log(items), [items]); */

/* function setDescriptionOf(e, item, newItemsSet) {
		newItemsSet[newItemsSet.findIndex((oldItem) => item.key === oldItem.key)].description =
			e.target.value;
		return newItemsSet;
	} */

/* function onChange(changeItem, e, item) {
		setTasks(changeItem(e, task, cloneDeep(items)));
	} */

/* 	return tasks.map((task, i) => {
		return (
			<li className='task' key={task.key}>
				<div className='taskClass'>o</div>
				<span
					className='task-description'
					onChange={(e) => onChange(setDescriptionOf, e, task)}
					value={task.description}
				/>
			</li>
		);
	}); */
