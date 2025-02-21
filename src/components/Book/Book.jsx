import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
	const { bookId, bookName, author, image, tags, rating } = book;
	//for the rating part
	const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<div className="card bg-gray-600 w-94 shadow-xl">
			<figure className="w-[326px] mx-auto py-8 px-6 mt-6 bg-blue-200 rounded-2xl">
				<img className="h-[166px]" src={image} alt={bookName} />
			</figure>
			<div className="card-body">
				<div className="flex gap-2">
					{tags.map((tag, idx) => (
						<div key={idx} className="badge badge-accent text-black">
							{tag}
						</div>
					))}
				</div>
				<h2 className="card-title">{bookName}</h2>
				<div className="border-t-1 border-dashed"></div>
				<p>By: {author}</p>
				<div className="card-actions justify-between mt-2">
					<Link to={`/books/${bookId}`}>
						<button className="btn btn-primary">Book Details</button>
					</Link>
					<div className="rating rating-lg rating-half">
						<input disabled type="radio" name="rating-10" className="rating-hidden" />
						{/* "defaultChecked" attribute does not work when there are multiple elements with this attribute on the same page */}
						{oneToTen.map(number => {
							if (Math.round(rating * 2) >= number) {
								return <input key={number} disabled type="radio" name="rating-10" className={`mask mask-star-2 ${number % 2 ? "mask-half-1" : "mask-half-2"} bg-green-600 opacity-100`} />;
							}
							return <input key={number} disabled type="radio" name="rating-10" className={`mask mask-star-2 ${number % 2 ? "mask-half-1" : "mask-half-2"} bg-green-600`} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

Book.propTypes = {
	book: PropTypes.object.isRequired,
};

export default Book;
