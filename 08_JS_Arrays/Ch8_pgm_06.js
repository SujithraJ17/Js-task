// Manipulating arrays with push, pop and join

var items = [];
var item = "The Pyramids";
var removed;

items.push(item);
items.push("The Grand Canyon");
items.push("Bondi Beach");

console.log(items);

removed = items.pop();

console.log(removed + " was removed");
console.log(items.join(" and "));


function getMonthlyVisitorReport(month, weekIndex, dayIndex) {
    
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    
    if (weekIndex < 1 || weekIndex > month.length || dayIndex < 1 || dayIndex > 7) {
        return "Invalid week or day index";
    }
    
    
    weekIndex -= 1;
    dayIndex -= 1;
    
    
    var visitors = month[weekIndex][dayIndex];
    
    
    var dayName = daysOfWeek[dayIndex];
    
    
    return `There were ${visitors} visitors on ${dayName}`;
}


console.log(getMonthlyVisitorReport(month, 1, 1));  
console.log(getMonthlyVisitorReport(month, 3, 7));  
console.log(getMonthlyVisitorReport(month, 4, 3));  


/* Further Adventures
 *
 * 1) Push another item onto the array.
 *
 * 2) Log the joined items.
 *
 * You can set an array element by using its index.
 * items[2] = "The Taj Mahal"
 *
 * 3) Set one of the items using square brackets.
 *
 * 4) Can you push more than one item at a time?
 *
 */