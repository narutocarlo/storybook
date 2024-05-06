export const defaultColumns = {
  current_price: true,
  changePer: true,
  today_high: true,
  today_low: true,
  volume: true,
  market_cap: true,
  stock_pe: true,
  roe: true,
};

export const defaultTableColumns = [
  { field: 'current_price', heading: 'CURRENT PRICE', align: 'right', status: true },
  { field: 'changePer', heading: 'CHG % (CHG)', align: 'right', status: true },
  { field: 'today_high', heading: 'HIGH', align: 'right', status: true },
  { field: 'today_low', heading: 'LOW', align: 'right', status: true },
  { field: 'volume', heading: 'VOL', align: 'right', status: true },
  { field: 'market_cap', heading: 'MARKET CAP (In Cr.)', align: 'right', status: true },
  { field: 'stock_pe', heading: 'STOCK P/E', align: 'right', status: true },
  { field: 'roe', heading: 'ROE', align: 'right', status: true },
];
