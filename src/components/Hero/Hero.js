import React  from 'react';
import { Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';
import Image from 'next/image'


const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/> Willy's Portfolio
      </SectionTitle>
      <SectionText>
      Full Stack Web Developer with a background in Behavioral Science and life-long dedication to learning. <br />
      Effective at combining creativity and problem solving to develop user-friendly applications.
      </SectionText>
      <Image src="/images/profile.png" 
      width="400"
      height="450"/>
    </LeftSection>
  </Section>
);

export default Hero;