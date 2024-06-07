import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import AllQuestions from "./components/Questions/AllQuestions/AllQuestions";
import AddQuestion from "./components/AddQuestion/AddQuestion";
import Layout from "./layout/Layout";
import UpdateQuestions from "./components/Questions/UpdateQuestions/UpdateQuestions";
import { Toaster } from "react-hot-toast";

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
          element: <AllQuestions />,
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
      <Toaster></Toaster>
    </div>
  );
}

export default App;
