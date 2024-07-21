import React from "react";
import {
	FormContainer,
	StyledForm,
	TitleInput,
	NoteTextarea,
	HiddenSubmitButton,
} from "../assets/wrappers/Form";

const Form = ({ title, details, setTitle, setDetails, onSubmit }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(title, details);
		if (onSubmit) {
			onSubmit();
		}
	};

	return (
		<FormContainer>
			<StyledForm onSubmit={handleSubmit}>
				<TitleInput
					type="text"
					placeholder="Title"
					value={title}
					onChange={(e) => setTitle(e.target.value)} // set the title upon typing
					autoFocus
				/>
				<NoteTextarea
					placeholder="Note..."
					value={details}
					onChange={(e) => setDetails(e.target.value)}
				/>
				<HiddenSubmitButton type="submit" />
			</StyledForm>
		</FormContainer>
	);
};

export default Form;
