import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
	const { bookId, bookName, author, image, tags, category, rating } = book;
	//for the rating part
	const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const ratingStyle = {
		opacity: "100%",
	};
	return (
		<Link to={`/books/${bookId}`}>
			<div className="card bg-gray-600 w-96 shadow-xl">
				<figure className="w-[326px] mx-auto py-8 px-6 bg-blue-200 rounded-2xl">
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
						<div className="badge badge-outline">{category}</div>
						<div className="rating rating-lg rating-half">
							<input disabled type="radio" name="rating-10" className="rating-hidden" />
							{/* "defaultChecked" attribute does not work when there are multiple elements with this attribute on the same page */}
							{oneToTen.map(number => {
								if (Math.round(rating * 2) >= number) {
									if (number % 2) {
										return <input key={number} disabled type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-600" style={ratingStyle} />;
									}
									return <input key={number} disabled type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-600" style={ratingStyle} />;
								} else {
									if (number % 2) {
										return <input key={number} disabled type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-600" />;
									} else {
										return <input key={number} disabled type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-600" />;
									}
								}
							})}
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

Book.propTypes = {
	book: PropTypes.object.isRequired,
};

export default Book;
