import PropTypes from 'prop-types';
const Book = ({book}) => {
    const { bookName, author, image } = book;
	return (
		<div className="card bg-gray-600 w-96 shadow-xl p-6">
			<figure className="py-8 rounded-2xl w-[326px] mx-auto bg-blue-200">
				<img className="h-[166px]" src={image} alt={bookName} />
			</figure>
			<div className="card-body w-[326px] mx-auto mt-6">
				<h2 className="card-title">
					{bookName}
					<div className="badge badge-secondary">NEW</div>
				</h2>
				<p>{author}</p>
				<div className="card-actions justify-end">
					<div className="badge badge-outline">Fashion</div>
					<div className="badge badge-outline">Products</div>
				</div>
			</div>
		</div>
	);
};

Book.propTypes = {
	book: PropTypes.object.isRequired
};


export default Book;