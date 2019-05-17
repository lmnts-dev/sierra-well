// Navigation Component:
// This is the sitewide Navigation of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The LinkList loop.
const LinkList = ({ ActiveClass }) => (
  <StaticQuery
    query={graphql`
      query NavigationQuery {
        allPrismicNavigation {
          edges {
            node {
              id
              data {
                module_name
                main {
                  label
                  slug
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      // Pull all Navigation Lists from Prismic
      const AllNavigation = data.allPrismicNavigation.edges;

      // Pull only the Main Navigation list.
      const MainNavigation = AllNavigation.map(
        (linklist, index) => linklist.node.data.main
      );

      // Convert these to usable elements
      return (
        <ul className="linklist">
          {MainNavigation[0].map((link, index) => {
            if (link.slug != '/___registration') {
              return (
                <li key={index}>
                  <Link to={link.slug} activeClassName={ActiveClass}>
                    {link.label}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      );
    }}
  />
);

export default LinkList;
