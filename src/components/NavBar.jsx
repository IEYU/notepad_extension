import { NavLink, useNavigate } from "react-router-dom";
import {
	IoIosSearch,
	IoIosTrash,
	IoIosArrowBack,
	IoIosAdd,
} from "react-icons/io";

// | Back | Create New | Search | Delete |
const NavBar = () => {
	const navigate = useNavigate();

	const handleBackClick = () => {
		navigate(-1); // Navigate back by one layer in the history stack
	};

	return (
		<section>
			<header>
				<h2>Notes</h2>
				<input type="text" autoFocus placeholder="keyword..." />
				<button className="btn" onClick={handleBackClick}>
					<IoIosArrowBack />
				</button>
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
				{/* Assuming this would navigate to the edit page with a specific id, e.g., edit/1 */}
				<button className="btn">
					<IoIosTrash />
				</button>
			</header>
		</section>
	);
};

export default NavBar;
