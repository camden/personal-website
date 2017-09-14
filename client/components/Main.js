// @flow

import React, { Component } from 'react';

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
resume.variants.uk.basics.phone = process.env.VARIANT_UK_PHONE_NUMBER;
resume.variants.uk.basics.location.city = process.env.VARIANT_UK_LOCATION_CITY;
resume.variants.uk.basics.location.regionAbbrev =
  process.env.VARIANT_UK_LOCATION_REGION_ABBREV;

class Main extends Component {
  constructor(props) {
    super(props);

    this.getVariantName = this.getVariantName.bind(this);
  }

  getVariantName() {
    return this.props.location.pathname.substring(1);
  }

  render() {
    return <Resume resume={resume} variant={this.getVariantName()} />;
  }
}

export default Main;
