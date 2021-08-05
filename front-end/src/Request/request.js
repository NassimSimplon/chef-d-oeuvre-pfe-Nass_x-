import axios from "axios";
import {
  getAllServicesUrl,getAllRéalisationsUrl
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


