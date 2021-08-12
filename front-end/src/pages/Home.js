import React from 'react'
import AproposSection from '../components/AproposSection'
import DescriptionSection from '../components/descriptionSection'
import ServiceSection from '../components/ServiceSection'
import RéalisationSection from '../components/NosRéalisationsSection'
import NosParcour from '../components/NosParcoursDesFormationsSection'
import PartenaireSection from '../components/PartenaireSection'


const Home = () => {
    return (
        <div>
            <DescriptionSection/>
            <AproposSection/>
            <ServiceSection />
            <RéalisationSection />
            <NosParcour />
            <PartenaireSection />
        </div>
    )
}

export default Home
