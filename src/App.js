import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './components/views/HomePage/HomePage';

import './styles/bootstrap.scss';
// import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Route exact path ="/post/:id" component={HomePage}></Route>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
