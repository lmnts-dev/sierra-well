// SuggestionList Component:
// This is for listing out suggestions with an optional label in the front.
// Reference: https://www.dropbox.com/s/qvn6rohf52unkpv/Screenshot%202019-05-02%2017.19.11.png?dl=0

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// Styles
import SuggestionListStyle from './styles.scss';

// Components
import Btn from 'components/library/Btn/';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Our nearby locations component
const SuggestionList = ({
  List,
  Label,
  BaseUrl,
  TextColor,
  GradientColor,
  Padding,
  Affix,
}) => (
  <SuggestionListStyle
    className="suggestion-list"
    GradientColor={GradientColor}
    Padding={Padding}
  >
    <ul>
      {Label ? <li>{Label}</li> : null}
      {List.map((item, index) => (
        <li key={index}>
          <Btn
            BgColor="none"
            Label={item.name}
            Destination={
              Affix ? BaseUrl + item.slug + Affix : BaseUrl + item.slug
            }
            TextColor={TextColor}
          />
        </li>
      ))}
    </ul>
  </SuggestionListStyle>
);

export default SuggestionList;

//////////////////////////////////////////////////////////////////////
// End Component
