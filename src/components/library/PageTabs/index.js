// PageTabs Component:
// This is for listing out suggestions with an optional label in the front.
// Reference: https://www.dropbox.com/s/qvn6rohf52unkpv/Screenshot%202019-05-02%2017.19.11.png?dl=0

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// Styles
import PageTabsStyle from './styles.scss';

// Components
import Btn from 'components/library/Btn/';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Our nearby locations component
const PageTabs = ({
  List,
  Label,
  Location,
  BaseUrl,
  TextColor,
  Padding,
  Affix,
}) => {
  return (
    <PageTabsStyle className="page-tabs" Padding={Padding}>
      <ul>
        {List.map((item, index) => {
          // Creating slugs.
          const DestinationPath = Affix
            ? BaseUrl + item.slug + Affix
            : BaseUrl + item.slug;
          const LocationPath = Location.pathname;
          const LocationPathWithSlash = Location.pathname + '/';

          // Helper function to match our locations.
          function matchPath(destination, currentLocation) {
            // If location & destination match:
            if (destination == currentLocation) {
              let className = 'active';
              return className;
            } else {
              // Check and see if our destination matches without the
              // last `/` of the url. I.e. `locations/reno vs locations/reno/`
              if (destination == currentLocation.slice(0, -1)) {
                let className = 'active';
                return className;
              } else {
                // Then inactive:
                let className = 'inactive';
                return 'inactive';
              }
            }
          }

          // Return PageTabs.
          return (
            <li key={index}>
              <Btn
                AddClass={matchPath(DestinationPath, LocationPathWithSlash)}
                BgColor="none"
                Label={item.name}
                Destination={DestinationPath}
                TextColor={TextColor}
              />
            </li>
          );
        })}
      </ul>
    </PageTabsStyle>
  );
};

export default PageTabs;

//////////////////////////////////////////////////////////////////////
// End Component
