import { NavLink } from "react-router-dom";
import { Wrapper, Text, Date } from "../assets/wrappers/NoteItem";

const NoteItem = ({ note }) => {
	return (
		<Wrapper>
			<NavLink to={`/edit/${note.id}`} className="nav-link">
				<Text>
					{/* only shows the first 20 chars of the title for readability */}
					{note.title.length > 20
						? note.title.substr(0, 17) + "..."
						: note.title}
				</Text>

				<Date>{note.date}</Date>
			</NavLink>
		</Wrapper>
	);
};
export default NoteItem;
