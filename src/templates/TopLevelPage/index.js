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
            ## Page Settings
            description
            page_title {
              text
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

            ## Mobile Sections
            body {
              slice_type
              primary {
                section_headline {
                  text
                }
                section_height_multiple
                section_arrows
                section_autoplay
              }
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
                widget_icon_class
                widget_text_color
                widget_bg_color
                tint_color
                tint_opacity
              }
            }

            ## Desktop Sections
            dashboard_link {
              id
              ... on PrismicTopLevelPageDataDashboard_link {
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

                      ... on PrismicDashboardBodyTitleColumn {
                        slice_type
                        primary {
                          widget_headline {
                            text
                          }
                          widget_intro_copy
                          widget_body_copy
                        }
                      }

                      ... on PrismicDashboardBodyDivider {
                        slice_type
                        primary {
                          type
                        }
                      }

                      ... on PrismicDashboardBodyTitleWidget {
                        slice_type
                        primary {
                          widget_headline {
                            text
                          }
                          widget_subheadline
                          widget_destination
                          widget_width_multiple
                          widget_icon_class
                          widget_text_color
                          widget_bg_color
                          tint_color
                          tint_opacity
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
                        }
                      }
                    }
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
