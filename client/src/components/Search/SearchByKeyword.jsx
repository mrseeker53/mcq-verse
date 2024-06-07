import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	searchQuestionsByKeyword,
	searchQuestionsByDate,
} from "../Redux/questionsSlice";
import SearchedQuestion from "./SearchedQuestion";
import SearchByDateRange from "./SearchByDateRange";

const SearchByKeyword = ({ setIsSearching }) => {
	// Initialize dispatch function to dispatch actions
	const dispatch = useDispatch();
	// Get questions state from the Redux store
	const { questions, loading, error } = useSelector((state) => state.questions);
	// Local state to manage the search query
	const [query, setQuery] = useState("");
	// State to manage the search type
	const [searchType, setSearchType] = useState("Keyword");

	// Fetch questions when the component mounts
	useEffect(() => {
		if (searchType === "keyword") {
			dispatch(searchQuestionsByKeyword());
		}
	}, [dispatch, searchType]);

	// Handle input change and update the query state
	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	const handleKeywordSearch = () => {
		if (query) {
			setIsSearching(true);
			// Dispatch the search action for keyword
			dispatch(searchQuestionsByKeyword(query));
		}
	};

	// const handleDateSearch = (startDate, endDate) => {
	// 	setIsSearching(true);
	// 	// Dispatch the search action for date range
	// 	dispatch(searchQuestionsByDate({ startDate, endDate }));
	// };

	// Filter questions based on the search query
	const filteredQuestions = query
		? questions.filter((ques) =>
				ques.question.toLowerCase().includes(query.toLowerCase())
		  )
		: [];

	return (
		<div className="bg-slate-800 py-20 px-0 md:px-24">
			<div className="container pl-24 md:pl-16 md:px-20">
				<div className="pb-6">
					<button
						onClick={() => setSearchType("keyword")}
						className={`btn ${
							searchType === "keyword" ? "btn-primary" : "btn-info"
						} mr-2`}
					>
						SEARCH BY KEYWORD
					</button>
					<button
						onClick={() => setSearchType("dateRange")}
						className={`btn ${
							searchType === "dateRange" ? "btn-primary" : "btn-info"
						}`}
					>
						SEARCH BY DATE RANGE
					</button>
				</div>

				{searchType === "keyword" ? (
					<div>
						<div className="flex pt-10">
							<input
								type="text"
								value={query}
								onChange={handleChange}
								placeholder="Search questions by keyword..."
								className="input bg-slate-700 text-slate-100 text-xl w-full text-center mr-4"
							/>
							<button
								onClick={handleKeywordSearch}
								className="btn btn-primary w-24 mb-"
							>
								SEARCH
							</button>
						</div>
						{loading && <div>Loading...</div>}
						{error && <div>Error: {error}</div>}
						{filteredQuestions.map((ques, index) => (
							<SearchedQuestion
								key={index}
								ques={ques}
								serialNumber={index + 1}
							/>
						))}
					</div>
				) : (
					searchType === "dateRange" && (
						<SearchByDateRange setIsSearching={setIsSearching} />
					)
				)}
			</div>
		</div>
	);
};

export default SearchByKeyword;
