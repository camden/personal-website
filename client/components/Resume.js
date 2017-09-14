// @flow

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Education from 'components/sections/Education';
import Experience from 'components/sections/Experience';
import Footer from 'components/sections/Footer';
import Info from 'components/sections/Info';
import Projects from 'components/sections/Projects';
import Section from 'components/Section';
import Skills from 'components/sections/Skills';

import { resumeWithVariant } from 'utils';

const Wrapper = styled.div`margin: 1rem 2rem;`;

const Header = styled.div`display: flex;`;

const Title = styled.div`
  font-size: 35px;
  font-weight: bold;
`;

const Resume = props => {
  let { resume, variant } = props;
  resume = resumeWithVariant({ resume, variant });

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
      <Footer content={resume.footer} />
    </Wrapper>
  );
};

Resume.propTypes = {
  resume: PropTypes.object.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Resume;
