import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addQuestion } from "../Redux/questionsSlice";

const AddQuestion = () => {
  const dispatch = useDispatch();

  // Initialize the useForm hook
  const { register, handleSubmit, reset } = useForm();

  // Function to submit the form data using Axios
  const onSubmit = async (formData) => {
    // Add the current date to the formData
    const formDataWithDate = {
      ...formData,
      created_at: new Date().toISOString().split("T")[0], // Get only the date part in YYYY-MM-DD format
      updated_at: new Date().toISOString().split("T")[0] // Add updated_at field
    };
    
    // Send form data with date to the server
    try {
      const res = await axios.post("http://localhost:3030/addquestion", formDataWithDate);

      if (res.data?.data) {
        dispatch(addQuestion(res.data.data));
        reset();
      } else if (res.data?.Error) {
        console.error("Server responded with an error:", res.data.Error);
      } else {
        console.error("Unexpected response structure:", res.data);
      }
    } catch (err) {
      console.error("Error in Axios request:", err);
      if (err.response) {
        console.error("Error response data:", err.response.data);
      } else {
        console.error("No response data");
      }
    }
  };
  

  return (
    <div className="hero bg-slate-600">
      {/* Add the question */}
      <form className="card-body py-24" onSubmit={handleSubmit(onSubmit)}>
        {/* Title & Question */}
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
            {...register("question")}
            required
          />
        </div>
        {/* Options & Answer */}
        <div className="form-control py-5">
          <label className="label cursor-pointer">
            <span className="label-text text-lg">
              1.
              <input
                type="text"
                name="option1"
                placeholder="Option 1"
                className="input bg-slate-500 text-slate-100 text-lg ml-3"
                {...register("option1")}
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
                {...register("option2")}
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
                {...register("option3")}
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
                {...register("option4")}
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
                {...register("ans")}
                required
              />
            </span>
          </label>
        </div>
        <div className="form-control pl-8">
          <button className="btn btn-primary w-24" type="submit">
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddQuestion;
