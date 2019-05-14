// Top Level Page Template:
// This is the top level page template.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { graphql } from 'gatsby';

// Templates
import TopLevelPageTemplate from './layout';

// Load Castle Fragments
import 'components/library/Castle';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The Question Template
const TopLevelPage = props => {
  const node = props.data.allPrismicTopLevelPage.edges[0].node;

  return (
    <>
      <TopLevelPageTemplate node={node.data} id={node.id} data={props} />
    </>
  );
};

export default TopLevelPage;

// GraphQL Queries
// ///////////////////////////////////////////////////////////////////
export const query = graphql`
  query($Id: String!) {
    allPrismicTopLevelPage(filter: { id: { eq: $Id } }) {
      edges {
        node {
          id
          uid
          data {
            description
            page_title {
              text
            }
            dashboard_link {
              id
              ... on dashboardLink_2 {
                id
                document {
                  id
                  data {
                    dashboard_name {
                      html
                      text
                    }
                    body {
                      __typename
                      ... on PrismicDashboardBodyColumn {
                        slice_type
                        items {
                          widget_background_image {
                            alt
                            localFile {
                              id
                              childImageSharp {
                                fluid(maxWidth: 1200) {
                                  ...GatsbyImageSharpFluid
                                }
                              }
                            }
                          }
                          widget_headline {
                            text
                          }
                          widget_subheadline
                          widget_destination
                          widget_style
                          widget_width_multiple
                          widget_height_fraction
                          widget_icon_class
                          widget_text_color
                          widget_bg_color
                          tint_color
                          tint_opacity
                        }
                      }

                      ... on PrismicDashboardBodyDivider {
                        slice_type
                        primary {
                          type
                        }
                      }
                    }
                  }
                }
              }
            }
            opengraph_image {
              alt
              localFile {
                id
                childImageSharp {
                  fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

// ////////////////////////////////////////////////////////////////////
// End Component
