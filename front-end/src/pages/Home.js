import React from 'react'
import AboutSection from '../components/AboutSection'
import DescriptionSection from '../components/descriptionSection'
import ServiceSection from '../components/ServiceSection'

const Home = () => {
    return (
        <div>
            <DescriptionSection/>
            <AboutSection/>
            <ServiceSection />
        </div>
    )
}

export default Home
