module.exports = function getReportData(customerInputsArray, amountOfDays = 90, date = new Date()) {
  arrayOfDates = []

  for(i = 0; i < amountOfDays; i++) {
    if(customerInputsArray[0]){
      arrayOfDates.push(`${date.toDateString()} ${customerInputsArray[0].name}`);
    } else {
      arrayOfDates.push(`${date.toDateString()} `);
    }
    date.setDate(date.getDate() + 1)
  }

  return arrayOfDates;
}