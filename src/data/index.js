/* eslint-disable */

// Images
import BgPlaceholder from '../assets/images/placeholder_bg.jpg';

// Constants
import { Theme } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// data/index.js:
// Dummy data.

export const WidgetContent = [
  {
    BgColor: Theme.Color.White,
    BgImage: BgPlaceholder,
    Subhead: 'Subhead',
    Headline: 'Headline',
    TextColor: Theme.Color.White,
    IconColor: Theme.Color.White,
    IconName: 'rocket', // FontAwesome Icon Name
    Destination: '/subpage',
    TintColor: '#000000',
    TintOpacity: '.4',
    WidgetStyle: 'default',
  },
  {
    BgColor: Theme.Color.Dank,
    BgImage: 'none',
    Subhead: 'Subhead',
    Headline: 'Headline',
    TextColor: Theme.Color.Black,
    IconColor: Theme.Color.Black,
    IconName: 'rocket',
    Destination: '/subpage',
    TintColor: '',
    TintOpacity: '',
    WidgetStyle: 'default',
  },
  {
    BgColor: Theme.Color.Tahoe,
    BgImage: 'none',
    Subhead: 'Subhead',
    Headline: 'Headline',
    TextColor: Theme.Color.White,
    IconColor: Theme.Color.White,
    IconName: 'rocket',
    Destination: '/subpage',
    TintColor: '',
    TintOpacity: '',
    WidgetStyle: 'default',
  },
];