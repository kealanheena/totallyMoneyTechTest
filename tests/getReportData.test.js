const getReportData = require('../lib/getReportData');

const firstDate = new Date('August 1, 2020 12:15:30').toDateString();
const secondDate = new Date('August 2, 2020 12:15:30').toDateString();


test('getReportData should be a function', () => {
  expect(getReportData).toBeInstanceOf(Function);
});

test('getReportData should return an array of dates', () => {
  expect(getReportData([], 1, new Date('August 1, 2020 12:15:30'))).toEqual([`${firstDate} `]);
});

test('getReportData should take an array of object and return an array of dates', () => {
  expect(getReportData([{name: 'jess', preference: 'everyday'}], 1, new Date('August 1, 2020 12:15:30'))).toEqual([`${firstDate} jess`]);
});