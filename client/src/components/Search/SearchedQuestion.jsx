import React from "react";

const SearchedQuestion = ({ ques, serialNumber }) => {
	return (
		<div className="card bg-slate-700 shadow-xl ml-1 mt-12">
			<div className="card-body text-start">
				<h2 className="card-title text-2xl">
					{serialNumber}. {ques.question}
				</h2>
				<div className="text-xl pl-7 py-6">
					<p>a. {ques.option1}</p>
					<p>b. {ques.option2}</p>
					<p>c. {ques.option3}</p>
					<p>d. {ques.option4}</p>
				</div>
				<p className="text-xl font-bold text-slate-400">
					Answer: {ques.ans}
				</p>
			</div>
		</div>
	);
};

export default SearchedQuestion;
