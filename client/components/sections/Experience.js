// @flow

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Date from 'components/Date';
import List from 'components/List';
import ListItem from 'components/ListItem';
import Spacer from 'components/Spacer';
import Text from 'components/Text';

import { dateFormatter } from 'utils';

const Work = styled.div`margin-bottom: 1rem;`;

const Experience = props => {
  const { content } = props;

  return (
    <div>
      {content.map(work => {
        return (
          <Work key={work.company}>
            <Date
              date={
                dateFormatter(work.startDate) +
                ' - ' +
                dateFormatter(work.endDate)
              }
            >
              <Text bold>
                {work.company}
              </Text>
              <Spacer />
              <Text italic>
                {work.position}
              </Text>
            </Date>
            <Text block>
              {work.summary}
            </Text>
            <List>
              {work.highlights.map(highlight => {
                return (
                  <ListItem key={highlight}>
                    {highlight}
                  </ListItem>
                );
              })}
            </List>
          </Work>
        );
      })}
    </div>
  );
};

Experience.propTypes = {
  content: PropTypes.array.isRequired,
};

export default Experience;
