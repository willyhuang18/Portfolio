import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { ImProfile } from 'react-icons/im';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color:"white", marginBottom: "20"}}>
        <ImProfile size="3rem" color='#231251' /> <Span> Portfolio</Span>
        </a>
      </Link>
    </Div1>
      <Div2>
      <li>
      <Link href=""> 
      <NavLink>Projects</NavLink>
      </Link>    
      </li>
      <li>
        <Link href="#tech">
          <NavLink> Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#About">
          <NavLink> About</NavLink>
        </Link>
      </li>
      </Div2>
      <Div3 >
        <SocialIcons href='https://github.com'>
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href='https://docs.google.com/document/d/1Z-jNAnMSRSTQDyQoDGR_QHdMG9cQ_bRbIdnk12pur8M/edit?usp=sharing'>
          <ImProfile size="3rem" />
        </SocialIcons>
        <SocialIcons href='http://linkedin.com/in/pangta-huang-2b7b0117a'>
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Div3>
  </Container>
);

export default Header;
