import React from "react";
import "./App.css";
import Main from "./components/Main";

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
			<header className='app-header'>MAY THE 4TH BE WITH YOU</header>
			<Main />
		</div>
	);
}

export default App;
