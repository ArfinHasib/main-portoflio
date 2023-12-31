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
               FrontEnd Developer <br />
               UI/UX Designer
            </SectionTitle>
            <SectionText>
               Hello! I'm Arfin Hasib. A frontend Developer and UI/UX Designer.
               Ready to help you out with your next big web development and
               UI/UX Design project for mobile and web.
            </SectionText>
            <Button onClick={() => (window.location = '#about')}>
               Learn More
            </Button>
         </LeftSection>
      </Section>
   </>
);

export default Hero;
