import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Questions from "./components/Questions/Questions";
import AddQuestion from "./components/AddQuestion/AddQuestion";
import Layout from "./layout/Layout";
import NewQuestions from "./components/NewQuestions/NewQuestions";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/addquestion",
          element: <AddQuestion />,
        },
        {
          path: "/newquestion",
          element: <NewQuestions />,
        },
        {
          path: "/allquestions",
          element: <Questions />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
