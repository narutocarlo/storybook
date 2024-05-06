const imgBaseUrl = process.env.IMAGE_BASE_URL;
const NarrowRangeBreakoutsValue = [
  {
    'title': 'Narrow Range Days',
    'data': [
      {
        'label': 'NR4 Day',
        'imgPath': imgBaseUrl+'images/advance-stock/nr4.svg',
        'defaultValue': false,
        'field': 'nr4',
        'name': 'narrow-range-breakout',
      },
      {
        'label': 'NR7 Day',
        'imgPath': imgBaseUrl+'images/advance-stock/nr7.svg',
        'defaultValue': false,
        'field': 'nr7',
        'name': 'narrow-range-breakout',
      },
    ],
  },
];

const RangeBreakoutsValue = [
  {
    'title': '5 Day Range',
    'data': [
      {
        'label': 'Close Above 5 Day Range',
        'imgPath': imgBaseUrl+'images/advance-stock/up-5d.svg',
        'defaultValue': false,
        'field': '_5_days_high_above',
        'name': 'range-breakout',
      },
      {
        'label': 'Close Below 5 Day Range',
        'imgPath': imgBaseUrl+'images/advance-stock/down-5d.svg',
        'defaultValue': false,
        'field': '_5_days_high_below',
        'name': 'range-breakout',
      },
      {
        'label': 'Close Above 5 Day Range for Last 2 Days',
        'imgPath': imgBaseUrl+'images/advance-stock/up-hi-5d.svg',
        'defaultValue': false,
        'field': '_5_days_high_2_above',
        'name': 'range-breakout',
      },
      {
        'label': 'Close Below 5 Day Range for Last 2 Days',
        'imgPath': imgBaseUrl+'images/advance-stock/down-lo-5d.svg',
        'defaultValue': false,
        'field': '_5_days_high_2_below',
        'name': 'range-breakout',
      },
      {
        'label': 'Close New High Above 5 Day Range',
        'imgPath': imgBaseUrl+'images/advance-stock/up-5d-hi.svg',
        'defaultValue': false,
        'field': 'new_5_days_high_above',
        'name': 'range-breakout',
      },
      {
        'label': 'Close New Low Below 5 Day Range',
        'imgPath': imgBaseUrl+'images/advance-stock/down-5d-lo.svg',
        'defaultValue': false,
        'field': 'new_5_days_low_below',
        'name': 'range-breakout',
      },
    ],
  },
  {
    'title': '20 Day Range',
    'data': [
      {
        'label': 'Close Above 20 Day Range',
        'imgPath': imgBaseUrl+'images/advance-stock/up-20d.svg',
        'defaultValue': false,
        'field': '_20_days_high_above',
        'name': 'range-breakout',
      },
      {
        'label': 'Close Below 20 Day Range',
        'imgPath': imgBaseUrl+'images/advance-stock/down-20d.svg',
        'defaultValue': false,
        'field': '_20_days_high_below',
        'name': 'range-breakout',
      },
      {
        'label': 'Close Above 20 Day Range for Last 2 Days',
        'imgPath': imgBaseUrl+'images/advance-stock/up-hi-20d.svg',
        'defaultValue': false,
        'field': '_20_days_high_2_above',
        'name': 'range-breakout',
      },
      {
        'label': 'Close Below 20 Day Range for Last 2 Days',
        'imgPath': imgBaseUrl+'images/advance-stock/down-lo-20d.svg',
        'defaultValue': false,
        'field': '_20_days_high_2_below',
        'name': 'range-breakout',
      },
      {
        'label': 'Close New High Above 20 Day Range',
        'imgPath': imgBaseUrl+'images/advance-stock/up-20d-hi.svg',
        'defaultValue': false,
        'field': 'new_20_days_high_above',
        'name': 'range-breakout',
      },
      {
        'label': 'Close New Low Below 20 Day Range',
        'imgPath': imgBaseUrl+'images/advance-stock/down-20d-lo.svg',
        'defaultValue': false,
        'field': 'new_20_days_low_below',
        'name': 'range-breakout',
      },
    ],
  },
  {
    'title': '50 Day Range',
    'data': [
      {
        'label': 'Close Above 50 Day Range',
        'imgPath': imgBaseUrl+'images/advance-stock/up-50d.svg',
        'defaultValue': false,
        'field': '_50_days_high_above',
        'name': 'range-breakout',
      },
      {
        'label': 'Close Below 50 Day Range',
        'imgPath': imgBaseUrl+'images/advance-stock/down-50d.svg',
        'defaultValue': false,
        'field': '_50_days_high_below',
        'name': 'range-breakout',
      },
      {
        'label': 'Close Above 50 Day Range for Last 2 Days',
        'imgPath': imgBaseUrl+'images/advance-stock/up-hi-50d.svg',
        'defaultValue': false,
        'field': '_50_days_high_2_above',
        'name': 'range-breakout',
      },
      {
        'label': 'Close Below 50 Day Range for Last 2 Days',
        'imgPath': imgBaseUrl+'images/advance-stock/down-lo-50d.svg',
        'defaultValue': false,
        'field': '_50_days_high_2_below',
        'name': 'range-breakout',
      },
      {
        'label': 'Close New High Above 50 Day Range',
        'imgPath': imgBaseUrl+'images/advance-stock/up-50d-hi.svg',
        'defaultValue': false,
        'field': 'new_50_days_high_above',
        'name': 'range-breakout',
      },
      {
        'label': 'Close New Low Below 50 Day Range',
        'imgPath': imgBaseUrl+'images/advance-stock/down-50d-lo.svg',
        'defaultValue': false,
        'field': 'new_50_days_low_below',
        'name': 'range-breakout',
      },
    ],
  },
  {
    'title': '100 Day Range',
    'data': [
      {
        'label': 'Close Above 100 Day Range',
        'imgPath': imgBaseUrl+'images/advance-stock/up-100d.svg',
        'defaultValue': false,
        'field': '_100_days_high_above',
        'name': 'range-breakout',
      },
      {
        'label': 'Close Below 100 Day Range',
        'imgPath': imgBaseUrl+'images/advance-stock/down-100d.svg',
        'defaultValue': false,
        'field': '_100_days_high_below',
        'name': 'range-breakout',
      },
      {
        'label': 'Close Above 100 Day Range for Last 2 Days',
        'imgPath': imgBaseUrl+'images/advance-stock/up-hi-100d.svg',
        'defaultValue': false,
        'field': '_100_days_high_2_above',
        'name': 'range-breakout',
      },
      {
        'label': 'Close Below 100 Day Range for Last 2 Days',
        'imgPath': imgBaseUrl+'images/advance-stock/down-lo-100d.svg',
        'defaultValue': false,
        'field': '_100_days_high_2_below',
        'name': 'range-breakout',
      },
      {
        'label': 'Close New High Above 100 Day Range',
        'imgPath': imgBaseUrl+'images/advance-stock/up-100d-hi.svg',
        'defaultValue': false,
        'field': 'new_100_days_high_above',
        'name': 'range-breakout',
      },
      {
        'label': 'Close New Low Below 100 Day Range',
        'imgPath': imgBaseUrl+'images/advance-stock/down-100d-lo.svg',
        'defaultValue': false,
        'field': 'new_100_days_low_below',
        'name': 'range-breakout',
      },
    ],
  },
  {
    'title': '200 Day Range',
    'data': [
      {
        'label': 'Close Above 200 Day Range',
        'imgPath': imgBaseUrl+'images/advance-stock/up-200d.svg',
        'defaultValue': false,
        'field': '_200_days_high_above',
        'name': 'range-breakout',
      },
      {
        'label': 'Close Below 200 Day Range',
        'imgPath': imgBaseUrl+'images/advance-stock/down-200d.svg',
        'defaultValue': false,
        'field': '_200_days_high_below',
        'name': 'range-breakout',
      },
      {
        'label': 'Close Above 200 Day Range for Last 2 Days',
        'imgPath': imgBaseUrl+'images/advance-stock/up-hi-200d.svg',
        'defaultValue': false,
        'field': '_200_days_high_2_above',
        'name': 'range-breakout',
      },
      {
        'label': 'Close Below 200 Day Range for Last 2 Days',
        'imgPath': imgBaseUrl+'images/advance-stock/down-lo-200d.svg',
        'defaultValue': false,
        'field': '_200_days_high_2_below',
        'name': 'range-breakout',
      },
      {
        'label': 'Close New High Above 200 Day Range',
        'imgPath': imgBaseUrl+'images/advance-stock/up-200d-hi.svg',
        'defaultValue': false,
        'field': 'new_200_days_high_above',
        'name': 'range-breakout',
      },
      {
        'label': 'Close New Low Below 200 Day Range',
        'imgPath': imgBaseUrl+'images/advance-stock/down-200d-lo.svg',
        'defaultValue': false,
        'field': 'new_200_days_low_below',
        'name': 'range-breakout',
      },
    ],
  },
];

export {
  NarrowRangeBreakoutsValue,
  RangeBreakoutsValue,
};
