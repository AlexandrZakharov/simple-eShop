import React from 'react';
import Goods from '../../../components/Goods/GoodsContainer';
import Header from '../../../components/Header/Header';

const UnlogedUser = props => (
  <div>
    <Header text={'Logout'} link={'/'} />
    <Goods active="true" price="1200" />
  </div>
);

export default UnlogedUser;
