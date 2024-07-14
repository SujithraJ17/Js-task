// A function to display player information

var showPlayerLocation = function(player) {
    console.log(player.name + " is in " + player.place);
};

var showPlayerHealth = function(player) {
    console.log(player.name + " has health " + player.health);
};

var showPlayerInfo = function(player) {
    console.log(player.name);
    console.log("------------------------------");
    showPlayerLocation(player);
    showPlayerHealth(player);
    console.log("------------------------------");
    console.log("");
};

player = player1;
showPlayerInfo(player);

player = player2;
showPlayerInfo(player);


/* Further Adventures
 *
 * 1) Write a function that just shows
 *    where the player is.
 *
 * 2) Write a function that just shows
 *    the player's health.
 *
 * 3) Change the showPlayerInfo function
 *    to use your two functions.
 *
 */