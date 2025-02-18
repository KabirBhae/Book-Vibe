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

	const [sort, setSort] = useState("");
	const handleSort = sortType => {
		setSort(sortType);
		let sortedArray = [...wishListBooks];

		if (sortType === "Ratings") {
			sortedArray.sort((a, b) => b.rating - a.rating);
		}
		else{
			sortedArray.sort((a, b) => a.bookName.localeCompare(b.bookName));
		}
		setwishListBooks(sortedArray);
	};

	return (
		<>
			<h2 id="book-catalog" className="text-4xl font-bold text-center my-9">
				Your Wishlist
			</h2>
			<div className="my-6 flex justify-center">
				<details className="dropdown">
					<summary className="btn m-1 bg-teal-600 rounded-lg">{sort ? `Sort By: ${sort}` : `Sort By`}</summary>
					<ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
						<li onClick={() => handleSort("Ratings")}>
							<a>Ratings</a>
						</li>
						<li onClick={() => handleSort("Book Name")}>
							<a>Book Name</a>
						</li>
					</ul>
				</details>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{wishListBooks.map(bookItem => (
					<Book key={bookItem.bookId} book={bookItem}></Book>
				))}
			</div>
		</>
	);
};

export default Wishlist;
