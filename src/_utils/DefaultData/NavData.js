const imgBaseUrl = process.env.IMAGE_BASE_URL;
export const NavBarDataJson = [
  {
    title: 'Options',
    subMenu: [
      {
        subTitle: 'Nifty',
        pages: [
          {
            pageTitle: 'Nifty Open Interest',
            url: '/live-nifty-open-interest',
          },
          {
            pageTitle: 'Nifty Change in Open Interest',
            url: '/nifty-live-change-in-oi',
          },
          {
            pageTitle: 'Nifty Option Chain Put Call Ratio',
            url: '/nifty-put-call-ratio',
          },
          {
            pageTitle: 'Nifty Option Chain Put Call Ratio Volume',
            url: '/nifty-put-call-ratio-volume',
          },
          {
            pageTitle: 'Nifty Live Analytics',
            url: '/live-analytics',
          },
          {
            pageTitle: 'Nifty Multi Strike Comparison',
            url: '/nifty-multi-strike-comparison',
          },
          {
            pageTitle: 'Nifty Trending OI',
            url: '/nifty-trending-oi',
            label: 'New',
          },
        ],
      },
      {
        subTitle: 'Option Strategy',
        pages: [
          {
            pageTitle: 'Stock Option Chart',
            url: '/stock-options-chart/sbin',
          },
          {
            pageTitle: 'NSE Option Chain',
            url: '/nse-option-chain/nifty',
            label: 'Updated',
          },
          {
            pageTitle: 'NSE Commodity Option chain',
            url: '/commodities-option-chain-nse/gold',
            label: 'New',
          },
          {
            pageTitle: 'BSE Option Chain',
            url: '/bse-option-chain/sensex',
            label: 'Updated',
          },
          {
            pageTitle: 'Live Max Pain Chart For Derivative Stocks',
            url: '/options-max-pain-chart-live',
          },
          {
            pageTitle: 'Option Strategies to Mint Money',
            url: '/option-strategies',
          },
          {
            pageTitle: 'LTP OI Timeflow',
            url: '/ltp-calculator',
            label: 'New',
            subText: "Prev. known as LTP Calculator"
          },
          {
            pageTitle: 'Option Strategy Optimizer',
            url: '/option-strategy',
          },
          {
            pageTitle: 'Options Simulator',
            url: '/options-simulator',
          },
          
        ],
      },
      {
        subTitle: 'BankNifty',
        pages: [
          {
            pageTitle: 'Bank Nifty Open Interest Live Chart',
            url: '/banknifty-live-oi-tracker',
          },
          {
            pageTitle: 'Bank Nifty Change in Open Interest',
            url: '/bank-nifty-live-oi-change',
          },
          {
            pageTitle: 'Bank Nifty PCR Live Chart',
            url: '/banknifty-intra-pcr-trend',
          },
          {
            pageTitle: 'Bank Nifty Volume PCR Live Chart',
            url: '/banknifty-intra-volume-pcr-trend',
          },
          {
            pageTitle: 'Bank Nifty Live Analytics',
            url: '/banknifty-live-analysis',
          },

          {
            pageTitle: 'Bank Nifty Multi Strike Comparison',
            url: '/banknifty-multi-strike-comparison',
          },
          {
            pageTitle: 'Bank Nifty Trending OI',
            url: '/banknifty-trending-oi',
            label: 'New',
          },
        ],
      },
      // {
      //   subTitle: 'USD INR',
      //   pages: [
      //     {
      //       pageTitle: 'USD INR Options Live',
      //       url: '/usd-inr-options-live',
      //     },
      //     {
      //       pageTitle: 'USD INR Change in Option Interest Live',
      //       url: '/usd-inr-change-open-interest-live',
      //     },
      //     {
      //       pageTitle: 'USD INR Options Put Call Ratio',
      //       url: '/usdinr-put-call-ratio',
      //     },
      //   ],
      // },
      {
        subTitle: 'Fin Nifty',
        pages: [
          {
            pageTitle: 'Fin Nifty Open Interest Tracker',
            url: '/live-finnifty-open-interest',
          },
          {
            pageTitle: 'Fin Nifty Change in Open Interest',
            url: '/finnifty-live-change-in-oi',
          },
          {
            pageTitle: 'Fin Nifty Option Chain Put Call Ratio',
            url: '/finnifty-put-call-ratio',
          },
          {
            pageTitle: 'Fin Nifty Option Chain Put Call Ratio Volume',
            url: '/finnifty-put-call-ratio-volume',
          },
          {
            pageTitle: 'Fin Nifty Live Analytics',
            url: '/finnifty-live-analysis',
          },
          {
            pageTitle: 'Fin Nifty Multi Strike Comparison',
            url: '/finnifty-multi-strike-comparison',
          },
          {
            pageTitle: 'Fin Nifty Trending OI',
            url: '/finnifty-trending-oi',
            label: 'New',

          },
        ],
      },
      {
        subTitle: 'NIFTY MIDCAP SELECT',
        pages: [
          {
            pageTitle: 'Nifty Midcap Select Open Interest Tracker',
            url: '/live-midcpnifty-open-interest',
          },
          {
            pageTitle: 'Nifty Midcap Select Change in Open Interest',
            url: '/midcpnifty-live-change-in-oi',
          },
          {
            pageTitle: 'Nifty Midcap Select Option Chain Put Call Ratio',
            url: '/midcpnifty-put-call-ratio',
          },
          {
            pageTitle: 'Nifty Midcap Select Option Chain Put Call Ratio Volume',
            url: '/midcpnifty-put-call-ratio-volume',
          },
          {
            pageTitle: 'Nifty Midcap Select Live Analytics',
            url: '/midcpnifty-live-analysis',
          },
          {
            pageTitle: 'Nifty Midcap Select Multi Strike Comparison',
            url: '/midcpnifty-multi-strike-comparison',
          },
          {
            pageTitle: 'Nifty Midcap Select Trending OI',
            url: '/midcpnifty-trending-oi',
            label: 'New',

          },
        ],
      },
    ],
  },

  {
    title: 'Resources',
    subMenu: [
      {
        subTitle: 'References',
        pages: [
          {
            pageTitle: 'Trading and Investment Terminology',
            url: '/terms',
          },
          {
            pageTitle: 'Investing Books',
            url: '/investing-books',
          },
          {
            pageTitle: 'Candlestick Patterns',
            url: '/candlestick-patterns',
          },
        ],
      },
      {
        subTitle: 'Brokers',
        pages: [
          {
            pageTitle: 'Broker Directory',
            url: '/broker-directory',
          },
          {
            pageTitle: 'Compare Brokers',
            url: '/select-best-broker',
          },
          {
            pageTitle: 'Stock Brokers in India',
            url: '/stock-brokers-in-india',
          },
        ],
      },
      {
        subTitle: 'Stock Stats',
        pages: [
          {
            pageTitle: 'Volume Shockers',
            url: '/nse-stocks-volume',
          },
          {
            pageTitle: 'Intraday Breakouts',
            url: '/nse-stocks-price',
          },
          {
            pageTitle: 'Gap Up, Gap Down Stocks',
            url: '/gap-ups-gap-downs',
          },
          {
            pageTitle: 'Opening Price Clues',
            url: '/opening-price-clues',
          },
          {
            pageTitle: 'Top Gainer Stocks',
            url: '/nse-top-gainers',
          },
          {
            pageTitle: 'Top Loser Stocks',
            url: '/nse-top-losers',
          },
        ],
      },
      {
        subTitle: 'Calculators',
        pages: [
          {
            pageTitle: 'Option Pricing Calculator',
            url: '/option-pricing-calculator',
          },
          {
            pageTitle: 'Fibonacci Calculator',
            url: '/fibonacci-calculator-2',
          },
          {
            pageTitle: 'Pivot Calculator',
            url: '/pivot-calculator',
          },
          {
            pageTitle: 'Developing Pivot Calculator',
            url: '/developing-pivots',
          },
          {
            pageTitle: 'Elliott Wave Fibonacci Cluster Calculator',
            url: '/elliott-wave-fibonacci-cluster-calculator',
          },
        ],
      },
      {
        subTitle: 'Stats',
        pages: [
          {
            pageTitle: 'FII Activity F&O & cash',
            url: '/fii-stats',
          },
          {
            pageTitle: 'FII DII Activity',
            url: '/fii-dii-activity',
          },
          {
            pageTitle: 'NSE F&O Lot Size | NiftyTrader',
            url: '/nse-fo-lot-size',
          },
          {
            pageTitle: 'BSE NSE Holidays List',
            url: '/bse-nse-trading-holidays',
          },
          {
            pageTitle: 'Commodity Trading Holidays',
            url: '/commodity-trading-holidays',
          },
          {
            pageTitle: 'Participant Wise OI',
            url: '/participant-wise-oi',
          },
        ],
      },
      {
        subTitle: 'Daily Stats',
        pages: [
          {
            pageTitle: 'NSE Bulk Deals Data',
            url: '/bulk-deals-data',
          },
          {
            pageTitle: 'Ban List',
            url: '/ban-list',
          },
          {
            pageTitle: 'Derivative Summary',
            url: '/derivative-summary',
          },
          {
            pageTitle: 'Stock Futures',
            url: '/stock-futures/nifty',
          },
        ],
      },
      {
        subTitle: 'Contributors',
        pages: [
          {
            pageTitle: 'Nifty 50 Contributors',
            url: '/nifty50-contributors',
          },
          {
            pageTitle: 'Nifty Next 50 Contributors',
            url: '/nifty-next50-contributors',
          },
          {
            pageTitle: 'Bank Nifty Contributors',
            url: '/nifty-bank-contributors',
          },
          {
            pageTitle: 'Fin Nifty Contributors',
            url: '/nifty-fin-contributors',
          },
          {
            pageTitle: 'Midcap Nifty Contributors',
            url: '/midcap-nifty-contributors',
          },
          {
            pageTitle: 'Midcap Select Contributors',
            url: '/midcap-select-contributors',
          },
        ],
      },
    ],
  },
];

export const MediaNavOptions = [
  {
    title: 'Nifty Live Analytics',
    imgPath: imgBaseUrl + 'images/home/new-live-analytics.svg',
    url: '/live-analytics',
  },
  {
    title: 'Bank Nifty Analytics',
    imgPath: imgBaseUrl + 'images/home/new-bank-nifty-live-analytics.svg',
    url: '/banknifty-live-analysis',
  },
  {
    title: 'fin Nifty Analytics',
    imgPath: '/images/fin-nifty.webp',
    url: '/finnifty-live-analysis',
  },
  {
    title: 'Advanced Stock Screener',
    imgPath: imgBaseUrl + 'images/home/new-advanced-stock-screener.svg',
    url: '/advanced-stock-screener',
  },
  {
    title: 'Live Market Screener',
    imgPath: imgBaseUrl + 'images/home/new-live-market-screener.svg',
    url: '/live-market-screener',
  },
  {
    title: 'Options Screener',
    imgPath: imgBaseUrl + 'images/home/options-screener-logo.svg',
    url: '/options-screener',
  },
  {
    title: 'Watchlist',
    imgPath: imgBaseUrl + 'images/home/new-watchlists-alerts.svg',
    url: '/watchlist',
  },
  {
    title: 'NSE Option Chain',
    imgPath: imgBaseUrl + 'images/home/new-option-chain-analysis.svg',
    url: '/nse-option-chain/nifty',
  },
  {
    title: 'BSE Option Chain',
    imgPath: imgBaseUrl + 'images/home/new-option-chain-analysis.svg',
    url: '/bse-option-chain/sensex',
  },
  {
    title: 'Stock Analysis',
    imgPath: imgBaseUrl + 'images/home/new-stocks-analysis.svg',
    url: '/stocks-analysis',
  },
  {
    title: 'GIFT NIFTY',
    imgPath: '/images/home/gift_nifty.png',
    url: '/gift-nifty',
  },
  {
    title: 'News',
    imgPath: imgBaseUrl + 'images/home/new-news-logo.svg',
    url: '/news',
  },
  {
    title: 'IPO',
    imgPath: imgBaseUrl + 'images/home/new-money-logo.svg',
    url: '/ipo',
  },
  {
    title: 'Option Strategy',
    imgPath: imgBaseUrl + 'images/home/option-strategy.svg',
    url: '/option-strategy',
  },
  {
    title: 'Options Simulator',
    imgPath: '/images/options-simulator.svg',
    url: '/options-simulator',
  },
  {
    title: 'Prime',
    imgPath: imgBaseUrl + 'images/home/new-prime-logo.svg',
    url: '/primeplans',
  },
];
