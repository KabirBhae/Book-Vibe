import bannerImg from "../../assets/books.jpg";
const Banner = () => {
	return (
		<div className="hero bg-base-200 h-[554px]">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
				<div className="px-6">
					<h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
					<p className="py-6">
						Welcome to <span className="font-bold text-indigo-400">BookVibe</span>, your ultimate destination for discovering amazing books! Whether you are looking for timeless classics or the latest bestsellers, we have something for every reader.
					</p>
					<a
						href="#book-catalog"
						onClick={e => {
							e.preventDefault();
							document.querySelector("#book-catalog").scrollIntoView({
								behavior: "smooth",
							});
						}}
					>
						<button className="btn btn-primary">Get Started</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Banner;
