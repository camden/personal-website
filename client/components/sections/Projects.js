// @flow

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Date from 'components/Date';
import List from 'components/List';
import ListItem from 'components/ListItem';
import Text from 'components/Text';

import { dateFormatter } from 'utils';

const Project = styled.div`margin-bottom: 1rem;`;

const Projects = props => {
  const { content } = props;

  return (
    <div>
      <Text italic block style={{ marginBottom: '0.25rem' }}>
        {content.subtitle}
      </Text>
      {content.items.map(project => {
        return (
          <Project key={project.company}>
            <Date date={dateFormatter(project.dateFinished)}>
              <Text block bold>
                {project.title}
              </Text>
            </Date>
            <Text block>
              {project.summary}
            </Text>
            <List>
              {project.highlights.map(highlight => {
                return (
                  <ListItem key={highlight}>
                    {highlight}
                  </ListItem>
                );
              })}
            </List>
          </Project>
        );
      })}
    </div>
  );
};

Projects.propTypes = {
  content: PropTypes.object.isRequired,
};

export default Projects;
