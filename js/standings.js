import { drivers } from "./drivers.js";
import { teams } from "./teams.js";
import { races } from "./races.js";

/*
-=-=-=-=-=-=-=-=-=-=-
STANDINGS FOR DRIVERS
-=-=-=-=-=-=-=-=-=-=-
*/
let driversMap = new Map();
driversMap.set("Hamilton", drivers.hamilton.getPoints());
driversMap.set("Bottas", drivers.bottas.getPoints());
driversMap.set("Verstappen", drivers.verstappen.getPoints());
driversMap.set("Perez", drivers.perez.getPoints());
driversMap.set("Norris", drivers.norris.getPoints());
driversMap.set("Ricciardo", drivers.ricciardo.getPoints());
driversMap.set("Leclerc", drivers.leclerc.getPoints());
driversMap.set("Sainz", drivers.sainz.getPoints());
driversMap.set("Gasly", drivers.gasly.getPoints());
driversMap.set("Tsunoda", drivers.tsunoda.getPoints());
driversMap.set("Stroll", drivers.stroll.getPoints());
driversMap.set("Vettel", drivers.vettel.getPoints());
driversMap.set("Ocon", drivers.ocon.getPoints());
driversMap.set("Alonso", drivers.alonso.getPoints());
driversMap.set("Raikkonen", drivers.raikkonen.getPoints());
driversMap.set("Giovinazzi", drivers.giovinazzi.getPoints());
driversMap.set("Russell", drivers.russell.getPoints());
driversMap.set("Latifi", drivers.latifi.getPoints());
driversMap.set("Schumacher", drivers.schumacher.getPoints());
driversMap.set("Mazepin", drivers.mazepin.getPoints());

let pointsArr = [];
//Change Map to Arr for sort method
for (let value of driversMap) {
  pointsArr.push(value);
}
//sort way
function sorty(a, b) {
  return b[1] - a[1];
}
//sort Arr
pointsArr.sort(sorty);
//Show drivers standings
function showDriversStandings() {
  
  for (let i = 0; i < pointsArr.length; i++) {
    console.log(i + 1 + ". " + pointsArr[i][0] + " " + pointsArr[i][1]);
    
    const driversProfile = document.createElement("div"),
          driversPhoto = document.createElement("img"),
          driversPosition = document.createElement("span"),
          driversName = document.createElement("span"),
          driversPoints = document.createElement("span"),
          container = document.querySelector("#container");
    
          driversProfile.classList.add("driversProfile");
          driversPhoto.classList.add("driversPhoto");
          driversPosition.classList.add("driversPosition");
          driversName.classList.add("driversName");
          driversPoints.classList.add("driversPoints");
    
    // driversPhoto.innerHTML = " <img src='drivers_photos/" + pointsArr[i][0] +".png' class='driversPhotos'>";
    driversPhoto.setAttribute("src", "drivers_photos/" + pointsArr[i][0] + ".png");
    driversPosition.innerText = i + 1 + ".";
    driversName.innerText =  pointsArr[i][0];
    driversPoints.innerText = pointsArr[i][1];

    container.appendChild(driversProfile);
    driversProfile.appendChild(driversPhoto);
    driversProfile.appendChild(driversPosition);
    driversProfile.appendChild(driversName);
    driversProfile.appendChild(driversPoints);
    
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
for (let value of teamsMap) {
  teamsPointsArr.push(value);
}

//sort Arr
teamsPointsArr.sort(sorty);
//Show Teams Standings
function showTeamsStandings() {
  for (let i = 0; i < teamsPointsArr.length; i++) {
    console.log(
      i + 1 + ". " + teamsPointsArr[i][0] + " " + teamsPointsArr[i][1]
    );
  }
}
showTeamsStandings();
export { driversMap };
