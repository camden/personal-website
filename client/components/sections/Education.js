// @flow

import React from 'react';
import PropTypes from 'prop-types';

import Date from 'components/Date';
import Spacer from 'components/Spacer';
import Text from 'components/Text';

import { dateFormatter } from 'utils';

const Institution = props => {
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
        <Text bold contentTitle>
          {content.institution}
        </Text>
        <Spacer dot />
        <Text>
          GPA: {content.gpa}
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
      <div>
        <Text bold>Highlights:</Text>
        <Spacer />
        <Text>
          {content.highlights}
        </Text>
      </div>
    </div>
  );
};

const Education = props => {
  const { content } = props;

  return (
    <div>
      {content.map(institution => {
        return (
          <Institution content={institution} key={institution.institution} />
        );
      })}
    </div>
  );
};

Education.propTypes = {
  content: PropTypes.array.isRequired,
};

export default Education;
