import { NavLink } from "react-router-dom";
import { IoIosHome, IoIosTrash } from "react-icons/io";

// | Back | Save | Delete |
const NavBarSimple = ({ onButtonClick, onDelete }) => {
	return (
		<header>
			<NavLink to={"/"} className={"btn"}>
				<button className="btn">
					<IoIosHome />
				</button>
			</NavLink>
			<button onClick={onButtonClick}>Save</button>
			<button className="btn" onClick={onDelete}>
				<IoIosTrash />
			</button>
		</header>
	);
};

export default NavBarSimple;
