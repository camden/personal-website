// @flow

import React from 'react';

import Resume from 'components/Resume';
import resume from 'assets/resume.json';

resume.basics.email = process.env.EMAIL_ADDRESS;
resume.basics.phone = process.env.PHONE_NUMBER;
resume.basics.location.address = process.env.LOCATION_ADDRESS;
resume.basics.location.postalCode = process.env.LOCATION_POSTAL_CODE;
resume.basics.location.city = process.env.LOCATION_CITY;
resume.basics.location.city = process.env.LOCATION_CITY;
resume.basics.location.region = process.env.LOCATION_REGION;
resume.basics.location.regionAbbrev = process.env.LOCATION_REGION_ABBREV;

const Main = () => {
  return <Resume resume={resume} />;
};

export default Main;
