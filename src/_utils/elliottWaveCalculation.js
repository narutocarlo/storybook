// ************************************************************
// ---------- Fibonacci calculation for Uptrend
// ************************************************************

export const getRetracementUptrend = (high, low, header) => {
  const riseFall = parseFloat(high) - parseFloat(low);
  return (
    parseFloat(low) +
    riseFall * (1 - parseFloat(header) / parseFloat(100))
  ).toFixed(2);
};

export const getExtensionUptrend = (high, low, customValue, header) => {
  const highVal = parseFloat(high);
  const lowVal = parseFloat(low);
  const customVal = parseFloat(customValue);
  const headerVal = parseFloat(header);
  const risefall = highVal - lowVal;
  return customValue === 0.0 ?
    (highVal + (headerVal / parseFloat(100)) * risefall).toFixed(2) :
    (customVal + (headerVal / parseFloat(100)) * risefall).toFixed(2);
};

// ************************************************************
// ---------- Fibonacci calculation for Downtrend
// ************************************************************

export const getRetracementDowntrend = (high, low, header) => {
  const riseFall = parseFloat(high) - parseFloat(low);
  return (
    parseFloat(high) -
    riseFall * (1 - parseFloat(header) / parseFloat(100))
  ).toFixed(2);
};

export const getExtensionDowntrend = (high, low, customValue, header) => {
  const highVal = parseFloat(high);
  const lowVal = parseFloat(low);
  const customVal = parseFloat(customValue);
  const headerVal = parseFloat(header);
  const risefall = highVal - lowVal;
  return customValue === 0.0 ?
    (lowVal - (headerVal / parseFloat(100)) * risefall).toFixed(2) :
    (customVal - (headerVal / parseFloat(100)) * risefall).toFixed(2);
};
