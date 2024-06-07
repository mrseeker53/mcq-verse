import React from "react";
import quizData from "../../../assets/data.json";
import DummyQuestion from "./DummyQuestion";

const DummyQuestions = () => {
	return (
		<>
			{quizData && quizData.length ? (
				quizData.map((ques, index) => (
					<DummyQuestion
						key={index}
						ques={ques}
						serialNumber={index + 1}
					></DummyQuestion>
				))
			) : (
				<div className="card-body pb-24">
					<p className="text-3xl text- text-gray-500 pt-20">Loading...</p>
				</div>
			)}
		</>
	);
};

export default DummyQuestions;
