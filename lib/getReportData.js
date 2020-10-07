const daysKey = require('./daysKey');

module.exports = function getReportData(customerInputsArray, amountOfDays = 90, date = new Date()) {
  const arrayOfDates = []

  for(i = 0; i < amountOfDays && amountOfDays <= 90; i++) {
      const customerStringsArray = [];

      customerInputsArray.forEach((customerInput) => {
        let preferenceType =  customerInput.preference.type;

        switch(preferenceType) {
          case 'everyday':
            customerStringsArray.push(customerInput.name);
            break;
          case 'day':
            let customersPreferedDays = customerInput.preference.days

            customersPreferedDays.forEach((day) => {
              if(date.getDay() == daysKey[day]) {
                customerStringsArray.push(customerInput.name);
              }
            });
            break;
          case 'date':
            let customersPreferedDates = customerInput.preference.dates

            customersPreferedDates.forEach((customersDate) => {
              if(date.getDate() == customersDate) {
                customerStringsArray.push(customerInput.name);
              }
            });
            break;
        }

      });

      if (!customerStringsArray.length) {
        arrayOfDates.push(`${date.toDateString()}`) 
      } else {
        arrayOfDates.push(`${date.toDateString()} ${customerStringsArray.join(', ')}`)
      }

    date.setDate(date.getDate() + 1)
  }

  return arrayOfDates;
}