// Widgets/Container.js
// This is the holder / wrapper around Widget Content.

// Core
import React from 'react';
import { Link } from 'gatsby';
import Slider from 'react-slick'; // For Slick Slider
import { Helmet } from 'react-helmet'; // For Slick Styles

// Styles
import SectionWidgetContainerStyle from './styles.scss';

// Components
import DefaultWidget from '../../Library/Default';

// Begin Component
//////////////////////////////////////////////////////////////////////

const SectionWidgetContainer = ({ WidgetContent, SectionSize }) => (
  <SectionWidgetContainerStyle className="widget" SectionSize={SectionSize}>
    <SectionWidgetContainerStyle.Inner>
      <DefaultWidget
        BgColor={WidgetContent.BgColor}
        BgImage={WidgetContent.BgImage}
        TextColor={WidgetContent.TextColor}
        TintColor={WidgetContent.TintColor}
        TintOpacity={WidgetContent.TintOpacity}
        Destination={WidgetContent.Destination}
        Subhead={WidgetContent.Subhead}
        Headline={WidgetContent.Headline}
        IconName={WidgetContent.IconName}
        IconColor={WidgetContent.IconColor}
      />
    </SectionWidgetContainerStyle.Inner>
  </SectionWidgetContainerStyle>
);

export default SectionWidgetContainer;
