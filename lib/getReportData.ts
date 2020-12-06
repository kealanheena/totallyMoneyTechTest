import { daysKey } from './daysKey';

interface CustomerInputsArray {
  name: string,
  preference: {
    type: string,
    days?: string[],
    dates?: number[]
  }
}

export function getReportData(customerInputsArray: Array<CustomerInputsArray>, amountOfDays: number = 90, date: Date = new Date()) {
  const arrayOfDates = []
  
  for(let i = 0; i < amountOfDays && amountOfDays < 90; i++) {
      const customerStringsArray = [];
      
      customerInputsArray.forEach((customerInput) => {
        let preferenceType =  customerInput.preference.type.toLowerCase();

        switch(preferenceType) {
          case 'everyday':
            customerStringsArray.push(customerInput.name);
            break;
          case 'day':
            let customersPreferedDays = customerInput.preference.days
            
            if(customersPreferedDays.includes(daysKey[date.getDay()])) {
              customerStringsArray.push(customerInput.name)
            }
            break;
          case 'date':
            let customersPreferedDates = customerInput.preference.dates

            if(customersPreferedDates.includes(date.getDate())) {
              customerStringsArray.push(customerInput.name)
            }
            break;
        }

      });

      if (!customerStringsArray.length) {
        arrayOfDates.push(`${date.toDateString()}`);
      } else {
        arrayOfDates.push(`${date.toDateString()} ${customerStringsArray.join(', ')}`);
      }

    date.setDate(date.getDate() + 1)
  }

  return arrayOfDates;
}
