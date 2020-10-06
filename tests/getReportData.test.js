const getReportData = require('../lib/getReportData');

test('Returns an array of dates with the names of the customers who are recieving the marketing material', () => {
  expect(getReportData).toBeInstanceOf(Function);
});