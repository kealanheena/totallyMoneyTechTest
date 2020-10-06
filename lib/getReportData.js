module.exports = function getReportData(customerInputsArray, amountOfDays = 90, date = new Date()) {
  arrayOfDates = []

  for(i = 0; i < amountOfDays; i++) {

    if(customerInputsArray.length !== 0) {
      let customerString = '';
      customerInputsArray.forEach((customerInput, index) => {
        index === 0 ? customerString += ` ${customerInput.name}` : customerString += `, ${customerInput.name}`;
      });
      arrayOfDates.push(`${date.toDateString()}${customerString}`);
    } else { 
      arrayOfDates.push(`${date.toDateString()} `);
    }

    date.setDate(date.getDate() + 1)
  }

  return arrayOfDates;
}