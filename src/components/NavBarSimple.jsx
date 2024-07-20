import { NavLink } from "react-router-dom";
import { IoIosHome } from "react-icons/io";

// | Back | Save |
const NavBarSimple = ({ onButtonClick }) => {
	return (
		<header>
			<NavLink to="/" className="btn">
				<button className="btn">
					<IoIosHome />
				</button>
			</NavLink>
			<button className="btn" onClick={onButtonClick}>
				Save
			</button>
		</header>
	);
};

export default NavBarSimple;
