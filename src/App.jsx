import React from 'react';
import Container from '@material-ui/core/Container';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import UnlogedUser from './pages/User/unloged';

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Header className="Header" />
      </BrowserRouter>

      {/* <Route path="/" component={Goods} />

        <Route path="/login">
          login
        </Route> */}

      <UnlogedUser />
    </div>
  );
}

export default App;
