import React from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import UnlogedUser from './pages/User/unloged';
import LogedUser from './pages/User/loged';

const App = props => {
  // // eslint-disable-next-line no-debugger
  // debugger;
  return (
    <BrowserRouter>
      <div className="App">
        <Header className="Header" />
        <Route
          exact
          path="/"
          render={() => <UnlogedUser state={props.state.goodsPage} />}
        />
        <Route
          path="/loged"
          render={() => <LogedUser state={props.state.goodsPage} />}
        />
      </div>
    </BrowserRouter>
  );
};


export default App;
