import { Link } from "react-router-dom";

const Notes = () => {
	return (
		<div>
			<h1>Notes</h1>

			<Link to={"/create"}>
				<button>click</button>
			</Link>
		</div>
	);
};
export default Notes;
