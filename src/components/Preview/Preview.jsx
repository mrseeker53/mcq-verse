import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";

const Preview = () => {
    // const addQuestion = useContext(DataContext);
    const addQuestion = useContext(DataContext);
    

    const { question, option1, option2, option3, option4, ans } = addQuestion;
    console.log(question);

    const questions = { question, option1, option2, option3, option4, ans };
    

    return (
        <div className="hero bg-slate-600">
            <p className="label-text text-slate-200 text-3xl pb-4">Preview The Question</p>
            <hr />
            <div>
                {
                    questions.map(
                        ques =>
                            <div className="card-body pb-12">
                                <h2 className="card-title">{ques.question}</h2>
                                <p className='text-xl text-start'>1. {option1}</p>
                                <p className='text-xl text-start'>2. {option2}</p>
                                <p className='text-xl text-start'>3. {option3}</p>
                                <p className='text-xl text-start'>4. {option4}</p>
                                <p className='text-xl font-semibold text-slate-300 mt-5 text-start'>Answer: {ans}</p>
                            </div>
                    )
                }
            </div>
        </div>
    );
};

export default Preview;