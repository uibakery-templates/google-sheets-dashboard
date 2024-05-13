const convertStringToNumber = (str) => {
  if (typeof str === 'number') return str;
  if (typeof str !== 'string') return 0;
	str = str.replace('(', '-').replace(')', '')
  const number = Number.parseFloat(str.replace(/,/g, ''));
  return isNaN(number) ? 0 : number;
};
const keys = {{ui.columnSelect.value}};
const selectedRows = {{state.selectedRows.data}};
{{state.analytics = state.analytics.filter(column => keys.includes(column.name))}};
console.log({{state.selectedRows}})
keys.forEach((key) => {
  const sum = selectedRows.reduce((agr, row) => {
    return agr + convertStringToNumber(row[key]);
  }, 0);
  const analyticIndex = {{state.analytics.findIndex(column => column.name === key)}};
  const analytic = { name: key, value: {{ui.functionSelect.value === 'sum'}} ? sum : sum / selectedRows.length };
  if (analyticIndex === -1) {
    {{state.analytics.push(analytic)}};
  } else {
    {{state.analytics[analyticIndex] = analytic}};
  }
});

return {{state.analytics}}