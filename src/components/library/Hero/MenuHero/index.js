// MenuHero Component:
// This is the specialize hero for the Menu page.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// Styles
import {
  MenuHeroStyle,
  CollapseButtonStyle,
  HeroInnerTransition,
  SidebarLocationStyle,
} from './styles.scss';

// Data
import { StaticQuery, graphql } from 'gatsby';

// Helpers
import { HeroContent } from './../../Hero';

// Components
import MenuHeroPromotions from './MenuHeroPromotions';
import Block from 'components/library/Block';
import SuggestionList from 'components/library/SuggestionList';
import Btn from 'components/library/Btn/';
import AwardHours from 'components/library/AwardHours';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Our list of locations in relation to the State.
class LocationList extends React.Component {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);
  }

  // Render
  render() {
    const currentLocation = this.props.LocationData.name;
    const OrderContextSlug = this.props.OrderContextSlug
      ? this.props.OrderContextSlug
      : '';

    return (
      <StaticQuery
        query={graphql`
          query {
            allPrismicLocation {
              edges {
                node {
                  id
                  uid
                  data {
                    name {
                      text
                    }
                    geo_state
                    geo_city
                    geo_country
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <>
            {data.allPrismicLocation.edges.map((location, index) => {
              if (location.node.name == currentLocation) {
                return (
                  <Link
                    className="active"
                    to={
                      '/menu/' +
                      OrderContextSlug +
                      location.node.data.geo_state.toLowerCase() +
                      '/' +
                      location.node.uid
                    }
                    key={index}
                  >
                    {location.node.data.name.text}
                  </Link>
                );
              } else {
                return (
                  <Link
                    to={
                      '/menu/' +
                      OrderContextSlug +
                      location.node.data.geo_state.toLowerCase() +
                      '/' +
                      location.node.uid
                    }
                    key={index}
                  >
                    {location.node.data.name.text}
                  </Link>
                );
              }
            })}
          </>
        )}
      />
    );
  }
}

// Sidebar location switching
const SidebarLocation = ({ LocationData, collapsedState, State }) => (
  <SidebarLocationStyle collapsedState={collapsedState}>
    <LocationList LocationData={LocationData} />
  </SidebarLocationStyle>
);

// Our button to collapse the hero to show a larger menu.
class CollapseButton extends React.Component {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);
  }

  render() {
    // If the menu isn't collapsed...
    if (this.props.collapsedState == false) {
      return (
        <CollapseButtonStyle>
          <i className="fas fa-expand" />
        </CollapseButtonStyle>
      );
    }

    // If the menu is collapsed...
    else {
      return (
        <CollapseButtonStyle>
          <i className="fas fa-compress" />
        </CollapseButtonStyle>
      );
    }
  }
}

// MenuHero Component & Logic
class MenuHero extends React.Component {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);

    // Base styles to change transition state for
    // collapsing menu hero.
    this.state = {
      maxHeight: '100vh',
      paddingTop: 'calc(' + Root.Size + '* 1.5)',
      paddingBottom: 'calc(' + Root.Size + '/ 6)',
      opacity: '1',
      collapsed: false,
    };

    // Bind base functions to change transition state for
    // collapsing menu hero.
    this.collapseHero = this.collapseHero.bind(this);
    // this.menuScrollCollapse = this.menuScrollCollapse.bind(this);
  }

  // Base functions to change transition state for
  // collapsing menu hero.
  collapseHero() {
    // If currently expanded...
    if (this.state.collapsed == false) {
      this.setState({
        maxHeight: '0vh',
        paddingTop: '0',
        paddingBottom: '0',
        opacity: '0',
        collapsed: true,
      });
    }

    // If currently collapsed...
    else {
      this.setState({
        maxHeight: '100vh',
        paddingTop: 'calc(' + Root.Size + '* 1.5)',
        paddingBottom: 'calc(' + Root.Size + '/ 6)',
        opacity: '1',
        collapsed: false,
      });
    }
  }

  // Render element.
  render() {
    const LocationData = this.props.LocationData;
    const NearbySlug = this.props.NearbySlug;
    const NearbyName = this.props.NearbyName;
    const OrderContext = this.props.OrderContext;
    const OrderContextSlug = this.props.OrderContext
      ? OrderContext.toLowerCase() + '/'
      : '';

    return (
      <div>
        <MenuHeroStyle>
          <SidebarLocation
            LocationData={LocationData}
            collapsedState={this.state.collapsed}
          />
          <HeroInnerTransition
            paddingTop={this.state.paddingTop}
            paddingBottom={this.state.paddingBottom}
            maxHeight={this.state.maxHeight}
            opacity={this.state.opacity}
            className="hero-inner"
          >
            <HeroContent Flex="row">
              <Block AlignItems="flex-start" maxWidth={0.75}>
                <MenuHeroStyle.LocationSwitch>
                  <span>Show me</span>

                  <LocationList
                    OrderContextSlug={OrderContextSlug}
                    LocationData={LocationData}
                  />
                </MenuHeroStyle.LocationSwitch>
                <h1 className="h2">
                  Order cannabis {OrderContext ? OrderContext + ' ' : null}from
                  our{' '}
                  <Link
                    to={
                      '/locations/' +
                      LocationData.geography.state.toLowerCase() +
                      '/' +
                      LocationData.slug
                    }
                  >
                    {LocationData.name}
                    {NearbyName
                      ? null
                      : ', ' + LocationData.geography.state}{' '}
                    Dispensary
                  </Link>
                  {NearbyName
                    ? ' near ' +
                      NearbyName +
                      ', ' +
                      LocationData.geography.state +
                      '.'
                    : '.'}
                </h1>
                <span
                  onClick={this.collapseHero.bind(this)}
                  // These are eslint errors for accessibility below.
                  onKeyPress={this.collapseHero.bind(this)}
                  role="button"
                  tabIndex="0"
                >
                  <Btn
                    IconClass="expand"
                    Label="Expand Menu"
                    BgColor={Theme.Color.Primary}
                    TextColor={Theme.Color.White}
                    Destination={LocationData.meta.maps}
                    IconPosition="left"
                    Pseudo
                    IconFas
                  />
                </span>

                <Btn
                  className="btn-address"
                  IconClass="map-marker-alt"
                  Label={LocationData.contactDetails.location.address}
                  BgColor={Theme.Color.Black}
                  TextColor={Theme.Color.White}
                  Destination={LocationData.meta.maps}
                  IconPosition="left"
                  External
                  IconFas
                />
              </Block>
              <Block className="award-hours">
                <AwardHours
                  TextColor={Theme.Color.White}
                  Hours={LocationData.contactDetails.hours.map(
                    (time, index) => {
                      return {
                        Label: time.days,
                        Data: time.start_time,
                      };
                    }
                  )}
                />
              </Block>
            </HeroContent>
            <HeroContent Flex="row">
              <SuggestionList
                BaseUrl={
                  '/menu' +
                  '/' +
                  OrderContextSlug +
                  LocationData.geography.state.toLowerCase() +
                  '/' +
                  LocationData.slug +
                  '/'
                }
                List={LocationData.nearby}
                Label="Delivering to"
                TextColor={Theme.Color.White}
                GradientColor={Theme.Color.Nightsky}
                Padding={[1, 0, 0, 0]}
              />
            </HeroContent>
          </HeroInnerTransition>
          <MenuHeroStyle.Tools>
            <MenuHeroStyle.ToolsInner>
              <div
                onClick={this.collapseHero.bind(this)}
                // These are eslint errors for accessibility below.
                onKeyPress={this.collapseHero.bind(this)}
                role="button"
                tabIndex="0"
                className="collapse-button"
              >
                <CollapseButton collapsedState={this.state.collapsed} />
              </div>
              <MenuHeroPromotions />
            </MenuHeroStyle.ToolsInner>
          </MenuHeroStyle.Tools>
        </MenuHeroStyle>
      </div>
    );
  }
}

export default MenuHero;

//////////////////////////////////////////////////////////////////////
// End Component
