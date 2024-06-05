import React from "react";
import quizData from "../../assets/data.json";
import Question from "./Question";

const Questions = () => {
  // const [data, setData] = useState([]);

  return (
    <div className="bg-slate-800 py-20 px-0 md:px-24">
      <div className="container px-20">
        <span className="label-text text-slate-200 text-3xl">
          All Questions
        </span>
        <hr className="mt-4 mx-20 md:mx-72" />
        {quizData && quizData.length ? (
          quizData.map((ques, index) => (
            <Question key={index} ques={ques} serialNumber={index+1}></Question>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Questions;
