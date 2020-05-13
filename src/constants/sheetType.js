export const sheetType = ['xlsx', 'xlsb', 'xlsm', 'xls', 'xml', 'csv']
  .map(function (x) {
    return '.' + x
  })
  .join(',')
