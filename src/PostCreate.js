import React, { useState } from "react";

function PostCreate({ createPost }) {
	const initialFormState = {
		type: "Text",
		content: "",
	};

	const [formData, setFormData] = useState({ ...initialFormState });
	const handleChange = ({ target }) => {
		setFormData({
			...formData,
			[target.name]: target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		createPost(formData);
		setFormData({ ...initialFormState });
	};

	return (
		<form name="create" onSubmit={handleSubmit}>
			<fieldset>
				<legend>Create</legend>
				<div>
					<label htmlFor="type">Type: </label>
					<select
						id="type"
						name="type"
						required={true}
						onChange={handleChange}
						value={formData.type}
					>
						<option value="Text">Text</option>
						<option value="Image">Image</option>
					</select>
				</div>
				<div>
					<label htmlFor="content">Content: </label>
					{formData.type === "Text" ? (
						<textarea
							id="content"
							name="content"
							required={true}
							rows={3}
							onChange={handleChange}
							value={formData.content}
						/>
					) : (
						<input
							id="content"
							name="content"
							type="url"
							required={true}
							onChange={handleChange}
							value={formData.content}
						/>
					)}
				</div>
				<div>
					<button type="submit">Submit</button>
				</div>
			</fieldset>
		</form>
	);
}

export default PostCreate;
