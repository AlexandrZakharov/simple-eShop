import React from 'react';
import Container from '@material-ui/core/Container';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Goods from '../Goods/Goods';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/">
          <Header className="Header" />
          <Route path="//">
            <Container fixed>
              <Goods />
            </Container>
          </Route>
          <Route path="admin-goods">
            Admin Goods
          </Route>
        </Route>
        <Route path="/login">
          login
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
