/* eslint-disable */

// Images
import BgPlaceholder from '../assets/images/placeholder_bg.jpg';
import BgPlaceholder2 from '../assets/images/placeholder_bg_2.jpg';
import BgPlaceholder3 from '../assets/images/placeholder_bg_3.jpg';

// Constants
import { Theme } from 'constants/Theme';

export const IndexData = {
  PageTheme: {
    Color: {
      Background: Theme.Color.Background,
      Primary: Theme.Color.Nightsky,
      Secondary: Theme.Color.Nightsky,
      Tertiary: Theme.Color.Background,
    },
  },
  SlideGroup: {
    Name: 'home-slider',
    Slides: [
      // Begin Slides
      {
        Name: 'home-slide-1',
        Columns: [
          // Begin Columns
          {
            Type: 'default',
            Widgets: [
              // Begin Widgets
              {
                // Begin WidgetContent
                Flex: 1,
                WidgetContent: [
                  {
                    Destination: '/subpage',
                    Style: 'Article',
                    Meta: {
                      Generic: {
                        BgColor: 'black',
                        BgImage: BgPlaceholder,
                        Subhead: 'Subhead',
                        Headline: 'Article',
                        TextColor: Theme.Color.White,
                        IconColor: Theme.Color.White,
                        IconName: 'robot', // FontAwesome Icon Name
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
                        BgImage: '',
                        Subhead: 'Subhead',
                        Headline: 'Generic 1',
                        TextColor: Theme.Color.Black,
                        IconColor: Theme.Color.Black,
                        IconName: 'tree', // FontAwesome Icon Name
                        TintColor: '',
                        TintOpacity: '',
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
                        Headline: 'Generic 2',
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
                // End WidgetContent
              },
              // End Widgets
            ],
          },
          {
            Type: 'divider',
          },
          {
            Type: 'default',
            Widgets: [
              // Begin Widgets
              {
                // Begin WidgetContent
                Flex: 1,
                WidgetContent: [
                  {
                    Destination: '/subpage',
                    Style: 'Cross',
                    Meta: {
                      Generic: {
                        BgColor: 'blue',
                        BgImage: '',
                        Subhead: 'Subhead',
                        Headline: 'Sierra Well Grid',
                        TextColor: Theme.Color.White,
                        IconColor: Theme.Color.White,
                        IconName: 'robot', // FontAwesome Icon Name
                        TintColor: '#000000',
                        TintOpacity: '.4',
                        IconSize: '',
                      },
                    },
                  },
                ],
                // End WidgetContent
              },
              // End Widgets
            ],
          },
          // End Columns
        ],
      },
      {
        Name: 'home-slide-2',
        Columns: [
          // Begin Columns
          {
            Type: 'default',
            Widgets: [
              // Begin Widgets
              {
                // Begin WidgetContent
                Flex: 1,
                WidgetContent: [
                  {
                    Destination: '/subpage',
                    Style: 'Article',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.Black,
                        BgImage: BgPlaceholder2,
                        Subhead: 'Subhead',
                        Headline: 'Article',
                        TextColor: Theme.Color.White,
                        IconColor: Theme.Color.White,
                        IconName: 'robot', // FontAwesome Icon Name
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
                        Headline: 'Generic 1',
                        TextColor: Theme.Color.Black,
                        IconColor: Theme.Color.Black,
                        IconName: 'tree', // FontAwesome Icon Name
                        TintColor: '',
                        TintOpacity: '',
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
                        BgImage: BgPlaceholder2,
                        Subhead: 'Subhead',
                        Headline: 'Generic 2',
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
                // End WidgetContent
              },
              {
                // Begin WidgetContent
                Flex: 2,
                WidgetContent: [
                  {
                    Destination: '/subpage',
                    Style: 'Article',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.White,
                        BgImage: '',
                        Subhead: 'In a hurry?',
                        Headline: 'Reserve your spot in line.',
                        TextColor: Theme.Color.Nightsky,
                        IconColor: Theme.Color.Nightsky,
                        IconName: 'robot', // FontAwesome Icon Name
                        TintColor: '',
                        TintOpacity: '',
                        IconSize: '',
                      },
                    },
                  },
                ],
                // End WidgetContent
              },
              // End Widgets
            ],
          },
          {
            Type: 'default',
            Widgets: [
              // Begin Widgets
              {
                // Begin WidgetContent
                Flex: 1,
                WidgetContent: [
                  {
                    Destination: '/subpage',
                    Style: 'Article',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.Primary,
                        BgImage: '',
                        Subhead: 'Sierra Facts',
                        Headline:
                          'Sierra Well was Reno, Nevada’s first Cannabis Dispensary.',
                        TextColor: Theme.Color.White,
                        IconColor: Theme.Color.White,
                        IconName: 'plus', // FontAwesome Icon Name
                        TintColor: '',
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
                        BgColor: Theme.Color.Primary,
                        BgImage: '',
                        Subhead: 'Sierra Facts',
                        Headline:
                          'Sierra Well was Reno, Nevada’s first Cannabis Dispensary.',
                        TextColor: Theme.Color.White,
                        IconColor: Theme.Color.White,
                        IconName: 'tree', // FontAwesome Icon Name
                        TintColor: '',
                        TintOpacity: '',
                        IconSize: '',
                      },
                    },
                  },
                  {
                    Destination: '/subpage',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.Primary,
                        BgImage: '',
                        Subhead: 'Sierra Facts',
                        Headline:
                          'Sierra Well was Reno, Nevada’s first Cannabis Dispensary.',
                        TextColor: Theme.Color.White,
                        IconColor: Theme.Color.White,
                        IconName: 'rocket', // FontAwesome Icon Name
                        TintColor: '',
                        TintOpacity: '',
                        IconSize: '',
                      },
                    },
                  },
                ],
                // End WidgetContent
              },
              {
                // Begin WidgetContent
                Flex: 2,
                WidgetContent: [
                  {
                    Destination: '/subpage',
                    Style: 'Article',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.Gunmetal,
                        BgImage: '',
                        Subhead: 'Exclusive Deals',
                        Headline:
                          'Text START to 855-814-5354 to join our text deals program.',
                        TextColor: Theme.Color.White,
                        IconColor: Theme.Color.White,
                        IconName: 'plus', // FontAwesome Icon Name
                        TintColor: '',
                        TintOpacity: '',
                        IconSize: '',
                      },
                    },
                  },
                ],
                // End WidgetContent
              },
              // End Widgets
            ],
          },
          {
            Type: 'default',
            Widgets: [
              // Begin Widgets
              {
                // Begin WidgetContent
                Flex: 1,
                WidgetContent: [
                  {
                    Destination: '/subpage',
                    Style: 'Article',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.Black,
                        BgImage: BgPlaceholder3,
                        Subhead: 'Reviews',
                        Headline:
                          '“Sierra Well went above and beyond to make sure my husband and I found exactly what we needed.”',
                        TextColor: Theme.Color.White,
                        IconColor: Theme.Color.White,
                        IconName: 'robot', // FontAwesome Icon Name
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
                        BgImage: BgPlaceholder2,
                        Subhead: 'Reviews',
                        Headline:
                          '“Sierra Well went above and beyond to make sure my husband and I found exactly what we needed.”',
                        TextColor: Theme.Color.Black,
                        IconColor: Theme.Color.Black,
                        IconName: 'tree', // FontAwesome Icon Name
                        TintColor: '',
                        TintOpacity: '',
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
                        Subhead: 'Reviews',
                        Headline:
                          '“Sierra Well went above and beyond to make sure my husband and I found exactly what we needed.”',
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
                // End WidgetContent
              },
              // End Widgets
            ],
          },
          // End Columns
        ],
      },
      // End Slides
    ],
  },
};
