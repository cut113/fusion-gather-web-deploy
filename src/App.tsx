import Register from 'components/auth/Register'
import MainLayout from 'layouts/MainLayout'
import Blog from 'pages/blog/Blog'
import Home from 'pages/Home'
import UserController from 'pages/user/components/UserController/UserController'
import User from 'pages/user/components/Users/User'

import { BrowserRouter as Router, Route, Routes, useRoutes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const elements = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/blog',
      element: <Blog />
    },
    {
      path: '/user',
      element: <User />
    },
    {
      path: '/user/add',
      element: <UserController />
    },
    {
      path: '/user/:id',
      element: <UserController />
    },
    {
      path: '/register',
      element: <Register />
    }
  ])
  // <Router>
  //   <Routes>
  //     <Route path='/' element: <Home />} />
  //     <Route path='/blog' element={<Blog />} />
  //     <Route path='/user' element={<User />} />
  //     <Route path='/user/add' element={<AddUser />} />
  //   </Routes>
  // </Router>

  return (
    <div className='App'>
      <ToastContainer />
      <MainLayout>{elements}</MainLayout>
    </div>
  )
}

export default App
