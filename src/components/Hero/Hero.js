import React from 'react';

import {
   Section,
   SectionText,
   SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
   <>
      <Section row nopadding>
         <LeftSection>
            <SectionTitle main center>
               Empower Your Digital <br /> Journey with Expert <br /> Web
               Services
            </SectionTitle>
            <SectionText>
               From concept to execution, my comprehensive web design and
               development services ensure you stay ahead in the digital
               landscape.
            </SectionText>
            <Button onClick={() => (window.location = '#about')}>
               Learn More
            </Button>
         </LeftSection>
      </Section>
   </>
);

export default Hero;
