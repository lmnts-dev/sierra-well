// TopLevelRoutes Component:
// This is the list of routes we are excluding from the
// Sub Level Nav styles.

var TopLevelRoutes = [
  '/',
  '/menu',
  '/locations',
  '/company',
  '/culture',
  '/outreach',
];

// const AllTopLevelRoutes = ({ data }) => data.allPrismicNavigation.edges;
// const AllTopLevelRoutesLinkLists = AllTopLevelRoutes.map(
//   (linklist, index) => linklist.node.data.main
// );

// const query = graphql`
//   query TopLevelRouteQuery {
//     allPrismicNavigation {
//       edges {
//         node {
//           id
//           data {
//             module_name
//             main {
//               slugs
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export default TopLevelRoutes;
