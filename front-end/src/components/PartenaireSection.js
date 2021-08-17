import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPartenaires } from "../redux/NosPartenaires/actionPartenaires";
import "../App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Col } from "react-bootstrap";

const PartenaireSection = () => {
  //carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  //get All partenaires
  const partenaires = useSelector((state) => state.partenaireStore.partenaires);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPartenaires());
  }, []);

  return (
    <div className="partenaire-section">
     
      <br />
      <h1 className="partenaires-title text-center ">Partenaires</h1>

     <br/>

      <Container className="mt-1" >
        <Slider {...settings}>
          {partenaires.map((el) => (
            <Col className="mx-4">
              <img src={el.image} className="partenaire-images" />
            </Col>
          ))}
        </Slider>
      </Container>
      <br />
      <br />
      
    </div>
  );
};

export default PartenaireSection;
