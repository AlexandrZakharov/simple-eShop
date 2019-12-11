import React from 'react';
import Goods from '../../../components/Goods/Goods';

const UnlogedUser = props => (
  <div>
    <Goods state={props.state.goods} active="true" price="1200" />
  </div>
);

export default UnlogedUser;
