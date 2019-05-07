// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { graphql } from 'gatsby';

// Templates
import QuestionTemplate from './layout';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The Question Template
const SpecialsArticlePage = props => {

  return (
    <h1>
      It's alive!
    </h1>
  );
};

export default SpecialsArticlePage;

// GraphQL Queries
/////////////////////////////////////////////////////////////////////
// export const query = graphql`
//   query($Slug: String!) {

//     allSpecialsJson(filter: { slug: { eq: $Slug } }) {
//       edges {
//         node {
//           id
//           slug
//           coverImage
//           date
//           author
//           title
//           category
//           tags
//           shortAnswer
//           longAnswer
//         }
//       }
//     }

//     allQuestionCategoriesJson {
//       edges {
//         node {
//           id
//           Name
//           Icon
//           Headline
//           Slug
//           Tags {
//             Name
//             Icon
//             Slug
//           }
//           Breadcrumb {
//             Destination
//             Label
//           }
//           PageTheme {
//             Color {
//               Background
//               Primary
//               Secondary
//               Tertiary
//             }
//           }
//         }
//       }
//     }
//   }
// `;

//////////////////////////////////////////////////////////////////////
// End Component
