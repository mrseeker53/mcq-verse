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
    <div className="bg-slate-600 pt-8 pb-16 px-0 md:px-24">
      <div className="container grid-flow-row">
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
        {/* Display search results */}
        <div>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          <div className="search-results">
            {searchResults.map((ques) => (
              <div key={ques.id} className="card bg-slate-550 shadow-xl ml-1">
                <div className="card-body">
                  <h2 className="card-title pb-4">{ques.question}</h2>
                  <p className="text-xl text-start">1. {ques.option1}</p>
                  <p className="text-xl text-start">2. {ques.option2}</p>
                  <p className="text-xl text-start">3. {ques.option3}</p>
                  <p className="text-xl text-start">4. {ques.option4}</p>
                  <p className="text-xl font-semibold text-slate-300 mt-5 text-start pb-6">
                    Answer: {ques.ans}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateRangeSearch;
