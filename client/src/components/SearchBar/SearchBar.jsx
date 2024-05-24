// Import necessary modules from React and Redux
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchQuestionsByKeyword } from "../Redux/questionsSlice";
import SearchedQuestion from "./SearchedQuestion";
import DateRangeSearch from "../DateRangeSearch/DateRangeSearch";

const SearchBar = () => {
  // Initialize dispatch function to dispatch actions
  const dispatch = useDispatch();
  // Get questions state from the Redux store
  const { questions, loading, error } = useSelector((state) => state.questions);
  // Local state to manage the search query
  const [query, setQuery] = useState("");

  // Fetch questions when the component mounts
  useEffect(() => {
    dispatch(searchQuestionsByKeyword());
  }, [dispatch]);

  // Handle input change and update the query state
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // Filter questions based on the search query
  const filteredQuestions = query
    ? questions.filter((ques) =>
        ques.question.toLowerCase().includes(query.toLowerCase())
      )
    : questions.slice(0, 1); // Display only the first question if search query is empty

  return (
    <div className="bg-slate-600 py-24 px-0 md:px-24">
      <div className="container pl-16 md:px-32">
        {/* Search input field */}
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search questions by keyword..."
          className="input bg-slate-500 text-slate-100 text-xl w-full text-center"
        />
        {/* Search with Date range */}
        <DateRangeSearch/>
        {/* Display loading, error, or filtered questions */}
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {filteredQuestions.map((ques, index) => (
          <SearchedQuestion key={index} ques={ques} />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
