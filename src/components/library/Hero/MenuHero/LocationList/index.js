// LocationList Component:
// This is the listing of locations for the MenuHero component.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';

// Data
import { StaticQuery, graphql } from 'gatsby';

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
    const currentLocation = 'Brooklyn';
    const OrderContextSlug = '';

    return (
      <StaticQuery
        query={graphql`
          query {
            allPrismicLocation(
              sort: { fields: [data___name___text], order: ASC }
            ) {
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
              if (location.node.uid != '___location-registration') {
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
              }
            })}
          </>
        )}
      />
    );
  }
}

export default LocationList;
