import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Forms from './components/Forms';
import FormsClass from './components/FormsClass'
import AboutUs from './components/AboutUs'

import { BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Switch>
      <Route path='/' element={<App />} />
      <Route path='/forms' element={<Forms />} />
      <Route path='/class' element={<FormsClass />} />
      <Route path='/about' element={<AboutUs />} />
    </Switch>
  </Router>
);


