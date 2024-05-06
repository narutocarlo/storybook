import React from 'react';
import { Tooltip } from 'react-bootstrap';

const CommodityChannelIndex = (props) => (
  <Tooltip className="advance-tooltip" id="button-tooltip" {...props}>
    <p>CCI measures the difference between a securitys price change and its average price
      change. High positive readings indicate that prices are well above their average, which
      is a show of strength. Low negative readings indicate that prices are well below their
      average, which is a show of weakness.</p>
    <p>One of the way to trade (for scalping the market) the overbought and oversold
      conditions with the CCI indicator is to first identify a sideways market. Once you do
      that, look for the highs and the lows that are established by price action. Then, once
      price reaches the upper range, look for the CCI to signal exhausting momentum. </p>
    <p>When the CCI is above +100, this means the price is well above the average price as
      measured by the indicator. When the indicator is below -100, the price is well below the
      average price.</p>
  </Tooltip>
);

const RelativeStrengthIndex = (props) => (
  <Tooltip className="advance-tooltip" id="button-tooltip" {...props}>
    <p>The Relative Strength Index (RSI) is a measurement used by traders to assess the price
      momentum of a stock or other security. The basic idea behind RSI is to measure how
      quickly traders are bidding the price of the security up or down. The RSI is most
      typically used on a 14-day timeframe, measured on a scale from 0 to 100. Readings below
      30 generally indicate that the stock is oversold, while readings above 70 indicate that
      it is overbought.</p>
    <p>The beauty of the RSI is that it can be combined with a number of other indicators and
      can support different trading approaches and strategies. We need to understand that RSI
      is a leading oscillator, which means it shows the potential future changes in the price
      of a stock or index.</p>
  </Tooltip>
);
const MovingAverageConvergenceDivergence = (props) => (
  <Tooltip className="advance-tooltip" id="button-tooltip" {...props}>
    <p>MACD or moving average convergence divergence is a trend-following momentum indicators
      that shows the relationship between two moving averages of a stock.</p>
    <p>MACD shows the strength of the trend as well as its direction. It is the difference
      between a short and long exponential moving average (usually 12-day and 26-day periods).
      A nine-day period’s exponential moving average of MACD, called the Signal Line, is
      plotted on top of the MACD to show buy/sell opportunities.</p>
  </Tooltip>
);

const MoneyFlowIndex = (props) => (
  <Tooltip className="advance-tooltip" id="button-tooltip" {...props}>
    <p>The Money Flow Index (MFI) is a technical indicator that generates overbought or
      oversold signals using both prices and volume data. It ranges from 0 to 100. It is used
      to show the money flow over last 14 trading days.</p>
    <p>An MFI reading above 80 is considered overbought and an MFI reading below 20 is
      considered oversold, although levels of 90 and 10 are also used as thresholds.</p>
    <p>A divergence between the indicator and price is noteworthy. For example, if the
      indicator is rising while the price is falling or flat, the price could start rising.
    </p>
  </Tooltip>
);

const AverageDirectionalIndex = (props) => (
  <Tooltip className="advance-tooltip" id="button-tooltip" {...props}>
    <p>The average directional index (ADX) is used to determine when the price is trending
      strongly. In many cases, it is the ultimate trend indicator. The default setting is 14
      bars, although other time periods can be used.</p>
    <p>The average directional index (ADX) is used to determine when the price is trending
      strongly. In many cases, it is the ultimate trend indicator. The default setting is 14
      bars, although other time periods can be used.</p>
    <p>Low ADX is usually a sign of accumulation or distribution. </p>
    <ul>
      <li>0-25 suggests Absent or Weak Trend</li>
      <li>25-50 suggests Strong Trend</li>
      <li>50-100 suggests Very Strong Trend</li>
    </ul>
  </Tooltip>
);

const SuperTrend = (props) => (
  <Tooltip className="advance-tooltip" id="button-tooltip" {...props}>
    <p>Supertrend indicator is a combination of momentum and volatility. As per many experts,
      supertrend indicator is best to use in combination with other indicators like MACD and
      RSI. This indicator helps you to ride the trend once it established. </p>
  </Tooltip>
);

const BollingerBand = (props) => (
  <Tooltip className="advance-tooltip" id="button-tooltip" {...props}>
    <p>Bollinger bands help determine whether prices are high or low on a relative basis. They
      are used in pairs, both upper and lower bands and in conjunction with a moving average.
      Further, the pair of bands is not intended to be used on its own. Use the pair to
      confirm signals given with other indicators.</p>
    <p>Bollinger Bands are used to measure a markets volatility and identify “overbought” or
      “oversold” conditions. </p>
    <p>In an uptrend, you can long near the lower Bollinger Band. In a downtrend, you can
      short near the upper Bollinger Band. When the Bollinger Bands is in a squeeze, it
      signals the market is “ready” to breakout. You can use the 20-period moving average to
      time your entries in trending market.</p>
  </Tooltip>
);
const AverageTrueRange = (props) => (
  <Tooltip className="advance-tooltip" id="button-tooltip" {...props}>
    <p>The average true range (ATR) is a market volatility indicator typically derived from
      the 14-day simple moving average of a series of true range indicators. </p>
    <p>ATR calculation is based on 14 periods, which can be intraday, daily, weekly, or
      monthly. </p>
    <p>The Average True Range indicator measures the volatility of the market.</p>
  </Tooltip>
);

export {
  CommodityChannelIndex,
  RelativeStrengthIndex,
  MovingAverageConvergenceDivergence,
  MoneyFlowIndex,
  AverageDirectionalIndex,
  SuperTrend,
  BollingerBand,
  AverageTrueRange,
};
