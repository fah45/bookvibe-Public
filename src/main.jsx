/* eslint-disable no-unused-vars */
// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ListedBooks from './pages/ListedBooks.jsx'
import PagesRead from './pages/PagesRead.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import BookDetails from './pages/BookDetails.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Career from "./pages/Career.jsx"
import { Toaster } from 'react-hot-toast';
import MarkedRead from './components/MarkedRead.jsx'
import MarkedWish from './components/MarkedWish.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/pages.json'),
      },
      {
        path: '/listedBooks',
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index:true,
            element: <MarkedRead />,
          },
          {
            path : 'wish',
            element : <MarkedWish />
          }
        ]
      },
      {
        path: '/bookDetails/:bookId',
        element: <BookDetails></BookDetails>,
        loader: ({ params }) => fetch('/pages.json'),
      },
      {
        path: '/pagesRead',
        element: <PagesRead></PagesRead>,
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>,
      },
      {
        path: '/career',
        element: <Career></Career>,
      },
    ]
  },


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}></RouterProvider>
    <Toaster />
  </>,
)
