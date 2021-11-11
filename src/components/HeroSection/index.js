import React, {useState} from 'react';
import Video from '../../videos/Video.mp4';
import { Button } from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='Video/mp4' />
            </HeroBg>
             <HeroContent>
                <HeroH1>Welcome to Writing Made Easy</HeroH1>
                <HeroP>Sign Up for a discounted  offer today</HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' 
                    onMouseEnter={() => setHover(true)} 
                    onMouseLeave={() => setHover(false)}
                    primary='true'
                    dark='true'
                    >Get Started {hover ? <ArrowForward /> : <ArrowRight /> }</Button>
                </HeroBtnWrapper>
            </HeroContent> 
            
        </HeroContainer>
    )
}

export default HeroSection
