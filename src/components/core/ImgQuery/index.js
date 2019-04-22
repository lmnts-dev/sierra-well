// ImgQuery.js:
// For blazin' fast and optimized images.

// Core
import React from 'react';
import Img from 'gatsby-image/withIEPolyfill';

// Begin Component
//////////////////////////////////////////////////////////////////////

const ImgQuery = ({
  data,
  query,
  alt,
  imgClass,
  objectFit,
  objectPosition,
}) => (
  <Img
    fluid={query}
    objectFit={objectFit ? objectFit : 'cover'}
    objectPosition={objectPosition ? objectPosition : '50% 50%'}
    alt={alt}
    className={imgClass ? imgClass : 'img'}
    fadeIn={true}
  />
);

export default ImgQuery;

// Our fragment for consistent querying of the right
// sized images.
