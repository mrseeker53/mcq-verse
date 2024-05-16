import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DataProvider from './components/Context/DataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

  // Wrap the context consumer with context Provider
    <DataProvider>
      <App />
    </DataProvider>
  // </React.StrictMode>,
)