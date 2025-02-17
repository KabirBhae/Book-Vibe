import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
	const [books, setBooks] = useState([]);
	useEffect(() => {
		fetch("../../../public/booksData.json")
			.then(res => res.json())
			.then(data => setBooks(data));
	}, []);
	return (
		<div>
			<h2 className="text-4xl font-bold text-center">Books</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{books.map(bookItem => (
					<Book key={bookItem.bookId} book={bookItem}></Book>
				))}
			</div>
		</div>
	);
};

export default Books;
