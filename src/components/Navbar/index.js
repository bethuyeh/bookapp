import React from 'react'
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

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to='/'><h1>MAU</h1></NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars/>
                        </MobileIcon>                                        
                        <NavMenu>
                            <NavItem>
                                <NavLinks href='about'>About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks href='discover'>Discover</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks href='contact'>Contact</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks href='signup'>SignUp</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to='signin'>Sign In</NavBtnLink>
                        </NavBtn>
                </NavContainer>
            </Nav>  
        </>
    )
}

export default Navbar
