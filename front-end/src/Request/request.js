import axios from "axios";
import {
  getAllServicesUrl,getAllRéalisationsUrl,getAllNosParcoursDesFormationsUrl,getAllPartenairesUrl
} from "./ApiUrls";

//                                       service requests

// getAllServices

export const fetchAllServices = () =>
  axios
    .get(getAllServicesUrl, {
      Accept: "application/json",
      "Content-Type": "application/json",
    })
    .then((res) => res.data);


    //                                Nos réalisations requests

// getAllServices

export const fetchAllRéalisations = () =>
  axios
    .get(getAllRéalisationsUrl, {
      Accept: "application/json",
      "Content-Type": "application/json",
    })
    .then((res) => res.data);


  //                                  Nos parcours des formations requests
  
 //getAllNosParcoursDesFormations 

 export const fetchAllParcours = () =>
  axios
    .get(getAllNosParcoursDesFormationsUrl, {
      Accept: "application/json",
      "Content-Type": "application/json",
    })
    .then((res) => res.data);


 //                                  Nos Partenaires requests
  
 //getAllPartenaires 

 export const fetchAllPartenaires = () =>
 axios
   .get(getAllPartenairesUrl, {
     Accept: "application/json",
     "Content-Type": "application/json",
   })
   .then((res) => res.data);