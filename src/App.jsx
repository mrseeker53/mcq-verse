import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Questions from './components/Questions/Questions';
import Add from './components/Add/Add';
import Layout from './layout/Layout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout></Layout>,
      children: [
        {
          path: '/', 
          element: <Home/>
        },
        {
          path: '/questions', 
          element: <Questions></Questions>
        },
        {
          path: '/add', 
          element: <Add></Add>
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
