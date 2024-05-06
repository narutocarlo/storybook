function calculateValue(optionType, timeInterval, interestRate, spotPrice, strikePrice, volatility) {
  const d1 = (Math.log(spotPrice / strikePrice) + (interestRate + Math.pow(volatility, 2) / 2) *
    timeInterval) / (volatility * Math.sqrt(timeInterval));
  const nd1 = normDist(d1);
  const nd1Minus = normDist(-d1);
  const d2 = d1 - volatility * Math.sqrt(timeInterval);
  const nd2 = normDist(d2);
  const nd2Minus = normDist(-d2);
  let delta;
  let theta;
  let rho;
  let optionPrice;
  let gamma = (1 / (Number(strikePrice) * volatility * Math.sqrt(timeInterval) *
    Math.sqrt(2 * Math.PI))) * Math.pow(2.718281828, (-1 * d1 * d1 / 2));
  let vega = (strikePrice / 100) * Math.pow(2.718281828, (-interestRate * timeInterval)) *
     Math.sqrt(timeInterval) * (1 / Math.sqrt(2 * Math.PI)) * (Math.pow(2.718281828, (-d1 * d1 / 2)));
  if (optionType == 'Call') {
    delta = nd1;
    theta = (1 / 1) * (-(strikePrice * volatility * (Math.pow(2.718281828, (-interestRate * timeInterval))) *
      (Math.pow(2.718281828, (-d1 * d1 / 2))) / (2 * Math.sqrt(timeInterval) *
       Math.sqrt(2 * Math.PI))) - interestRate * strikePrice * (Math.pow(2.718281828,
      (-interestRate * timeInterval))) * nd2);
    rho = (strikePrice / 100) * timeInterval * (Math.pow(2.718281828, (-interestRate * timeInterval)) * nd2);
    optionPrice = (spotPrice * nd1 - (strikePrice * Math.pow(2.718281828, (-1 * interestRate * timeInterval))) * nd2);
  } else if (optionType == 'Put') {
    delta = nd1 - 1;
    theta = (1 / 1) * (-(strikePrice * volatility * (Math.pow(2.718281828, (-interestRate * timeInterval))) *
      (Math.pow(2.718281828, (-d1 * d1 / 2)) / (2 * Math.sqrt(timeInterval) *
      Math.sqrt(2 * Math.PI)))) + interestRate * strikePrice *
       (Math.pow(2.718281828, (-interestRate * timeInterval))) * nd2Minus);
    rho = (strikePrice / 100) * timeInterval * (Math.pow(2.718281828,
      (-interestRate * timeInterval)) * nd2Minus);
    optionPrice = (strikePrice * Math.pow(2.718281828, (-1 * interestRate * timeInterval)) *
      nd2Minus - spotPrice * nd1Minus);
  } else {
    delta = 0;
    theta = 0;
    rho = 0;
    gamma = 0;
    vega = 0;
    optionPrice = spotPrice;
  }
  const greeks = { 'delta': delta, 'theta': theta/ 365, 'vega': vega, 'gamma': gamma,
    'rho': rho, 'optionPrice': optionPrice };
  return greeks;
}

function normDist(z) {
  const sign = z < 0 && -1 || 1;
  return 0.5 * (1.0 + sign * erf(Math.abs(z) / Math.sqrt(2)));
}

function erf(x) {
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;
  const y = Math.abs(x);
  const t = 1 / (1 + p * y);
  return 1 - ((((((a5 * t + a4) * t) + a3) * t + a2) * t) + a1) * t * Math.exp(-1 * y * y);
}

function calculateStrategy(name, symbol, atTheMoney, gap, expiry) {
  let createdCondition;
  if (name == 'straddle') {
    createdCondition = { 'getFrom': symbol, 'data':
  [{ 'symbol': symbol, 'optionType': 'Call', 'expiry': expiry,
    'strikePrice': atTheMoney, 'position': 'Short', 'quantity': 1, 'conditionOrder': 1, 'iv': 0 },
  { 'symbol': symbol, 'optionType': 'Put', 'expiry': expiry,
    'strikePrice': atTheMoney, 'position': 'Short', 'quantity': 1, 'conditionOrder': 2, 'iv': 0 }] };
  } else if (name == 'strangle') {
    createdCondition = { 'getFrom': symbol, 'data':
  [{ 'symbol': symbol, 'optionType': 'Call', 'expiry': expiry,
    'strikePrice': atTheMoney + (5 * gap), 'position': 'Short', 'quantity': 1, 'conditionOrder': 1, 'iv': 0 },
  { 'symbol': symbol, 'optionType': 'Put', 'expiry': expiry,
    'strikePrice': atTheMoney - (5 * gap), 'position': 'Short', 'quantity': 1, 'conditionOrder': 2, 'iv': 0 }] };
  } else if (name == 'spread') {
    createdCondition = { 'getFrom': symbol, 'data':
  [{ 'symbol': symbol, 'optionType': 'Call', 'expiry': expiry,
    'strikePrice': atTheMoney, 'position': 'Short', 'quantity': 1, 'conditionOrder': 1, 'iv': 0 },
  { 'symbol': symbol, 'optionType': 'Call', 'expiry': expiry,
    'strikePrice': atTheMoney + (3 * gap), 'position': 'Long', 'quantity': 1, 'conditionOrder': 2, 'iv': 0 }] };
  } else if (name == 'ironFly') {
    createdCondition = { 'getFrom': symbol, 'data':
  [{ 'symbol': symbol, 'optionType': 'Put', 'expiry': expiry,
    'strikePrice': atTheMoney - (4 * gap), 'position': 'Long', 'quantity': 1, 'conditionOrder': 1, 'iv': 0 },
  { 'symbol': symbol, 'optionType': 'Call', 'expiry': expiry,
    'strikePrice': atTheMoney, 'position': 'Short', 'quantity': 1, 'conditionOrder': 2, 'iv': 0 },
  { 'symbol': symbol, 'optionType': 'Put', 'expiry': expiry,
    'strikePrice': atTheMoney, 'position': 'Short', 'quantity': 1, 'conditionOrder': 3, 'iv': 0 },
  { 'symbol': symbol, 'optionType': 'Call', 'expiry': expiry,
    'strikePrice': atTheMoney + (4 * gap), 'position': 'Long', 'quantity': 1, 'conditionOrder': 4, 'iv': 0 }] };
  } else if (name == 'ironCondor') {
    createdCondition = { 'getFrom': symbol, 'data':
  [{ 'symbol': symbol, 'optionType': 'Put', 'expiry': expiry,
    'strikePrice': atTheMoney - (4 * gap), 'position': 'Long', 'quantity': 1, 'conditionOrder': 1, 'iv': 0 },
  { 'symbol': symbol, 'optionType': 'Put', 'expiry': expiry,
    'strikePrice': atTheMoney - (3 * gap), 'position': 'Short', 'quantity': 1, 'conditionOrder': 2, 'iv': 0 },
  { 'symbol': symbol, 'optionType': 'Call', 'expiry': expiry,
    'strikePrice': atTheMoney + (3 * gap), 'position': 'Short', 'quantity': 1, 'conditionOrder': 3, 'iv': 0 },
  { 'symbol': symbol, 'optionType': 'Call', 'expiry': expiry,
    'strikePrice': atTheMoney + (4 * gap), 'position': 'Long', 'quantity': 1, 'conditionOrder': 4, 'iv': 0 }] };
  } else if (name == 'jadeLizard') {
    createdCondition = { 'getFrom': symbol, 'data':
  [{ 'symbol': symbol, 'optionType': 'Call', 'expiry': expiry,
    'strikePrice': atTheMoney + 100, 'position': 'Short', 'quantity': 1, 'conditionOrder': 1, 'iv': 0 },
  { 'symbol': symbol, 'optionType': 'Call', 'expiry': expiry,
    'strikePrice': atTheMoney + (4 * gap), 'position': 'Long', 'quantity': 1, 'conditionOrder': 2, 'iv': 0 },
  { 'symbol': symbol, 'optionType': 'Put', 'expiry': expiry,
    'strikePrice': atTheMoney - (4 * gap), 'position': 'Short', 'quantity': 1, 'conditionOrder': 3, 'iv': 0 }] };
  }

  return createdCondition;
}

export {
  calculateValue,
  calculateStrategy,
};
