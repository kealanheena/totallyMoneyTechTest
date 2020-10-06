const daysKey = require('./daysKey');

module.exports = function getReportData(customerInputsArray, amountOfDays = 90, date = new Date()) {
  const arrayOfDates = []

  for(i = 0; i < amountOfDays; i++) {

    if(customerInputsArray.length !== 0) {
      let customerString = '';

      customerInputsArray.forEach((customerInput) => {
        let preferenceType =  customerInput.preference.type;

        if(preferenceType === 'everyday') {
          if(customerString === '') {
            customerString += ` ${customerInput.name}`;
          } else {
            customerString += `, ${customerInput.name}`;
          }
        } else if(preferenceType === 'day') {
          customerInput.preference.days.forEach((day) => {
            if(date.getDay() == daysKey[day]) {
              if(customerString === '') {
                customerString += ` ${customerInput.name}`;
              } else {
                customerString += `, ${customerInput.name}`;
              }
            }
          });
        } else {
          customerInput.preference.dates.forEach((customersDate) => {
            if(date.getDate() == customersDate) {
              if(customerString === '') {
                customerString += ` ${customerInput.name}`;
              } else {
                customerString += `, ${customerInput.name}`;
              }
            }
          });
        }
      });
      arrayOfDates.push(`${date.toDateString()}${customerString}`);
    } else { 
      arrayOfDates.push(`${date.toDateString()}`);
    }

    date.setDate(date.getDate() + 1)
  }

  return arrayOfDates;
}