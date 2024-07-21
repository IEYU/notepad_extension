import { NavLink } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import Wrapper from "../assets/wrappers/NavBarSimple";

// | Back |   | Save |
const NavBarSimple = ({ onButtonClick }) => {
	return (
		<Wrapper>
			<NavLink to={"/"}>
				<button className="btn">
					<IoIosHome />
				</button>
			</NavLink>
			<button className="btn btnSave" onClick={onButtonClick}>
				Save
			</button>
		</Wrapper>
	);
};

export default NavBarSimple;
