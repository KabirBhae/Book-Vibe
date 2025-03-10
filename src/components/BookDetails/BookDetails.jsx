import { useLoaderData, useParams } from "react-router-dom";
import { addBookToLocalStorage, getBookFromLocalStorage } from "../../utility/addToLocalStorage";
import { useEffect, useState } from "react";
import { removeBookFromLocalStorage } from "../../utility/removeFromLocalStorage";

const BookDetails = () => {
	const books = useLoaderData();
	const { bookId } = useParams();
	const specificBook = books.find(bookItem => bookItem.bookId === parseInt(bookId));
	const { bookName, author, image, category, review, tags } = specificBook;
	const { totalPages, publisher, yearOfPublishing, rating } = specificBook;
	//for the rating part
	const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	const handleAddToWishList = id => {
		addBookToLocalStorage(id);
		setIsStoredBooksChanged(!isStoredBooksChanged);
	};
	const handleRemoveFromWishList = id => {
		removeBookFromLocalStorage(id);
		setIsStoredBooksChanged(!isStoredBooksChanged);
	};

	const [storedBooks, setstoredBooks] = useState([]);
	const [isStoredBooksChanged, setIsStoredBooksChanged] = useState(false);
	useEffect(() => {
		let localBooks = getBookFromLocalStorage();
		localBooks = localBooks.map(item => parseInt(item));
		setstoredBooks(localBooks);
	}, [isStoredBooksChanged]);
	return (
		<div className="hero bg-base-200 min-h-screen">
			<div className="hero-content flex-col lg:flex-row">
				<img src={image} className="max-w-sm rounded-lg shadow-2xl mr-6" />
				<div className="px-6">
					<h1 className="text-5xl font-bold">{bookName}</h1>
					<p className="py-6 mb-6">By: {author}</p>
					<div className="border-t-1 border-dashed"></div>
					<div className="my-4 text-xl">{category}</div>
					<div className="border-t-1 border-dashed"></div>
					<p className="py-6 mt-6">
						<span className="font-bold">Review:</span> {review}
					</p>

					<div className="flex gap-2">
						<span className="font-bold mr-6">Tags</span>
						{tags.map((tag, idx) => (
							<div key={idx} className="badge badge-accent text-black">
								#{tag}
							</div>
						))}
					</div>

					<div className="flex mt-12">
						<div>
							<p className="mb-3">Number of Pages:</p>
							<p className="mb-3">Publisher:</p>
							<p className="mb-3">Year of Publishing:</p>
							<p>Rating:</p>
						</div>
						<div className="ml-17">
							<p className="mb-3">{totalPages}</p>
							<p className="mb-3">{publisher}</p>
							<p className="mb-3">{yearOfPublishing}</p>
							{/* rating part */}
							<div className="rating rating-lg rating-half">
								<input disabled type="radio" name="rating-10" className="rating-hidden" />
								{oneToTen.map(number => {
									if (Math.round(rating * 2) >= number) {
										return <input key={number} disabled type="radio" name="rating-10" className={`mask mask-star-2 ${number % 2 ? "mask-half-1" : "mask-half-2"} bg-green-600 opacity-100`} />;
									}
									return <input key={number} disabled type="radio" name="rating-10" className={`mask mask-star-2 ${number % 2 ? "mask-half-1" : "mask-half-2"} bg-green-600`} />;
								})}
							</div>
						</div>
					</div>
					<div className="mt-8">
						{storedBooks.includes(parseInt(bookId)) ? (
							<button onClick={() => handleRemoveFromWishList(bookId)} className="btn btn-primary">
								{storedBooks.includes(parseInt(bookId)) ? "Remove from Wishlist" : ""}
							</button>
						) : (
							<button onClick={() => handleAddToWishList(bookId)} className="btn btn-primary">
								{storedBooks.includes(parseInt(bookId)) ? "Wish Listed" : "Add to Wishlist"}
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

BookDetails.propTypes = {};

export default BookDetails;
