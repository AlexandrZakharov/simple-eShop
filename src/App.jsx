import React from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import UnlogedUser from './pages/User/unloged';
import LogedUser from './pages/User/loged';

const App = props => (
  <BrowserRouter>
    <div className="App">
      <Header className="Header" />
      <Route
        exact
        path="/"
        render={() => <UnlogedUser data={props.state.goods} />}
      />
      <Route path="/loged" render={() => <LogedUser />} />
    </div>
  </BrowserRouter>
);


export default App;
