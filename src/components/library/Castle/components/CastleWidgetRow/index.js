// CastleWidgetRow component:
// slice_type: widget_row

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { graphql } from 'gatsby';

// Components
import SlideSection from 'components/library/Section/SlideSection';

// Style Overrides
import CastleWidgetRowStyle from './styles.scss';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The CastleWidgetRow Component
const CastleWidgetRow = ({ data, location }) => {
  const primaryData = data.primary;
  const repeatableData = data.items.length > 0 ? data.items : 0;

  return (
    <CastleWidgetRowStyle>
      <SlideSection
        Widgets={[
          {
            Destination: '/learn/all',
            Style: 'Generic',
            Meta: {
              Generic: {
                BgColor: Theme.Color.Nightsky,
                BgImage: '',
                Subhead: '',
                Headline: 'All Categories',
                TextColor: Theme.Color.White,
                IconColor: Theme.Color.White,
                IconName: 'question', // FontAwesome Icon Name
                TintColor: '',
                TintOpacity: '',
                IconSize: '',
              },
            },
          },
          {
            Destination: '/learn/all',
            Style: 'Generic',
            Meta: {
              Generic: {
                BgColor: Theme.Color.Nightsky,
                BgImage: '',
                Subhead: '',
                Headline: 'All Categories',
                TextColor: Theme.Color.White,
                IconColor: Theme.Color.White,
                IconName: 'question', // FontAwesome Icon Name
                TintColor: '',
                TintOpacity: '',
                IconSize: '',
              },
            },
          },
          {
            Destination: '/learn/all',
            Style: 'Generic',
            Meta: {
              Generic: {
                BgColor: Theme.Color.Nightsky,
                BgQuery: '',
                Subhead: '',
                Headline: 'All Categories',
                TextColor: Theme.Color.White,
                IconColor: Theme.Color.White,
                IconName: 'question', // FontAwesome Icon Name
                TintColor: '',
                TintOpacity: '',
                IconSize: '',
              },
            },
          },
          {
            Destination: '/learn/all',
            Style: 'Generic',
            Meta: {
              Generic: {
                BgColor: Theme.Color.Nightsky,
                BgQuery: '',
                Subhead: '',
                Headline: 'All Categories',
                TextColor: Theme.Color.White,
                IconColor: Theme.Color.White,
                IconName: 'question', // FontAwesome Icon Name
                TintColor: '',
                TintOpacity: '',
                IconSize: '',
              },
            },
          },
          {
            Destination: '/learn/all',
            Style: 'Generic',
            Meta: {
              Generic: {
                BgColor: Theme.Color.Nightsky,
                BgQuery: '',
                Subhead: '',
                Headline: 'All Categories',
                TextColor: Theme.Color.White,
                IconColor: Theme.Color.White,
                IconName: 'question', // FontAwesome Icon Name
                TintColor: '',
                TintOpacity: '',
                IconSize: '',
              },
            },
          },
        ]}
        SectionSize={6}
        Header="Browse Categories"
        Gutter={[0, 1, 1, 1]}
        Theme={{
          TextColor: Theme.Color.Slate,
          BgColor: 'none',
        }}
        SliderSettings={{
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: false,
          arrows: true,
        }}
      />
    </CastleWidgetRowStyle>
  );
};

export default CastleWidgetRow;

// GraphQL Queries:
// This is where you specify what data you need. It's fragment is
// used in the templated page query and passed into the Castle component.
// Example from the Special.js Template: https://www.dropbox.com/s/7d8hlm7yuqrlyi9/Screenshot%202019-05-08%2019.25.50.png?dl=0
//
// Basic Process:s
// 1. We run createPage() in gatsby-node.js
// 2. Query the needed data and pass it to a specified template.js. In the case
// above, it's Special/index.js. That template holds the GraphQL Query to pass said
// data and our fragment we make below down into the <Castle /> level component
// to identify the elements needed to build out the page content.
// 3. Rejoice.
//
// ///////////////////////////////////////////////////////////////////

// export const query = graphql`
//   fragment PrismicSpecialElementsStickyGalleryData on PrismicSpecial {
//     data {
//       elements {
//         ... on PrismicSpecialElementsStickyGallery {
//           slice_type
//           primary {
//             headline {
//               text
//             }
//             subheadline
//             direction
//             body_text
//             background_color
//             text_color
//             cta_label
//             cta_destination
//             cta_bg_color
//             cta_text_color
//             cta_icon
//           }
//           items {
//             src {
//               alt
//               copyright
//               url
//               localFile {
//                 id
//                 childImageSharp {
//                   fluid(maxWidth: 1200) {
//                     ...GatsbyImageSharpFluid
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

//////////////////////////////////////////////////////////////////////
// End Component
