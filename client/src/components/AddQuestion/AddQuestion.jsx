import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { DataContext } from "../Context/DataContext";
import axios from "axios";

const AddQuestion = () => {
  // Use useContext to access addQuestion from DataContext
  const { addQuestion } = useContext(DataContext);

  // Initialize the useForm hook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Function to submit the form data using Axios
  const onSubmit = (data) => {
    // Call addQuestion function to update the context value
    addQuestion(data);

    // Send form data to the server
    axios
      .post("http://localhost:3000/addQuestion", data)
      .then((res) => {
        console.log(res);
        // Reset the form fields after successful submission
        reset();
      })
      .catch((err) => console.error(err));
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
            {...register("question", { required: true })}
          />
          {errors.question && (
            <span className="text-red-500">This field is required</span>
          )}
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
                {...register("option1", { required: true })}
              />
            </span>
          </label>
          {errors.option1 && (
            <span className="text-red-500">This field is required</span>
          )}
          <label className="label cursor-pointer">
            <span className="label-text text-lg">
              2.
              <input
                type="text"
                name="option2"
                placeholder="Option 2"
                className="input bg-slate-500 text-slate-100 text-lg ml-3"
                {...register("option2", { required: true })}
              />
            </span>
          </label>
          {errors.option2 && (
            <span className="text-red-500">This field is required</span>
          )}
          <label className="label cursor-pointer">
            <span className="label-text text-lg">
              3.
              <input
                type="text"
                name="option3"
                placeholder="Option 3"
                className="input bg-slate-500 text-slate-100 text-lg ml-3"
                {...register("option3", { required: true })}
              />
            </span>
          </label>
          {errors.option3 && (
            <span className="text-red-500">This field is required</span>
          )}
          <label className="label cursor-pointer">
            <span className="label-text text-lg">
              4.
              <input
                type="text"
                name="option4"
                placeholder="Option 4"
                className="input bg-slate-500 text-slate-100 text-lg ml-3"
                {...register("option4", { required: true })}
              />
            </span>
          </label>
          {errors.option4 && (
            <span className="text-red-500">This field is required</span>
          )}
          <label className="label pt-7 cursor-pointer">
            <span className="label-text text-lg">
              <input
                type="text"
                name="ans"
                placeholder="Answer"
                className="input bg-slate-500 text-slate-100 text-lg ml-7"
                {...register("ans", { required: true })}
              />
            </span>
          </label>
          {errors.ans && (
            <span className="text-red-500">This field is required</span>
          )}
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
