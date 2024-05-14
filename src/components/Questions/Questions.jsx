import React from 'react';
import quizData from '../../assets/data.json';
import Question from './Question';

const Questions = () => {

    // const [data, setData] = useState([]);
    
    return (
        <div className='bg-slate-600 py-20 px-0 md:px-24'>
            <div className="container px-20">
                <span className='label-text text-slate-200 text-3xl'>All Questions</span>
                <hr className='mt-4 mx-20 md:mx-80' />
                {quizData && quizData.length ? quizData.map(quiz =>
                    <Question
                    key={quiz.id}
                    quiz={quiz}
                    ></Question>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default Questions;