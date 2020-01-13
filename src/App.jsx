import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import UnlogedUser from './pages/User/unloged';
import LogedUser from './pages/User/loged';
import UserListTable from './components/Table/Container';
import SignIn from './components/signinForm/SignInContainer';
import Register from './components/registerForm';

const App = props => {
  return (
    <div className="App">  
      <Route
        exact
        path="/"
        render={() => <UnlogedUser />}
      />
      <Route
        path="/loged"
        render={() => <LogedUser />}
      />
      <Route path="/login" render={() => <SignIn />} />
      <Route path="/register" render={() => <Register />} />
      <Route
        path="/admin-panel"
        render={() => <UserListTable />}
      />
    </div>
  );
};


export default App;
