import React from "react";
import AproposSection from "../components/AproposSection";
import DescriptionSection from "../components/descriptionSection";
import ServiceSection from "../components/ServiceSection";
import RéalisationSection from "../components/NosRéalisationsSection";
import NosParcour from "../components/NosParcoursDesFormationsSection";
import PartenaireSection from "../components/PartenaireSection";
import '../App.css'
import TémoignageSection from "../components/TémoignageSection";
import Actualités from "../components/ActualitésSection.js";
const Home = () => {
  return (
    <div>
      <DescriptionSection />
      <AproposSection />
      <div className="slogon mt-5">
        Avec NassX, je réussis mon projet et je realise mes reves.
      </div>
      <ServiceSection />
      <RéalisationSection />
      <NosParcour />
      <PartenaireSection />
      <TémoignageSection  />
      <Actualités />
    </div>
  );
};

export default Home;
