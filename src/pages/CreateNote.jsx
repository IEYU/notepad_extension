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
			let newTitle = title || "No Title"; // Set title to default value if not provided
			let newDetails = details || ""; // Set details to default value if not provided
			const note = {
				id: nanoid(),
				title: newTitle, // Use newTitle as the value for the title property
				details: newDetails, // Use newDetails as the value for the details property
				date: formattedDate,
			};

			// Add the note to storage
			setNotes((prevNotes) => [note, ...prevNotes]);
			console.log(note);

			// redirect to home page
			navigate("/");
		}
	};

	return (
		<div>
			<NavBarSimple onButtonClick={handleFormSubmit} />
			<Form
				title={title}
				details={details}
				setTitle={setTitle}
				setDetails={setDetails}
				onSubmit={handleFormSubmit}
			/>
		</div>
	);
};

export default CreateNote;
