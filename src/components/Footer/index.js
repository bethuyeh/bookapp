import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FooterContainer, 
        FooterWrap,
        FooterLinksContainer,
        FooterLinksWrapper,
        FooterLinkItems,
        FooterLinkTitle,
        FooterLink
} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms of service</FooterLink>
                            
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms of service</FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms of service</FooterLink>
                            
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink href='/signin'>Instagram</FooterLink>
                                <FooterLink href='/signin'>Facebook</FooterLink>
                                <FooterLink href='/signin'>Twitter</FooterLink>
                                <FooterLink href='/signin'>LinkedIn</FooterLink>
                                <FooterLink href='/signin'>YouTube</FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            MAU
                        </SocialLogo>
                        <WebsiteRights>MAU © {new Date().getFullYear()}</WebsiteRights>
                        All rigths reserved.
                        <SocialIcons>
                            <SocialIconsLink href='/' target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconsLink>
                            <SocialIconsLink href='/' target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconsLink>
                            <SocialIconsLink href='/' target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconsLink>
                            <SocialIconsLink href='/' target="_blank" aria-label="YouTube">
                                <FaYoutube />
                            </SocialIconsLink>
                            <SocialIconsLink href='/' target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconsLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer

