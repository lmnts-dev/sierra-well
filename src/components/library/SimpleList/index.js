// SimpleListComponent:
// The SimpleList component.
// Example: https://www.dropbox.com/s/620exg22uz5bkyy/Screenshot%202019-05-06%2016.24.58.png?dl=0

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import Icon from 'elements/Icons';

// Styles
import SimpleListStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const SimpleList = ({ List, TextColor }) => (
  <SimpleListStyle className="simple-list" TextColor={TextColor}>
    <SimpleListStyle.List TextColor={TextColor}>
      {List.map((item, index) => {
        return (
          <SimpleListStyle.Item key={index}>
            <span>{item.Label}</span>
            <span>{item.Data}</span>
          </SimpleListStyle.Item>
        );
      })}
    </SimpleListStyle.List>
  </SimpleListStyle>
);

export default SimpleList;

//////////////////////////////////////////////////////////////////////
// End Component
