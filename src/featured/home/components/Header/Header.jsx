import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { BrowserRouter, Route } from 'react-router-dom';
import style from './Header.module.scss';
import HeaderNav from './HeaderNav/HeaderNav';

const Header = () => {
  return (
    <div className={style.root}>
      <AppBar position="static" className={style.appbar}>
        <Container fixed>
          <Toolbar className={style.toolbar}>
            <Typography variant="h6" className={style.title}>
              e-Shop
            </Typography>
            <BrowserRouter>
              <Route path="/">
                <HeaderNav innerText="Login" />
              </Route>
            </BrowserRouter>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;
