import { NavLink } from "react-router-dom";
import { IoIosHome, IoIosTrash } from "react-icons/io";

// | Back | Save | Delete |
const NavBarSimple = () => {
	return (
		<header>
			<NavLink to={"/"} className={"btn"}>
				<button className="btn">
					<IoIosHome />
				</button>
			</NavLink>
			<button className="btn">Save</button>
			<button className="btn">
				<IoIosTrash />
			</button>
		</header>
	);
};

export default NavBarSimple;
