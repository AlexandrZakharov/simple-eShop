import React from 'react';
import Goods from '../../../components/Goods/GoodsContainer';
import Header from '../../../components/Header/Header';

const UnlogedUser = props => {
  return (
    <div>
      <Header text={'Login'} link={'/login'} />
      <Goods active="false" />
    </div>
  );
};
export default UnlogedUser;
