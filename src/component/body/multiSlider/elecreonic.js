import React from "react"
import {Link} from "react-router-dom"
import "slick-carousel/slick/slick.css";        //import or copy this import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";    //import or copy this import "slick-carousel/slick/slick-theme.css"
import "./multi.css"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import Slider from "react-slick";

const Electronic=(props)=>{

  var settings = {}
  
  if(window.innerWidth<768){
    settings={
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow:2,
      slidesToScroll: 1,
    }
  }else{
    settings={
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow:4,
      slidesToScroll: 1,
    }
  }
  return(
    <div className="multislider ">
      <div className="text-center h2">Electronic Items</div>
       <Slider {...settings}>
      {props.multiSliderItem.map((arg,index ) => {
        return (
          <Card key={index} >
            <CardImg
            className="electricitem"
              top
              src={arg.photo}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button><Link to={`${arg.category}/${arg.productName}/${arg._id}`}>button</Link></Button>
            </CardBody>
          </Card>
        );
      })}
    </Slider>
    
    </div>
  )
}
export default Electronic