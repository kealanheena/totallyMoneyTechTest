const getReportData = require('../lib/getReportData');

const firstDate = new Date('August 1, 2020 12:15:30').toDateString();
const secondDate = new Date('August 2, 2020 12:15:30').toDateString();

describe('#getReportData', () => {
  let startDate;
  let amountOfDays
  

  beforeEach(() => {
    startDate = new Date('August 1, 2020 12:15:30');
  });

  test('getReportData should be a function', () => {
    expect(getReportData).toBeInstanceOf(Function);
  });

  describe('When the amount of day is 1', () => {
    beforeEach(() => {
      amountOfDays = 1;
    });

    test('getReportData should return an array of dates', () => {
      expect(getReportData([], amountOfDays, startDate)).toEqual([`${firstDate} `]);
    });
    
    test('getReportData should take an array of objects and return an array of dates', () => {
      expect(getReportData([{
        name: 'jess', 
        preference: 'everyday'
      }], amountOfDays, startDate)).toEqual([`${firstDate} jess`]);
    });
  });


  describe('When the amount of day is 2', () => {
    beforeEach(() => {
      amountOfDays = 2;
    });

    test('getReportData should return an array of subsequential dates', () => {
      expect(getReportData([], amountOfDays, startDate)).toEqual([`${firstDate} `, `${secondDate} `]);
    });

    test('getReportData should take an array of objects and return an array of dates', () => {
      expect(getReportData([{
        name: 'jess', 
        preference: 'everyday'
      }], amountOfDays, startDate)).toEqual([`${firstDate} jess`, `${secondDate} jess`]);
    });

    test('getReportData should return dates with multiple names if there is multiple customer inputs', () => {
      expect(getReportData([{
        name: 'jess', 
        preference: 'everyday'
      }, {
        name: 'ted', 
        preference: 'everyday'
      }], amountOfDays, startDate)).toEqual([`${firstDate} jess, ted`, `${secondDate} jess, ted`]);
    });
    
  });

});
