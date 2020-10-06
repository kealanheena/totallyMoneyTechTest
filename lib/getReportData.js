module.exports = function getReportData(customerInputsArray, amountOfDays = 90, startDate = new Date()) {
  arrayOfDates = []

  for(i = 0; i < amountOfDays; i++) {
    if(customerInputsArray[0]){
      arrayOfDates.push(`${startDate.toDateString()} ${customerInputsArray[0].name}`);
    } else {
      arrayOfDates.push(`${startDate.toDateString()} `);
    }

  }

  return arrayOfDates;
}