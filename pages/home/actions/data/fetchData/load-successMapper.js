const isNumericNegative = (str) => {
  if (typeof str !== 'string') return false;
  const number = Number.parseFloat(str.replace(/,/g, ''));
  return !isNaN(number) && number < 0;
};

return {{ data
  .map((row) => {
    Object.keys(row).forEach((key) => {
      const val = row[key];
      if (isNumericNegative(val)) {
        row[key] = val.replace('-', '(') + ')';
      }
    });
    return row;
  })
}};