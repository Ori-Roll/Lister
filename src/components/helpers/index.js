import { defaultItem } from "./Defaults.js";

function checkedItemValue(item) {
	if (typeof item !== "object") {
		return defaultItem;
	}
	item.name = typeof item.name === "string" ? item.name : defaultItem.name;
	return item;
}

function checkedItemKey(item) {
	let key = item.name ? `${item.name}${Math.random() * 100}` : Math.random();
	return key;
}

function isNotStringOrIsHTTP(stringItem) {
	if (typeof stringItem !== "string") {
		return true;
	}
	return stringItem.slice(0, 4) === "http" ? true : false;
}

export { checkedItemValue, checkedItemKey, isNotStringOrIsHTTP };
