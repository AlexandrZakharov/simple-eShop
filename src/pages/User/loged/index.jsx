import React from 'react';
import Goods from '../../../components/Goods/Goods';

const UnlogedUser = props => (
  <div>
    <Goods data={props.data} active="true" price="1200" />
  </div>
);

export default UnlogedUser;
