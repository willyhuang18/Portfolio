import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects" >
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id,image, title, description, tags, source,visit}) =>(
        <BlogCard key={id} >
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr /> 
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag,i)=>(
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList >
          <ExternalLinks href={visit}>View</ExternalLinks>
          <ExternalLinks href={source}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
    <Button onClick={() => window.location="https://github.com/willyhuang18"}>Learn More</Button>
  </Section>
);

export default Projects;