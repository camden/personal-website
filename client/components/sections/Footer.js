// @flow

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from 'components/Text';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Footer = props => {
  const { content } = props;
  return (
    <Wrapper>
      <Text>
        {content}
      </Text>
    </Wrapper>
  );
};

Footer.propTypes = {
  content: PropTypes.node.isRequired,
};

export default Footer;
