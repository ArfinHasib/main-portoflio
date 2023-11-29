import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import {
   Section,
   SectionDivider,
   SectionText,
   SectionTitle,
} from '../../styles/GlobalComponents';
import {
   List,
   ListContainer,
   ListItem,
   ListParagraph,
   ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
   <Section id='tech'>
      <SectionDivider divider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
         I've worked with a range a technologies in the web development world.
         From Front-end To UI & Visual Design
      </SectionText>
      <List>
         <ListItem>
            <picture>
               <DiReact size='3rem' />
            </picture>
            <ListContainer>
               <ListTitle>Front-End</ListTitle>
               <ListParagraph>
                  Experiece with <br />
                  TypeScript, React.js and Next Js
               </ListParagraph>
            </ListContainer>
         </ListItem>
         <ListItem>
            <picture>
               <DiFirebase size='3rem' />
            </picture>
            <ListContainer>
               <ListTitle>CMS Builders</ListTitle>
               <ListParagraph>
                  Experience with <br />
                  Webflow and Wordpress
               </ListParagraph>
            </ListContainer>
         </ListItem>
         <ListItem>
            <picture>
               <DiZend size='3rem' />
            </picture>
            <ListContainer>
               <ListTitle>UI/UX</ListTitle>
               <ListParagraph>
                  Experience with UI Design principals <br />& tools like Figma,
                  Adobe XD & Sketch
               </ListParagraph>
            </ListContainer>
         </ListItem>
      </List>
      <SectionDivider colorAlt />
   </Section>
);

export default Technologies;
