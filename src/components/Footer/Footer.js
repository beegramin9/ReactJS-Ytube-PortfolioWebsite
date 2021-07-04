import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>Call
          <LinkItem href="tel:+82)10-7753-8276">+82)10-7753-8276</LinkItem>
        </LinkColumn>
        <LinkColumn>Email
          <LinkItem href="mailto:wontae.choi@inha.edu">mailto:wontae.choi@inha.edu</LinkItem>
        </LinkColumn>
      </LinkList>
        <SocialIconsContainer>
          <SocialContainer>
          <CompanyContainer>
            <Slogan>Innovating one project at a time</Slogan>
          </CompanyContainer>
          <SocialIcons href="https://github.com">
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://linkedin.com">
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://instagram.com">
            <AiFillInstagram size="3rem"/>
          </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>

    </FooterWrapper>
  );
};

export default Footer;
