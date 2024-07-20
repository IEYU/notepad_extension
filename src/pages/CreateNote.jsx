import { useState } from "react";
import NavBarSimple from "../components/NavBarSimple";
import Form from "../components/Form";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const CreateNote = ({ setNotes }) => {
	const [title, setTitle] = useState("");
	const [details, setDetails] = useState("");
	const navigate = useNavigate();

	const handleFormSubmit = () => {
		const currentDate = new Date();
		const formattedDate = currentDate.toLocaleDateString("en-US", {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
		});

		if (title || details) {
			const note = { id: nanoid(), title, details, date: formattedDate };

			// Add the note to storage
			setNotes((prevNotes) => [note, ...prevNotes]);
			console.log(note);

			// redirect to home page
			navigate("/");
		}
	};

	return (
		<div>
			<header>
				<NavBarSimple onButtonClick={handleFormSubmit} />
				<Form
					title={title}
					details={details}
					setTitle={setTitle}
					setDetails={setDetails}
					onSubmit={handleFormSubmit}
				/>
			</header>
		</div>
	);
};

export default CreateNote;
