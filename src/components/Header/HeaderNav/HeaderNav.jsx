import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import style from './HeaderNav.module.scss';

const HeaderNav = props => (
  <div>
    <div className="root">
      <Button color="inherit">
        <Link to={props.link} className={style.link}>
          {props.text}
        </Link>
      </Button>
    </div>
  </div>
);

export default HeaderNav;