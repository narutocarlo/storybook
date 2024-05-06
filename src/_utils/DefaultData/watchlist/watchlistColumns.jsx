export const allColumns = {
  'Financials': [{
    column: 'dividend_yield',
    title: 'Divident Yield',
    status: false,
  },
  {
    column: 'market_cap',
    title: 'Market Cap',
    status: false,
  },
  {
    column: 'roce',
    title: 'ROCE',
    status: false,
  },
  {
    column: 'roe',
    title: 'ROE',
    status: false,
  },
  {
    column: 'stock_pe',
    title: 'Stock P/E',
    status: false,
  }],
  'Price Action': [{
    column: 'change',
    title: 'Change',
    status: true,
  },
  {
    column: 'changePercent',
    title: '%Change',
    status: true,
  },
  {
    column: 'currentPrice',
    title: 'Current Price',
    status: true,
  },
  {
    column: 'prev_close',
    title: 'Prev. Close',
    status: false,
  },
  {
    column: 'todayLH',
    title: 'Today L/H',
    status: false,
  },
  {
    column: 'volume',
    title: 'Volume',
    status: true,
  }],
  'EMA': [{
    column: 'e5ema',
    title: '5 EMA',
    status: false,
  },
  {
    column: 'e8ema',
    title: '8 EMA',
    status: false,
  },
  {
    column: 'e9ema',
    title: '9 EMA',
    status: false,
  },
  {
    column: 'e12ema',
    title: '12 EMA',
    status: false,
  },
  {
    column: 'e20ema',
    title: '20 EMA',
    status: false,
  },
  {
    column: 'e26ema',
    title: '26 EMA',
    status: false,
  },
  {
    column: 'e30ema',
    title: '30 EMA',
    status: false,
  },
  {
    column: 'e50ema',
    title: '50 EMA',
    status: false,
  },
  {
    column: 'e200ema',
    title: '200 EMA',
    status: false,
  }],
  'SMA': [{
    column: 'e5sma',
    title: '5 SMA',
    status: false,
  },
  {
    column: 'e20sma',
    title: '20 SMA',
    status: false,
  },
  {
    column: 'e50sma',
    title: '50 SMA',
    status: false,
  },
  {
    column: 'e100sma',
    title: '100 SMA',
    status: false,
  },
  {
    column: 'e200sma',
    title: '200 SMA',
    status: false,
  }],
};
export const watch = {
  'dividend_yield': {
    title: 'Divident Yield',
  },
  'market_cap': {
    title: 'Market Cap',
  },
  'roce': {
    title: 'ROCE',
  },
  'roe': {
    title: 'ROE',
  },
  'stock_pe': {
    title: 'Stock P/E',
  },
  'symbolName': {
    title: 'Stock Name',
  },
  'change': {
    title: 'Change',
  },
  'changePercent': {
    title: '%Change',
  },
  'currentPrice': {
    title: 'Current Price',
  },
  'prev_close': {
    title: 'Prev. Close',
  },
  'todayLH': {
    title: 'Today L/H',
  },
  'volume': {
    title: 'Volume',
  },
  'e5ema': {
    title: '5 EMA',
  },
  'e8ema': {
    title: '8 EMA',
  },
  'e9ema': {
    title: '9 EMA',
  },
  'e12ema': {
    title: '12 EMA',
  },
  'e20ema': {
    title: '20 EMA',
  },
  'e26ema': {
    title: '26 EMA',
  },
  'e30ema': {
    title: '30 EMA',
  },
  'e50ema': {
    title: '50 EMA',
  },
  'e200ema': {
    title: '200 EMA',
  },
  'e5sma': {
    title: '5 SMA',
  },
  'e20sma': {
    title: '20 SMA',
  },
  'e50sma': {
    title: '50 SMA',
  },
  'e100sma': {
    title: '100 SMA',
  },
  'e200sma': {
    title: '200 SMA',
  },

};

export const defaultColumns = {
  currentPrice: true,
  volume: true,
  change: true,
  changePercent: true,
  prev_close: false,
  dividend_yield: false,
  market_cap: false,
  roce: false,
  roe: false,
  stock_pe: false,
  todayLH: false,
  e5ema: false,
  e8ema: false,
  e9ema: false,
  e12ema: false,
  e20ema: false,
  e26ema: false,
  e30ema: false,
  e50ema: false,
  e200ema: false,
  e5sma: false,
  e20sma: false,
  e50sma: false,
  e100sma: false,
  e200sma: false,
};

export const colorName = [].concat(...new Array(50).fill(
  ['blue', 'pink', 'yellow', 'green', 'purple', 'red', 'orange']));
