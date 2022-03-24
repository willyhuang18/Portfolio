import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/> Willy's Portfolio
      </SectionTitle>
      <SectionText>
        I am Full-Stack Developer
      </SectionText>
      <Button onClick={() => window.location="https://github.com/willyhuang18"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;