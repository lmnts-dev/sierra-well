// Simple Hero component:
// slice_type: hero
// example: https://www.dropbox.com/s/vp50dnga8ix2n8t/Screenshot%202019-05-07%2018.37.41.png?dl=0

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import SimpleHero from 'components/library/Hero/SimpleHero';
import SocialStrip from 'components/library/SocialStrip';
import Bread from 'components/library/Breadcrumb';
import Btn from 'components/library/Btn/';

// Elements
import Block from 'components/library/Block';

// Style Overrides
import CastleHeroStyle from './styles.scss';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The CastleHero Component
const CastleHero = ({ data, location }) => {
  const primaryData = data.primary;
  const repeatableData = data.items;

  return (
    <CastleHeroStyle>
      <SimpleHero
        Padding={
          primaryData.padding
            ? primaryData.padding.replace(/\s/g, '').split(',')
            : null
        }
        Background={primaryData.background_color}
        BgQuery={
          primaryData.background_image.localFile
            ? primaryData.background_image.localFile.childImageSharp.fluid
            : false
        }
        TextColor={primaryData.text_color}
        Tint={primaryData.tint_opacity}
      >
        <Block AlignItems="flex-start" Width={1} maxWidth={0.75}>
          {/* Check for Breadcrumbs */}
          {primaryData.breadcrumb_url ? (
            <Bread
              Crumbs={[
                {
                  Destination: primaryData.breadcrumb_url,
                  Label: primaryData.breadcrumb_label,
                },
              ]}
              TextColor={primaryData.text_color}
            />
          ) : null}

          {/* Check for Headline */}
          <h1 itemProp="name">
            {primaryData.headline.text
              ? primaryData.headline.text
              : 'Enter a headline...'}
          </h1>
          {primaryData.body_text ? (
            <p className="p-lg">{primaryData.body_text} </p>
          ) : null}

          {/* Check for CTA */}
          {repeatableData.length > 0
            ? repeatableData.map((item, index) => {
                return (
                  <>
                    <Btn
                      Label={item.cta_label}
                      BgColor={item.cta_bg_color}
                      TextColor={item.cta_text_color}
                      Destination={item.cta_destination}
                      IconPosition={item.cta_icon ? 'left' : null}
                      IconClass={item.cta_icon ? item.cta_icon : null}
                      IconFas
                    />
                  </>
                );
              })
            : null}

          {/* Check if Social Sharing is enabled */}
          {console.log(repeatableData)}
          {primaryData.social_sharing.toLowerCase() == 'yes' ? (
            <SocialStrip
              Margin={[0.35, 0, 0, 0]}
              Location={location}
              TextColor={primaryData.text_color}
            />
          ) : null}
        </Block>
      </SimpleHero>
    </CastleHeroStyle>
  );
};

export default CastleHero;

//////////////////////////////////////////////////////////////////////
// End Component
