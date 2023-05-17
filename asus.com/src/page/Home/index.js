import React from 'react'
import Navbar from '../../components/Navbar'
import MainSlider from '../../components/Homecomponents/MainSlider'
import StoriesCard from '../../components/Homecomponents/StoriesCard'
import ActionCard from '../../components/Homecomponents/ActionCard'
import UniverseSec from '../../components/Homecomponents/UniverseSec'
import Footer from '../../components/Footer'
function Home() {
  return (
    <>
    <Navbar/>
    <MainSlider/>
    <StoriesCard/>
    <ActionCard/>
    <UniverseSec/>
    <Footer/>
    </>
  )
}

export default Home