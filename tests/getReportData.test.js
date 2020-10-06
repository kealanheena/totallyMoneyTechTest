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
      expect(getReportData([], amountOfDays, startDate)).toEqual([`${firstDate}`]);
    });
    
    test('getReportData should take an array of objects and return an array of dates', () => {
      expect(getReportData([{
        name: 'jess', 
        preference: { type: 'everyday' }
      }], amountOfDays, startDate)).toEqual([`${firstDate} jess`]);
    });

    test('getReportData should return dates with multiple names if there is multiple customer inputs', () => {
      expect(getReportData([{
        name: 'jess', 
        preference: { type: 'everyday' }
      }, {
        name: 'ted', 
        preference: { type: 'everyday' }
      }], amountOfDays, startDate)).toEqual([`${firstDate} jess, ted`]);
    });
  });


  describe('When the amount of day is 2', () => {
    beforeEach(() => {
      amountOfDays = 2;
    });

    test('getReportData should return an array of subsequential dates', () => {
      expect(getReportData([], amountOfDays, startDate)).toEqual([`${firstDate}`, `${secondDate}`]);
    });

    describe('when the customers Preference is Everyday', () => {
      test('getReportData should take an array of objects and return an array of dates', () => {
        expect(getReportData([{
          name: 'jess', 
          preference: { type: 'everyday' }
        }], amountOfDays, startDate)).toEqual([`${firstDate} jess`, `${secondDate} jess`]);
      });
  
      test('getReportData should return dates with multiple names if there is multiple customer inputs', () => {
        expect(getReportData([{
          name: 'jess', 
          preference: { type: 'everyday' }
        }, {
          name: 'ted', 
          preference: { type: 'everyday' }
        }], amountOfDays, startDate)).toEqual([`${firstDate} jess, ted`, `${secondDate} jess, ted`]);
      });
    });

    describe('when the customers Preference is Specific days of the week', () => {
      test('getReportData should only add the customers name to dates on that day', () => {
        expect(getReportData([{
          name: 'jess', 
          preference: { 
            type: 'day', 
            days: ['Saturday']
          }
        }], amountOfDays, startDate)).toEqual([`${firstDate} jess`, `${secondDate}`]);
      });

      test('getReportData should also work if there are Multiple dates in the array', () => {
        expect(getReportData([{
          name: 'jess', 
          preference: { 
            type: 'day', 
            days: ['Saturday', 'Sunday']
          }
        }], amountOfDays, startDate)).toEqual([`${firstDate} jess`, `${secondDate} jess`]);
      });

      test('getReportData should also work if one of the days don\'t appear in the data', () => {
        expect(getReportData([{
          name: 'jess', 
          preference: { 
            type: 'day', 
            days: ['Monday', 'Sunday']
          }
        }], amountOfDays, startDate)).toEqual([`${firstDate}`, `${secondDate} jess`]);
      });

    });

    describe('when the customers Preference is Specific days of the week', () => {
      test('getReportData should only add the customers name to dates in prefernces dates', () => {
        expect(getReportData([{
          name: 'jess', 
          preference: { 
            type: 'date', 
            dates: [1]
          }
        }], amountOfDays, startDate)).toEqual([`${firstDate} jess`, `${secondDate}`]);
      });

      test('getReportData should only add the customers name to dates in prefernces dates', () => {
        expect(getReportData([{
          name: 'jess', 
          preference: { 
            type: 'date', 
            dates: [1, 2]
          }
        }], amountOfDays, startDate)).toEqual([`${firstDate} jess`, `${secondDate} jess`]);
      });

    });
    
  });

});
