import React from 'react';
import Goods from '../../../components/Goods/Goods';
import Header from '../../../components/Header/Header';

const UnlogedUser = props => {
  return (
    <div>
      <Header text={'Login'} link={'/login'} />
      <Goods state={props.state.goods} active="false" />
    </div>
  );
};
export default UnlogedUser;
