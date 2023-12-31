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
               Transform Your Vision <br /> into a Captivating Online Experience
            </SectionTitle>
            <SectionText>
               Expert web design and development that empowers your brand and
               engages your audience.
            </SectionText>
            <Button onClick={() => (window.location = '#about')}>
               Learn More
            </Button>
         </LeftSection>
      </Section>
   </>
);

export default Hero;
