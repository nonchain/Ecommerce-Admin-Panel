import React from 'react';
import Home from './pages/home/Home';
import { Routes, Route, Link } from "react-router-dom";
import Login from './pages/login/Login';
import List from './pages/list/List';
import New from './pages/new/New';
import Single from './pages/single/Single';
import Page404 from './pages/error404/Page404';

function App() {
  return (
    <div>
      {/* <nav>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/login'}>Login</Link>
          </li>
          <li>
            <Link to={'/list'}>List</Link>
          </li>
          <li>
            <Link to={'/new'}>New</Link>
          </li>
          <li>
            <Link to={'/single'}>Single</Link>
          </li>
        </ul>
      </nav> */}

      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          {/*----- USER -----*/}
          <Route path='users'>
            <Route index element={<List />} />
            <Route path='new' element={<New />} />
            <Route path=':userId' element={<Single />} />
          </Route>
          {/*----- PRODUCT -----*/}
          <Route path='product'>
            <Route index element={<List />} />
            <Route path='new' element={<New />} />
            <Route path=':productId' element={<Single />} />
          </Route>
          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App
