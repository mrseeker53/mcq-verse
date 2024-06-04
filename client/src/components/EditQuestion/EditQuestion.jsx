import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateQuestion } from "../Redux/questionsSlice";
import axios from "axios";

const EditQuestion = ({ ques, onSave, onCancel }) => {
  const dispatch = useDispatch();
  // Initialize the useForm hook
  const { register, handleSubmit, setValue } = useForm();

  // Update formData when ques changes
  useEffect(() => {
    if (ques) {
      setValue("question", ques.question);
      setValue("option1", ques.option1);
      setValue("option2", ques.option2);
      setValue("option3", ques.option3);
      setValue("option4", ques.option4);
      setValue("ans", ques.ans);
    }
  }, [ques, setValue]);

  const onSubmit = (formData) => {
    // Add the current date to the formData
    const formDataWithDate = {
      ...formData,
      updated_at: new Date().toISOString(), // Add current date in ISO format
    };

    if (ques && ques.id) {
      axios
        .put(`http://localhost:3030/update/${ques.id}`, formDataWithDate)
        .then((res) => {
          dispatch(updateQuestion({ id: ques.id, data: formDataWithDate }));
          onSave({ ...formDataWithDate, id: ques.id }); // Pass the updated data back to the parent
        })
        .catch((err) => console.error(err));
    } else {
      console.error("Question ID is undefined");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="px-8 md:px-8 py-8">
        {/* Question */}
      <div className="form-control">
        <input
          type="text"
          name="question"
          placeholder="Add your question"
          className="input input-bordered bg-slate-500 text-slate-100 text-lg w-96"
          {...register("question")}
          required
        />
      </div>
      {/* Options */}
      <div className="form-control py-8">
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
      {/* Button */}
      <div className="flex">
        <button className="btn btn-success w-24 mr-6" type="submit">
          SAVE
        </button>
        <button
          className="bg-yellow-500 text-black py-2"
          type="button"
          onClick={onCancel}
        >
          CANCEL
        </button>
      </div>
      </div>
    </form>
  );
};

export default EditQuestion;
