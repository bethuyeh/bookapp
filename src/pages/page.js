import React, { useState } from 'react'
import Sidebar from '../components/SideBar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/Hero';
import InfoSection from '../components/InfoSection/Info';
import Services from '../components/Services/Services'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Footer from '../components/Footer/footer';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    };

    
    return (
        <>
         <Sidebar isOpen = {isOpen} toggle={toggle} />
         <Navbar toggle={toggle}/>  
         <HeroSection /> 
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services/>
            <InfoSection {...homeObjThree}/>
            <Footer />
        </>
    );
}

export default Home
