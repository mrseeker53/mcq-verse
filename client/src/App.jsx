import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Questions from "./components/Questions/Questions";
import AddQuestion from "./components/AddQuestion/AddQuestion";
import Layout from "./layout/Layout";
import UpdateQuestions from "./components/Questions/UpdateQuestions";

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
          path: "/add-question",
          element: <AddQuestion />,
        },
        {
          path: "/all-questions",
          element: <Questions />,
        },
        {
          path: "/update-questions",
          element: <UpdateQuestions/>,
        }
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
