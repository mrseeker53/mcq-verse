import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context/DataContext";
import axios from "axios";

const Preview = () => {
    // Use useContext to access quesData from DataContext
    const { quesData, setQuesData } = useContext(DataContext);

    // State to store fetched data
    const [data, setData] = useState([]);

    // Fetch data from the backend
    useEffect(() => {
        axios.get("http://localhost:3030")
        .then((res) => {
            setData(res.data);
            // update DataContext with fetched data
            setQuesData(res.data);
        })
        .catch((err) => console.error(err));
    }, []);

    return (
        <div className="bg-slate-600 py-20 px-0 md:px-24">
            <div className="container px-20">
                <div className="card w-full bg-slate-550 shadow-xl ml-1">
                    <p className="label-text text-slate-200 text-3xl pb-4">New Questions</p>
                    <hr className="mx-4 md:mx-64" />
                    {
                        // Check if data is available and not empty
                        data && data.length > 0 ? (
                            // Map over data to render each question
                            data.map((ques, index) =>
                                <div key={index} className="card-body pt-12">
                                    <h2 className="card-title pb-4">{ques.question}</h2>
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
            </div>
        </div>
    );
};

export default Preview;