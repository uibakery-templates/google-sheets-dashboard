const convertStringToNumber = (str) => {
  if (typeof str === 'number') return str;
  if (typeof str !== 'string') return 0;
	str = str.replace('(', '-').replace(')', '')
  const number = Number.parseFloat(str.replace(/,/g, ''));
  return isNaN(number) ? 0 : number;
};
return {{state.selectedRows.data.map(row => [row.row_number_id, convertStringToNumber(row[ui.select2.value])])}};