import { getBookFromLocalStorage } from "./addToLocalStorage";

const removeBookFromLocalStorage = id => {
	let storedList = getBookFromLocalStorage();
	if (storedList.includes(id)) {
        storedList = storedList.filter(item => item != id)
		storedList = JSON.stringify(storedList);
		localStorage.setItem("read-list", storedList);
    } else {
		alert("Book does not exist in your wish list");
	}
};

export { removeBookFromLocalStorage };
