import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import style from './HeaderNav.module.scss';

const HeaderNav = props => {
  return (
    <div>
      <div>
        <Button color="inherit">
          <Link to="/login" className={style.link}>{props.innerText}</Link>
        </Button>
      </div>
    </div>
  )
}

export default HeaderNav;