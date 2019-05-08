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

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The CastleHero Component
const CastleHero = ({ data, location }) => (
  <SimpleHero
    Padding={data.padding ? data.padding.replace(/\s/g, '').split(',') : null}
    Background={data.background_color}
    BgQuery={
      data.background_image.localFile
        ? data.background_image.localFile.childImageSharp.fluid
        : false
    }
    TextColor={data.text_color}
    Tint={data.tint_opacity}
  >
    <Block AlignItems="flex-start" Width={1} maxWidth={0.75}>
      {/* Check for Breadcrumbs */}
      {data.breadcrumb_url ? (
        <Bread
          Crumbs={[
            { Destination: data.breadcrumb_url, Label: data.breadcrumb_label },
          ]}
          TextColor={data.text_color}
        />
      ) : null}

      {/* Check for Headline */}
      <h1 itemProp="name">
        {data.headline.text ? data.headline.text : 'Enter a headline...'}
      </h1>
      {data.body_text ? <p className="p-lg">{data.body_text} </p> : null}

      {/* Check for CTA */}
      {data.cta_label ? (
        <Btn
          Label={data.cta_label}
          BgColor={data.text_color}
          TextColor={data.background_color}
          Destination={data.cta_destination}
        />
      ) : null}

      {/* Check if Social Sharing is enabled */}
      {data.social_sharing.toLowerCase() == 'yes' ? (
        <SocialStrip
          Margin={[0.35, 0, 0, 0]}
          Location={location}
          TextColor={data.text_color}
        />
      ) : null}
    </Block>
  </SimpleHero>
);

export default CastleHero;

//////////////////////////////////////////////////////////////////////
// End Component
