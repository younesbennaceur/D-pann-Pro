import React from 'react'
import Hero from '../components/Hero'
import ServicesSection from '../components/Services'
import WhyChooseUs from '../components/WhyUs'
import Testimonials from '../components/Avis'


// Note: J'ai ajouté les IDs correspondants aux liens de ta navbar
export default function Home() {
  return (
    <div className="bg-gray-50">
      
        {/* Section Accueil (Haut de page) */}
        <section id="home">
            <Hero/>
        </section>
        

        {/* Section Nos Services */}
        <section id="services">
            <ServicesSection/>
        </section>

        {/* Section Pourquoi nous choisir ? */}
        <section id="whyus">
            <WhyChooseUs/>
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>
      
    </div>
  )
}