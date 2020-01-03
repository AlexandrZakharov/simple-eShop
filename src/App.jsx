import React from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import UnlogedUser from './pages/User/unloged';
import LogedUser from './pages/User/loged';
import UserListTable from './components/Table/index';
import SignIn from './components/signinForm';
import Register from './components/registerForm';

const App = props => {
  return (
    <BrowserRouter>
      <div className="App">  
        <Route
          exact
          path="/"
          render={() => <UnlogedUser state={props.state.goodsPage} />}
        />
        <Route
          path="/loged"
          render={() => <LogedUser state={props.state.goodsPage} />}
        />
        <Route path="/login" render={() => <SignIn />} />
        <Route path="/register" render={() => <Register />} />
        <Route
          path="/admin-panel"
          render={() => <UserListTable state={props.state.adminPanelPage.users} dispatch={props.dispatch} />}
        />
      </div>
    </BrowserRouter>
  );
};


export default App;
