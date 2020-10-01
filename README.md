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
|b|10th of every month|
|c|Tuesdays and Fridays|

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
...
