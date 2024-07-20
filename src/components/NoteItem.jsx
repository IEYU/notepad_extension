import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
	return (
		<Link to={`/edit/${note.id}`} className="note">
			<h4>
				{/* only shows the first 20 chars of the title for readability */}
				{note.title.length > 20
					? note.title.substr(0, 17) + "..."
					: note.title}
			</h4>
			<p>{note.date}</p>
		</Link>
	);
};
export default NoteItem;
