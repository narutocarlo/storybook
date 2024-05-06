function formatNumber(value, fractionDigits = 2) {
  if (value == null) return 'N/A';
  if (value == 0) return '0';
  if (!value || isNaN(value)) return '-';
  // eslint-disable-next-line new-cap
  // const formatter = Intl.NumberFormat('en-IN', { currency: 'INR' });
  // return formatter.format(value.toFixed(fractionDigits));
  return Number(value).toFixed(fractionDigits);
}

function formatNumberWithZero(value, fractionDigits = 2) {
  if (value == null) return 'N/A';
  if (!value || isNaN(value)) return '0.00';
  if(value == 'Infinity') return '0.00'
  // eslint-disable-next-line new-cap
  // const formatter = Intl.NumberFormat('en-IN', { currency: 'INR' });
  // return formatter.format(value.toFixed(fractionDigits));
  return Number(value).toFixed(fractionDigits);
}

function formatNumberWithComma(value) {
  if (value == null) return 'N/A';
  if (value == 0) return '0';
  if (!value || isNaN(value)) return '-';
  // eslint-disable-next-line new-cap
  const formatter = Intl.NumberFormat('en-IN', { currency: 'INR' });
  return formatter.format(value);
}

function bigNumbers(value) {
  if (value == null) return 'N/A';
  else if (Math.abs(value) >1000000000){
    return formatNumberWithComma((value / 1000000000).toFixed(1)) +'B.';
  }
  else if (Math.abs(value) >10000000){
    return formatNumberWithComma((value / 10000000).toFixed(1)) +'Cr.';
  }
  else if (Math.abs(value) >100000){
    return formatNumberWithComma((value / 100000).toFixed(1)) +'L';
  }
  else if (Math.abs(value) >1000){
    return formatNumberWithComma((value / 1000).toFixed(1)) +'K';
  }
  else {
    return value.toFixed(1)
  }
}
function signumNumber(value) {
  if (value == null) return 'N/A';
  if (!value || isNaN(value)) return '-';
  // eslint-disable-next-line new-cap
  let number = 0;
  if (Math.sign(Number(value)) != -1) {
    number = 1;
  }
  return number;
}

function signumFontColor(value) {
  // if (value == null) return 'N/A';
  // if (!value || isNaN(value)) return '-';
  // eslint-disable-next-line new-cap
  let fontColor = '';
  if (Number(value) == 0) {
    fontColor = 'text-black';
  } else if (Math.sign(Number(value)) == 1) {
    fontColor = 'text-green';
  } else if (Math.sign(Number(value)) == -1) {
    fontColor = 'text-red';
  }
  return fontColor;
}

function getSign(value) {
  if (value == null) return 'N/A';
  if (!value || isNaN(value)) return '-';
  // eslint-disable-next-line new-cap
  let numberSign = '';
  if (Number(value) == 0) {
    return '';
  }
  if (Math.sign(Number(value)) != -1 && Math.sign(Number(value)) != 0) {
    numberSign = '+';
  } else {
    numberSign = '';
  }
  return numberSign;
}

function signumBGColor(value) {
  if (value == null) return 'N/A';
  if (!value || isNaN(value)) return '-';

  let fontColor = '';
  const numericValue = Number(value);
  
  if (Math.sign(numericValue) > 0) {
    fontColor = 'bg-green';
  } else if (Math.sign(numericValue) < 0) {
    fontColor = 'bg-red';
  } else { 
    fontColor = 'bg-black';
  }

  return fontColor;
}


function signumPWOIBGColor(value) {
  if (value == null) return 'N/A';
  if (!value || isNaN(value)) return '-';
  // eslint-disable-next-line new-cap
  let fontColor = '';
  if (Math.sign(Number(value)) != -1 && Math.sign(Number(value)) != 0) {
    fontColor = 'part_wise_high';
  } else {
    fontColor = 'part_wise_low';
  }
  return fontColor;
}

function numberInCr(value) {
  if (!value || isNaN(value)) return '';

  return formatNumber(value / 100_00_000) + ' Cr';
}

function numberInLac(value) {
  if (!value || isNaN(value)) return '';

  return formatNumber(value / 100_000) + ' L';
}

function numberInK(value) {
  if (!value || isNaN(value)) return '';

  return formatNumber(value / 1000) + ' K';
}

function numberInINR(value) {
  if (!value || isNaN(value)) return '';
  if (value >= 10000000) return numberInCr(value);
  if (value <= -10000000) return numberInCr(value);
  if (value >= 100000) return numberInLac(value);
  if (value <= -100000) return numberInLac(value);
  if (value >= 1000) return numberInK(value);
  if (value <= -1000) return numberInK(value);
  return formatNumber(value);
}

function numberRange(start, end, step) {
  const len = Math.floor((end - start) / step) + 1;
  return Array(len).fill().map((_, idx) => {
    return {
      strike_price: start + (idx * step),
    };
  });
}

export {
  formatNumber,
  formatNumberWithZero,
  formatNumberWithComma,
  bigNumbers,
  signumNumber,
  signumFontColor,
  signumBGColor,
  signumPWOIBGColor,
  numberInINR,
  numberRange,
  getSign,
};
