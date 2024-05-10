import React, { useContext } from "react";
// import { DataContext } from "../Context/DataContext";

const Add = () => {

  // const { addQuestion } = useContext(DataContext);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Get form data
  //   const formData = new FormData(e.target);
  //   // Extract data from formData
  //   const question = formData.get('question');
  //   const option1 = formData.get('option1');
  //   const option2 = formData.get('option2');
  //   const option3 = formData.get('option3');
  //   const option4 = formData.get('option4');
  //   const ans = formData.get('ans');
  //   // Call addQuestion function to add the question
  //   addQuestion(question, option1, option2, option3, option4, ans);
  // };
  

  return (
    <div className="hero bg-slate-600">
      <form className="card-body py-24" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-slate-200 text-3xl pb-12">Add The Question</span>
          </label>
          <input
            type="text"
            name="question"
            placeholder="Add your question"
            className="input input-bordered bg-slate-500 text-slate-100"
            required
          />
        </div>
        <div className="form-control py-5">
          <label className="label cursor-pointer">
            <span className="label-text text-lg">1.
              <input
                type="text"
                name="option1"
                placeholder="Option 1"
                className="input bg-slate-500 text-slate-100 ml-3"
                required
              />
            </span>
          </label>
          <label className="label cursor-pointer">
            <span className="label-text text-lg">2.
              <input
                type="text"
                name="option2"
                placeholder="Option 2"
                className="input bg-slate-500 text-slate-100 ml-3"
                required
              />
            </span>
          </label>
          <label className="label cursor-pointer">
            <span className="label-text text-lg">3.
              <input
                type="text"
                name="option3"
                placeholder="Option 3"
                className="input bg-slate-500 text-slate-100 ml-3"
                required
              />
            </span>
          </label>
          <label className="label cursor-pointer">
            <span className="label-text text-lg">4.
              <input
                type="text"
                name="option4"
                placeholder="Option 4"
                className="input bg-slate-500 text-slate-100 ml-3"
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
                className="input bg-slate-500 text-slate-100 ml-7"
                required
              />
            </span>
          </label>
        </div>
        <div className="form-control">
          <button className="btn btn-primary">SAVE</button>
        </div>
      </form>
    </div>
  );
};

export default Add;
