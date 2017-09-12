// @flow

import React from 'react';
import PropTypes from 'prop-types';

import Date from 'components/Date';
import Spacer from 'components/Spacer';
import Text from 'components/Text';

import { dateFormatter } from 'utils';

const Education = props => {
  const { content } = props;

  return (
    <div>
      <Date
        date={
          dateFormatter(content.startDate) +
          ' - ' +
          dateFormatter(content.endDate)
        }
      >
        <Text bold>
          {content.institution}
        </Text>
        <Spacer dot />
        <Text>
          {content.gpa}
        </Text>
      </Date>
      <Text block italic>
        {content.college}
      </Text>
      <div>
        <Text italic>
          {content.area}
        </Text>
        <Spacer dot />
        <Text italic>
          {content.subarea}
        </Text>
      </div>
      <div>
        <Text bold>Activities:</Text>
        <Spacer />
        <Text>
          {content.activities}
        </Text>
      </div>
      <div>
        <Text bold>Awards/Honors:</Text>
        <Spacer />
        <Text>
          {content.awards}
        </Text>
      </div>
    </div>
  );
};

Education.propTypes = {
  content: PropTypes.object.isRequired,
};

export default Education;