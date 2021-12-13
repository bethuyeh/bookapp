import React, {useState, useEffect} from 'react'
import { animateScroll as scroll} from 'react-scroll'
import {Nav, 
        NavContainer, 
        NavLogo, 
        MobileIcon, 
        NavMenu, 
        NavItem, 
        NavLinks,
        NavBtn,
        NavBtnLink
    } from './NavElements'
import {FaBars} from 'react-icons/fa' 
import { IconContext } from 'react-icons/lib'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY>=80){
            setScrollNav(true)
        } else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
        
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavContainer>
                    <NavLogo to='/' onClick={toggleHome}><h1>MAU</h1></NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars/>
                        </MobileIcon>                                        
                        <NavMenu>
                            <NavItem>
                                <NavLinks 
                                to= "about" 
                                smooth= "true" 
                                duration={500}  
                                exact= "true" 
                                offset={-80}
                                activeclass="active"
                                >About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                to= "discover" 
                                smooth= "true" 
                                duration={500}  
                                exact= "true" 
                                offset={-80}
                                activeclass="active"
                                >Discover</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                to= "services" 
                                smooth= "true" 
                                duration={500} 
                                exact= "true" 
                                offset={-80}
                                activeclass="active"
                                >Services</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                to= "signup" 
                                smooth= "true" 
                                duration={500}
                                exact= "true"
                                offset={-80}
                                activeclass="active"
                                >SignUp</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink
                                to= "/signin"
                                smooth= "true" 
                                duration={500}  
                                exact= "true"
                                offset={-80}
                                activeclass="active"
                            >Sign In</NavBtnLink>
                        </NavBtn>
                </NavContainer>
            </Nav>  
            </IconContext.Provider>
        </>
    )
}

export default Navbar