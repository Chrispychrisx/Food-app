import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home.jsx'
import About from './pages/About.jsx'
import Categories from './pages/Categories.jsx'
import CategoryDetail from './pages/CategoryDetail.jsx'
import ConfectioneryPage from './pages/ConfectioneryPage.jsx'
import Local from './pages/Local.jsx'
import Continental from './pages/Continental.jsx'
import Chinese from './pages/Chinese.jsx'
import Appetizer from './pages/Appetizer.jsx'
import Vegetarian from './pages/Vegetarian.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/home', element: <Home />},
  { path: '/about', element: <About />},
  { path: '/categories', element: <Categories />, 
    children: [
      { path: '/categories/:cate_id', element: <CategoryDetail />}
    ]
  },  

  {path: '/category', element: <App />,
    children: [
      { path: '/category/confectioneries', element: <ConfectioneryPage /> }
    ]
  },

    

  {path: '/category', element: <App />,
    children: [
      { path: '/category/local', element: <Local /> }
    ]
  },


  {path: '/category', element: <App />,
    children: [
      { path: '/category/continental', element: <Continental /> }
    ]
  },

  {path: '/category', element: <App />,
    children: [
      { path: '/category/chinese', element: <Chinese /> }
    ]
  },

  {path: '/category', element: <App />,
    children: [
      { path: '/category/appetizer', element: <Appetizer /> }
    ]
  },

  {path: '/category', element: <App />,
    children: [
      { path: '/category/vegetarian', element: <Vegetarian /> }
    ]
  }
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
