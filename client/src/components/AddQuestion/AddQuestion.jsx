import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addQuestion } from "../Redux/questionsSlice";

const AddQuestion = () => {
	const dispatch = useDispatch();
	// Initialize the useForm hook
	const { register, handleSubmit, reset } = useForm();

	// Function to submit the form data using Axios
	const onSubmit = async (formData) => {
		const options = formData.options.split(",").map((option) => option.trim());
		if (options.length !== 4) {
			console.error("Please provide exactly 4 options, separated by commas.");
			return;
		}

		// Add the current date to the formData
		const formDataWithDate = {
			...formData,
			option1: options[0],
			option2: options[1],
			option3: options[2],
			option4: options[3],
			created_at: new Date().toISOString().split("T")[0], // Get only the date part in YYYY-MM-DD format
			updated_at: new Date().toISOString().split("T")[0], // Add updated_at field
		};

		// Send form data with date to the server
		try {
			const res = await axios.post(
				"http://localhost:3030/addquestion",
				formDataWithDate
			);

			if (res.data?.data) {
				dispatch(addQuestion(res.data.data));
				reset();
			} else if (res.data?.Error) {
				console.error("Server responded with an error:", res.data.Error);
			} else {
				console.error("Unexpected response structure:", res.data);
			}
		} catch (err) {
			console.error("Error in Axios request:", err);
			if (err.response) {
				console.error("Error response data:", err.response.data);
			} else {
				console.error("No response data");
			}
		}
	};

	return (
		<div className="bg-slate-800 py-20 px-0 md:px-24">
			<div className="container pl-24 md:pl-16 md:px-20">
				<span className="label-text text-slate-200 text-3xl">
					Add The Question
				</span>
				<hr className="mt-4 mx-20 md:mx-64" />
				{/* Add the question */}
				<form className="pt-16" onSubmit={handleSubmit(onSubmit)}>
					{/* Title & Question */}
					<div className="form-control">
							<span className="label-text text-xl text-start">Question :
								<input
									type="text"
									name="question"
									placeholder="Add your question"
									className="input input-bordered bg-slate-500 text-slate-100 text-lg w-full ml-"
									{...register("question")}
									required
								/>
							</span>
					</div>
					{/* Options & Answer */}
					<div className="form-control pt-6">
							<span className="label-text text-xl text-start">Options : <span className="text-sm">(Enter four options with commas)</span>
								<input
									type="text"
									name="options"
									placeholder="Option 1, Option 2, Option 3, Option 4"
									className="input bg-slate-500 text-slate-100 text-lg w-full"
									{...register("options")}
									required
								/>
							</span>
							<span className="label-text text-xl text-start pt-6">Answer :
								<input
									type="text"
									name="ans"
									placeholder="Answer"
									className="input bg-slate-500 text-slate-100 text-lg w-96 flex place-items-start"
									{...register("ans")}
									required
								/>
							</span>
					</div>
					<div className="form-control pt-10">
						<button className="btn btn-primary w-24" type="submit">
							SAVE
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddQuestion;
