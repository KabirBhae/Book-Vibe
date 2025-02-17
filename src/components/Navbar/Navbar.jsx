import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
	const parameter = useLocation();
	return (
		<div className="navbar bg-gray-800 shadow-sm">
			<div className="navbar-start">
				<NavLink className="btn btn-ghost text-xl" to="/">
					BookVibe
				</NavLink>
			</div>
			{parameter.pathname != "/wishlist" ? (
				<div className="navbar-end">
					<NavLink className="btn" to="/wishlist">
						Go to Wish List
					</NavLink>
				</div>
			) : (
				<div className="navbar-end">
					<NavLink className="btn" to={-1}>
						Go back
					</NavLink>
				</div>
			)}
		</div>
	);
};

export default Navbar;
