const getReportData = require('../lib/getReportData');

const firstDate = new Date('August 1, 2020 12:15:30').toDateString();
const secondDate = new Date('August 2, 2020 12:15:30').toDateString();

describe('#getReportData', () => {
  let startDate;
  

  beforeEach(() => {
    startDate = new Date('August 1, 2020 12:15:30');
  });

  test('getReportData should be a function', () => {
    expect(getReportData).toBeInstanceOf(Function);
  });

  describe('When the amount of day is 1', () => {
    const amountOfDays1 = 1;

    test('getReportData should return an array of dates', () => {
      expect(getReportData([], amountOfDays1, startDate)).toEqual([`${firstDate} `]);
    });
    
    test('getReportData should take an array of object and return an array of dates', () => {
      expect(getReportData([{
        name: 'jess', 
        preference: 'everyday'
      }], amountOfDays1, startDate)).toEqual([`${firstDate} jess`]);
    });
  });


  describe('When the amount of day is 2', () => {
    const amountOfDays = 2;

    test('getReportData should return an array of subsequential dates', () => {
      expect(getReportData([], amountOfDays, startDate)).toEqual([`${firstDate} `, `${secondDate} `]);
    });
    
  });

});
