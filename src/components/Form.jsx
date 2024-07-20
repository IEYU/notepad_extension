import React from "react";

const Form = ({ title, details, setTitle, setDetails, onSubmit }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(title, details);
		if (onSubmit) {
			onSubmit();
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Title"
					value={title}
					onChange={(e) => setTitle(e.target.value)} // set the title upon typing
					autoFocus
				/>
				<textarea
					placeholder="note..."
					value={details}
					onChange={(e) => setDetails(e.target.value)}
				/>
				{/* Hidden submit button to trigger form submission */}
				<button type="submit" style={{ display: "none" }}></button>{" "}
			</form>
		</div>
	);
};

export default Form;
