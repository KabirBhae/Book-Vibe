import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
	const [books, setBooks] = useState([]);
	useEffect(() => {
		fetch("/booksData.json")
			.then(res => res.json())
			.then(data => setBooks(data));
	}, []);
	return (
		<div>
			<h2 id="book-catalog" className="text-4xl font-bold text-center mt-25 mb-9">Books</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{books.map(bookItem => (
					<Book key={bookItem.bookId} book={bookItem}></Book>
				))}
			</div>
		</div>
	);
};

export default Books;
