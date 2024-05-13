import { createContext, useState } from "react";

// Create context as DataContext
export const DataContext = createContext();

// Create context provider as DataProvider with props
const DataProvider = ({ children }) => {

    const [quizData, setQuizData] = useState([]);

    const addQuestion = (question, option1, option2, option3, option4, ans) => {
        const newQuestion = { question, option1, option2, option3, option4, ans };
        setQuizData([...quizData, newQuestion]);
    };

    return (
        <DataContext.Provider value={{ quizData, addQuestion }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;