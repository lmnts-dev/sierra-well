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
import SocialStrip from 'components/library/SocialStrip';
import QuestionFooter from 'components/library/QuestionFooter';
import Btn from 'components/library/Btn/';

// Elements
import Block from 'components/library/Block';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// This component is to transform the
// QuestionCategories.js  data into usable stuff for our
// Widget components and SlideSections.
class SlideSectionWithData extends React.Component {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);
  }

  render() {
    // Get Root Directory Name
    const BaseUrl = this.props.BaseUrl;

    // Get our Category's themeing.
    const BgColor = this.props.Data.PageTheme.Color.Background;
    const TextColor = this.props.Data.PageTheme.Color.Secondary;

    // Isolate Our Tags
    const Tags = this.props.Data.Tags;

    // Get our Category's Slug
    const CategorySlug = this.props.Data.Slug;

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
            Destination: '/' + BaseUrl + '/' + CategorySlug + '/' + Tag.Slug,
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

// This component is to differentiate page content / SlideSections
// depending on what 'Filter' is supplied.
const LearnSection = ({ Category }) => {
  return (
    <Block maxWidth="100%" Padding={[0, 0, 2, 0]}>
      <SlideSectionWithData BaseUrl="learn" Data={Category} />
    </Block>
  );
};

// PageWrapper component for page theming.
const PageWrapper = ({ children, Data, Location, Category, CategoryTheme }) => {
  return (
    <Layout
      BgColor={CategoryTheme.Color.Background}
      PrimaryColor={CategoryTheme.Color.Primary}
      SecondaryColor={CategoryTheme.Color.Secondary}
      TertiaryColor={CategoryTheme.Color.Tertiary}
    >
      <SubLevelPage
        BgColor={CategoryTheme.Color.Background}
        PrimaryColor={CategoryTheme.Color.Primary}
        SecondaryColor={CategoryTheme.Color.Secondary}
        TertiaryColor={CategoryTheme.Color.Tertiary}
      >
        {/* ///////////// */}

        <SimpleHero TextColor={CategoryTheme.Color.Secondary}>
          <Block maxWidth={0.5}>
            <Breadcrumb
              to={Category.Breadcrumb.Destination}
              Label={Category.Breadcrumb.Label}
              TextColor={CategoryTheme.Color.Secondary}
            />
            <h1 className="h2">{Category.Headline}</h1>
            <SocialStrip
              Location={Location}
              TextColor={CategoryTheme.Color.Secondary}
            />
          </Block>
        </SimpleHero>
        {/* Begin page content. */}
        {/* ///////////// */}
        <SubLevelPageContent
          BgColor={Theme.Color.Background}
          TextColor={Theme.Color.White}
        >
          {/* ///////////// */}

          {children}

          {/* ///////////// */}
        </SubLevelPageContent>
        {/* End page content. */}

        {/* The Question / Category / Tag footer. */}
        <SubLevelPageContent
          BgColor={Theme.Color.White}
          TextColor={Theme.Color.Nightsky}
        >
          {/* ///////////// */}

          <QuestionFooter />

          {/* ///////////// */}
        </SubLevelPageContent>

        {/* ///////////// */}
      </SubLevelPage>
    </Layout>
  );
};

// TemplateLayout Component to pass data where it needs to go for
// the theming of the hero as well as the LearnSection and what
// to display in those cards.
const TemplateLayout = ({ Category, Location }) => {
  return (
    <PageWrapper
      CategoryTheme={Category.node.PageTheme}
      Category={Category.node}
      Location={Location}
    >
      <LearnSection Category={Category.node} />
    </PageWrapper>
  );
};

// const TemplateLayout = ({ Category }) => {
//   return <>{console.log(Category.node)}</>;
// };

// const TemplateLayout = ({ Category, Data }) => {
//   return (
//     <PageWrapper Data={Data} Category={Category}>
//       <LearnSection Data={Data} Category={Category} />
//     </PageWrapper>
//   );
// };

// The Template itself. Where it all begins.
const LearnCategoryTemplate = ({ Filter, Location, Data }) => {
  return (
    <>
      {Data.map((Category, index) => {
        return (
          <TemplateLayout key={index} Category={Category} Location={Location} />
        );
      })}
    </>
  );
};

export default LearnCategoryTemplate;
