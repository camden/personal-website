// @flow

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Linkify from 'react-linkify';
import Media from 'react-media';

import Date from 'components/Date';
import List from 'components/List';
import ListItem from 'components/ListItem';
import Text from 'components/Text';

import { dateFormatter } from 'utils';

const Project = styled.div`margin-bottom: 1rem;`;

const wrapSubtitle = (subtitle: string) => {
  return (
    <Media query="print">
      {matches =>
        matches
          ? <span>
              {subtitle}
            </span>
          : <Linkify properties={{ target: '_blank' }}>
              {subtitle}
            </Linkify>}
    </Media>
  );
};

const Projects = props => {
  const { content } = props;

  return (
    <div>
      <Text italic block style={{ marginBottom: '0.35rem' }}>
        {wrapSubtitle(content.subtitle)}
      </Text>
      {content.items.map(project => {
        return (
          <Project key={project.title}>
            <Date date={dateFormatter(project.dateFinished)}>
              <Text block bold contentTitle>
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
