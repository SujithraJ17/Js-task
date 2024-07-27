// Passing an array to a function

var getVisitorReport = function (visitorArray, dayInWeek) {
	var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
  ];
	var index = dayInWeek - 1;
	var visitorReport;

	visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
	visitorReport += "on " + days[index];

	return visitorReport;
};

var visitors = [ 354, 132, 210, 221, 481 ];

var report = getVisitorReport(visitors, 2);

console.log(report);

var reportFriday = getVisitorReport(visitors, 5);
console.log(reportFriday);  
var getVisitorReport = function (visitorArray, dayInWeek) {
  var days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
  ];
  var index = dayInWeek - 1;
  var visitorReport;

  if (index < 0 || index >= days.length) {
      return "Invalid day in week.";
  }

  visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
  visitorReport += "on " + days[index];

  return visitorReport;
};


var visitorsExtended = [354, 132, 210, 221, 481, 150, 200];
var reportSaturday = getVisitorReport(visitorsExtended, 6);
console.log(reportSaturday);  
var reportSunday = getVisitorReport(visitorsExtended, 7);
console.log(reportSunday);  


var getMonthlyVisitorReport = function (monthArray, weekIndex, dayIndex) {
  if (weekIndex < 1 || weekIndex > monthArray.length) {
      return "Invalid week index.";
  }

  var weekArray = monthArray[weekIndex - 1];
  if (dayIndex < 1 || dayIndex > weekArray.length) {
      return "Invalid day index.";
  }

  
  return getVisitorReport(weekArray, dayIndex);
};


var month = [
  [354, 132, 210, 221, 481, 150, 200],  
  [400, 140, 220, 230, 490, 160, 210],  
  [410, 150, 230, 240, 500, 170, 220], 
  [420, 160, 240, 250, 510, 180, 230]   
];

var monthlyReport = getMonthlyVisitorReport(month, 2, 5);
console.log(monthlyReport);  

var week1 = [354, 132, 210, 221, 481, 150, 200];
var week2 = [400, 140, 220, 230, 490, 160, 210];
var week3 = [410, 150, 230, 240, 500, 170, 220];
var week4 = [420, 160, 240, 250, 510, 180, 230];

var month = [week1, week2, week3, week4];


console.log(getMonthlyVisitorReport(month, 1, 1));  
console.log(getMonthlyVisitorReport(month, 3, 7));  
console.log(getMonthlyVisitorReport(month, 4, 3));  

/* Further Adventures
 *
 * 1) Run the report for Friday.
 *
 * 2) Update the function to include Saturday and Sunday.
 *
 * A month of visitor info could be represented as an
 * array of arrays: [ week1, week2, week3, week4 ]
 * where each week could be an array of visitor numbers.
 *
 * 3) Write a new function with three parameters,
 *    the month array, the week wanted and the day wanted.
 *    The new function should return the visitor report specified.
 *    You can call getVisitorReport from your function if you want.
 *
 * 4) Create four arrays of week visitor numbers
 *    and a month array of the four weeks.
 *    Test your function from 3) for different weeks and days.
 *
 */