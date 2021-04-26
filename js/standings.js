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
  //Delete previous content
  const container = document.querySelector("#container");
  if (container.hasChildNodes() == true) {
    container.innerHTML = "";
  }

  for (let i = 0; i < pointsArr.length; i++) {
    const driversProfile = document.createElement("div"),
      driversPhoto = document.createElement("img"),
      driversPosition = document.createElement("span"),
      driversName = document.createElement("span"),
      driversPoints = document.createElement("span");

    driversProfile.classList.add("driversProfile");
    driversPhoto.classList.add("driversPhotos");
    driversPosition.classList.add("driversPosition");
    driversName.classList.add("driversName");
    driversPoints.classList.add("driversPoints");

    // driversPhoto.innerHTML = " <img src='drivers_photos/" + pointsArr[i][0] +".png' class='driversPhotos'>";
    driversPhoto.setAttribute(
      "src",
      "drivers_photos/" + pointsArr[i][0] + ".png"
    );
    driversPosition.innerText = i + 1 + ".";
    driversName.innerText = pointsArr[i][0];
    driversPoints.innerText = pointsArr[i][1];

    container.appendChild(driversProfile);
    driversProfile.appendChild(driversPhoto);
    driversProfile.appendChild(driversPosition);
    driversProfile.appendChild(driversName);
    driversProfile.appendChild(driversPoints);
  }
}

/*
-=-=-=-=-=-=-=-=-=-
STANDINGS FOR TEAMS
-=-=-=-=-=-=-=-=-=-
*/
let teamsMap = new Map();
teamsMap.set("Mercedes", teams.mercedes.getTeamPoints());
teamsMap.set("Redbull", teams.redbull.getTeamPoints());
teamsMap.set("Mclaren", teams.mclaren.getTeamPoints());
teamsMap.set("Ferrari", teams.ferrari.getTeamPoints());
teamsMap.set("Alpha Tauri", teams.alphatauri.getTeamPoints());
teamsMap.set("Aston Martin", teams.astonmartin.getTeamPoints());
teamsMap.set("Alpine", teams.alpine.getTeamPoints());
teamsMap.set("Alfa Romeo", teams.alfaromeo.getTeamPoints());
teamsMap.set("Williams", teams.williams.getTeamPoints());
teamsMap.set("Haas", teams.haas.getTeamPoints());

let teamsPointsArr = [];
//Change Map to Arr for sort method
for (let value of teamsMap) {
  teamsPointsArr.push(value);
}

//sort Arr
teamsPointsArr.sort(sorty);
//Show Teams Standings
function showTeamsStandings() {
  //Delete previous content
  const container = document.querySelector("#container");
  if (container.hasChildNodes() == true) {
    container.innerHTML = "";
  }

  for (let i = 0; i < teamsPointsArr.length; i++) {
    const teamsProfile = document.createElement("div"),
      teamsPhoto = document.createElement("img"),
      teamsPosition = document.createElement("span"),
      teamsName = document.createElement("span"),
      teamsPoints = document.createElement("span");

    teamsProfile.classList.add("driversProfile");
    teamsPhoto.classList.add("driversPhotos");
    teamsPosition.classList.add("driversPosition");
    teamsName.classList.add("driversName");
    teamsPoints.classList.add("driversPoints");

    teamsPhoto.setAttribute(
      "src",
      "teams_photos/" + teamsPointsArr[i][0] + ".png"
    );
    teamsPosition.innerText = i + 1 + ".";
    teamsName.innerText = teamsPointsArr[i][0];
    teamsPoints.innerText = teamsPointsArr[i][1];

    container.appendChild(teamsProfile);
    teamsProfile.appendChild(teamsPhoto);
    teamsProfile.appendChild(teamsPosition);
    teamsProfile.appendChild(teamsName);
    teamsProfile.appendChild(teamsPoints);
  }
}

export { driversMap, showTeamsStandings, showDriversStandings };
