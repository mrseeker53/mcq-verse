import React from "react";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
import UpdateQuestion from "./UpdateQuestion";

const UpdateQuestions = () => {
	const navigate = useNavigate();
    const questions = useSelector((state) => state.questions.questions);

const handleBack = () => {
    navigate("/all-questions");
}

	return (
		<div className="bg-slate-800 py-20 px-0 md:px-24">
			<div className="container pl-24 md:pl-16 md:px-20">
				<span className="label-text text-slate-200 text-3xl">
					All Questions
				</span>
				<hr className="mt-4 mx-28 md:mx-80" />
                <div className="flex pl-2 py-2">
					<button className="btn btn-primary w-24" onClick={handleBack}>
						BACK
					</button>
				</div>
				{
					// Check if data is available and not empty
					questions && questions.length > 0 ? (
						// Map over data to render each question
						questions.map((ques, index) => (
							<UpdateQuestion
								key={index}
								ques={ques}
								serialNumber={index + 1}
							/>
						))
					) : (
						<div className="card-body pb-24">
							<p className="text-3xl text- text-gray-500 pt-20">Loading...</p>
						</div>
					)
				}
			</div>
		</div>
	);
};

export default UpdateQuestions;
