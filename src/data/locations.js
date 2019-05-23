/* eslint-disable */

// Images
import BgPlaceholder from '../assets/images/placeholder_bg.jpg';

// Constants
import { Theme } from 'constants/Theme';

export const LocationsData = {
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
                    Destination: null,
                    Style: 'SideHeader',
                    Meta: {
                      SideHeader: {
                        Header: 'Come in',
                        IntroCopy: 'Conveniently located and discreet.',
                        BodyCopy:
                          'Providing exceptional service and quality medicinal and recreational cannabis across 13 states and 63 locations.',
                        TextColor: Theme.Color.Nightsky,
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
                Width: 5,
                Dots: false,
                WidgetContent: [
                  {
                    Destination: '/subpage',
                    Style: 'LogoWidget',
                    Meta: {
                      LogoWidget: {
                        BgColor: Theme.Color.Nightsky,
                        Subhead: 'Everywhere.',
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
                    Destination: '/learn/all',
                    Style: 'SideWidget',
                    Meta: {
                      SideWidget: {
                        BgColor: Theme.Color.Nightsky,
                        BgImage: '',
                        Header: 'Brookyln',
                        Subhead: 'Serving all boroughss.',
                        IconName: 'book-open',
                        IconColor: Theme.Color.White,
                        TextColor: Theme.Color.White,
                        TintColor: Theme.Color.Black,
                        TintOpacity: '0.6',
                        BgImageFile: 'be13.png',
                      },
                    },
                  },
                  {
                    Destination: '/learn/all',
                    Style: 'SideWidget',
                    Meta: {
                      SideWidget: {
                        BgColor: Theme.Color.Mint,
                        BgImage: '',
                        Header: 'Vermont',
                        Subhead: 'Hello Northeast.',
                        IconName: 'book-open',
                        IconColor: Theme.Color.White,
                        TextColor: Theme.Color.White,
                        TintColor: Theme.Color.Black,
                        TintOpacity: '0.6',
                        BgImageFile: 'be23.png',
                      },
                    },
                  },
                  {
                    Destination: '/learn/all',
                    Style: 'SideWidget',
                    Meta: {
                      SideWidget: {
                        BgColor: Theme.Color.Primary,
                        BgImage: '',
                        Header: 'Phoenix',
                        Subhead: 'Sunshine, sunshine.',
                        IconName: 'book-open',
                        IconColor: Theme.Color.White,
                        TextColor: Theme.Color.White,
                        TintColor: Theme.Color.Black,
                        TintOpacity: '0.6',
                        BgImageFile: 'be25.png',
                      },
                    },
                  },
                  {
                    Destination: '/learn/all',
                    Style: 'SideWidget',
                    Meta: {
                      SideWidget: {
                        BgColor: Theme.Color.Tahoe,
                        BgImage: '',
                        Header: 'Reno',
                        Subhead: 'The biggest little city.',
                        IconName: 'book-open',
                        IconColor: Theme.Color.White,
                        TextColor: Theme.Color.White,
                        TintColor: Theme.Color.Black,
                        TintOpacity: '0.6',
                        BgImageFile: 'placeholder_bg_3.jpg',
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
                Width: 3,
                WidgetContent: [
                  {
                    Destination: '/menu',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.Primary,
                        HideCarat: true,
                        BgImage: '',
                        Subhead: 'Find yours.',
                        Headline: '63 locations nationwide.',
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
                Width: 3,
                WidgetContent: [
                  {
                    Destination: '/locations/new-york/brooklyn',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.White,
                        HideCarat: true,
                        BgImage: '',
                        Subhead: '',
                        Headline: 'Brooklyn',
                        TextColor: Theme.Color.Black,
                        IconColor: Theme.Color.Primary,
                        IconName: 'pizza-slice', // FontAwesome Icon Name
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
                Width: 3,
                WidgetContent: [
                  {
                    Destination: '/locations/california/los-angeles',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.White,
                        HideCarat: true,
                        BgImage: '',
                        Subhead: '',
                        Headline: 'Los Angeles',
                        TextColor: Theme.Color.Black,
                        IconColor: Theme.Color.Primary,
                        IconName: 'umbrella-beach', // FontAwesome Icon Name
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
                Width: 3,
                WidgetContent: [
                  {
                    Destination: '/locations/colorado/denver',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.White,
                        HideCarat: true,
                        BgImage: '',
                        Subhead: '',
                        Headline: 'Denver',
                        TextColor: Theme.Color.Black,
                        IconColor: Theme.Color.Primary,
                        IconName: 'mountain', // FontAwesome Icon Name
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
                Width: 3,
                WidgetContent: [
                  {
                    Destination: '/locations/florida/miami',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.White,
                        HideCarat: true,
                        BgImage: '',
                        Subhead: '',
                        Headline: 'Miami',
                        TextColor: Theme.Color.Black,
                        IconColor: Theme.Color.Primary,
                        IconName: 'water', // FontAwesome Icon Name
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
                Width: 3,
                WidgetContent: [
                  {
                    Destination: '/menu/arizona/phoenix',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.White,
                        HideCarat: true,
                        BgImage: '',
                        Subhead: '',
                        Headline: 'Phoenix',
                        TextColor: Theme.Color.Black,
                        IconColor: Theme.Color.Primary,
                        IconName: 'sun', // FontAwesome Icon Name
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
                Width: 3,
                WidgetContent: [
                  {
                    Destination: '/locations/maryland/baltimore',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.White,
                        HideCarat: true,
                        BgImage: '',
                        Subhead: '',
                        Headline: 'Baltimore',
                        TextColor: Theme.Color.Black,
                        IconColor: Theme.Color.Primary,
                        IconName: 'university', // FontAwesome Icon Name
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
                Width: 3,
                WidgetContent: [
                  {
                    Destination: '/locations/massachusetts/boston',
                    Style: 'Generic',
                    Meta: {
                      Generic: {
                        BgColor: Theme.Color.White,
                        HideCarat: true,
                        BgImage: '',
                        Subhead: '',
                        Headline: 'Boston',
                        TextColor: Theme.Color.Black,
                        IconColor: Theme.Color.Primary,
                        IconName: 'anchor', // FontAwesome Icon Name
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
                Width: 5,
                WidgetContent: [
                  {
                    Destination: '/locations/nevada/carson-city/',
                    Style: 'SideForecast',
                    Meta: {
                      SideForecast: {
                        BgColor: Theme.Color.Gunmetal,
                        BgImage: '',
                        Location: 'Baltimore',
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
                    Destination: '/menu',
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
                    Destination: '/menu',
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
                Width: 5,
                WidgetContent: [
                  {
                    Destination: '/locations/nevada/carson-city/',
                    Style: 'SideForecast',
                    Meta: {
                      SideForecast: {
                        BgColor: Theme.Color.Gunmetal,
                        BgImage: '',
                        Location: 'Carson City',
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
                    Destination: '/menu',
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
                    Destination: '/menu',
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
                Width: 5,
                WidgetContent: [
                  {
                    Destination: '/locations/nevada/carson-city/',
                    Style: 'SideForecast',
                    Meta: {
                      SideForecast: {
                        BgColor: Theme.Color.Gunmetal,
                        BgImage: '',
                        Location: 'Carson City',
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
                    Destination: '/menu',
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
                    Destination: '/menu',
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
                Width: 5,
                WidgetContent: [
                  {
                    Destination: '/locations/nevada/carson-city/',
                    Style: 'SideForecast',
                    Meta: {
                      SideForecast: {
                        BgColor: Theme.Color.Gunmetal,
                        BgImage: '',
                        Location: 'Carson City',
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
                    Destination: '/menu',
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
                    Destination: '/menu',
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
                Width: 5,
                WidgetContent: [
                  {
                    Destination: '/locations/nevada/carson-city/',
                    Style: 'SideForecast',
                    Meta: {
                      SideForecast: {
                        BgColor: Theme.Color.Gunmetal,
                        BgImage: '',
                        Location: 'Carson City',
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
                    Destination: '/menu',
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
                    Destination: '/menu',
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
                Width: 5,
                WidgetContent: [
                  {
                    Destination: '/locations/nevada/carson-city/',
                    Style: 'SideForecast',
                    Meta: {
                      SideForecast: {
                        BgColor: Theme.Color.Gunmetal,
                        BgImage: '',
                        Location: 'Carson City',
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
                    Destination: '/menu',
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
                    Destination: '/menu',
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
          {
            Type: 'divider',
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
                Flex: 1,
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
                Flex: 1,
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
                Flex: 1,
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
                    Style: 'Article',
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
                Flex: 1,
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
                Flex: 1,
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
