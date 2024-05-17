import { createContext, useState } from "react";

// Create context as DataContext
export const DataContext = createContext();

// Create context provider as DataProvider with props
const DataProvider = ({ children }) => {

    // State to store question data
    const [quesData, setQuesData] = useState([]);

    // Create function to store data as array of objects
    const addQuestion = (quesObject) => {
        setQuesData([...quesData, quesObject]);
    };

    return (
        // Wrap the children consumer with value
        <DataContext.Provider value={{ quesData, setQuesData, addQuestion }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;