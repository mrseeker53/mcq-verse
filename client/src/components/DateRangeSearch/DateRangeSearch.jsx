/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchQuestionsByDate } from "../Redux/questionsSlice";

const DateRangeSearch = () => {
	const dispatch = useDispatch();
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const { searchResults, loading, error } = useSelector(
		(state) => state.questions
	);

	// Handle changes in the start date input
	const handleChangeStartDate = (e) => {
		setStartDate(e.target.value);
	};

	// Handle changes in the end date input
	const handleChangeEndDate = (e) => {
		setEndDate(e.target.value);
	};

	// Dispatch action to search questions by date range
	const handleSearch = () => {
		if (startDate && endDate) {
			dispatch(searchQuestionsByDate({ startDate, endDate }));
		} else {
			alert("Please select both start and end dates"); // Simple validation on the client side
		}
	};

	return (
		<div className="bg-slate-800 pt-12 rounded-lg">
			<div className="container">
			{/* <div className="container pl-24 md:pl-16 md:px-20"> */}
				<p className="text-2xl underline underline-offset-8 pb-6">
					Search By Date Range
				</p>
				<input
					type="date"
					value={startDate}
					onChange={handleChangeStartDate}
					placeholder="Start Date"
					className="input bg-slate-500 text-slate-300"
				/>
				<input
					type="date"
					value={endDate}
					onChange={handleChangeEndDate}
					placeholder="End Date"
					className="input bg-slate-500 text-slate-300 mx-4"
				/>
				<button onClick={handleSearch} className="btn btn-primary w-24">
					SEARCH
				</button>
			</div>
      {/* Display search results */}
				<div>
					{loading && <p>Loading...</p>}
					{error && <p>Error: {error}</p>}
					<div className="search-results">
						{searchResults.map((ques, index) => (
							<div key={ques.id} className="card bg-slate-700 shadow-xl ml-1 mt-12">
								<div className="card-body text-start">
									<h2 className="card-title text-2xl">
										{index + 1}. {ques.question}
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
						))}
					</div>
				</div>
		</div>
	);
};

export default DateRangeSearch;
