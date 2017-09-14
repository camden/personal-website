// @flow

import moment from 'moment';
import merge from 'deepmerge';

export const dateFormatter = (date: string) => {
  if (!date) {
    return date;
  }

  if (!moment(date).isValid()) {
    return date;
  }

  return moment(date).format('MMM YYYY');
};

export const resumeWithVariant = ({
  resume,
  variant,
}: {
  resume: Object,
  variant: string,
}): Object => {
  if (!resume.variants[variant]) {
    return resume;
  }

  return merge(resume, resume.variants[variant]);
};
