const printReport = require('../lib/printReport');

const firstDate = new Date('August 1, 2020 12:15:30').toDateString();
const secondDate = new Date('August 2, 2020 12:15:30').toDateString();

test('Returns an array of dates with the names of the customers who are recieving the marketing material', () => {
  expect(
    printReport([{ name: 'Jess', preference: 'Everyday' }], 2)
  ).toEqual([`${firstDate} Jess`, `${secondDate} Jess`]);
});