export const totalStrikes = [0, 10, 20, 30, 40];

export const optionChainColumns = {

  calls:{
      builtup: {
        Header: 'Built Up',
        accessor: 'calls_builtup',
      },
      rho:  {
      Header: 'Rho',
      accessor: 'call_rho',
              },
      gamma:  {
        Header: 'Gamma',
        accessor: 'call_gamma',
      },
      vega:  {
        Header: 'Vega',
        accessor: 'call_vega',
      },
      theta:  {
        Header: 'Theta ',
        accessor: 'call_theta',
      },
      delta:  {
        Header: 'Delta',
        accessor: 'call_delta',
      },
      vol: {
        Header: 'Volume',
        accessor: 'calls_volume',
      },
      changeInOi:{
        Header: 'CHG IN OI',
        accessor: 'calls_change_oi',
      },
      oi: {
        Header: 'OI',
        accessor: 'calls_oi',
      },
      // iv: {
      //   Header: 'IV',
      //   accessor: 'calls_iv',
      // },
      ltp: {
        Header: 'LTP',
        accessor: 'calls_ltp',
      }} ,  
      // ,
      // strike_price: {
      //   Header: 'Strike',
      //   accessor: 'strike_price',
      // },
    puts:{

      ltp: {
        Header: 'LTP',
        accessor: 'puts_ltp',
      },
      // iv : {
      //   Header: 'IV',
      //   accessor: 'puts_iv',
      // },
      oi: {
        Header: 'OI',
        accessor: 'puts_oi',
      },
      changeInOi: {
        Header: 'CHG IN OI',
        accessor: 'puts_change_oi',
      },
      vol : {
        Header: 'Volume',
        accessor: 'puts_volume',
      },
      delta: {
        Header: 'Delta',
        accessor: 'put_delta',
      },
      theta: {
        Header: 'Theta ',
        accessor: 'put_theta',
      },
      vega: {
        Header: 'Vega',
        accessor: 'put_vega',
      },
      gamma: {
        Header: 'Gamma',
        accessor: 'put_gamma',
      },
      rho:  {
        Header: 'Rho',
        accessor: 'put_rho',
      },
      builtup: {
        Header: 'Built Up',
        accessor: 'puts_builtup',
      },
      pcr: {
        Header: 'PCR',
        accessor: 'pcr',
      },
    }
      
    };

export const optionSettingColumns = [
  // {
  //   header: 'HIGH/Low',
  //   value: 'highLow',
  //   category: 'normal',
  // },
  // {
  //   header: 'Bid/Offer Price',
  //   value: 'bidOffer',
  //   category: 'normal',
  // },
  // {
  //   header: 'HIGH',
  //   value: 'high',
  //   category: 'normal',
  // },
  // {
  //   header: 'LOW',
  //   value: 'low',
  //   category: 'normal',
  // },
  {
    header: 'VOL',
    value: 'vol',
    category: 'normal',
  },
  // {
  //   header: 'VWAP',
  //   value: 'vwap',
  //   category: 'normal',
  // },
  {
    header: 'CHANGE IN OI',
    value: 'changeInOi',
    category: 'normal',
  },
  // {
  //   header: 'OI IN VALUE',
  //   value: 'oiValue',
  //   category: 'normal',
  // },
  // {
  //   header: 'CHANGE IN OI IN VALUE',
  //   value: 'changeInOiValue',
  //   category: 'normal',
  // },
  {
    header: 'BUILTUP',
    value: 'builtup',
    category: 'normal',
  },
  {
    header: 'PCR',
    value: 'pcr',
    category: 'normal',
  },
  // {
  //   header: 'CHANGE IN OI PCR',
  //   value: 'chngInOiPcr',
  //   category: 'normal',
  // },
  // {
  //   header: 'VOLUME PCR',
  //   value: 'volPcr',
  //   category: 'normal',
  // },
  // {
  //   header: 'IV',
  //   value: 'iv',
  //   category: 'normal',
  // },
  {
    header: 'DELTA',
    value: 'delta',
    category: 'greeks',
  },
  {
    header: 'THETA',
    value: 'theta',
    category: 'greeks',
  },
  {
    header: 'VEGA',
    value: 'vega',
    category: 'greeks',
  },
  {
    header: 'GAMMA',
    value: 'gamma',
    category: 'greeks',
  },
  {
    header: 'RHO',
    value: 'rho',
    category: 'greeks',
  },
  // {
  //   header: 'First Highest',
  //   value: 'firstHighest',
  //   category: 'colorCode',
  // },
  // {
  //   header: 'Second Highest',
  //   value: 'secondHighest',
  //   category: 'colorCode',
  // },
  // {
  //   header: 'Third Highest',
  //   value: 'thirdHighest',
  //   category: 'colorCode',
  // },
  // {
  //   header: 'First Lowest',
  //   value: 'firstLowest',
  //   category: 'colorCode',
  // },
  // {
  //   header: 'Second Lowest',
  //   value: 'secondLowest',
  //   category: 'colorCode',
  // },
  // {
  //   header: 'Third Lowest',
  //   value: 'thirdLowest',
  //   category: 'colorCode',
  // }
];

export const defaultColumns = {
  vol: true,
  changeInOi: true,
  // oiValue: true,
  builtup: true,
  // iv: true,
  delta: true,
  theta: true,
  vega: false,
  gamma: false,
  rho: false,
  isLotSize: false,
  oi:true,
  ltp:true,
  aboveATM: 0,
  belowATM: 0,
  // firstHighest: true,
  // secondHighest: false,
  // thirdHighest: false,
  // firstLowest: true,
  // secondLowest: false,
  // thirdLowest: false,
  // firstHighestColor: '#acd6c9',
  // secondHighestColor: "#acd6c9",
  // thirdHighestColor: "#acd6c9",
  // firstLowestColor: "#e1bcbc",
  // secondLowestColor: "#e1bcbc",
  // thirdLowestColor: "#e1bcbc",
 
};


export const defaultHiddenColumns = [
  'call_high',
  'put_high',
  'call_low',
  'put_low',
  'calls_bid_price',
  'puts_bid_price',
  'calls_offer_price',
  'puts_offer_price',
  'calls_change_oi_value',
  'puts_change_oi_value',
  'calls_oi_value',
  'puts_oi_value',
  'calls_volume',
  'puts_volume',
  'call_theta',
  'put_theta',
  'call_vega',
  'put_vega',
  'call_gamma',
  'put_gamma',
  'call_rho',
  'put_rho',
  'calls_net_change',
  'puts_net_change',
  'calls_average_price',
  'puts_average_price',
  'chng_in_oi_pcr',
  'volume_pcr',
];
