# Running the code/tests

The file is intended to be run as jest tests.

Once you have cloned the repository, run npm install once in the terminal to install jest (and any necessary dependencies).
To run the tests for all mandatory/extra exercises, run npm test


# kitt-task

The intended functionality of the service is to calculate the price of a
meeting room based upon the given meeting duration and following
[min|hour|day|week] tariff:
Price per minute: £2
Price per hour: £22
Price per day: £60
Price per week: £105
Pseudocode interface:
GetPrice(duration_minutes as Integer) returns price as Integer
- The pricing function should use the cheapest rate for given
duration.
- For example if the duration is 3 hours it should use the daily price
of £60 as this is cheaper than using the price per hour (£66).
Example test Cases below:
1440 minutes = £60
2880 minutes = £105
20160 minutes = £210
You can implement the solution in the language of your choice. Please
email back the solution (with instructions how to run if necessary).