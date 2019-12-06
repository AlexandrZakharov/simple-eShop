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


const Product = (props) => {
  const [value, setValue] = React.useState(4);

  return (
    <div className={style.product}>
      <Card className={style.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={props.name}
            height="300"
            image={props.img}
            title={props.name}
            className={style.imgWrapper}
          />
          <CardContent>
            <Rating name="read-only" value={value} readOnly />
            <Typography gutterBottom>{props.name}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
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