/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import style from './Product.module.scss';


const Product = () => {
  const [value, setValue] = React.useState(4);

  return (
    <div className={style.product}>
      <Card className={style.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="500"
            image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5801/5801312_sd.jpg"
            title="Contemplative Reptile"
            className={style.imgWrapper}
          />
          <CardContent>
            <Rating name="read-only" value={value} readOnly />
            <Typography gutterBottom>
              iPhone XR 64GB - Black (Sprint)
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Phone XR features the most advanced LCD in a smartphone - a
              6.1-inch Liquid Retina display with industry-leading color
              accuracy and an innovative backlight design that allows the screen
              to stretch into the corners¹. Six stunning new finishes.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button fullWidth variant="outlined" color="primary">
            Add to shoping cart
          </Button>
        </CardActions>
      </Card>
      
    </div>
  );
};

export default Product;