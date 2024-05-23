import React from "react";

const SearchedQuestion = ({ ques }) => {
  return (
    <div className="card w-full bg-slate-550 shadow-xl ml-1">
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
  );
};

export default SearchedQuestion;
