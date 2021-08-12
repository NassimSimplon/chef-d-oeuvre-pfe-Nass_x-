 import React, { useEffect, useState } from "react";
 import { useDispatch, useSelector } from "react-redux";
  import {getAllPartenaires} from '../redux/NosPartenaires/actionPartenaires'
import '../App.css'
 import {Carousel,Row,Col} from 'react-bootstrap'


const PartenaireSection = () => {
  //get All partenaires
  const partenaires = useSelector((state) => state.partenaireStore.partenaires);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPartenaires());
  }, []);
   
 
    return (
 
      <div className="partenaire-section">
      <br/>
      <h1 className="partenaires-title text-center "> 
          Partenaires
      </h1>

<br/><br/> 

 
  
 


 


<Carousel>

<Row className="mb-5 " id="carousel">
{partenaires.map((el)=>(
  <Col md={2} >   <img  width="85%"
    alt=''
src={el.image}     /></Col> ))}  
   
</Row>
 


</Carousel>
    <br/><br/><br/><br/>
        </div>
    )
}

export default PartenaireSection
