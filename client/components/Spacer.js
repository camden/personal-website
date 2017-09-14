// @flow

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Space = styled.div`
  display: inline-block;
  margin: 0 ${props => (props.dot || props.large ? '0.8rem' : '0.2rem')};
`;

const Spacer = props => {
  const { dot, large } = props;
  return (
    <Space large={large} dot={dot}>
      {dot ? '·' : ''}
    </Space>
  );
};

Spacer.propTypes = {
  dot: PropTypes.bool,
  large: PropTypes.bool,
};

export default Spacer;
