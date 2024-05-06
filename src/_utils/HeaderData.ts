import adv_icon from "../assets/images/adv_icon.svg";
import lm_icon from "../assets/images/lm_icon.svg";
import os_icon from "../assets/images/os_icon.svg";
import waterfall_chart from "../assets/images/waterfall_chart.svg";
import legend_toggle from "../assets/images/legend_toggle.svg";
import stacked_line_chart from "../assets/images/stacked_line_chart.svg";
import link from "../assets/images/link.svg";
import flowsheet from "../assets/images/flowsheet.svg";
import bid_landscape from "../assets/images/bid_landscape.svg";
import bookmark from "../assets/images/bookmark.svg";
import gift_nifty from "../assets/images/gift_nifty.svg";
import newspaper from "../assets/images/newspaper.svg";
import universal_currency_alt from "../assets/images/universal_currency_alt.svg";
import model_training from "../assets/images/model_training.svg";
import table_chart_view from "../assets/images/table_chart_view.svg";
import Premium from "../assets/images/Premium.svg";
import news from "../assets/images/news.svg";
import person from "../assets/images/person.svg";
import dashboard from "../assets/images/dashboard.svg";
import bookmark_blue from "../assets/images/bookmark_blue.svg";
import alarm from "../assets/images/alarm.svg";
import contract from "../assets/images/contract.svg";
import share from "../assets/images/share.svg";
import diversity_1 from "../assets/images/diversity_1.svg";
import lock_reset from "../assets/images/lock_reset.svg";
import app_promo from "../assets/images/app_promo.svg";
import logout from "../assets/images/logout.svg";

// screener data
export const screenerData = [
  {
    label: "Advanced Stock Screener",
    icon: adv_icon,
    pageurl: "/advanced-stock-screener",
  },
  {
    label: "Live Market Screener",
    icon: lm_icon,
    pageurl: "/live-market-screener",
  },
  {
    label: "Options Screener",
    icon: os_icon,
    pageurl: "/options-screener",
  },
];

// options data
export const optionsData = [
  {
    label: "Nifty",
    links: [
      { label: "Nifty Open Interest", pageurl: "/live-nifty-open-interest" },
      {
        label: "Nifty Change in Open Interest",
        pageurl: "/nifty-live-change-in-oi",
      },
      {
        label: "Nifty Option Chain Put Call Ratio",
        pageurl: "/nifty-put-call-ratio",
      },
      {
        label: "Nifty Option Chain Put Call Ratio Volume",
        pageurl: "/nifty-put-call-ratio-volume",
      },
      { label: "Nifty Live Analytics", pageurl: "/live-analytics" },
      {
        label: "Nifty Multi Strike Comparison",
        pageurl: "/nifty-multi-strike-comparison",
      },
      {
        label: "Nifty Trending OI",
        pageurl: "/nifty-trending-oi",
        badge: "New",
      },
    ],
  },
  {
    label: "Option Strategy",
    links: [
      { label: "Stock Option Chart", pageurl: "/stock-options-chart/sbin" },
      {
        label: "NSE Option Chain",
        pageurl: "/nse-option-chain/nifty",
        badge: "Updated",
      },
      {
        label: "NSE Commodity Option Chain",
        pageurl: "/commodities-option-chain-nse/gold",
        badge: "New",
      },
      {
        label: "BSE Option Chain",
        pageurl: "/bse-option-chain/sensex",
        badge: "Updated",
      },
      {
        label: "Live Max Pain Chart for Derivative Stocks",
        pageurl: "/options-max-pain-chart-live/sbin",
      },
      {
        label: "Option Strategies to Mint Money",
        pageurl: "/option-strategies",
      },
      { label: "LTP OI Timeflow", pageurl: "/ltp-calculator", badge: "New" },
      { label: "Option Strategy Optimizer", pageurl: "/option-strategy" },
      { label: "Options Simulator", pageurl: "/options-simulator" },
    ],
  },
  {
    label: "Bank Nifty",
    links: [
      {
        label: "Bank Nifty Open Interest Live Chart",
        pageurl: "/banknifty-live-oi-tracker",
      },
      {
        label: "Bank Nifty Change in Open Interest",
        pageurl: "/bank-nifty-live-oi-change",
      },
      {
        label: "Bank Nifty PCR Live Chart",
        pageurl: "/banknifty-intra-pcr-trend",
      },
      {
        label: "Bank Nifty Volume PCR Live Chart",
        pageurl: "/banknifty-intra-volume-pcr-trend",
      },
      {
        label: "Bank Nifty Live Analytics",
        pageurl: "/banknifty-live-analysis",
      },
      {
        label: "Bank Nifty Multi Strike Comparison",
        pageurl: "/banknifty-multi-strike-comparison",
      },
      {
        label: "Bank Nifty Trending OI",
        pageurl: "/banknifty-trending-oi",
        badge: "New",
      },
    ],
  },
  {
    label: "Fin Nifty",
    links: [
      {
        label: "Fin Nifty Open Interest Tracker",
        pageurl: "/live-finnifty-open-interest",
      },
      {
        label: "Fin Nifty Change in Open Interest",
        pageurl: "/finnifty-live-change-in-oi",
      },
      {
        label: "Fin Nifty Option Chain Put Call Ratio",
        pageurl: "/finnifty-put-call-ratio",
      },
      {
        label: "Fin Nifty Option Chain Put Call Ratio Volume",
        pageurl: "/finnifty-put-call-ratio-volume",
      },
      {
        label: "Fin Nifty Live Analytics",
        pageurl: "/finnifty-live-analysis",
      },
      {
        label: "Fin Nifty Multi Strike Comparison",
        pageurl: "/finnifty-multi-strike-comparison",
      },
      {
        label: "Fin Nifty Trending OI",
        pageurl: "/finnifty-trending-oi",
        badge: "New",
      },
    ],
  },
  {
    label: "NIFTY MIDCAP SELECT",
    links: [
      {
        label: "Nifty Midcap Select Open Interest",
        pageurl: "/live-midcpnifty-open-interest",
      },
      {
        label: "Nifty Midcap Select Change in Open Interest",
        pageurl: "/midcpnifty-live-change-in-oi",
      },
      {
        label: "Nifty Midcap Select Option Chain Put Call Ratio",
        pageurl: "/midcpnifty-put-call-ratio",
      },
      {
        label: "Nifty Midcap Select Option Chain Put Call Ratio Volume",
        pageurl: "/midcpnifty-put-call-ratio-volume",
      },
      {
        label: "Nifty Midcap Select Live Analysis",
        pageurl: "/midcpnifty-live-analysis",
      },
      {
        label: "Nifty Midcap Select Multi Strike Comparison",
        pageurl: "/midcpnifty-multi-strike-comparison",
      },
      {
        label: "Nifty Midcap Select Trending OI",
        pageurl: "/midcpnifty-trending-oi",
        badge: "New",
      },
    ],
  },
];

// resources data
export const resourcesData = [
  {
    label: "References",
    links: [
      { label: "Trading and Investment Terminology", pageurl: "/terms" },
      { label: "Investing Books", pageurl: "/investing-books" },
      { label: "Candlestick Patterns", pageurl: "/candlestick-patterns" },
    ],
  },
  {
    label: "Brokers",
    links: [
      { label: "Broker Directory", pageurl: "/broker-directory" },
      { label: "Compare Brokers", pageurl: "/select-best-broker" },
      { label: "Stock Brokers in India", pageurl: "/stock-brokers-in-india" },
    ],
  },
  {
    label: "Stock Stats",
    links: [
      { label: "Volume Shockers", pageurl: "/nse-stocks-volume" },
      { label: "Intraday Breakouts", pageurl: "/nse-stocks-price" },
      { label: "Gap Up, Gap Down Stocks", pageurl: "/gap-ups-gap-downs" },
      { label: "Opening Price Clues", pageurl: "/opening-price-clues" },
      { label: "Top Gainer Stocks", pageurl: "/nse-top-gainers" },
      { label: "Top Loser Stocks", pageurl: "/nse-top-losers" },
    ],
  },
  {
    label: "Calculators",
    links: [
      {
        label: "Option Pricing Calculator",
        pageurl: "/option-pricing-calculator",
      },
      { label: "Fibonacci Calculator", pageurl: "/fibonacci-calculator-2" },
      { label: "Pivot Calculator", pageurl: "/pivot-calculator" },
      { label: "Developing Pivot Calculator", pageurl: "/developing-pivots" },
      {
        label: "Elliot Wave Fibonacci Cluster Calculator",
        pageurl: "/elliott-wave-fibonacci-cluster-calculator",
      },
    ],
  },
  {
    label: "Stats",
    links: [
      { label: "FII Activity F&O & cash", pageurl: "/fii-stats" },
      { label: "FII DII Activity", pageurl: "/fii-dii-activity" },
      { label: "NSE F&O Lot Size | NiftyTrader", pageurl: "/nse-fo-lot-size" },
      { label: "BSE NSE Holidays List", pageurl: "/bse-nse-trading-holidays" },
      {
        label: "Commodity Trading Holidays",
        pageurl: "/commodity-trading-holidays",
      },
      { label: "Participant Wise OI", pageurl: "/participant-wise-oi" },
    ],
  },
  {
    label: "Daily Stats",
    links: [
      { label: "NSE Bulk Deals Data", pageurl: "/bulk-deals-data" },
      { label: "Ban List", pageurl: "/ban-list" },
      { label: "Derivative Summary", pageurl: "/derivative-summary" },
      { label: "Stock Futures", pageurl: "/stock-futures/nifty" },
    ],
  },
  {
    label: "Contributors",
    links: [
      {
        label: "Nifty 50 Contributors",
        pageurl: "/nifty50-contributors",
      },
      {
        label: "Nifty Next 50 Contributors",
        pageurl: "/nifty-next50-contributors",
      },
      {
        label: "Bank Nifty Contributors",
        pageurl: "/nifty-bank-contributors",
      },
      {
        label: "Fin Nifty Contributors",
        pageurl: "/nifty-fin-contributors",
      },
      {
        label: "Midcap Nifty Contributors",
        pageurl: "/midcap-nifty-contributors",
      },
      {
        label: "Midcap Select Contributors",
        pageurl: "/midcap-select-contributors",
      },
    ],
  },
];

// menu data
export const barsMenuData = [
  {
    label: "Nifty Live Analytics",
    icon: waterfall_chart,
    pageurl: "/live-analytics",
    bg: "#F1FFF1",
  },
  {
    label: "Bank Nifty Analytics",
    icon: legend_toggle,
    bg: "#FFEAEA",
    pageurl: "/banknifty-live-analysis",
  },
  {
    label: "Fin Nifty Analytics",
    icon: stacked_line_chart,
    bg: "#ECF5FE",
    pageurl: "/finnifty-live-analysis",
  },
  {
    label: "NSE Option Chain",
    icon: link,
    bg: "#F3E8FF",
    pageurl: "/nse-option-chain/nifty",
  },
  {
    label: "BSE Option Chain",
    icon: flowsheet,
    bg: "#FFEFFC",
    pageurl: "/bse-option-chain/sensex",
  },

  {
    label: "Stock Analysis",
    icon: bid_landscape,
    bg: "#FFF6E4",
    pageurl: "/stocks-analysis",
  },

  {
    label: "GPT Watchlist",
    icon: bookmark,
    bg: "#E7FAFF",
    pageurl: "/watchlist",
  },
  {
    label: "GIFT NIFTY",
    icon: gift_nifty,
    bg: "#FFECE4",
    pageurl: "/gift-nifty",
  },
  {
    label: "News",
    icon: newspaper,
    bg: "#FFEAEA",
    pageurl: "/news",
  },

  {
    label: "IPO",
    icon: universal_currency_alt,
    bg: "#ECF5FE",
    pageurl: "/ipo",
  },
  {
    label: "Option Strategy",
    icon: model_training,
    bg: "#F3E8FF",
    pageurl: "/option-strategy",
  },
  {
    label: "Options Simulator",
    icon: table_chart_view,
    bg: "#FFEFFC",
    pageurl: "/options-simulator",
  },
  {
    label: "Prime",
    icon: Premium,
    bg: "#FFF6E4",
    pageurl: "/primeplans",
  },
  {
    label: "Blog",
    icon: news,
    bg: "#E7FAFF",
    pageurl: "https://blog.niftytrader.in/",
  },
];

// profile data
export const profileData = [
  {
    label: "My Profile",
    icon: person,
    pageUrl: "/my-profile",
  },
  {
    label: "My Dashboard",
    icon: dashboard,
    pageUrl: "/my-dashboard",
  },
  {
    label: "My Watchlist",
    icon: bookmark_blue,
    pageUrl: "/watchlist",
  },
  {
    label: "My Alerts",
    icon: alarm,
    pageUrl: "/stockalerts",
  },
  {
    label: "My Portfolio",
    icon: contract,
    pageUrl: "/portfolio",
  },
  {
    label: "Share a Trial",
    icon: share,
    pageUrl: "/share-a-trial",
  },
  {
    label: "Social Media",
    icon: diversity_1,
    pageUrl: "",
  },
  {
    label: "Change Password",
    icon: lock_reset,
    pageUrl: "",
  },
  {
    label: "Download App",
    icon: app_promo,
    pageUrl: "",
  },
  {
    label: "Logout",
    icon: logout,
    pageUrl: "",
  },
];

export const allPages = [
  {
    pageName: "Advanced Stock Screener",
    pageUrl: "/advanced-stock-screener",
  },
  {
    pageName: "Live Market Screener",
    pageUrl: "/live-market-screener",
  },
  {
    pageName: "Options Screener",
    pageUrl: "/options-screener",
  },
  { pageName: "Nifty Open Interest", pageUrl: "/live-nifty-open-interest" },
  {
    pageName: "Nifty Change in Open Interest",
    pageUrl: "/nifty-live-change-in-oi",
  },
  {
    pageName: "Nifty Option Chain Put Call Ratio",
    pageUrl: "/nifty-put-call-ratio",
  },
  {
    pageName: "Nifty Option Chain Put Call Ratio Volume",
    pageUrl: "/nifty-put-call-ratio-volume",
  },
  { pageName: "Nifty Live Analytics", pageUrl: "/live-analytics" },
  {
    pageName: "Nifty Multi Strike Comparison",
    pageUrl: "/nifty-multi-strike-comparison",
  },
  {
    pageName: "Nifty Trending OI",
    pageUrl: "/nifty-trending-oi",
    badge: "New",
  },
  { pageName: "Stock Option Chart", pageUrl: "/stock-options-chart/sbin" },
  {
    pageName: "NSE Option Chain",
    pageUrl: "/nse-option-chain/nifty",
    badge: "Updated",
  },
  {
    pageName: "NSE Commodity Option Chain",
    pageUrl: "/commodities-option-chain-nse/gold",
    badge: "New",
  },
  {
    pageName: "BSE Option Chain",
    pageUrl: "/bse-option-chain/sensex",
    badge: "Updated",
  },
  {
    pageName: "Live Max Pain Chart for Derivative Stocks",
    pageUrl: "/options-max-pain-chart-live/sbin",
  },
  {
    pageName: "Option Strategies to Mint Money",
    pageUrl: "/option-strategies",
  },
  { pageName: "LTP OI Timeflow", pageUrl: "/ltp-calculator", badge: "New" },
  { pageName: "Option Strategy Optimizer", pageUrl: "/option-strategy" },
  { pageName: "Options Simulator", pageUrl: "/options-simulator" },
  {
    pageName: "Bank Nifty Open Interest Live Chart",
    pageUrl: "/banknifty-live-oi-tracker",
  },
  {
    pageName: "Bank Nifty Change in Open Interest",
    pageUrl: "/bank-nifty-live-oi-change",
  },
  {
    pageName: "Bank Nifty PCR Live Chart",
    pageUrl: "/banknifty-intra-pcr-trend",
  },
  {
    pageName: "Bank Nifty Volume PCR Live Chart",
    pageUrl: "/banknifty-intra-volume-pcr-trend",
  },
  {
    pageName: "Bank Nifty Live Analytics",
    pageUrl: "/banknifty-live-analysis",
  },
  {
    pageName: "Bank Nifty Multi Strike Comparison",
    pageUrl: "/banknifty-multi-strike-comparison",
  },
  {
    pageName: "Bank Nifty Trending OI",
    pageUrl: "/banknifty-trending-oi",
    badge: "New",
  },
  {
    pageName: "Fin Nifty Open Interest Tracker",
    pageUrl: "/live-finnifty-open-interest",
  },
  {
    pageName: "Fin Nifty Change in Open Interest",
    pageUrl: "/finnifty-live-change-in-oi",
  },
  {
    pageName: "Fin Nifty Option Chain Put Call Ratio",
    pageUrl: "/finnifty-put-call-ratio",
  },
  {
    pageName: "Fin Nifty Option Chain Put Call Ratio Volume",
    pageUrl: "/finnifty-put-call-ratio-volume",
  },
  {
    pageName: "Fin Nifty Live Analytics",
    pageUrl: "/finnifty-live-analysis",
  },
  {
    pageName: "Fin Nifty Multi Strike Comparison",
    pageUrl: "/finnifty-multi-strike-comparison",
  },
  {
    pageName: "Fin Nifty Trending OI",
    pageUrl: "/finnifty-trending-oi",
    badge: "New",
  },
  {
    pageName: "Nifty Midcap Select Open Interest",
    pageUrl: "/live-midcpnifty-open-interest",
  },
  {
    pageName: "Nifty Midcap Select Change in Open Interest",
    pageUrl: "/midcpnifty-live-change-in-oi",
  },
  {
    pageName: "Nifty Midcap Select Option Chain Put Call Ratio",
    pageUrl: "/midcpnifty-put-call-ratio",
  },
  {
    pageName: "Nifty Midcap Select Option Chain Put Call Ratio Volume",
    pageUrl: "/midcpnifty-put-call-ratio-volume",
  },
  {
    pageName: "Nifty Midcap Select Live Analytics",
    pageUrl: "/midcpnifty-live-analysis",
  },
  {
    pageName: "Nifty Midcap Select Multi Strike Comparison",
    pageUrl: "/midcpnifty-multi-strike-comparison",
  },
  {
    pageName: "Nifty Midcap Select Trending OI",
    pageUrl: "/midcpnifty-trending-oi",
  },
  { pageName: "Trading and Investment Terminology", pageUrl: "/terms" },
  { pageName: "Investing Books", pageUrl: "/investing-books" },
  { pageName: "Candlestick Patterns", pageUrl: "/candlestick-patterns" },
  { pageName: "Broker Directory", pageUrl: "/broker-directory" },
  { pageName: "Compare Brokers", pageUrl: "/select-best-broker" },
  { pageName: "Stock Brokers in India", pageUrl: "/stock-brokers-in-india" },
  { pageName: "Volume Shockers", pageUrl: "/nse-stocks-volume" },
  { pageName: "Intraday Breakouts", pageUrl: "/nse-stocks-price" },
  { pageName: "Gap Up, Gap Down Stocks", pageUrl: "/gap-ups-gap-downs" },
  { pageName: "Opening Price Clues", pageUrl: "/opening-price-clues" },
  { pageName: "Top Gainer Stocks", pageUrl: "/nse-top-gainers" },
  { pageName: "Top Loser Stocks", pageUrl: "/nse-top-losers" },
  {
    pageName: "Option Pricing Calculator",
    pageUrl: "/option-pricing-calculator",
  },
  { pageName: "Fibonacci Calculator", pageUrl: "/fibonacci-calculator-2" },
  { pageName: "Pivot Calculator", pageUrl: "/pivot-calculator" },
  { pageName: "Developing Pivot Calculator", pageUrl: "/developing-pivots" },
  {
    pageName: "Elliot Wave Fibonacci Cluster Calculator",
    pageUrl: "/elliott-wave-fibonacci-cluster-calculator",
  },
  { pageName: "FII Activity F&O & cash", pageUrl: "/fii-stats" },
  { pageName: "FII DII Activity", pageUrl: "/fii-dii-activity" },
  { pageName: "NSE F&O Lot Size | NiftyTrader", pageUrl: "/nse-fo-lot-size" },
  { pageName: "BSE NSE Holidays List", pageUrl: "/bse-nse-trading-holidays" },
  {
    pageName: "Commodity Trading Holidays",
    pageUrl: "/commodity-trading-holidays",
  },
  { pageName: "Participant Wise OI", pageUrl: "/participant-wise-oi" },
  { pageName: "NSE Bulk Deals Data", pageUrl: "/bulk-deals-data" },
  { pageName: "Ban List", pageUrl: "/ban-list" },
  { pageName: "Derivative Summary", pageUrl: "/derivative-summary" },
  { pageName: "Stock Futures", pageUrl: "/stock-futures/nifty" },
  {
    pageName: "Nifty 50 Contributors",
    pageUrl: "/nifty50-contributors",
  },
  {
    pageName: "Nifty Next 50 Contributors",
    pageUrl: "/nifty-next50-contributors",
  },
  {
    pageName: "Bank Nifty Contributors",
    pageUrl: "/nifty-bank-contributors",
  },
  {
    pageName: "Fin Nifty Contributors",
    pageUrl: "/nifty-fin-contributors",
  },
  {
    pageName: "Midcap Nifty Contributors",
    pageUrl: "/midcap-nifty-contributors",
  },
  {
    pageName: "Midcap Select Contributors",
    pageUrl: "/midcap-select-contributors",
  },
  {
    pageName: "Nifty Live Analytics",
    pageUrl: "/live-analytics",
  },
  {
    pageName: "Bank Nifty Analytics",
    pageUrl: "/banknifty-live-analysis",
  },
  {
    pageName: "Fin Nifty Analytics",
    pageUrl: "/finnifty-live-analysis",
  },
  {
    pageName: "NSE Option Chain",
    pageUrl: "/nse-option-chain/nifty",
  },
  {
    pageName: "BSE Option Chain",
    pageUrl: "/bse-option-chain/sensex",
  },

  {
    pageName: "Stock Analysis",
    pageUrl: "/stocks-analysis",
  },

  {
    pageName: "GPT Watchlist",
    pageUrl: "/watchlist",
  },
  {
    pageName: "GIFT NIFTY",
    pageUrl: "/gift-nifty",
  },
  {
    pageName: "News",
    pageUrl: "/news",
  },

  {
    pageName: "IPO",
    pageUrl: "/ipo",
  },
  {
    pageName: "Prime",
    pageUrl: "/primeplans",
  },
  {
    pageName: "Blog",
    pageUrl: "https://blog.niftytrader.in/",
  },
  {
    pageName: "My Profile",
    pageUrl: "/my-profile",
  },
  {
    pageName: "My Dashboard",
    pageUrl: "/my-dashboard",
  },
  {
    pageName: "My Watchlist",
    pageUrl: "/watchlist",
  },
  {
    pageName: "My Alerts",
    pageUrl: "/stockalerts",
  },
  {
    pageName: "My Portfolio",
    pageUrl: "/portfolio",
  },
  {
    pageName: "Share a Trial",
    pageUrl: "/share-a-trial",
  },
];
