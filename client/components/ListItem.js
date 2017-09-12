// @flow

import React from 'react';

import Text from 'components/Text';

const ListItem = ({ children }) => {
  return (
    <Text block>
      <li>
        {children}
      </li>
    </Text>
  );
};

export default ListItem;
