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
                WidgetContent: [
                  {
                    Destination: '/subpage',
                    Style: 'Article',
                    Meta: {
                      Generic: {
                        BgColor: 'blue',
                        BgImage: '',
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
          // End Columns
        ],
      },
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
                WidgetContent: [
                  {
                    Destination: '/subpage',
                    Style: 'Article',
                    Meta: {
                      Generic: {
                        BgColor: 'blue',
                        BgImage: '',
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
            Type: 'default',
            Widgets: [
              // Begin Widgets
              {
                // Begin WidgetContent
                WidgetContent: [
                  {
                    Destination: '/subpage',
                    Style: 'Article',
                    Meta: {
                      Generic: {
                        BgColor: 'blue',
                        BgImage: '',
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
            Type: 'default',
            Widgets: [
              // Begin Widgets
              {
                // Begin WidgetContent
                WidgetContent: [
                  {
                    Destination: '/subpage',
                    Style: 'Article',
                    Meta: {
                      Generic: {
                        BgColor: 'blue',
                        BgImage: '',
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
              {
                // Begin WidgetContent
                WidgetContent: [
                  {
                    Destination: '/subpage',
                    Style: 'Article',
                    Meta: {
                      Generic: {
                        BgColor: 'blue',
                        BgImage: '',
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
                WidgetContent: [
                  {
                    Destination: '/subpage',
                    Style: 'Article',
                    Meta: {
                      Generic: {
                        BgColor: 'blue',
                        BgImage: '',
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
            Type: 'default',
            Widgets: [
              // Begin Widgets
              {
                // Begin WidgetContent
                WidgetContent: [
                  {
                    Destination: '/subpage',
                    Style: 'Article',
                    Meta: {
                      Generic: {
                        BgColor: 'blue',
                        BgImage: '',
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
          // End Columns
        ],
      },
      // End Slides
    ],
  },
};
