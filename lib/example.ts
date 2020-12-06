import { getReportData } from './getReportData';

console.log(getReportData([{
  name: 'A',
  preference: { 
    type: 'Everyday'
  }
},
{
  name: 'B', 
  preference: { 
    type: 'Date', 
    dates: [10]
  }
},
{
  name: 'C',
  preference: { 
    type: 'day', 
    days: ['Tuesday', 'Friday']
  }
}], 14));
