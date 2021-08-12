const express = require("express");
const app = express();

//run data_base
const db = require("./config/db");
db();
const body = require("body-parser");
app.use(express.json());

//run cors
const cors = require("cors");
app.use(cors());
 //run service
const service = require("./service/serviceRoute");
app.use("/Nass_X", service);
//run Réalisation
const Réalisation = require("./NosRéalisations/RéalisationRoute");
app.use("/Nass_X", Réalisation);
//run NosParcour
const NosParcour = require("./NosParcours/NosParcourRoute");
app.use("/Nass_X", NosParcour);
//run Partenaire
const Partenaire = require("./Partenaire/PartenaireRoute");
app.use("/Nass_X", Partenaire);
//run user
const user = require("./user/userRoute");
app.use("/Nass_X", user);
//run Témoignage
const Témoignage = require("./Témoignage/TémoignageRoute");
app.use("/Nass_X", Témoignage);
//run Actualité
const Actualité = require("./Actualités/ActualitéRoute");
app.use("/Nass_X", Actualité);

// config env file
const dotenv = require("dotenv");
dotenv.config();
//export PORT
const PORT = process.env.PORT;
//run server
app.listen(PORT, () => {
  try {
    console.log(`server run ${PORT}`);
  } catch (err) {
    console.log("error server");
  }
});
