import React from 'react';
import Grid from '@material-ui/core/Grid';
import style from './Goods.module.scss';
import Product from './Product/Product';


const Goods = () => {
  return (
    <div className={style.goods}>
      <div className={style.goodsWrapper}>
        <Grid container spacing={3}>
          <Grid item lg={3} md={6}>
            <Product />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Goods;
