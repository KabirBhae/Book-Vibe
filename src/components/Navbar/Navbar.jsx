import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
			<div className="navbar bg-base-100 shadow-sm">
				<div className="navbar-start">
					<NavLink className="btn btn-ghost text-xl" to="/">
						BookVibe
					</NavLink>
				</div>
				<div className="navbar-end">
					<NavLink className="btn" to="/wishlist">
						Go to Wish List
					</NavLink>
				</div>
			</div>
		);
};

export default Navbar;