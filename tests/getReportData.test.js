const getReportData = require('../lib/getReportData');

const firstDate = new Date('August 1, 2020 12:15:30').toDateString();
const secondDate = new Date('August 2, 2020 12:15:30').toDateString();

describe('#getReportData', () => {
  let startDate;
  let amountOfDays
  

  beforeEach(() => {
    startDate = new Date('August 1, 2020 12:15:30');
  });

  it('should be a function', () => {
    expect(getReportData).toBeInstanceOf(Function);
  });

  describe('When the amount of days is 1', () => {
    beforeEach(() => {
      amountOfDays = 1;
    });

    it(`should return an array with \'${firstDate}\'`, () => {
      expect(getReportData([], amountOfDays, startDate)).toEqual([`${firstDate}`]);
    });
    
    it('should take an array of customers and return an array of dates with the names of people getting the marketing info', () => {
      expect(getReportData([{
        name: 'jess', 
        preference: { type: 'everyday' }
      }], amountOfDays, startDate)).toEqual([`${firstDate} jess`]);
    });

    it('should return dates with multiple names if there is multiple customer inputs', () => {
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

    it('should return an array of subsequential dates', () => {
      expect(getReportData([], amountOfDays, startDate)).toEqual([`${firstDate}`, `${secondDate}`]);
    });

    describe('when the customers Preference is Everyday', () => {
      it('should take an array of customers and return an array of subsequential dates with the names of people getting the marketing info', () => {
        expect(getReportData([{
          name: 'jess', 
          preference: { type: 'everyday' }
        }], amountOfDays, startDate)).toEqual([`${firstDate} jess`, `${secondDate} jess`]);
      });
  
      it('should return dates with multiple names if there is multiple customer inputs', () => {
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
      it('should only add the customers name to dates on that day they in their preferences', () => {
        expect(getReportData([{
          name: 'jess', 
          preference: { 
            type: 'day', 
            days: ['Saturday']
          }
        }], amountOfDays, startDate)).toEqual([`${firstDate} jess`, `${secondDate}`]);
      });

      it('should also work if there are multiple dates in the array', () => {
        expect(getReportData([{
          name: 'jess', 
          preference: { 
            type: 'day', 
            days: ['Saturday', 'Sunday']
          }
        }], amountOfDays, startDate)).toEqual([`${firstDate} jess`, `${secondDate} jess`]);
      });

      it('should also work if one of the days don\'t appear in the data', () => {
        expect(getReportData([{
          name: 'jess', 
          preference: { 
            type: 'day', 
            days: ['Monday', 'Sunday']
          }
        }], amountOfDays, startDate)).toEqual([`${firstDate}`, `${secondDate} jess`]);
      });

      it('should return dates with multiple names if there is multiple customer inputs', () => {
        expect(getReportData([{
          name: 'jess', 
          preference: { 
            type: 'day', 
            days: ['Saturday']
          }
        }, {
          name: 'ted', 
          preference: { 
            type: 'day', 
            days: ['Monday', 'Sunday']
          }
        }], amountOfDays, startDate)).toEqual([`${firstDate} jess`, `${secondDate} ted`]);
      });

    });

    describe('when the customers Preference is Specific days of the week', () => {
      it('should only add the customers name to dates in prefernces dates', () => {
        expect(getReportData([{
          name: 'jess', 
          preference: { 
            type: 'date', 
            dates: [1]
          }
        }], amountOfDays, startDate)).toEqual([`${firstDate} jess`, `${secondDate}`]);
      });

      it('should only add the customers name to dates in prefernces dates', () => {
        expect(getReportData([{
          name: 'jess', 
          preference: { 
            type: 'date', 
            dates: [1, 2]
          }
        }], amountOfDays, startDate)).toEqual([`${firstDate} jess`, `${secondDate} jess`]);
      });

      it('should also work if one of the days don\'t appear in the data', () => {
        expect(getReportData([{
          name: 'jess', 
          preference: { 
            type: 'date', 
            dates: [1, 20, 28]
          }
        }], amountOfDays, startDate)).toEqual([`${firstDate} jess`, `${secondDate}`]);
      });

    });

    describe('when each of the customers preference are different', () => {
      it('should only add the customers name to days/dates in their prefernces', () => {
        expect(getReportData([{
          name: 'jess', 
          preference: { 
            type: 'date', 
            dates: [1]
          }
        }, {
          name: 'kerry', 
          preference: { 
            type: 'everyday', 
          },
        },
        {
          name: 'ted',
          preference: { 
            type: 'day', 
            days: ['Sunday']
          }
        }], amountOfDays, startDate)).toEqual([`${firstDate} jess, kerry`, `${secondDate} kerry, ted`]);
      });

      it('should only add the customers name to dates in prefernces dates', () => {
        expect(getReportData([{
          name: 'jess', 
          preference: { 
            type: 'date', 
            dates: [1]
          }
        }, {
          name: 'kerry', 
          preference: { 
            type: 'never', 
          },
        },
        {
          name: 'ted',
          preference: { 
            type: 'day', 
            days: ['Sunday']
          }
        }], amountOfDays, startDate)).toEqual([`${firstDate} jess`, `${secondDate} ted`]);
      });

    });
    
  });

});
