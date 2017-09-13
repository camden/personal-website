// @flow

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Text from 'components/Text';

const Wrapper = styled.div`display: flex;`;

const ChildrenSection = styled.div`flex: 1;`;

const DateSection = styled.div`
  flex-shrink: 1;
  text-align: right;
`;

const Date = props => {
  const { children, date } = props;
  return (
    <Wrapper>
      <ChildrenSection>
        {children}
      </ChildrenSection>
      <DateSection>
        <Text block light>
          {date}
        </Text>
      </DateSection>
    </Wrapper>
  );
};

Date.propTypes = {
  children: PropTypes.node,
  date: PropTypes.string.isRequired,
};

export default Date;
