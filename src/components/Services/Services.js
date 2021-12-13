import React from 'react';
import Icon1 from '../../images/booklover.svg' 
import Icon2 from '../../images/creating.svg'
import Icon3 from '../../images/ideas.svg'
import { ServicesContainer,
         ServicesCard, 
         ServicesH1, 
         ServicesWrapper, 
         ServicesIcon, 
         ServicesH2, 
         ServicesP,   } from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Fictional Writing</ServicesH2>
                    <ServicesP>Become the author you dreamed you'd be by enrolling in our discounted 'become an author" courses</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Article Writing</ServicesH2>
                    <ServicesP>Become the editor you dreamed you'd be by enrolling in our discounted 'become an editor" courses</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Feature Writing</ServicesH2>
                    <ServicesP>Become the author you dreamed you'd be by enrolling in our discounted 'become an screenwriter" courses</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
