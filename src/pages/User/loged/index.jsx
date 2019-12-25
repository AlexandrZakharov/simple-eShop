import React from 'react';
import Goods from '../../../components/Goods/Goods';
import Header from '../../../components/Header/Header';

const UnlogedUser = props => (
  <div>
    <Header text={'Logout'} link={'/'} />
    <Goods state={props.state.goods} active="true" price="1200" />
  </div>
);

export default UnlogedUser;
