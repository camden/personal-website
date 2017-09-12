// @flow

import moment from 'moment';

export const dateFormatter = (date: string) => {
  if (!moment(date).isValid()) {
    return date;
  }

  return moment(date).format('MMM YYYY');
};
