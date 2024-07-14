// Displaying a menu

var displayMenu;

displayMenu = function () {
	console.log("Please choose an option:");
	console.log("(1) Print log");
	console.log("(2) Upload file");
	console.log("(9) Quit");
};

displayMenu();

var displayMyMenu = function () {
    console.log("Welcome to My Custom Menu:");
    console.log("(A) View profile");
    console.log("(B) Send message");
    console.log("(C) View notifications");
    console.log("(X) Exit");
};


displayMyMenu();

displayMenu();
console.log(); 
displayMyMenu();
/* Further Adventures
 *
 * 1) Add two more options to the displayMenu
 *    function and run the program.
 *
 * 2) Create your own displayMyMenu function.
 *
 * 3) Add a line to call your function as well.
 *    Run the program
 *
 */