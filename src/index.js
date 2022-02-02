import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Home from './componets/Home'
import SignUp from './componets/Sign_up'
import Login from './componets/Login'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


ReactDOM.render(
  
  <Router>
          <div className="App">
          <Routes>


        <Route exact path="/profile/:id" element={ <Home/>}/>
        <Route exact path="/signup" element={<SignUp/>}/>
        <Route exact path="/login" element={<Login/>}/>


        </Routes>
        </div>
         </Router>,
  document.getElementById('root')
);


