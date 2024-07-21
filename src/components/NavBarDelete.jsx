import { NavLink } from "react-router-dom";
import { IoIosHome, IoIosTrash, IoIosSave } from "react-icons/io";
import Wrapper from "../assets/wrappers/NavBarDelete";

// | Back | Save | Delete |
const NavBarSimple = ({ onButtonClick, onDelete }) => {
	return (
		<Wrapper>
			<NavLink to={"/"}>
				<button className="btn">
					<IoIosHome />
				</button>
			</NavLink>
			<button onClick={onButtonClick} className="btn">
				<IoIosSave />
			</button>
			<button className="btn" onClick={onDelete}>
				<IoIosTrash />
			</button>
		</Wrapper>
	);
};

export default NavBarSimple;
