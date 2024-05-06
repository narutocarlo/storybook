export const defaultColumns = {
  t0_close: true,
  t0_open: true,
  t0_high: true,
  t0_low: true,
  t0_volume: true,
  t0_deliveryPercentage: true,
  t0_20avgVolume: true,
  changePer: true,
};

export const defaultTableColumns = [
  { field: 't0_close', heading: 'CLOSE', align: 'right', status: true },
  { field: 't0_open', heading: 'OPEN', align: 'right', status: true },
  { field: 't0_high', heading: 'HIGH', align: 'right', status: true },
  { field: 't0_low', heading: 'LOW', align: 'right', status: true },
  { field: 't0_volume', heading: 'VOL', align: 'right', status: true },
  { field: 't0_deliveryPercentage', heading: 'DEL %', align: 'right', status: true },
  { field: 't0_20avgVolume', heading: '20 AVG VOL', align: 'right', status: true },
  { field: 'changePer', heading: 'CHG % (CHG)', align: 'right', status: true },
];
