# Totally Money Tech Test

## Challenge: Implement a Customer preference Centre

customers are able to set their prefences for recieving marketing infomation using the following options:

- On a specific date each month (1st - 28th)
- On each specific day of the week (Monday - Sunday)
- Every day
- Never

Implement a system that accepts the choice of multiple customers as input. After receiving the input the system should produce a report of the upcoming 90 days for each day that marketing material will be sent, the report should show which customers will be a recipient.

E.G.
|Customer Name|Recieves Material ...|
|---|---|
|A|Every day|
|B|10th of every month|
|C|Tuesdays and Fridays|

The output would be:

- Sun 01-April-2018 A
- Mon 02-April-2018 A
- Tue 03-April-2018 A, C
- Wed 04-April-2018 A
- Thu 05-April-2018 A
- Fri 06-April-2018 A, C
- Sat 07-April-2018 A
- Sun 08-April-2018 A
- Mon 09-April-2018 A
- Tue 10-April-2018 A, B, C
- Wed 11-April-2018 A
- Thu 12-April-2018 A
- Fri 13-April-2018 A, C
- Sat 14-April-2018 A
- ...

## User Stories

```
As a User,
So I can track when my customers what marketing material,
I would like a list of dates with the people who want to recieve marketing material.

As a User,
So my customers can choose when the want marketing material,
I would like to accept customers data in four catergorys On specified dates of the month, Everyday, On specified days of the week and Never.
```

## How to Use

To start the programme run: 

```
node example.js
```

if you want to use different inputs use an array of object with to items name and preference.

e.g.

```
[
  {
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
  }
]
```

Name: this is the name of the customer and will be printed beside their preference.

Preference: this has three items:
  type: this can be one of three things everyday, date and day, if it is any other value it defaults to never.

  dates: this only applies if you set the type as date, it is an array of numbers from 1-28.

  days: this only applies if you set the type as day, it is an array of strings which are the days of the week from Monday - Sunday.

There is also two other variables you can pass to the getReportData function, these were mainly for testing and are opitional and will revert to the default value if not inputted.

amountOfDays: this is a number and sets the amount of days you want printed out with the report, if this number is over 90 or is not inputted it reverts to 90.

date: this is the start date of the report if not imputted it takes a date object if not inputted it reverts to the current date (*new Date*).

## Running the tests

to run tests:

```
$ npm test
```

## Tests 

### Unit Tests

- #getReportData
  - should be a function
  - When the amount of days is 1
    - should return an array with '*firstDateVariable*'
    - should take an array of customers and return an array of dates with the names of people getting the marketing info
    - should return dates with multiple names if there is multiple customer inputs
  - When the amount of days is 2
    - should return an array of subsequential dates
    - When the customers Preference is Everyday
      - should take an array of customers and return an array of subsequential dates with the names of people getting the marketing info
      - should return dates with multiple names if there is multiple customer inputs
      - When the customers Preference is Specific days of the week
        - should only add the customers name to dates on that day they in their preferences
        - should also work if there are multiple dates in the array
        - should also work if one of the days don't appear in the data
        - should return dates with multiple names if there is multiple customer inputs
      - When the customers Preference is Specific days of the week
        - should only add the customers name to dates in prefernces dates
        - should only add the customers name to dates in prefernces dates
        - should also work if one of the days don\'t appear in the data
      - When each of the customers preference are different
        - should only add the customers name to days/dates in their prefernces
        - should only add the customers name to dates in prefernces dates
