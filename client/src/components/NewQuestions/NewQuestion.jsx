import React, { useState } from "react";
import { useDispatch } from "react-redux";
import EditQuestion from "../EditQuestion/EditQuestion";
import axios from "axios";
import { updateQuestion, deleteQuestion } from "../Redux/questionsSlice";

const NewQuestion = ({ ques }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  // Update operation
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedQues) => {
    axios
      .put(`http://localhost:3030/update/${updatedQues.id}`, updatedQues)
      .then((res) => {
        dispatch(updateQuestion({ id: updatedQues.id, data: updatedQues }));
        setIsEditing(false);
      })
      .catch((err) => console.error(err));
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  // Delete operation
  const handleDelete = () => {
    axios
      .delete(`http://localhost:3030/delete/${ques.id}`)
      .then((res) => {
        dispatch(deleteQuestion(ques.id));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container">
      <div className="card w-full bg-slate-550 shadow-xl ml-1">
        {isEditing ? (
          <EditQuestion
            ques={ques}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        ) : (
          <div className="card-body">
            <h2 className="card-title pb-4">{ques.question}</h2>
            <p className="text-xl text-start">1. {ques.option1}</p>
            <p className="text-xl text-start">2. {ques.option2}</p>
            <p className="text-xl text-start">3. {ques.option3}</p>
            <p className="text-xl text-start">4. {ques.option4}</p>
            <p className="text-xl font-semibold text-slate-300 mt-5 text-start pb-6">
              Answer: {ques.ans}
            </p>
            <span className="flex">
              <button
                className="btn btn-primary w-24 mr-6"
                onClick={handleEditClick}
              >
                EDIT
              </button>
              <button className="bg-red-600 py-2" onClick={handleDelete}>
                DELETE
              </button>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewQuestion;