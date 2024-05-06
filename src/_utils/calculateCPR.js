import { formatNumberWithZero } from './numberUtils';

export function calculateCpr(high, low, close, ltpValue, pdh, pdl) {
  const P = (Number(high) + Number(low) + Number(close)) / 3;
  const BC = (Number(high) + Number(low)) / 2;
  const TC = 2 * P - BC;
  const R1 = 2 * P - Number(low);
  const S1 = 2 * P - Number(high);
  const R2 = P + (R1 - S1);
  const S2 = P - (R1 - S1);
  const R3 = R1 + (high - low);
  const R4 = R3 + R2 - R1;
  const S3 = S1 - (high - low);
  const S4 = S3 + S2 - S1;
  const cprObj = {
    S4, S3, S2, S1, BC, P, TC, R1, R2, R3, R4,
  };

  let cprStatus;
  let cprLevel;
  let sentiment;
  let trendingMove;

  const narrow = Math.abs(TC - BC) < ((0.15 * close) / 100);
  const wide = Math.abs(TC - BC) > ((0.5 * close) / 100);

  if (narrow) {
    cprStatus = 'Narrower';
    trendingMove = 'likely';
  } else if (wide) {
    cprStatus = 'Wider';
    trendingMove = 'unlikely';
  } else {
    cprStatus = 'Average';
  }

  if (cprObj['BC'] > cprObj['TC']) {
    const tc = cprObj['TC'];
    cprObj['TC'] = cprObj['BC'];
    cprObj['BC'] = tc;
  }

  if (ltpValue > cprObj['TC']) {
    cprLevel = 'Above';
    sentiment = 'Bullishness';
  } else if (ltpValue < cprObj['BC']) {
    cprLevel = 'Below';
    sentiment = 'Bearishness';
  } else {
    cprLevel = 'Inside';
    sentiment = 'Trading in the range';
  }

  // const cprJson = [];
  // Object.keys(cprObj).forEach((key) => cprJson.push({ title: key, value: cprObj[key] }));

  // const sortedCprData = cprJson.sort((a, b) => a.value - b.value);


  let max = 0;
  let min = cprObj['S4'];
  Object.keys(cprObj).forEach((key) => {
    if (cprObj[key] > max) {
      max = cprObj[key];
    }
  });
  Object.keys(cprObj).forEach((key) => {
    if (cprObj[key] < min) {
      min = cprObj[key];
    }
  });


  let ltpPosition = ((ltpValue - min) / (max - min)) * 100;

  if (ltpPosition < 0) {
    ltpPosition = 0.5;
  } else if (ltpPosition > 100) {
    ltpPosition = 99.5;
  }

  let pdhPosition = ((pdh - min) / (max - min)) * 100;
  let pdlPosition = ((pdl - min) / (max - min)) * 100;

  if (pdhPosition < 0) {
    pdhPosition = 0.5;
  } else if (pdhPosition > 100) {
    pdhPosition = 99.5;
  }

  if (pdlPosition < 0) {
    pdlPosition = 0.5;
  } else if (pdlPosition > 100) {
    pdlPosition = 99.5;
  }

  const data = {};

  Object.keys(cprObj).forEach((key) => {
    const position = formatNumberWithZero(((cprObj[key] - min) / (max - min)) * 100);
    data[key] = {
      title: key,
      value: formatNumberWithZero(cprObj[key]),
      position: position,
    };
  });


  // for (let i = 0; i < sortedCprData.length - 1; i++) {
  //   if (Number(ltpValue) == sortedCprData[i].value) {
  //     idx = i;
  //     isEqual = true;
  //     break;
  //   } else if (Number(ltpValue) < sortedCprData[i].value) {
  //     idx = i;
  //     isEqual = false;
  //     break;
  //   }
  // }

  // if (isEqual) {
  //   ltpPosition = Math.floor((100 / sortedCprData.length) * (idx + 1)) - 4;
  // } else if (!isEqual && idx >= 0) {
  //   if (idx === 0) {
  //     ltpPosition = 3;
  //   } else if (idx == 4) {
  //     ltpPosition = Math.floor((100 / sortedCprData.length) * (idx + 1)) - 11.5;
  //   } else if (idx == 7) {
  //     ltpPosition = Math.floor((100 / sortedCprData.length) * (idx + 1)) - 6.4;
  //   } else {
  //     ltpPosition = Math.floor((100 / sortedCprData.length) * (idx + 1)) - 8.5;
  //   }
  // } else {
  //   ltpPosition = 89;
  // }

  return {
    cprCalData: data,
    ltpPosition,
    status: cprStatus,
    level: cprLevel,
    pdlPosition,
    pdhPosition,
    sentiment,
    trendingMove,
  };
}
