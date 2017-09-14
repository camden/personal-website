// @flow

import moment from 'moment';

export const dateFormatter = (date: string) => {
  console.log(date);
  if (!moment(date).isValid()) {
    return date;
  }

  return moment(date).format('MMM YYYY');
};
