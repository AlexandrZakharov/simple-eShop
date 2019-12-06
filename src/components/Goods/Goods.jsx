import React from 'react';
import Grid from '@material-ui/core/Grid';
import style from './Goods.module.scss';
import Product from './Product/Product';
import { Container } from '@material-ui/core';


const Goods = () => {
  return (
    <Container>
      <div className={style.goods}>
        <div className={style.goodsWrapper}>
          <Grid container spacing={3}>
            <Grid item lg={3} md={6}>
              <Product />
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
};

export default Goods;
