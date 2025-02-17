import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
	const books = useLoaderData();
	const { bookId } = useParams();
	const specificBook = books.find(bookItem => bookItem.bookId === parseInt(bookId));
	const { bookName, author, image, category, review, tags } = specificBook;
	const { totalPages, publisher, yearOfPublishing, rating } = specificBook;
	//for the rating part
	const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
									if (Math.round(rating * 2) === number && number % 2) {
										return <input key={number} disabled type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" defaultChecked />;
									}
									else if (Math.round(rating * 2) === number && number % 2 == 0) {
										return <input key={number} disabled type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" defaultChecked />;
									}
									else if (number % 2) {
										return <input key={number} disabled type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />;
									}
									return <input key={number} disabled type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />;
								})}
							</div>
						</div>
					</div>
					<div className="mt-8">
						<button className="btn btn-primary mr-4">Read</button>
						<button className="btn btn-primary">WishList</button>
					</div>
				</div>
			</div>
		</div>
	);
};

BookDetails.propTypes = {};

export default BookDetails;
