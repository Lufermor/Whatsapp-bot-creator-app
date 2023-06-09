import logo from './logo.svg';
import React, { } from 'react';
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import ListUserPage from "./pages/ListUserPage";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";

function App() {
  return (
    <div className="vh-100 gradient-custom">
      <div className="container">
        <h1 className='page-header text-center'>Rreact-JS and Python Flask CRUD, Read, pdate and Delete MySql-Database</h1>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ListUserPage />} />
            <Route path='/addnewuser' element={<CreateUser />} />
            <Route path='user/:id/edit' element={<EditUser />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
  );
}

export default App;
