// @flow

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Globe, Github, Mail, Phone, MapPin } from 'react-feather';

import config from 'config';
import Spacer from 'components/Spacer';
import Text from 'components/Text';

const Link = styled.a`text-decoration: none;`;

const Wrapper = styled.div`
  flex: 1;
  align-self: flex-end;

  text-align: left;

  @media print, (min-width: ${props => props.theme.media.desktop}) {
    text-align: right;
  }
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
        <Link href={`mailto:${content.email}`} target="_blank">
          <Text>
            {content.email}
          </Text>
        </Link>
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
        <Link href={content.profiles[0].url} target="_blank">
          <Text>
            {content.profiles[0].username}
          </Text>
        </Link>
        <Spacer dot />
        <Globe size={config.iconSize} />
        <Spacer />
        <Link href={content.profiles[1].url} target="_blank">
          <Text>
            {content.profiles[1].username}
          </Text>
        </Link>
      </div>
    </Wrapper>
  );
};

Info.propTypes = {
  content: PropTypes.object.isRequired,
};

export default Info;
