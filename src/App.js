import React from "react";
import "./App.css";
import TaskList from "./components/TaskList.js";
import TaskGroups from "./components/TaskGroups.js";

/* const stuffFromAPI = { name: "Johnny cash", name: "Luke kage", name: "Sly Stallone" };

const splitStr = (str) => str.split(` `);

const findMachingWordInArr = (arr) => arr.find((x) => x === "is");

const pipe = (...fns) => (arg) => fns.reduce((a, b) => b(a), arg);

const findWordInString = pipe(splitStr, findMachingWordInArr);
console.log("findWordInString is " + findWordInString);

const splitThis = findWordInString("This is one");

console.log("splitThis", splitThis); 

function findFirstNameInObj(name, obj) {
	const namesArr = Object.values(obj);
	namesArr.find((name) => {});
}
*/

function App() {
	return (
		<div className='App'>
			<header className='App-header'></header>
			<div className='interface'>
				<TaskList />
				<TaskGroups />
			</div>
		</div>
	);
}

export default App;
