import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Questions from './components/Questions/Questions';
import Add from './components/Add/Add';
import Layout from './layout/Layout';
import Preview from './components/Preview/Preview';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/addquestion',
          element: <Add />
        },
        {
          path: '/newquestion',
          element: <Preview />
        },
        {
          path: '/allquestions',
          element: <Questions />
        }
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App
