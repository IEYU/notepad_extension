import { NavLink } from "react-router-dom";
import { IoIosSearch, IoIosHome, IoIosAdd } from "react-icons/io";
import notes from "../dummy_notes";
import { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/NavBar";

// | Back | Create New | Search | Delete |
const NavBar = ({ notes }) => {
	const [showSearch, setShowSearch] = useState(false);

	return (
		<Wrapper>
			{showSearch && (
				<input
					type="text"
					autoFocus
					placeholder="Search..."
					className="searchBar"
				/>
			)}
			{!showSearch && (
				<>
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
				</>
			)}
			<NavLink to={"/"}>
				<button
					className="btn"
					onClick={() => setShowSearch((prevState) => !prevState)}
				>
					<IoIosSearch />
				</button>
			</NavLink>
		</Wrapper>
	);
};

export default NavBar;
