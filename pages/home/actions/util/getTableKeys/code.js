let keys = []
if ({{state.tableData.length > 0}}) {
	keys = {{Object.keys(state.tableData[0]).filter(key => key !== 'row_number_id')}};
}
return keys;