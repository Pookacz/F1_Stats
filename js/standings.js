
import {drivers} from "./drivers.js";
import {teams} from "./teams.js";
import {races} from "./races.js";

/*
-=-=-=-=-=-=-=-=-=-=-
STANDINGS FOR DRIVERS
-=-=-=-=-=-=-=-=-=-=-
*/
let driversMap = new Map();
driversMap.set("hamilton", drivers.hamilton.getPoints());
driversMap.set("bottas", drivers.bottas.getPoints());
driversMap.set("verstappen", drivers.verstappen.getPoints());
driversMap.set("perez", drivers.perez.getPoints());
driversMap.set("norris", drivers.norris.getPoints());
driversMap.set("ricciardo", drivers.ricciardo.getPoints());
driversMap.set("leclerc", drivers.leclerc.getPoints());
driversMap.set("sainz", drivers.sainz.getPoints());
driversMap.set("gasly", drivers.gasly.getPoints());
driversMap.set("tsunoda", drivers.tsunoda.getPoints());
driversMap.set("stroll", drivers.stroll.getPoints());
driversMap.set("vettel", drivers.vettel.getPoints());
driversMap.set("ocon", drivers.ocon.getPoints());
driversMap.set("alonso", drivers.alonso.getPoints());
driversMap.set("raikkonen", drivers.raikkonen.getPoints());
driversMap.set("giovinazzi", drivers.giovinazzi.getPoints());
driversMap.set("russell", drivers.russell.getPoints());
driversMap.set("latifi", drivers.latifi.getPoints());
driversMap.set("schumacher", drivers.schumacher.getPoints());
driversMap.set("mazepin", drivers.mazepin.getPoints());

let pointsArr = [];
//Change Map to Arr for sort method
for(let value of driversMap){
    pointsArr.push(value);    
}
//sort way
function sorty(a, b) {
    return b[1] - a[1]
 }
//sort Arr
pointsArr.sort(sorty);
//Show drivers standings
function showDriversStandings(){
    for(let i = 0; i < pointsArr.length; i++){
        console.log(i+1 + ". " + pointsArr[i][0] + " " + pointsArr[i][1])
    }
}
showDriversStandings();

/*
-=-=-=-=-=-=-=-=-=-
STANDINGS FOR TEAMS
-=-=-=-=-=-=-=-=-=-
*/
let teamsMap = new Map();
teamsMap.set("mercedes", teams.mercedes.getTeamPoints());
teamsMap.set("redbull", teams.redbull.getTeamPoints());
teamsMap.set("mclaren", teams.mclaren.getTeamPoints());
teamsMap.set("ferrari", teams.ferrari.getTeamPoints());
teamsMap.set("alphatauri", teams.alphatauri.getTeamPoints());
teamsMap.set("astonmartin", teams.astonmartin.getTeamPoints());
teamsMap.set("alpine", teams.alpine.getTeamPoints());
teamsMap.set("alfaromeo", teams.alfaromeo.getTeamPoints());
teamsMap.set("williams", teams.williams.getTeamPoints());
teamsMap.set("haas", teams.haas.getTeamPoints());

let teamsPointsArr = [];
//Change Map to Arr for sort method
for(let value of teamsMap){
    teamsPointsArr.push(value);    
}

//sort Arr
teamsPointsArr.sort(sorty);
//Show Teams Standings
function showTeamsStandings(){
    for(let i = 0; i < teamsPointsArr.length; i++){
        console.log(i+1 + ". " + teamsPointsArr[i][0] + " " + teamsPointsArr[i][1])
    }
}
showTeamsStandings();
export {driversMap}; 