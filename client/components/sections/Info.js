// @flow

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Globe, Github, Mail, Phone, MapPin } from 'react-feather';

import config from 'config';
import Spacer from 'components/Spacer';
import Text from 'components/Text';

const Wrapper = styled.div`
  flex: 1;
  align-self: flex-end;
  text-align: right;
`;

const Info = props => {
  const { content } = props;

  return (
    <Wrapper>
      <div>
        <MapPin size={config.iconSize} />
        <Spacer />
        <Text>
          {content.location.city}, {content.location.regionAbbrev}
        </Text>
        <Spacer dot />
        <Text>
          {content.availability}
        </Text>
      </div>
      <div>
        <Mail size={config.iconSize} />
        <Spacer />
        <Text>
          {content.email}
        </Text>
        <Spacer dot />
        <Phone size={config.iconSize} />
        <Spacer />
        <Text>
          {content.phone}
        </Text>
      </div>
      <div>
        <Github size={config.iconSize} />
        <Spacer />
        <Text>
          {content.profiles[0].username}
        </Text>
        <Spacer dot />
        <Globe size={config.iconSize} />
        <Spacer />
        <Text>
          {content.profiles[1].url}
        </Text>
      </div>
    </Wrapper>
  );
};

Info.propTypes = {
  content: PropTypes.object.isRequired,
};

export default Info;
