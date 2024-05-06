import { formatNumberWithZero } from './numberUtils';

export function calculatePivots(highVal, lowVal, openVal, closeVal) {
  const high = Number(highVal);
  const low = Number(lowVal);
  const open = Number(openVal);
  const close = Number(closeVal);
  // classic pivot calculation
  const pivot = (high + low + close) / 3;
  const s1 = pivot * 2 - high;
  const s2 = pivot - (high - low);
  const s3 = low - 2 * (high - pivot);
  const r1 = pivot * 2 - low;
  const r2 = pivot + (high - low);
  const r3 = high + 2 * (pivot - low);

  // WOODIE
  const wooPP = (high + low + close * 2) / 4;
  const wooR1 = 2 * wooPP - low;
  const wooR2 = wooPP + (high - low);
  // const wooR3 = high + 2 * (wooPP - low);
  // const wooR4 = wooR3 + (high - low);
  const wooS1 = 2 * wooPP - high;
  const wooS2 = wooPP - (high - low);
  // const wooS3 = low - 2 * (high - wooPP);
  // const wooS4 = wooS3 - (high - low);

  // FIBONACI
  const fibPivot = pivot;
  const fibS1 = fibPivot - 0.382 * (high - low);
  const fibS2 = fibPivot - 0.6182 * (high - low);
  const fibS3 = fibPivot - 1 * (high - low);
  const fibR1 = fibPivot + 0.382 * (high - low);
  const fibR2 = fibPivot + 0.6182 * (high - low);
  const fibR3 = fibPivot + 1 * (high - low);

  // camarilla
  const camR4 = ((high - low) * 1.1) / 2 + close;
  const camR3 = ((high - low) * 1.1) / 4 + close;
  const camR2 = ((high - low) * 1.1) / 6 + close;
  const camR1 = ((high - low) * 1.1) / 12 + close;
  const camS1 = close - ((high - low) * 1.1) / 12;
  const camS2 = close - ((high - low) * 1.1) / 6;
  const camS3 = close - ((high - low) * 1.1) / 4;
  const camS4 = close - ((high - low) * 1.1) / 2;

  // demark
  let x;
  if (close < open) {
    x = high + (2 * low) + close, 2;
  } else if (close > open) {
    x = (2 * high) + low + close, 2;
  } else if (close == open) {
    x = high + low + (2 * close), 2;
  }

  const demS1 = x / 2 - high;
  const demR1 = x / 2 - low;
  const demPivot = x / 4;

  return {
    pivotData: {
      pivot: formatNumberWithZero(pivot),
      s1: formatNumberWithZero(s1), s2: formatNumberWithZero(s2), s3: formatNumberWithZero(s3),
      r1: formatNumberWithZero(r1), r2: formatNumberWithZero(r2), r3: formatNumberWithZero(r3),
      wooPP: formatNumberWithZero(wooPP), wooR1: formatNumberWithZero(wooR1), wooR2: formatNumberWithZero(wooR2),
      wooS1: formatNumberWithZero(wooS1), wooS2: formatNumberWithZero(wooS2),
      fibPivot: formatNumberWithZero(fibPivot), fibS1: formatNumberWithZero(fibS1), fibS2: formatNumberWithZero(fibS2),
      fibS3: formatNumberWithZero(fibS3), fibR1: formatNumberWithZero(fibR1), fibR2: formatNumberWithZero(fibR2),
      fibR3: formatNumberWithZero(fibR3), camR4: formatNumberWithZero(camR4), camR3: formatNumberWithZero(camR3),
      camR2: formatNumberWithZero(camR2), camR1: formatNumberWithZero(camR1), camS1: formatNumberWithZero(camS1),
      camS2: formatNumberWithZero(camS2), camS3: formatNumberWithZero(camS3), camS4: formatNumberWithZero(camS4),
      demPivot: formatNumberWithZero(demPivot), demS1: formatNumberWithZero(demS1), demR1: formatNumberWithZero(demR1),
    },
  };
};
