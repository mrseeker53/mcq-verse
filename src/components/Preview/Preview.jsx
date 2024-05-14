import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";

const Preview = () => {
    // Use useContext to access quesData from DataContext
    const { quesData } = useContext(DataContext);

    return (
        <div className="bg-slate-600">
            <p className="label-text text-slate-200 text-3xl pb-4">Preview The Question</p>
            <hr />
            {
                // Check if quesData is available and not empty
                quesData && quesData.length > 0 ? (
                    // Map over quesData to render each question
                    quesData.map(ques =>
                        <div className="card-body pb-12">
                            <h2 className="card-title">{ques.question}</h2>
                            <p className='text-xl text-start'>1. {ques.option1}</p>
                            <p className='text-xl text-start'>2. {ques.option2}</p>
                            <p className='text-xl text-start'>3. {ques.option3}</p>
                            <p className='text-xl text-start'>4. {ques.option4}</p>
                            <p className='text-xl font-semibold text-slate-300 mt-5 text-start'>Answer: {ques.ans}</p>
                        </div>
                    )) : (
                    // Display a message if quesData is empty or not available
                    <div className="card-body pb-12">
                        <p className="text-xl text-start text-red-500">No questions available</p>
                    </div>
                )
            }
        </div>
    );
};

export default Preview;