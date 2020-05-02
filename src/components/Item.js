import React from "react";

function Item({ item }) {
	const { name, description } = item;
	return (
		<li className='item'>
			<span className='item-description'>{name}</span>
			<span className='item-description'>{description}</span>
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
