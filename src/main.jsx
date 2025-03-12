import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home.jsx'
import About from './pages/About.jsx'
import Categories from './pages/Categories.jsx'
import CategoryDetail from './pages/CategoryDetail.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/home', element: <Home />},
  { path: '/about', element: <About />},
  { path: '/categories', element: <Categories />, 
    children: [
      { path: '/categories/:cate_id', element: <CategoryDetail />}
    ]
  },  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
