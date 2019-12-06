import React from 'react';
import Goods from '../../../components/Goods/Goods';

const UnlogedUser = props => (
  <div>
    <Goods data={props.data} />
  </div>
);

export default UnlogedUser;
