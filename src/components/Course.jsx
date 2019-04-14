import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Course = props => {
  return (
    <div>
      {props.myReactShop ? (
        <Card>
          <CardMedia
            style={{ height: "0", padding: "56.25%" }}
            image={props.myReactShop.fields.productImage.fields.file.url}
            title={props.myReactShop.fields.products}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {props.myReactShop.fields.products}
            </Typography>

            <Typography component="p">
              {props.myReactShop.fields.productDescription}
            </Typography>
            <p>price</p>
            <h3>£{props.myReactShop.fields.productPrice}</h3>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Click Here
            </Button>
          </CardActions>
        </Card>
      ) : (
        <div>Something whrnt wrong</div>
      )}
    </div>
  );
};

export default Course;
