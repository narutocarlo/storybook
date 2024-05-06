const imgBaseUrl = process.env.IMAGE_BASE_URL;
const VolatilityIndicatorsValue = [
  {
    'title': 'Bollinger Band (BB)',
    'data': [
      {
        'label': 'Close Crossing Upper Bolinger Band from Below',
        'imgPath': imgBaseUrl+'images/advance-stock/Close-Crossing-Upper-Bolinger-Band-from-Below.svg',
        'defaultValue': false,
        'field': 'upper_bb_below',
        'name': 'bollinger-band',
      },
      {
        'label': 'Close Crossing Upper Bolinger Band from Above',
        'imgPath': imgBaseUrl+'images/advance-stock/Close-Crossing-Upper-Bolinger-Band-from-Above.svg',
        'defaultValue': false,
        'field': 'upper_bb_above',
        'name': 'bollinger-band',
      },
      {
        'label': 'Close Crossing Lower Bolinger Band from Below',
        'imgPath': imgBaseUrl+'images/advance-stock/Close-Crossing-Lower-Bolinger-Band-from-Below.svg',
        'defaultValue': false,
        'field': 'lower_bb_below',
        'name': 'bollinger-band',
      },
      {
        'label': 'Close Crossing Lower Bolinger Band from Above',
        'imgPath': imgBaseUrl+'images/advance-stock/Close-Crossing-Lower-Bolinger-Band-from-Above.svg',
        'defaultValue': false,
        'field': 'lower_bb_above',
        'name': 'bollinger-band',
      },
    ],
  },
  {
    'title': 'Average True Range (ATR)',
    'data': [
      {
        'label': 'ATR Increasing for 3 Days',
        'imgPath': imgBaseUrl+'images/advance-stock/ATR-Increasing-for-3Days.svg',
        'defaultValue': false,
        'field': 'atr_inc_3',
        'name': 'average-true-range',
      },
      {
        'label': 'ATR Decreasing for 3 Days',
        'imgPath': imgBaseUrl+'images/advance-stock/ATR-Decreasing-for-3Days.svg',
        'defaultValue': false,
        'field': 'atr_dec_3',
        'name': 'average-true-range',
      },
      {
        'label': 'ATR Increasing for 5 Days',
        'imgPath': imgBaseUrl+'images/advance-stock/ATR-Increasing-for-5Days.svg',
        'defaultValue': false,
        'field': 'atr_inc_5',
        'name': 'average-true-range',
      },
      {
        'label': 'ATR Decreasing for 5 Days',
        'imgPath': imgBaseUrl+'images/advance-stock/ATR-Decreasing-for-5Days.svg',
        'defaultValue': false,
        'field': 'atr_dec_5',
        'name': 'average-true-range',
      },
    ],
  },
];

export {
  VolatilityIndicatorsValue,
};
