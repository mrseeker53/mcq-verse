import React, { useContext, useState } from "react";
import { DataContext } from "../Context/DataContext";
import EditQuestion from "../EditQuestion/EditQuestion";

const NewQuestion = ({ ques }) => {
  // Destructuring
  const { question, option1, option2, option3, option4, ans } = ques;

  // Use useContext to access quesData from DataContext
  const { setQuesData } = useContext(DataContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedQues) => {
    setQuesData((prevQuesData) =>
      prevQuesData.map((q) => (q.id === updatedQues.id ? updatedQues : q))
    );
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="container">
      <div className="card w-full bg-slate-550 shadow-xl ml-1">
        {isEditing ? (
          <EditQuestion ques={ques} onSave={handleSave} onCancel={handleCancel} />
        ) : (
          <div className="card-body">
            <h2 className="card-title pb-4">{question}</h2>
            <p className="text-xl text-start">1. {option1}</p>
            <p className="text-xl text-start">2. {option2}</p>
            <p className="text-xl text-start">3. {option3}</p>
            <p className="text-xl text-start">4. {option4}</p>
            <p className="text-xl font-semibold text-slate-300 mt-5 text-start pb-6">
              Answer: {ans}
            </p>
            <button className="btn btn-primary w-24" onClick={handleEditClick}>
              EDIT
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewQuestion;
