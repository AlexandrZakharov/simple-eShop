import React from 'react';
import Goods from '../../../components/Goods/Goods';

const UnlogedUser = props => {
  return (
    <div>
      <Goods state={props.state.goods} active="false" />
    </div>
  );
};
export default UnlogedUser;
