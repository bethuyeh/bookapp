import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FooterContainer, 
        FooterWrap,
        FooterLinksContainer,
        FooterLinksWrapper,
        FooterLinkItems,
        FooterLinkTitle,
        FooterLink,
        SocialMedia,
        SocialMediaWrap,
        SocialIcons,
        SocialIconsLink,
        WebsiteRights,
        SocialLogo
} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink >How it works</FooterLink>
                                <FooterLink >Testimonials</FooterLink>
                                <FooterLink >Careers</FooterLink>
                                <FooterLink >Investors</FooterLink>
                                <FooterLink >Terms of service</FooterLink>
                            
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink >How it works</FooterLink>
                                <FooterLink >Testimonials</FooterLink>
                                <FooterLink >Careers</FooterLink>
                                <FooterLink >Investors</FooterLink>
                                <FooterLink>Terms of service</FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink >How it works</FooterLink>
                                <FooterLink>Testimonials</FooterLink>
                                <FooterLink>Careers</FooterLink>
                                <FooterLink>Investors</FooterLink>
                                <FooterLink>Terms of service</FooterLink>
                            
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink >Instagram</FooterLink>
                                <FooterLink >Facebook</FooterLink>
                                <FooterLink >Twitter</FooterLink>
                                <FooterLink >LinkedIn</FooterLink>
                                <FooterLink >YouTube</FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo >
                            MAU
                        </SocialLogo>
                        <WebsiteRights>MAU © {new Date().getFullYear()}</WebsiteRights>
                        All rigths reserved.
                        <SocialIcons>
                            <SocialIconsLink  target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconsLink>
                            <SocialIconsLink  target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconsLink>
                            <SocialIconsLink  target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconsLink>
                            <SocialIconsLink  target="_blank" aria-label="YouTube">
                                <FaYoutube />
                            </SocialIconsLink>
                            <SocialIconsLink  target="_blank" aria-label="LinkedIn">
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

