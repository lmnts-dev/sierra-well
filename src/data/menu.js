/* eslint-disable */

// Images
import BgPlaceholder from '../assets/images/placeholder_bg.jpg';

// Constants
import { Theme } from 'constants/Theme';

export const MenuData = {
  State: [
    {
      Name: 'Nevada',
      Default: 'Reno',
      Slug: 'nevada',
      City: [
        {
          Name: 'Reno',
          Slug: 'reno',
          State: 'Nevada',
          Menu: {
            iFrame:
              'https://www.dutchie.com/embedded-menu/sierra-well-reno/menu?',
          },
          Location: [],
          Region: [],
          PageTheme: {
            Color: {
              Background: Theme.Color.Nightsky,
              Primary: Theme.Color.Nightsky,
              Secondary: Theme.Color.White,
              Tertiary: Theme.Color.Nightsky,
            },
          },
        },
        {
          Name: 'Carson City',
          Slug: 'carson-city',
          State: 'Nevada',
          Menu: {
            iFrame:
              'https://www.dutchie.com/embedded-menu/sierra-well-carson-city/menu?',
          },
          Location: [],
          Region: [],
          PageTheme: {
            Color: {
              Background: Theme.Color.Nightsky,
              Primary: Theme.Color.Nightsky,
              Secondary: Theme.Color.White,
              Tertiary: Theme.Color.Nightsky,
            },
          },
        },
        {
          Name: 'Las Vegas',
          Slug: 'las-vegas',
          State: 'Nevada',
          Menu: {
            iFrame:
              'https://www.dutchie.com/embedded-menu/sierra-well-carson-city/menu?',
          },
          Location: [],
          Region: [],
          PageTheme: {
            Color: {
              Background: Theme.Color.PurpleHaze,
              Primary: Theme.Color.Nightsky,
              Secondary: Theme.Color.White,
              Tertiary: Theme.Color.Nightsky,
            },
          },
        },
        {
          Name: 'Elko',
          Slug: 'elko',
          State: 'Nevada',
          Menu: {
            iFrame:
              'https://www.dutchie.com/embedded-menu/sierra-well-carson-city/menu?',
          },
          Location: [],
          Region: [],
          PageTheme: {
            Color: {
              Background: Theme.Color.PurpleHaze,
              Primary: Theme.Color.Nightsky,
              Secondary: Theme.Color.White,
              Tertiary: Theme.Color.Nightsky,
            },
          },
        },
      ],
    },
  ],
};
