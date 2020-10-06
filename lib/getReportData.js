const daysKey = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6
}

module.exports = function getReportData(customerInputsArray, amountOfDays = 90, date = new Date()) {
  arrayOfDates = []

  for(i = 0; i < amountOfDays; i++) {

    if(customerInputsArray.length !== 0) {
      let customerString = '';
      customerInputsArray.forEach((customerInput) => {
        if(customerInput.preference.type === 'everyday') {
          customerString === '' ? customerString += ` ${customerInput.name}` : customerString += `, ${customerInput.name}`;
        } else {
          customerInput.preference.days.forEach((day) => {
            if(date.getDay() == daysKey[day]) {
              customerString === '' ? customerString += ` ${customerInput.name}` : customerString += `, ${customerInput.name}`;
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