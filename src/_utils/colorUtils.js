function hexToRgbA(hex, opacity) {
  let c;
  const hexVal = hex || '#4399EB';
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hexVal)) {
    c= hexVal.substring(1).split('');
    if (c.length== 3) {
      c= [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c= '0x'+c.join('');
    return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+','+ opacity +')';
  }
  throw new Error('Bad Hex');
}

export { hexToRgbA };
