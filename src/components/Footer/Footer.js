import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { ImProfile } from 'react-icons/im';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:111-111-1111'>111-111-1111</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mail:willyhuang18@gmail.com'>willyhuang18@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com'>
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href='https://docs.google.com/document/d/1Z-jNAnMSRSTQDyQoDGR_QHdMG9cQ_bRbIdnk12pur8M/edit?usp=sharing'>
          <ImProfile size="3rem" />
        </SocialIcons>
        <SocialIcons href='http://linkedin.com/in/pangta-huang-2b7b0117a'>
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
