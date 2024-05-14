import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";

const Question = ({ quiz }) => {
    // Destructuring
    const { question, option1, option2, option3, option4, ans } = quiz;

    return (
        <div className="container">
            <div className="card w-full bg-slate-550 shadow-xl ml-1">
                <div className="card-body">
                    <h2 className="card-title pb-4">{question}</h2>
                    <p className='text-xl text-start'>1. {option1}</p>
                    <p className='text-xl text-start'>2. {option2}</p>
                    <p className='text-xl text-start'>3. {option3}</p>
                    <p className='text-xl text-start'>4. {option4}</p>
                    <p className='text-xl font-semibold text-slate-300 mt-5 text-start'>Answer: {ans}</p>
                </div>
            </div>
        </div>
    );
};

export default Question;