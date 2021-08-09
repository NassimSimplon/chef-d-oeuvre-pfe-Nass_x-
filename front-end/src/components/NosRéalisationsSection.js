import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRéalisations } from "../redux/NosRéalisations/actionsRéalisations";
 const RéalisationSection = () => {
  //get All réalisations
  const réalisation = useSelector(
    (state) => state.réalisationStore.réalisation
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRéalisations());
  }, []);
  return (
    <div className="mt-4"  id="realisationSectionImage">
      <div className="service" id="service">
        <div className="container mt-5">
          <div className="section-header text-center  "  >
            <p id="nos"> Nos</p>
            <h2 className="text-white">Réalisations</h2>
          </div>
          <div className="row d-flex justify-content-center mt-5">
            {réalisation.map((el) => (
              <div className="col-lg-4  justify-content-center ">
                <div className="service-item">
                  <div className="service-text" id="all-Réalisation">
                    <h3 className="Réalisation-attribute text-white"> {el.title}</h3>
                    <h3 className="mt-3 text-white"> {el.valeur}</h3>
                  </div>
                </div>
                <br/><br/>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default RéalisationSection;
