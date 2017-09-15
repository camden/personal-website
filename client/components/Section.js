// @flow

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin: 0.5rem 0;

  display: flex;

  flex-wrap: wrap;

  @media print or (min-width: ${props => props.theme.media.desktop}) {
    flex-wrap: nowrap;
  }
`;

const Title = styled.div`
  color: #ff5252;
  text-transform: uppercase;
  flex-basis: 9rem;

  @media print {
    color: #ff5252;
  }
`;

const Content = styled.div`
  flex-basis: 100%;

  @media print, (min-width: ${props => props.theme.media.desktop}) {
    flex: 1;
  }
`;

const Section = props => {
  const { title, content } = props;

  return (
    <Wrapper>
      <Title>
        {title}
      </Title>
      <Content>
        {content}
      </Content>
    </Wrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default Section;
