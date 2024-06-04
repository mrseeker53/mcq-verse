import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuestions } from "../Redux/questionsSlice";
import axios from "axios";
import NewQuestion from "./NewQuestion";

const NewQuestions = () => {
	const dispatch = useDispatch();
	const questions = useSelector((state) => state.questions.questions);

	// Fetch data from the backend
	useEffect(() => {
		axios
			.get("http://localhost:3030")
			.then((res) => {
				dispatch(setQuestions(res.data.data));
			})
			.catch((err) => console.error(err));
	}, [dispatch]);

	return (
		<div className="bg-slate-800 pt-20 pb-10 px-0 md:px-24">
			<div className="container pl-16 md:px-20">
				<span className="label-text text-slate-200 text-3xl">
					New Questions
				</span>
				<hr className="mt-4 mx-20 md:mx-64" />
				{
					// Check if data is available and not empty
					questions && questions.length > 0 ? (
						// Map over data to render each question
						questions.map((ques, index) => (
							<NewQuestion key={index} ques={ques} serialNumber={index + 1} />
						))
					) : (
						// Display a message if questions is empty or not available
						<div className="card-body pb-12">
							<p className="text-xl text-start text-red-500">
								No questions available
							</p>
						</div>
					)
				}
			</div>
		</div>
	);
};

export default NewQuestions;
