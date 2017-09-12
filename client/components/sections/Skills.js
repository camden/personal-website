// @flow

import React from 'react';
import PropTypes from 'prop-types';

import Spacer from 'components/Spacer';
import Text from 'components/Text';

const Skills = props => {
  const { content } = props;

  return (
    <div>
      {content.map(skill => {
        return (
          <div key={skill.type}>
            <Text bold>
              {skill.type}:
            </Text>
            <Spacer />
            <Text>
              {skill.list}
            </Text>
          </div>
        );
      })}
    </div>
  );
};

Skills.propTypes = {
  content: PropTypes.array.isRequired,
};

export default Skills;
