/* eslint-disable */

// Images
import BgPlaceholder from '../assets/images/placeholder_bg.jpg';
import BgPlaceholder2 from '../assets/images/placeholder_bg_2.jpg';
import BgPlaceholder3 from '../assets/images/placeholder_bg_3.jpg';

// Constants
import { Theme } from 'constants/Theme';

export const LearnData = {
  PageTheme: {
    Color: {
      Background: Theme.Color.Background,
      Primary: Theme.Color.Nightsky,
      Secondary: Theme.Color.Nightsky,
      Tertiary: Theme.Color.Background,
    },
  },
  SlideGroup: {
    Name: 'learn-slides',
    Slides: [
      // Begin Slides
      {
        Name: 'learn-slides-1',
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
                    Destination: '/learn/all',
                    Style: 'SideWidget',
                    Meta: {
                      SideWidget: {
                        BgColor: Theme.Color.Gunmetal,
                        BgImage: '',
                        Header: 'Learn',
                        Subhead: 'Dive in and read all of our answers.',
                        IconName: 'book-open',
                        IconColor: Theme.Color.White,
                        TextColor: Theme.Color.White,
                        TintColor: '',
                        TintOpacity: '',
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
                    Destination: '/learn/medical',
                    Style: 'SideWidget',
                    Meta: {
                      SideWidget: {
                        BgColor: Theme.Color.Tahoe,
                        BgImage: '',
                        Header: 'Medical',
                        Subhead: 'Cannabis and it’s Medicinal Properties.',
                        IconName: 'briefcase-medical',
                        IconColor: Theme.Color.White,
                        TextColor: Theme.Color.White,
                        TintColor: '',
                        TintOpacity: '',
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
                    Destination: '/learn/medical/medical-cards',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.Tahoe,
                        BgImage: '',
                        Subhead: '',
                        Headline: 'Medical Cards',
                        TextColor: Theme.Color.White,
                        IconColor: Theme.Color.White,
                        IconName: 'first-aid', // FontAwesome Icon Name
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
                    Destination: '/learn/medical/purchasing',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.Tahoe,
                        BgImage: '',
                        Subhead: '',
                        Headline: 'Purchasing',
                        TextColor: Theme.Color.White,
                        IconColor: Theme.Color.White,
                        IconName: 'clinic-medical', // FontAwesome Icon Name
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
                    Destination: '/learn/medical/dosage',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.Tahoe,
                        BgImage: '',
                        Subhead: '',
                        Headline: 'Dosage',
                        TextColor: Theme.Color.White,
                        IconColor: Theme.Color.White,
                        IconName: 'prescription-bottle-alt', // FontAwesome Icon Name
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
                    Destination: '/learn/medical',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.White,
                        BgImage: '',
                        Subhead: '',
                        Headline: 'View All',
                        TextColor: Theme.Color.Black,
                        IconColor: Theme.Color.Black,
                        IconName: '', // FontAwesome Icon Name
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
                    Destination: '/learn/recreational',
                    Style: 'SideWidget',
                    Meta: {
                      SideWidget: {
                        BgColor: Theme.Color.Mint,
                        BgImage: '',
                        Header: 'Recreational',
                        Subhead:
                          'Integrating Cannabis into your Recreational lifestyle.',
                        IconName: 'cannabis',
                        IconColor: Theme.Color.Black,
                        TextColor: Theme.Color.Black,
                        TintColor: '',
                        TintOpacity: '',
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
                    Destination: '/learn/recreational/out-of-state',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.Mint,
                        BgImage: '',
                        Subhead: '',
                        Headline: 'Out of State',
                        TextColor: Theme.Color.Black,
                        IconColor: Theme.Color.Black,
                        IconName: 'building', // FontAwesome Icon Name
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
                    Destination: '/learn/recreational/growing',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.Mint,
                        BgImage: '',
                        Subhead: '',
                        Headline: 'Growing',
                        TextColor: Theme.Color.Black,
                        IconColor: Theme.Color.Black,
                        IconName: 'seedling', // FontAwesome Icon Name
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
                    Destination: '/learn/recreational/purchasing',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.Mint,
                        BgImage: '',
                        Subhead: '',
                        Headline: 'Purchasing',
                        TextColor: Theme.Color.Black,
                        IconColor: Theme.Color.Black,
                        IconName: 'credit-card', // FontAwesome Icon Name
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
                        BgColor: Theme.Color.White,
                        BgImage: '',
                        Subhead: '',
                        Headline: 'View All',
                        TextColor: Theme.Color.Black,
                        IconColor: Theme.Color.Black,
                        IconName: '', // FontAwesome Icon Name
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
            Type: 'divider',
          },

          // End Columns
        ],
      },
      {
        Name: 'learn-slides-2',
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
                    Destination: '/learn/safety',
                    Style: 'SideWidget',
                    Meta: {
                      SideWidget: {
                        BgColor: Theme.Color.Dank,
                        BgImage: '',
                        Header: 'Safety',
                        Subhead: 'Responsible and educated Cannabis treatment.',
                        IconName: 'briefcase-medical',
                        IconColor: Theme.Color.Black,
                        TextColor: Theme.Color.Black,
                        TintColor: '',
                        TintOpacity: '',
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
                    Destination: '/learn/safety/medical-cards',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.Dank,
                        BgImage: '',
                        Subhead: '',
                        Headline: 'Medical Cards',
                        TextColor: Theme.Color.Black,
                        IconColor: Theme.Color.Black,
                        IconName: 'first-aid', // FontAwesome Icon Name
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
                    Destination: '/learn/safety/purchasing',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.Dank,
                        BgImage: '',
                        Subhead: '',
                        Headline: 'Purchasing',
                        TextColor: Theme.Color.Black,
                        IconColor: Theme.Color.Black,
                        IconName: 'clinic-medical', // FontAwesome Icon Name
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
                    Destination: '/learn/safety/dosage',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.Dank,
                        BgImage: '',
                        Subhead: '',
                        Headline: 'Dosage',
                        TextColor: Theme.Color.Black,
                        IconColor: Theme.Color.Black,
                        IconName: 'prescription-bottle-alt', // FontAwesome Icon Name
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
                    Destination: '/learn/safety',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.White,
                        BgImage: '',
                        Subhead: '',
                        Headline: 'View All',
                        TextColor: Theme.Color.Black,
                        IconColor: Theme.Color.Black,
                        IconName: '', // FontAwesome Icon Name
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
                    Destination: '/learn/industry',
                    Style: 'SideWidget',
                    Meta: {
                      SideWidget: {
                        BgColor: Theme.Color.Sunset,
                        BgImage: '',
                        Header: 'Industry',
                        Subhead: 'The ins and outs of the Cannabis Industry.',
                        IconName: 'cannabis',
                        IconColor: Theme.Color.White,
                        TextColor: Theme.Color.White,
                        TintColor: '',
                        TintOpacity: '',
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
                    Destination: '/learn/industry/out-of-state',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.Sunset,
                        BgImage: '',
                        Subhead: '',
                        Headline: 'Out of State',
                        TextColor: Theme.Color.White,
                        IconColor: Theme.Color.White,
                        IconName: 'building', // FontAwesome Icon Name
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
                    Destination: '/learn/industry/growing',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.Sunset,
                        BgImage: '',
                        Subhead: '',
                        Headline: 'Growing',
                        TextColor: Theme.Color.White,
                        IconColor: Theme.Color.White,
                        IconName: 'seedling', // FontAwesome Icon Name
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
                    Destination: '/learn/industry/purchasing',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.Sunset,
                        BgImage: '',
                        Subhead: '',
                        Headline: 'Purchasing',
                        TextColor: Theme.Color.White,
                        IconColor: Theme.Color.White,
                        IconName: 'credit-card', // FontAwesome Icon Name
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
                    Destination: '/learn/industry/',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.White,
                        BgImage: '',
                        Subhead: '',
                        Headline: 'View All',
                        TextColor: Theme.Color.Black,
                        IconColor: Theme.Color.Black,
                        IconName: '', // FontAwesome Icon Name
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
                    Destination: '/locations',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.Tahoe,
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
                    Destination: '/culture',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.Indigo,
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
                    Destination: '/outreach',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.Sunset,
                        BgImage: '',
                        Subhead: '',
                        Headline: 'Outreach',
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
          // End Columns
        ],
      },
      // End Slides
    ],
  },
};
