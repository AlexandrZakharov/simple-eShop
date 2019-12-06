import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import style from './Goods.module.scss';
import Product from './Product/Product';


const Goods = props => {
  const products = props.data.map((product, i) => (
    <Grid item lg={3} md={6}>
      <Product
        key={i}
        img={product.img[0]}
        name={product.name}
        description={product.description}
        active={props.active}
        stars={0}
      />
    </Grid>
  ));

  return (
    <Container>
      <div className={style.goods}>
        <div className={style.goodsWrapper}>
          <Grid container spacing={3}>
            {products}
          </Grid>
        </div>
      </div>
    </Container>
  );
};

export default Goods;
