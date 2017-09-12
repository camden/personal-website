// @flow

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin: 0.5rem 0;

  display: flex;
`;

const Title = styled.div`
  color: palevioletred;
  text-transform: uppercase;
  font-weight: bold;
  flex-basis: 9rem;
  flex-shrink: 0;
`;

const Content = styled.div`flex: 1;`;

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
