import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './Header.scss';
import HeaderNav from './HeaderNav/HeaderNav';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => {

  return (
    <BrowserRouter>
      <div className="root">
        <AppBar position="static" className="appbar">
          <Container fixed>
            <Toolbar className="toolbar">
              <Typography variant="h6" className="title">
                e-Shop
              </Typography>
              <Route path='/' component={HeaderNav} />
              <Route path='/loged' component={HeaderNav} />
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </BrowserRouter>
  );
}

export default Header;
