// MenuHero Component:
// This is the specialize hero for the Menu page.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Device from 'components/core/DeviceQuery';

// Styles
import { MobileQuestionsHeroStyle } from './styles.scss';

// Data
import { StaticQuery, graphql } from 'gatsby';

// Helpers
import { HeroContent, HeroInner } from './../../../Hero';
import slugify from 'helpers/Slugify';

// Components
import Block from 'components/library/Block';
import SuggestionList from 'components/library/SuggestionList';
import Btn from 'components/library/Btn/';
import SlideSection from 'components/library/Section/SlideSection';
import LocationList from 'components/library/Hero/LocationsHero/LocationList';

// Constants
import { Theme, Root } from 'constants/Theme';

// Helpers
import hexToRGB from 'helpers/hexToRGB';
import TimeString from 'helpers/timeString';

// Begin Component
//////////////////////////////////////////////////////////////////////

const QuestionWidgets = ({ LocationData }) => {
  let WidgetMap = [
    {
      // Begin WidgetContent
      Flex: 1,
      WidgetContent: [
        {
          Destination:
            '/learn/recreational-cannabis/can-patients-travel-with-medical-marijuana',
          Style: 'Generic',
          Meta: {
            Generic: {
              LocationData: '',
              BgColor: Theme.Color.Nightsky,
              Subhead: 'Medical',
              Headline: '"Can patients travel with medical marijuana?"',
              TextColor: Theme.Color.White,
              IconColor: Theme.Color.White,
              IconName: 'umbrella',
              TintColor: Theme.Color.Black,
              TintOpacity: '0.3',
              IconSize: '',
              CallToAction: '',
              BgImageFile: 'placeholder_bg_7.png',
            },
          },
        },
      ],
      // End WidgetContent
    },
    {
      // Begin WidgetContent
      Flex: 1,
      WidgetContent: [
        {
          Destination:
            '/learn/medical/will-medical-marijuana-be-covered-by-insurance',
          Style: 'Generic',
          Meta: {
            Generic: {
              LocationData: '',
              BgColor: Theme.Color.Nightsky,
              Subhead: 'Medical',
              Headline: '"Will medical marijuana be covered by insurance?"',
              TextColor: Theme.Color.White,
              IconColor: Theme.Color.White,
              IconName: 'shield-alt',
              TintColor: Theme.Color.Black,
              TintOpacity: '0.3',
              IconSize: '',
              CallToAction: '',
              BgImageFile: 'placeholder_bg_2.jpg',
            },
          },
        },
      ],
      // End WidgetContent
    },
    {
      // Begin WidgetContent
      Flex: 1,
      WidgetContent: [
        {
          Destination:
            '/learn/medical/will-medical-marijuana-be-covered-by-insurance',
          Style: 'Generic',
          Meta: {
            Generic: {
              LocationData: '',
              BgColor: Theme.Color.Nightsky,
              Subhead: 'Recreational',
              Headline: '"Can you send marijuana through the mail?"',
              TextColor: Theme.Color.White,
              IconColor: Theme.Color.White,
              IconName: 'envelope',
              TintColor: Theme.Color.Black,
              TintOpacity: '0.3',
              IconSize: '',
              CallToAction: '',
              BgImageFile: 'placeholder_bg_8.png',
            },
          },
        },
      ],
      // End WidgetContent
    },
  ];

  return WidgetMap;
};

// MenuHero Component & Logic
class QuestionsHeroMobile extends React.Component {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);
  }

  // Render element.
  render() {
    let LocationData = this.props.LocationData;

    // Render Menu
    return (
      <Device Query="Mobile">
        <MobileQuestionsHeroStyle>
          <MobileQuestionsHeroStyle.Inner className="hero-inner">
            <HeroContent Flex="row">
              <SlideSection
                Header="Q&A"
                Widgets={QuestionWidgets({
                  HeadlineString: 'MenuHeadline',
                })}
                SectionSize={5}
                Theme={{
                  TextColor: Theme.Color.Black,
                  BgColor: 'none',
                }}
                SliderSettings={{
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  // autoplay: true,
                  autoplay: true,
                  arrows: false,
                  infinite: true,
                  useTransform: false,
                }}
              />
            </HeroContent>
          </MobileQuestionsHeroStyle.Inner>
        </MobileQuestionsHeroStyle>
      </Device>
    );
  }
}

export default QuestionsHeroMobile;

//////////////////////////////////////////////////////////////////////
// End Component
