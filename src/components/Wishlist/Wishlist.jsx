import { useLoaderData } from "react-router-dom";
import { getBookFromLocalStorage } from "../../utility/addToLocalStorage";
import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Wishlist = () => {
	const allBooks = useLoaderData();
	const [wishListBooks, setwishListBooks] = useState([]);
	useEffect(() => {
		let storedBookIDs = getBookFromLocalStorage();
		storedBookIDs = storedBookIDs.map(item => parseInt(item));
		setwishListBooks(allBooks.filter(bookItem => storedBookIDs.includes(bookItem.bookId)));
	}, []);
	return (
		<>
			<h2 id="book-catalog" className="text-4xl font-bold text-center mb-9">
				Wish List
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{wishListBooks.map(bookItem => (
					<Book key={bookItem.bookId} book={bookItem}></Book>
				))}
			</div>
		</>
	);
};

export default Wishlist;
