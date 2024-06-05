import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuestions } from "../Redux/questionsSlice";
import axios from "axios";
import Question from "./Question";
import DummyQuestions from "./DummyQuestions";

const Questions = () => {
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
		<div className="bg-slate-800 py-20 px-0 md:px-24">
			<div className="container pl-24 md:pl-16 md:px-20">
				<span className="label-text text-slate-200 text-3xl">All Questions</span>
				<hr className="mt-4 mx-28 md:mx-80" />
				{
					// Check if data is available and not empty
					questions && questions.length > 0 ? (
						// Map over data to render each question
						questions.map((ques, index) => (
							<Question key={index} ques={ques} serialNumber={index + 1} />
						))
					) : (
						<DummyQuestions />
					)
				}
			</div>
		</div>
	);
};

export default Questions;
