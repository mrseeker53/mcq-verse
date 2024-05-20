import React, { useEffect, useState } from "react";
import axios from "axios";

const EditQuestion = ({ ques, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    ans: "",
  });

  // Update formData when ques changes
  useEffect(() => {
    if (ques) {
      setFormData({
        question: ques.question,
        option1: ques.option1,
        option2: ques.option2,
        option3: ques.option3,
        option4: ques.option4,
        ans: ques.ans,
      });
    }
  }, [ques]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ques && ques.id) {
      axios
        .put(`http://localhost:3030/update/${ques.id}`, formData)
        .then((res) => {
          onSave({ ...formData, id: ques.id }); // Pass the updated data back to the parent
        })
        .catch((err) => console.error(err));
    } else {
      console.error("Question ID is undefined");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Question */}
      <div className="form-control">
        <input
          type="text"
          name="question"
          placeholder="Add your question"
          className="input input-bordered bg-slate-500 text-slate-100 text-lg w-96"
          onChange={handleChange}
          required
        />
      </div>
      {/* Options */}
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
      {/* Button */}
      <div className="flex">
        <button className="btn btn-success w-24 mr-4" type="submit">
          Save
        </button>
        <button className="bg-red-600" type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditQuestion;
