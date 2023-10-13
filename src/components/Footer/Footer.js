import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Whatsapp</LinkTitle>
          <LinkItem href='tel:314-343-3432'>+880 1781721375</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:contact@jsmastery.com'>
            arfinhasib@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/ArfinHasib' target='_blank'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons
            href='https://www.linkedin.com/in/arfinhasib/'
            target='_blank'
          >
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <SocialIcons
            href='https://www.instagram.com/arfinhasib_/'
            target='_blank'
          >
            <AiFillInstagram size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
