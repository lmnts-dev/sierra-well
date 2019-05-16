// QuestionListings Component:
// The QuestionListings component.
// Example:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import Icon from 'elements/Icons';
import MasonrySection from 'components/library/Section/MasonrySection';
import HeroStrip from 'components/library/HeroStrip';
import DefaultWidget from 'components/library/Widgets/Library/Default/';

// Constants
import { Theme } from 'constants/Theme';

// Styles
import SpecialListingsStyle from './styles.scss';
import { createGlobalStyle } from 'styled-components';

// Data
import { StaticQuery, graphql } from 'gatsby';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Enable Overflows
export const ReleaseOverflow = createGlobalStyle`
  html, body {
    overflow: visible;
  }

  .wrapper {
    overflow: visible;
  }
`;

// The Specials Cards.
const SpecialCards = ({ PageLocation }) => {
  return (
    // Run the StaticQuery to get the data we need.
    <StaticQuery
      query={graphql`
        query {
          allPrismicSpecial {
            edges {
              node {
                id
                uid
                data {
                  title {
                    text
                  }
                  icon
                  tags
                  color_background
                  color_primary
                  color_secondary
                  color_tertiary
                  cover_image {
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
      `}
      render={data =>
        // Create our PageTheme variables for each Widget.

        // Map the Question data we got.
        data.allPrismicSpecial.edges.map((Special, index) => {
          let tagList = Special.node.data.tags.replace(/\s/g, '').split(',');
          let styledTagList =
            tagList.length > 0
              ? tagList.map((tag, index) => (
                  <span className="tag" index={index}>
                    {tag}
                  </span>
                ))
              : 'Specials';

          return (
            <DefaultWidget
              BgColor={Special.node.data.color_background}
              TextColor={Special.node.data.color_primary}
              Destination={PageLocation.pathname + '/' + Special.node.uid}
              Subhead={styledTagList}
              Headline={Special.node.data.title.text}
              IconName={Special.node.data.icon}
              IconColor={Special.node.data.color_primary}
              BgQuery={
                Special.node.data.cover_image.localFile
                  ? Special.node.data.cover_image.localFile.childImageSharp
                      .fluid
                  : false
              }
              // BgImageFile={Question.node.coverImage}
              BgImageAltText={
                Special.node.data.cover_image.localFile
                  ? Special.node.data.cover_image.alt
                  : null
              }
              TintColor={
                Special.node.data.cover_image.localFile
                  ? Theme.Color.Black
                  : null
              }
              TintOpacity={Special.node.data.cover_image.localFile ? 0.6 : null}
              key={index}
            >
              {console.log(tagList)}
            </DefaultWidget>
          );
        })
      }
    />
  );
};

const SpecialListings = ({
  Gutter,
  BgColor,
  TextColor,
  LocationData,
  PageLocation,
}) => {
  // Function to create our Promotional Items map.
  const promotionalItemsTransformer = data => {
    if (data != 0) {
      // Create a new map from Prismic Data.
      let itemList = data.map((item, index) => {
        return {
          Caption: item.caption,
          Label: item.label,
          Destination: item.destination ? item.destination : null,
        };
      });

      // Return new map.
      return itemList;
    } else {
      // Else, don't return anything.
      return null;
    }
  };

  return (
    <SpecialListingsStyle BgColor={BgColor} TextColor={TextColor}>
      {LocationData.featuredSpecials.length > 0 ? (
        <HeroStrip
          BgColor={Theme.Color.White}
          TextColor={Theme.Color.Nightsky}
          Items={promotionalItemsTransformer(LocationData.featuredSpecials)}
        />
      ) : null}

      <ReleaseOverflow />
      <MasonrySection
        Columns={3}
        ColumnGap={0.25}
        BgColor={BgColor ? BgColor : Theme.Color.White}
        TextColor={TextColor ? TextColor : Theme.Color.Nightsky}
        Gutter={Gutter ? Gutter : [1, 1, 2, 1]}
      >
        {console.log(LocationData.featuredSpecials.length)}
        <SpecialCards PageLocation={PageLocation} />
      </MasonrySection>
    </SpecialListingsStyle>
  );
};

export default SpecialListings;

//////////////////////////////////////////////////////////////////////
// End Component
