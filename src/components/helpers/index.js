import { defaultItem } from "./Defaults.js";

function checkedItemValue(item) {
	if (typeof item !== "object") {
		return defaultItem;
	}
	item.name = typeof item.name === "string" ? item.name : defaultItem.name;
	return item;
}

function checkedItemKey(item) {
	let key = item.key ? item.key : Math.random();
	console.log("new key: " + key);
	return key;
}

export { checkedItemValue, checkedItemKey };
