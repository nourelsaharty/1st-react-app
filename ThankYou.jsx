import React from 'react'
import"./ThankYou.css";
import Card from './Card';
import thankyouimg from "../media/illustration-thank-you.svg"; 

const ThankYou = ({rating}) => {
  return (
   <Card>
    <div className="thank_you_img_container">
        <img src={thankyouimg} alt="" />
    </div>
    <div className="selected">
        <p>You selected {rating} out of 5</p>
    </div>
    <h2 className="title">Thank You!</h2>
    <p className="text">We Appreciate You Taking The Time To Give A Rating, if you need more support dont hesitate</p>


   </Card>
  )
}

export default ThankYou