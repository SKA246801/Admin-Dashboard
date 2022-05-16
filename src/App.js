import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import List from './Pages/List/List'
import Single from './Pages/Single/Single'
import Create from './Pages/Create/Create'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='users'>
              <Route index element={<List />} />
              <Route path=':userId' element={<Single />} />
              <Route path='create' element={<Create />} />
            </Route>
            <Route path='product'>
              <Route index element={<List />} />
              <Route path=':productId' element={<Single />} />
              <Route path='create' element={<Create />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
