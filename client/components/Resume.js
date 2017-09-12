// @flow

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Section from 'components/Section';
import Education from 'components/sections/Education';
import Experience from 'components/sections/Experience';
import Projects from 'components/sections/Projects';
import Skills from 'components/sections/Skills';
import Info from 'components/sections/Info';

const Wrapper = styled.div`margin: 1rem 2rem;`;

const Header = styled.div`display: flex;`;

const Title = styled.div`
  font-size: 35px;
  font-weight: bold;
`;

const Resume = props => {
  const { resume } = props;

  return (
    <Wrapper>
      <Header>
        <Title>
          {resume.basics.name}
        </Title>
        <Info content={resume.basics} />
      </Header>
      <Section
        title={'Education'}
        content={<Education content={resume.education[0]} />}
      />
      <Section title={'Skills'} content={<Skills content={resume.skills} />} />
      <Section
        title={'Experience'}
        content={<Experience content={resume.work} />}
      />
      <Section
        title={'Projects'}
        content={<Projects content={resume.projects} />}
      />
    </Wrapper>
  );
};

Resume.propTypes = {
  resume: PropTypes.object.isRequired,
};

export default Resume;
