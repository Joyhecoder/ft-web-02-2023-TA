import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BaseLayout from './components/layout/BaseLayout'
import Counter from './components/Counter'
import ProjectManagement from './components/ProjectManagement'

import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <BaseLayout>
      <Switch>
        <Route path='/' element={<App />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/project' element={<ProjectManagement />} />
      </Switch>
    </BaseLayout>
  </Router>
);


