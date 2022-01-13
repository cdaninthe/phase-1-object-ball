function gameObject() {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                },
            },
        }, 
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 7,
                    slamDunks: 10
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
}

// gameObject().home.players["Alan Anderson"].points

//function numPointsScored (name){
    //const game = gameObject();
    //debugger
    // iterate through game keys (home, away)
    //for (let gameKey in game) {
        //const teamObj = game[gameKey]
        //const playerObj = teamObj.players
        //debugger
        // iterate through players
        //for (let playerKey in playerObj) {    
        //debugger
            // checking if player matches name entenred in function argument
            //if (playerKey === name){ 
                // return player's points
                //return playerObj[playerKey].points;
            //}
        //}
    //}
//}

function homeTeam(){
    return gameObject().home;
}

function awayTeam(){
    return gameObject().away;
}

function players(){
    return Object.assign({}, homeTeam().players, awayTeam().players);
    //return {...homePlayers, ...awayPlayers};
}

//Build a function, numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.
function numPointsScored(name){
    return players()[name].points;
}
console.log("Alan Anderson points:" + numPointsScored("Alan Anderson"));


//Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player.
function shoeSize(name){
    return players()[name].shoe;
}
console.log("Alan Anderson shoe size:" + shoeSize("Alan Anderson"));


//Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
function teamColors(team) {
    const game = gameObject()
    for (key in game) {
        if (game[key].teamName === team) {
            return game[key].colors
        }
    }
}
console.log("Brooklyn Nets Colors:", teamColors("Brooklyn Nets"));


//Build a function, teamNames, that operates on the game object to return an array of the team names.
function teamNames(){
    const game = gameObject()
    return Object.keys(game).map(team => game[team].teamName);
}
console.log("Team names:", teamNames());


//Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey number's for that team.
function playerNumbers(name) {
    const game = gameObject();
    const team = Object.keys(game).find(tName => game[tName].teamName === name)
    const players = Object.keys(game[team].players)
    return players.map(player => game[team].players[player].number);
}
console.log("Team jersey numbers:", playerNumbers("Brooklyn Nets"));


//Build a function, playerStats, that takes in an argument of a player's name and returns a object of that player's stats.
function playerStats(name) {
    return players()[name];
}
console.log("Alan Anderson stats:", playerStats("Alan Anderson"));


//Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size. Break this one down into steps:
function bigShoeRebounds(){
    const stats = players();
    let shoeSize = 0;
    let rebounds = 0;
    for (player in stats){
        if (stats[player].shoe > shoeSize){
            shoeSize = stats[player].shoe  
            rebounds = stats[player].rebounds
        }
    }
    return rebounds;
}
console.log("Rebounds from player with the largest shoe size:", bigShoeRebounds());


//Which player has the most points? Call the function mostPointsScored.
function mostPointsScored() {
    const stats = players();
    let points = 0;
    let name = " "
    for (player in stats){
        if (stats[player].points > points){
            points = stats[player].points
            name = player
        }
    }
    return name;
}
console.log("Player with the most points:", mostPointsScored());


//Which team has the most points? Call the function winningTeam.
function winningTeam(){
    const homePoints = Object.keys(homeTeam().players).map(player => homeTeam().players[player].points).reduce((previousValue, currentValue) => previousValue + currentValue);
    const awayPoints = Object.keys(awayTeam().players).map(player => awayTeam().players[player].points).reduce((previousValue, currentValue) => previousValue + currentValue);
    if (homePoints > awayPoints){
        return homeTeam().teamName;
    } 
    else {
        return awayTeam().teamName
    }
}
console.log("Team with the most points:", winningTeam());


//Which player has the longest name? Call the function playerWithLongestName.
function playerWithLongestName(){
    let longestName = 0
    let name = " "
    for (player in players()){
        if (player.length > longestName){
            longestName = player.length
            name = player;
        }
    }
    return name;
}
console.log("Player with the longest name:", playerWithLongestName());

//Write a function that returns true if the player with the longest name had the most steals. Call the function doesLongNameStealATon
function doesLongNameStealATon(){
    const stats = players();
    let steals = 0;
    let name = " "
    for (player in stats){
        if (stats[player].steals > steals){
            steals = stats[player].steals
            name = player
        }
    }
    return playerWithLongestName() === name ? true : false;
}
console.log("The player with the longest name had the most steals?", doesLongNameStealATon());
