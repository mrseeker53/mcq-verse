import React, { useState, useContext } from "react";
import { DataContext } from "../Context/DataContext";
import axios from "axios";

const AddQuestion = () => {
  // Use useContext to access addQuestion from DataContext
  const { addQuestion } = useContext(DataContext);

  // State to store form data
  const [formData, setFormData] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    ans: "",
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to submit the dorm data using Axios
  const handleSubmit = (e) => {
    // Prevent default form submission behavior (page reload)
    e.preventDefault();

    // Call addQuestion function to add the question to the context
    addQuestion(formData);

    // Send form data to the server
    axios
      .post("http://localhost:3030/addquestion", formData)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <div className="hero bg-slate-600">
      {/* Add the question */}
      <form className="card-body py-24" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-slate-200 text-3xl text-center pb-4 pl-16">
              Add The Question
            </span>
          </label>
          <hr className="pb-12" />
          <input
            type="text"
            name="question"
            placeholder="Add your question"
            className="input input-bordered bg-slate-500 text-slate-100 text-lg w-96"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control py-5">
          <label className="label cursor-pointer">
            <span className="label-text text-lg">
              1.
              <input
                type="text"
                name="option1"
                placeholder="Option 1"
                className="input bg-slate-500 text-slate-100 text-lg ml-3"
                onChange={handleChange}
                required
              />
            </span>
          </label>
          <label className="label cursor-pointer">
            <span className="label-text text-lg">
              2.
              <input
                type="text"
                name="option2"
                placeholder="Option 2"
                className="input bg-slate-500 text-slate-100 text-lg ml-3"
                onChange={handleChange}
                required
              />
            </span>
          </label>
          <label className="label cursor-pointer">
            <span className="label-text text-lg">
              3.
              <input
                type="text"
                name="option3"
                placeholder="Option 3"
                className="input bg-slate-500 text-slate-100 text-lg ml-3"
                onChange={handleChange}
                required
              />
            </span>
          </label>
          <label className="label cursor-pointer">
            <span className="label-text text-lg">
              4.
              <input
                type="text"
                name="option4"
                placeholder="Option 4"
                className="input bg-slate-500 text-slate-100 text-lg ml-3"
                onChange={handleChange}
                required
              />
            </span>
          </label>
          <label className="label pt-7 cursor-pointer">
            <span className="label-text text-lg">
              <input
                type="text"
                name="ans"
                placeholder="Answer"
                className="input bg-slate-500 text-slate-100 text-lg ml-7"
                onChange={handleChange}
                required
              />
            </span>
          </label>
        </div>
        <div className="form-control pl-8">
          <button className="btn btn-primary w-72">SAVE</button>
        </div>
      </form>
    </div>
  );
};

export default AddQuestion;
