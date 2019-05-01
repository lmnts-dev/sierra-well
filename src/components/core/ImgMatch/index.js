import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';

const Image = ({ AltText, src, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "images/" } } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 650) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const match = useMemo(
    () => data.allFile.edges.find(({ node }) => src === node.relativePath),
    [data, src]
  );

  return (
    <Img
      className="img"
      objectFit="cover"
      objectPosition="50% 50%"
      alt={AltText ? AltText : null}
      fluid={match.node.childImageSharp.fluid}
      {...props}
    />
  );
  // return <>{console.log(match.node.childImageSharp.fluid)}</>;
};

export default Image;