const GroupFilter = [
  {
    'title': 'Moving Average Crossovers',
    'data': [
      '_20_day_sma_below',
      '_20_day_sma_above',
      '_50_day_sma_below',
      '_50_day_sma_above',
      '_100_day_sma_below',
      '_100_day_sma_above',
      '_200_day_sma_below',
      '_200_day_sma_above',
      '_5_day_ema_below',
      '_5_day_ema_above',
      '_8_day_ema_below',
      '_8_day_ema_above',
      '_20_day_ema_below',
      '_20_day_ema_above',
      '_26_day_ema_below',
      '_26_day_ema_above',
      '_50_day_ema_below',
      '_50_day_ema_above',
      '_200_day_ema_below',
      '_200_day_ema_above',
      '_5_20_sma_crossover_below',
      '_5_20_sma_crossover_above',
      '_20_50_sma_crossover_below',
      '_20_50_sma_crossover_above',
      '_20_100_sma_crossover_below',
      '_20_100_sma_crossover_above',
      '_50_100_sma_crossover_below',
      '_50_100_sma_crossover_above',
      '_50_200_sma_crossover_below',
      '_50_200_sma_crossover_above',
      '_5_20_ema_crossover_below',
      '_5_20_ema_crossover_above',
      '_8_20_ema_crossover_below',
      '_8_20_ema_crossover_above',
      '_12_26_ema_crossover_below',
      '_12_26_ema_crossover_above',
      '_9_30_ema_crossover_below',
      '_9_30_ema_crossover_above',
      '_20_50_ema_crossover_below',
      '_20_50_ema_crossover_above',
      '_50_200_ema_crossover_below',
      '_50_200_ema_crossover_above',
      'ema5_sma20_cross_below',
      'ema5_sma20_cross_above',
      'ema20_sma50_cross_below',
      'ema20_sma50_cross_above',
      'ema50_sma100_cross_below',
      'ema50_sma100_cross_above',
      'nr4',
      'nr7',
      '_5_days_high_above',
      '_5_days_high_below',
      '_5_days_high_2_above',
      '_5_days_high_2_below',
      'new_5_days_high_above',
      'new_5_days_low_below',
      '_20_days_high_above',
      '_20_days_high_below',
      '_20_days_high_2_above',
      '_20_days_high_2_below',
      'new_20_days_high_above',
      'new_20_days_low_below',
      '_50_days_high_above',
      '_50_days_high_below',
      '_50_days_high_2_above',
      '_50_days_high_2_below',
      'new_50_days_high_above',
      'new_50_days_low_below',
      '_100_days_high_above',
      '_100_days_high_below',
      '_100_days_high_2_above',
      '_100_days_high_2_below',
      'new_100_days_high_above',
      'new_100_days_low_below',
      '_200_days_high_above',
      '_200_days_high_below',
      '_200_days_high_2_above',
      '_200_days_high_2_below',
      'new_200_days_high_above',
      'new_200_days_low_below',
    ],
  },
  {
    'title': 'Technical Indicators',
    'data': [
      'cci_100_above',
      'cci_100_below',
      'cci_200_above',
      'cci_200_below',
      'cci_cross_100_above',
      'cci_cross_100_below',
      'cci_cross_neg_100_above',
      'cci_cross_neg_100_below',
      'rsi_cross_30_below',
      'rsi_cross_70_above',
      'rsi_cross_20_below',
      'rsi_cross_80_above',
      'rsi_2_70_above',
      'rsi_2_70_below',
      'macd_cross_below',
      'macd_cross_above',
      'macd_cross_above_zero',
      'macd_cross_below_zero',
      'mfi_above_80',
      'mfi_below_20',
      'mfi_above_90',
      'mfi_below_10',
      'up_adx_between_25_50',
      'strong_up_adx_above_50',
      'down_adx_between_25_50',
      'strong_down_adx_above_50',
      'adx_below_50',
      'supr_buy',
      'supr_sell',
      'upper_bb_below',
      'upper_bb_above',
      'lower_bb_below',
      'lower_bb_above',
      'atr_inc_3',
      'atr_dec_3',
      'atr_inc_5',
      'atr_dec_5',
    ],
  },
  {
    title: 'Price Action & Volume',
    data: [
      'close_gainers',
      'close_losers',
      'close_more_5_gain',
      'close_more_5_down',
      'same_open_high',
      'same_open_low',
      'same_approx_open_high',
      'same_approx_open_low',
      'close_nearday_high',
      'close_nearday_low',
      'close_near_open',
      'higher_high',
      'higher_low',
      'higher_high_higher_low',
      'lower_high',
      'lower_low',
      'lower_high_lower_low',
      'inside_day',
      'outside_day',
      'high_delivery_age',
      'lower_high_delivery_qty',
      'high_delivery_age_qty',
      'high_trade_qty',
      'above_r2',
      'between_r1_r2',
      'above_pivot',
      'below_pivot',
      'between_s2_s1',
      's2_support',
      'gap_up_opening',
      'gap_up_opening_fill',
      'gap_up_opening_unfill',
      'gap_down_opening',
      'gap_down_opening_fill',
      'gap_down_opening_unfill',
    ],
  },
  {
    title: 'CandleSticks',
    data: [
      'doji_bullish',
      'doji_bearish',
      'doji_star_bullish',
      'doji_star_bearish',
      'engul_fing_bullish',
      'engul_fing_bearish',
      'harami_bullish',
      'harami_bearish',
      'harami_cross_bullish',
      'harami_cross_bearish',
      'evening_star_bearish',
      'inverted_hammer_bullish',
      'inverted_hammer_bearish',
      'hammer_bullish',
      'hammer_bearish',
      'marubozu_bullish',
      'marubozu_bearish',
      'morning_star_bullish',
      'dark_cloud_cover_bearish',
      'tasuki_gap_bullish',
      'tasuki_gap_bearish',
      'dragon_fly_doji_bullish',
      'dragon_fly_doji_bearish',
      'piercing_line_bullish',
      'piercing_line_bearish',
      'grave_stone_doji_bullish',
      'grave_stone_doji_bearish',
      'three_black_crows_bearish',
      'three_white_soldiers_bullish',
    ],
  },
];

export default GroupFilter;
