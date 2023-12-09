import React, { useState } from 'react'
import Card from "../components/Card";
import "./Rating.css";
import starImg from '../media/icon-star.svg'
const Rating = ({rating,setRating,setShowThankYouPage}) => {
  const [activeRatings, setActiveRatings]=useState({
    oneStar: true,
    twoStars: false,
    threeStars: false,
    fourStars: false,
    fiveStars: false,
  });
  const handleSubmit=() =>{
    if(!rating) return;
    setShowThankYouPage(true);
  }
  return (
    <Card>
        <div className="star_img_container">
            <img src={starImg} alt="" />
        </div>
        <h2 className="title">How Did We DO?</h2>
        <p className="text">Please Let Us Know How We did With Your Support Request.
        Appreciated to help us Improve Our Offering!</p>
        <div className="rating">
            <div className={activeRatings.oneStar ? "rating_container active" : "rating_container"}
            onClick={()=>{
              setActiveRatings({
                oneStar: true,
               twoStars: false,
               threeStars: false,
               fourStars: false,
               fiveStars: false,

              })
              setRating(1)
            }}>1</div>
            <div className={activeRatings.twoStarsStar ? "rating_container active" : "rating_container"}
            onClick={()=>{
              setActiveRatings({
                oneStar: false,
               twoStars: true,
               threeStars: false,
               fourStars: false,
               fiveStars: false,

              })
              setRating(2)
            }}>2</div>
            <div className={activeRatings.threeStars ? "rating_container active" : "rating_container"}
            onClick={()=>{
              setActiveRatings({
                oneStar: false,
               twoStars: false,
               threeStars: true,
               fourStars: false,
               fiveStars: false,

              })
              setRating(3)
            }}>3</div>
            <div className={activeRatings.fourStars ? "rating_container active" : "rating_container"}
            onClick={()=>{
              setActiveRatings({
                oneStar: false,
               twoStars: false,
               threeStars: false,
               fourStars: true,
               fiveStars: false,

              })
              setRating(4)
            }}>4</div>
            <div className={activeRatings.fiveStars ? "rating_container active" : "rating_container"}
            onClick={()=>{
              setActiveRatings({
                oneStar: false,
               twoStars: false,
               threeStars: false,
               fourStars: false,
               fiveStars: true,

              })
              setRating(5)
            }}>5</div>
        </div>
        <button className="submit_btn" onClick={handleSubmit}>Submit</button>


    </Card>
  )
}

export default Rating