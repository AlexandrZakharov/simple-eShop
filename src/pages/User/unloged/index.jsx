import React from 'react';
import Goods from '../../../components/Goods/Goods';

const UnlogedUser = props => (
  <div>
    <Goods data={props.data} active="false" />
  </div>
);

export default UnlogedUser;
