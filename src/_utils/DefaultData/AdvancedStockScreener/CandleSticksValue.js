// const imgBaseUrl = process.env.IMAGE_BASE_URL;

const CandleSticksValue = [
  {
    'title': 'Bullish',
    'data': [
      {
        'label': 'Doji',
        'imgPath': 'images/advance-stock/candlestick/doji.svg',
        'defaultValue': false,
        'field': 'doji_bullish',
        'name': 'doji_bullish_candlestick',
      },
      {
        'label': 'Doji Star',
        'imgPath': 'images/advance-stock/candlestick/bullish-doji-star.svg',
        'defaultValue': false,
        'field': 'doji_star_bullish',
        'name': 'dojistar_bullish_candlestick',
      },
      {
        'label': 'Gravestone Doji',
        'imgPath': 'images/advance-stock/candlestick/gravestone-doji.svg',
        'defaultValue': false,
        'field': 'grave_stone_doji_bullish',
        'name': 'gravestonedoji_bullish_candlestick',
      },
      {
        'label': 'Dragonfly Doji',
        'imgPath': 'images/advance-stock/candlestick/dragon-fly-doji.svg',
        'defaultValue': false,
        'field': 'dragon_fly_doji_bullish',
        'name': 'dragonflydoji_bullish_candlestick',
      },
      {
        'label': 'Engulfing',
        'imgPath': 'images/advance-stock/candlestick/bullish-engulfing-lines.svg',
        'defaultValue': false,
        'field': 'engul_fing_bullish',
        'name': 'engulfing_bullish_candlestick',
      },
      {
        'label': 'Harami',
        'imgPath': 'images/advance-stock/candlestick/bullish-harami.svg',
        'defaultValue': false,
        'field': 'harami_bullish',
        'name': 'harami_bullish_candlestick',
      },
      {
        'label': 'Harami Cross',
        'imgPath': 'images/advance-stock/candlestick/bullish-harami-cross.svg',
        'defaultValue': false,
        'field': 'harami_cross_bullish',
        'name': 'haramicross_bullish_candlestick',
      },
      {
        'label': 'Inverted Hammer',
        'imgPath': 'images/advance-stock/candlestick/white-gravestone.svg',
        'defaultValue': false,
        'field': 'inverted_hammer_bullish',
        'name': 'inverted_hammer_bullish_candlestick',
      },
      {
        'label': 'Hammer',
        'imgPath': 'images/advance-stock/candlestick/white-hanging-man.svg',
        'defaultValue': false,
        'field': 'hammer_bullish',
        'name': 'hammer_bullish_candlestick',
      },
      {
        'label': 'Marubozu',
        'imgPath': 'images/advance-stock/candlestick/white-marubozu.svg',
        'defaultValue': false,
        'field': 'marubozu_bullish',
        'name': 'marubozu_bullish_candlestick',
      },
    ],
  },
  {
    'title': 'Bearish',
    'data': [
      {
        'label': 'Doji',
        'imgPath': 'images/advance-stock/candlestick/doji.svg',
        'defaultValue': false,
        'field': 'doji_bearish',
        'name': 'doji_bearish_candlestick',
      },
      {
        'label': 'Doji Star',
        'imgPath': 'images/advance-stock/candlestick/bearish-doji-star.svg',
        'defaultValue': false,
        'field': 'doji_star_bearish',
        'name': 'dojistar_bearish_candlestick',
      },
      {
        'label': 'Gravestone Doji',
        'imgPath': 'images/advance-stock/candlestick/gravestone-doji.svg',
        'defaultValue': false,
        'field': 'grave_stone_doji_bearish',
        'name': 'gravestonedoji_bearish_candlestick',
      },
      {
        'label': 'Dragonfly Doji',
        'imgPath': 'images/advance-stock/candlestick/dragon-fly-doji.svg',
        'defaultValue': false,
        'field': 'dragon_fly_doji_bearish',
        'name': 'dragonflydoji_bearish_candlestick',
      },
      {
        'label': 'Engulfing',
        'imgPath': 'images/advance-stock/candlestick/bearish-engulfing-lines.svg',
        'defaultValue': false,
        'field': 'engul_fing_bearish',
        'name': 'engulfing_bearish_candlestick',
      },
      {
        'label': 'Harami',
        'imgPath': 'images/advance-stock/candlestick/bearish-harami.svg',
        'defaultValue': false,
        'field': 'harami_bearish',
        'name': 'harami_bearish_candlestick',
      },
      {
        'label': 'Harami Cross',
        'imgPath': 'images/advance-stock/candlestick/bearish-harami-cross.svg',
        'defaultValue': false,
        'field': 'harami_cross_bearish',
        'name': 'haramicross_bearish_candlestick',
      },
      {
        'label': 'Inverted Hammer',
        'imgPath': 'images/advance-stock/candlestick/black-gravestone.svg',
        'defaultValue': false,
        'field': 'inverted_hammer_bearish',
        'name': 'inverted_hammer_bearish_candlestick',
      },
      {
        'label': 'Hammer',
        'imgPath': 'images/advance-stock/candlestick/black-hanging-man.svg',
        'defaultValue': false,
        'field': 'hammer_bearish',
        'name': 'hammer_bearish_candlestick',
      },
      {
        'label': 'Marubozu',
        'imgPath': 'images/advance-stock/candlestick/black-marubozu.svg',
        'defaultValue': false,
        'field': 'marubozu_bearish',
        'name': 'marubozu_bearish_candlestick',
      },
    ],
  },
  {
    'title': 'Trends',
    'data': [
      {
        'label': 'Upside Tasuki Gap',
        'imgPath': 'images/advance-stock/candlestick/upside-tasuki-gap.svg',
        'defaultValue': false,
        'field': 'tasuki_gap_bullish',
        'name': 'tasukigap_bullish_candlestick',
      },
      {
        'label': 'Downside Tasuki Gap',
        'imgPath': 'images/advance-stock/candlestick/downside-tasuki-gap.svg',
        'defaultValue': false,
        'field': 'tasuki_gap_bearish',
        'name': 'tasukigap_bearish_candlestick',
      },
      {
        'label': 'Bullish Piercing Line',
        'imgPath': 'images/advance-stock/candlestick/piercing-line.svg',
        'defaultValue': false,
        'field': 'piercing_line_bullish',
        'name': 'piercingline_bullish_candlestick',
      },
      {
        'label': 'Bearish Piercing Line',
        'imgPath': 'images/advance-stock/candlestick/piercing-line.svg',
        'defaultValue': false,
        'field': 'piercing_line_bearish',
        'name': 'piercingline_bearish_candlestick',
      },
      {
        'label': 'Morning Star',
        'imgPath': 'images/advance-stock/candlestick/white-morning-star.svg',
        'defaultValue': false,
        'field': 'morning_star_bullish',
        'name': 'morningstar',
      },
      {
        'label': 'Evening Star',
        'imgPath': 'images/advance-stock/candlestick/black-evening-star.svg',
        'defaultValue': false,
        'field': 'evening_star_bearish',
        'name': 'eveningstar',
      },
      {
        'label': 'Three Black Crows',
        'imgPath': 'images/advance-stock/candlestick/three-black-crows.svg',
        'defaultValue': false,
        'field': 'three_black_crows_bearish',
        'name': 'ThreeBlackCrows',
      },
      {
        'label': 'Three White Soldiers',
        'imgPath': 'images/advance-stock/candlestick/three-white-soldiers.svg',
        'defaultValue': false,
        'field': 'three_white_soldiers_bullish',
        'name': 'ThreeWhiteSoldiers',
      },
      {
        'label': 'Dark Cloud Cover',
        'imgPath': 'images/advance-stock/candlestick/dark-cloud-cover.svg',
        'defaultValue': false,
        'field': 'dark_cloud_cover_bearish',
        'name': 'DarkCloudCover',
      },
    ],
  },
];

export default CandleSticksValue;
