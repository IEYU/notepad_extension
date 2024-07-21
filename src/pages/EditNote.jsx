import { useParams, useNavigate } from "react-router-dom";
import { NavBar, NavBarDelete } from "../components";
import Form from "../components/Form";
import { useState, useEffect } from "react";

const EditNote = ({ notes, setNotes }) => {
	const { id } = useParams();
	const navigate = useNavigate(); // Hook to navigate programmatically
	const note = notes.find((item) => item.id === id);
	const [title, setTitle] = useState(note.title);
	const [details, setDetails] = useState(note.details);

	useEffect(() => {
		if (note) {
			setTitle(note.title);
			setDetails(note.details);
		}
	}, [note]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (title || details) {
			const updatedNote = { ...note, title, details };
			const updatedNotes = notes.map((n) =>
				n.id === id ? updatedNote : n
			);
			setNotes(updatedNotes);
			navigate("/"); // Redirect to the home or notes list page
		}
	};

	const handleDelete = () => {
		const updatedNotes = notes.filter((n) => n.id !== id);
		setNotes(updatedNotes);
		navigate("/"); // Redirect after deleting
	};

	return (
		<div>
			<NavBarDelete
				onButtonClick={handleSubmit}
				onDelete={handleDelete}
			/>
			<Form
				title={title}
				details={details}
				setTitle={setTitle}
				setDetails={setDetails}
				onSubmit={handleSubmit}
			/>
		</div>
	);
};

export default EditNote;
