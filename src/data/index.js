/* eslint-disable */

// Images
import BgPlaceholder from '../assets/images/placeholder_bg.jpg';

// Constants
import { Theme } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// data/index.js:
// Dummy data.
// Core Widget Structure:
// {
//   Destination: '/subpage',
//   Style: '',
//   Meta: {
//     Generic: {
//       BgColor: '',
//       BgImage: '',
//       Subhead: '',
//       Headline: '',
//       TextColor: '',
//       IconColor: '',
//       IconName: '', // FontAwesome Icon Name
//       TintColor: '',
//       TintOpacity: '',
//       IconSize: ''
//     },

//     SideHeader: {
//       Headline: '',
//       Intro: '',
//       Body: ''
//     },

//     Article: {
//       Type: '',
//       Subhead: '',
//       Headline: '',
//       Excerpt: '',
//       Category: '',
//       Date: '',
//       Location: '',
//       Tags: [],
//       Body: '',
//       BgColor: '',
//       BgImage: '',
//       TextColor: '',
//       IconColor: '',
//       IconName: '', // FontAwesome Icon Name
//       TintColor: '',
//       TintOpacity: '',
//       IconSize: ''
//     },

//     Category: {
//       Label: '',
//       BgColor: '',
//       BgImage: '',
//     },
//   }
// },

export const WidgetContent = {
  Triple: [
    {
      Destination: '/subpage',
      Style: 'Generic',
      Meta: {
        Generic: {
          BgColor: Theme.Color.Tahoe,
          BgImage: BgPlaceholder,
          Subhead: 'Subhead',
          Headline: 'Mission',
          TextColor: Theme.Color.White,
          IconColor: Theme.Color.White,
          IconName: 'rocket', // FontAwesome Icon Name
          TintColor: '#000000',
          TintOpacity: '.4',
          IconSize: '',
        },
      },
    },
    {
      Destination: '/subpage',
      Style: 'Generic',
      Meta: {
        Generic: {
          BgColor: Theme.Color.Dank,
          BgImage: BgPlaceholder,
          Subhead: 'Subhead',
          Headline: 'Mission',
          TextColor: Theme.Color.White,
          IconColor: Theme.Color.White,
          IconName: 'rocket', // FontAwesome Icon Name
          TintColor: '#000000',
          TintOpacity: '.4',
          IconSize: '',
        },
      },
    },
    {
      Destination: '/subpage',
      Style: 'Generic',
      Meta: {
        Generic: {
          BgColor: Theme.Color.Black,
          BgImage: BgPlaceholder,
          Subhead: 'Subhead',
          Headline: 'Mission',
          TextColor: Theme.Color.White,
          IconColor: Theme.Color.White,
          IconName: 'rocket', // FontAwesome Icon Name
          TintColor: '#000000',
          TintOpacity: '.4',
          IconSize: '',
        },
      },
    },
  ],
  Double: [
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
  ],
  Single: [
    {
      BgColor: Theme.Color.Black,
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
  ],
};
