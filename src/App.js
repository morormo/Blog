import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Route } from 'react-router-dom';

import './styles/bootstrap.scss';
import PostPage from './components/views/PostPage/PostPage';
import HomePage from './components/views/HomePage/HomePage';
// import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Route exact path='/' component={HomePage} />
        <Route path="/:post_id" component={PostPage} />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
