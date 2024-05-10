import { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {

    const [quizData, setQuizData] = useState([]);

    const addQuestion = (question, option1, option2, option3, option4, ans) => {
        const newQuestion = {question, option1, option2, option3, option4, ans};
        setQuizData([...quizData, newQuestion]);
    };

    return (
        <DataContext.Provider value={{ quizData, addQuestion }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;