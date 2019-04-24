// templates/Learn.js:
// This is the template for Learn pages.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import Layout from 'components/core/Layout';
import { SubLevelPageContent, SubLevelPage } from 'templates/SubLevelPage';
import SimpleHero from 'components/library/Hero/SimpleHero';
import WidgetSection from 'components/library/Section/WidgetSection';
import SimpleSection from 'components/library/Section/SimpleSection';
import SlideSection from 'components/library/Section/SlideSection';

//// Misc. Components
import Breadcrumb from 'components/library/Breadcrumb';
import Btn from 'components/library/Btn/';

// Elements
import Block from 'components/library/Block';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// This component is to transform the
// questions.js data into usable stuff for our
// Widget components and SlideSections.
class SlideSectionWithData extends React.Component {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);
  }

  render() {
    // Get Root Directory Name
    const BaseUrl = this.props.BaseUrl;
    console.log(BaseUrl);

    // Get our Category's themeing.
    const BgColor = this.props.Data.PageTheme.Color.Background;
    const TextColor = this.props.Data.PageTheme.Color.Secondary;

    // Isolate Our Tags
    const Tags = this.props.Data.Tags;

    // Create empty Widgets array for us to loop through
    // later on.
    const Widgets = [];

    // Map our tags and create a new Widget object for
    // each tag for us to loop and display a Widget for in
    // the data structure that WidgetContainer likes.
    Tags.map((Tag, index) => {
      Widgets[index] = {
        Flex: 1,
        WidgetContent: [
          {
            Destination: '/' + BaseUrl + '/' + Tag.Slug,
            Style: 'Generic',
            Meta: {
              Generic: {
                BgColor: BgColor,
                BgImage: '',
                Subhead: '',
                Headline: Tag.Name,
                TextColor: TextColor,
                IconColor: TextColor,
                IconName: Tag.Icon, // FontAwesome Icon Name
                TintColor: '',
                TintOpacity: '',
                IconSize: '',
              },
            },
          },
        ],
      };
    });

    return (
      <SlideSection
        Widgets={Widgets}
        SectionSize={3}
        Header={this.props.Data.Name}
        Theme={{
          TextColor: Theme.Color.Black,
          BgColor: 'none',
        }}
        SliderSettings={{
          slidesToShow: 4,
          slidesToScroll: 2,
          autoplay: false,
          arrows: true,
        }}
      />
    );
  }
}

// class SlideSectionWithData = ({ CategoryData }) => (

//   {
//     // Begin WidgetContent
//     Flex: 1,
//     WidgetContent: [
//       {
//         Destination: '/learn/recreational/',
//         Style: 'Generic',
//         Meta: {
//           Generic: {
//             BgColor: CategoryData.PageTheme.Color.Primary,
//             BgImage: '',
//             Subhead: '',
//             Headline: CategoryData.,
//             TextColor: CategoryData.PageTheme.Color.Secondary,
//             IconColor: CategoryData.PageTheme.Color.Secondary,
//             IconName: 'leaf', // FontAwesome Icon Name
//             TintColor: '',
//             TintOpacity: '',
//             IconSize: '',
//           },
//         },
//       },
//     ],
//     // End WidgetContent
//   },

// );

const LearnTemplate = ({ Filter, Data }) => {
  return (
    <Layout
      BgColor={Data.PageTheme.Color.Background}
      PrimaryColor={Data.PageTheme.Color.Primary}
      SecondaryColor={Data.PageTheme.Color.Secondary}
      TertiaryColor={Data.PageTheme.Color.Tertiary}
    >
      <SubLevelPage
        BgColor={Data.PageTheme.Color.Background}
        PrimaryColor={Data.PageTheme.Color.Primary}
        SecondaryColor={Data.PageTheme.Color.Secondary}
        TertiaryColor={Data.PageTheme.Color.Tertiary}
      >
        {/* ///////////// */}

        <SimpleHero TextColor={Data.PageTheme.Color.Secondary}>
          <Block maxWidth={0.5}>
            <Breadcrumb
              to={Data.Breadcrumb.Destination}
              Label={Data.Breadcrumb.Label}
              TextColor={Data.PageTheme.Color.Secondary}
            />
            <h1 className="h2">{Data.Headline}</h1>
          </Block>
        </SimpleHero>
        {/* Begin page content. */}
        {/* ///////////// */}
        <SubLevelPageContent
          BgColor={Theme.Color.Background}
          TextColor={Theme.Color.White}
        >
          {/* ///////////// */}

          {/* Loop through our categories and display SlideSections */}
          <Block maxWidth="100%" Padding={[0, 0, 2, 0]}>
            {Data.Categories.map((Category, index) => {
              return (
                <SlideSectionWithData
                  key={index}
                  BaseUrl={Data.Slug}
                  Data={Category}
                />
              );
            }, this)}
          </Block>

          {/* ///////////// */}

          {/* ///////////// */}

          <SimpleSection
            BgColor={Theme.Color.White}
            TextColor={Theme.Color.Nightsky}
            Style="centered"
          >
            <Block Style="centered" Padding={[1, 0, 1, 0]} maxWidth={0.5}>
              <h2>Not seeing your question?</h2>
              <p className="p-md">
                Chat with an expert now or sumbit your own question
              </p>
            </Block>
          </SimpleSection>
          {/* ///////////// */}
        </SubLevelPageContent>
        {/* End page content. */}
        {/* ///////////// */}
      </SubLevelPage>
    </Layout>
  );
};

export default LearnTemplate;
