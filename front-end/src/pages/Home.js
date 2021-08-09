import React from 'react'
import AboutSection from '../components/AboutSection'
import DescriptionSection from '../components/descriptionSection'
import ServiceSection from '../components/ServiceSection'
import RéalisationSection from '../components/NosRéalisationsSection'
import NosParcour from '../components/NosParcoursDesFormationsSection'


const Home = () => {
    return (
        <div>
            <DescriptionSection/>
            <AboutSection/>
            <ServiceSection />
            <RéalisationSection />
            <NosParcour />
        </div>
    )
}

export default Home
