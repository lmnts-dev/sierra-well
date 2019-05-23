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
        Name: 'home-slides',
        Columns: [
          // Begin Columns
          {
            Type: 'default',
            Widgets: [
              // Begin Widgets
              {
                // Begin WidgetContent
                Flex: 1,
                Width: 7,
                WidgetContent: [
                  {
                    Destination: '/subpage',
                    Style: 'LogoWidget',
                    Meta: {
                      LogoWidget: {
                        BgColor: Theme.Color.Nightsky,
                        Subhead: 'A new kind of Cannabis Store.',
                        Headline: '',
                        TextColor: Theme.Color.White,
                        IconColor: Theme.Color.White,
                        IconName: 'cannabis',
                        TintColor: Theme.Color.Black,
                        TintOpacity: '0.6',
                        IconSize: '',
                        CallToAction: '',
                        BgImageFile: 'be27.png',
                      },
                    },
                  },
                  {
                    Destination: '/subpage',
                    Style: 'LogoWidget',
                    Meta: {
                      LogoWidget: {
                        BgColor: Theme.Color.Primary,
                        Subhead: 'Happy.',
                        Headline: '',
                        TextColor: Theme.Color.White,
                        IconColor: Theme.Color.White,
                        IconName: 'smile-wink',
                        TintColor: Theme.Color.Black,
                        TintOpacity: '0.6',
                        IconSize: '',
                        CallToAction: '',
                        BgImageFile: 'placeholder_bg_2.jpg',
                      },
                    },
                  },
                  {
                    Destination: '/subpage',
                    Style: 'LogoWidget',
                    Meta: {
                      LogoWidget: {
                        BgColor: Theme.Color.Primary,
                        Subhead: 'Healthy.',
                        Headline: '',
                        TextColor: Theme.Color.White,
                        IconColor: Theme.Color.White,
                        IconName: 'heart',
                        TintColor: Theme.Color.Black,
                        TintOpacity: '0.6',
                        BgImageFile: 'be5.png',
                        IconSize: '',
                        CallToAction: '',
                      },
                    },
                  },
                  {
                    Destination: '/subpage',
                    Style: 'LogoWidget',
                    Meta: {
                      LogoWidget: {
                        BgColor: Theme.Color.Primary,
                        Subhead: 'Creative.',
                        Headline: '',
                        TextColor: Theme.Color.White,
                        IconColor: Theme.Color.White,
                        IconName: 'music',
                        TintColor: Theme.Color.Black,
                        TintOpacity: '0.6',
                        BgImageFile: 'be8.png',
                        IconSize: '',
                        CallToAction: '',
                      },
                    },
                  },
                  {
                    Destination: '/subpage',
                    Style: 'LogoWidget',
                    Meta: {
                      LogoWidget: {
                        BgColor: Theme.Color.Primary,
                        Subhead: 'Brave.',
                        Headline: '',
                        TextColor: Theme.Color.White,
                        IconColor: Theme.Color.White,
                        IconName: 'plus',
                        TintColor: Theme.Color.Black,
                        TintOpacity: '0.6',
                        BgImageFile: 'be9.png',
                        IconSize: '',
                        CallToAction: '',
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
                    Destination: '/menu',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.White,
                        BgImage: '',
                        Subhead: '',
                        Headline: 'View Our Menu',
                        TextColor: Theme.Color.Black,
                        IconColor: Theme.Color.Primary,
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
              {
                // Begin WidgetContent
                Flex: 1,
                WidgetContent: [
                  {
                    Destination: '/subpage',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.Nightsky,
                        BgImage: '',
                        Subhead: '',
                        Headline: 'Book an appointment',
                        TextColor: Theme.Color.White,
                        IconColor: Theme.Color.White,
                        IconName: 'clock', // FontAwesome Icon Name
                        TintColor: Theme.Color.Black,
                        TintOpacity: '0.6',
                        BgImageFile: 'be12.png',
                        IconSize: '',
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
                    Destination: '/subpage',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.Primary,
                        BgImage: '',
                        Subhead: 'Delivery Status',
                        Headline: 'Available',
                        TextColor: Theme.Color.White,
                        IconColor: Theme.Color.White,
                        IconName: 'car', // FontAwesome Icon Name
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
                Flex: 1,
                WidgetContent: [
                  {
                    Destination: '/subpage',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.Primary,
                        BgImage: '',
                        Subhead: 'Our Store',
                        Headline: 'Open',
                        TextColor: Theme.Color.White,
                        IconColor: Theme.Color.White,
                        IconName: 'store-alt', // FontAwesome Icon Name
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
          // End Columns

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
                Width: 5,
                WidgetContent: [
                  {
                    Destination: '/subpage',
                    Style: 'Generic',
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
                        TintColor: Theme.Color.Black,
                        TintOpacity: '0.7',
                        BgImageFile: 'be13.png',
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
                Width: 5,
                WidgetContent: [
                  {
                    Destination: '/subpage',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.Black,
                        Subhead: 'Reviews',
                        Headline:
                          '“Sierra Well went above and beyond to make sure my husband and I found exactly what we needed.”',
                        TextColor: Theme.Color.White,
                        IconColor: Theme.Color.White,
                        IconName: 'robot', // FontAwesome Icon Name
                        TintColor: Theme.Color.Black,
                        TintOpacity: '0.6',
                        BgImageFile: 'be7.png',
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
                        Subhead: 'Reviews',
                        Headline:
                          '“Sierra Well went above and beyond to make sure my husband and I found exactly what we needed.”',
                        TextColor: Theme.Color.White,
                        IconColor: Theme.Color.White,
                        IconName: 'tree', // FontAwesome Icon Name
                        TintColor: Theme.Color.Black,
                        TintOpacity: '0.6',
                        BgImageFile: 'be15.png',
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
                        Subhead: 'Reviews',
                        Headline:
                          '“Sierra Well went above and beyond to make sure my husband and I found exactly what we needed.”',
                        TextColor: Theme.Color.White,
                        IconColor: Theme.Color.White,
                        IconName: 'rocket', // FontAwesome Icon Name
                        TintColor: Theme.Color.Black,
                        TintOpacity: '0.6',
                        BgImageFile: 'be17.png',
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
                Width: 4,
                WidgetContent: [
                  {
                    Destination: '/locations',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.Sky,
                        BgImage: '',
                        Subhead: '',
                        Headline: 'Locations',
                        TextColor: Theme.Color.White,
                        IconColor: Theme.Color.White,
                        IconName: 'map-marker-alt', // FontAwesome Icon Name
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
                Flex: 1,
                WidgetContent: [
                  {
                    Destination: '/company',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.Nightsky,
                        BgImage: '',
                        Subhead: '',
                        Headline: 'Culture',
                        TextColor: Theme.Color.White,
                        IconColor: Theme.Color.White,
                        IconName: 'palette', // FontAwesome Icon Name
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
                Flex: 1,
                WidgetContent: [
                  {
                    Destination: '/learn',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.Gunmetal,
                        BgImage: '',
                        Subhead: '',
                        Headline: 'Questions',
                        TextColor: Theme.Color.White,
                        IconColor: Theme.Color.White,
                        IconName: 'heart', // FontAwesome Icon Name
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
                Flex: 1,
                WidgetContent: [
                  {
                    Destination: '/specials',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.Primary,
                        BgImage: '',
                        Subhead: '',
                        Headline: 'Specials',
                        TextColor: Theme.Color.White,
                        IconColor: Theme.Color.White,
                        IconName: 'star', // FontAwesome Icon Name
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
        ],
      },
    ],
  },
};
