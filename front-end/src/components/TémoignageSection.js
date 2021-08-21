import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTémoignages } from "../redux/Témoignage/actionTémoignage";

import "../App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const TémoignageSection = () => {
  //carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const témoignage = useSelector((state) => state.témoignageStore.témoignage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTémoignages());
  }, []);
  return (
    <div class="témoignage  ">
      <br/>
      <h1 className="temoignage-title text-center mt-2  ">Témoignage</h1>

      <div class="container mb-5">
        <div class="owl-carousel témoignages-carousel">
          <Slider {...settings} className="mt-5">
            {témoignage.map((el) => (
              <div class="témoignage-item me-5 " key={el._id}>
                <div class="témoignage-img">
                  <img src={el.userImage} alt="Image" />
                </div>
                <div class="témoignage-text">
                  <p>{el.comment} </p>
                  <h3>
                    {el.userName} {el.userLastName}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>

          <div class="témoignage-icon mb-5">
            <i class="fa fa-quote-left mt-5"></i>
          </div>
         </div>
      </div>
    </div>
  );
};

export default TémoignageSection;
