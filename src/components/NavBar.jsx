import { NavLink } from "react-router-dom";
import { IoIosSearch, IoIosHome, IoIosAdd } from "react-icons/io";

// | Back | Create New | Search | Delete |
const NavBar = () => {
	return (
		<section>
			<header>
				<h2>Notes</h2>
				<input type="text" autoFocus placeholder="keyword..." />
				<NavLink to={"/"}>
					<button className="btn">
						<IoIosHome />
					</button>
				</NavLink>
				<NavLink to={"/create"}>
					<button className="btn">
						<IoIosAdd />
					</button>
				</NavLink>
				<NavLink to={"/"}>
					<button className="btn">
						<IoIosSearch />
					</button>
				</NavLink>
			</header>
		</section>
	);
};

export default NavBar;
