import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context/DataContext";
import axios from "axios";
import NewQuestion from "./NewQuestion";

const NewQuestions = () => {
  // Use useContext to access quesData from DataContext
  const { quesData, setQuesData } = useContext(DataContext);

  // State to store fetched data
  const [data, setData] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    axios
      .get("http://localhost:3030")
      .then((res) => {
        // console.log(res);
        setData(res.data.data);
        // update DataContext with fetched data
        setQuesData(res.data.data);
      })
      .catch((err) => console.error(err));
  }, [setQuesData]);

  return (
    <div className="bg-slate-600 py-20 px-0 md:px-24">
      <div className="container px-20">
        <span className="label-text text-slate-200 text-3xl">
          New Questions
        </span>
        <hr className="mt-4 mx-20 md:mx-80" />
        {
          // Check if data is available and not empty
          data && data.length > 0 ? (
            // Map over data to render each question
            data.map((ques, index) => (
              <NewQuestion
                key={index}
                ques={ques}
              />
            ))
          ) : (
            // Display a message if quesData is empty or not available
            <div className="card-body pb-12">
              <p className="text-xl text-start text-red-500">
                No questions available
              </p>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default NewQuestions;
