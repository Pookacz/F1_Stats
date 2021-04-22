import { driversPoints } from "./scoreboard.js";
const driversAmount = 20;

class Driver {
  constructor(firstName, lastName, shortcut, team, driverPoints) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.shortcut = shortcut;
    this.team = team;
    this.driverPoints = driverPoints;
  }

  getTeam() {
    return this.team;
  }
  introduce() {
    return this.firstName + " " + this.lastName;
  }
  getPoints() {
    let points = 0;
    for (let i = 0; i < this.driverPoints.length; i++) {
      points += this.driverPoints[i];
    }
    return points;
  }
}

let drivers = {
  hamilton: new Driver(
    "Lewis",
    "Hamilton",
    "ham",
    "Mercedes",
    driversPoints.hamPoints
  ),
  bottas: new Driver(
    "Valtteri",
    "Bottas",
    "bot",
    "Mercedes",
    driversPoints.botPoints
  ),
  verstappen: new Driver(
    "Max",
    "Verstappen",
    "ver",
    "RedBull",
    driversPoints.verPoints
  ),
  perez: new Driver(
    "Sergio",
    "Perez",
    "per",
    "RedBull",
    driversPoints.perPoints
  ),
  norris: new Driver(
    "Lando",
    "Norris",
    "nor",
    "McLaren",
    driversPoints.norPoints
  ),
  ricciardo: new Driver(
    "Daniel",
    "Ricciardo",
    "ric",
    "McLaren",
    driversPoints.ricPoints
  ),
  leclerc: new Driver(
    "Charles",
    "Leclerc",
    "lec",
    "Ferrari",
    driversPoints.lecPoints
  ),
  sainz: new Driver(
    "Carlos",
    "Sainz",
    "sai",
    "Ferrari",
    driversPoints.saiPoints
  ),
  gasly: new Driver(
    "Pierre",
    "Gasly",
    "gas",
    "Alpha Tauri",
    driversPoints.gasPoints
  ),
  tsunoda: new Driver(
    "Yuki",
    "Tsunoda",
    "tsu",
    "Alpha Tauri",
    driversPoints.tsuPoints
  ),
  stroll: new Driver(
    "Lance",
    "Stroll",
    "str",
    "Aston Martin",
    driversPoints.strPoints
  ),
  vettel: new Driver(
    "Sebastian",
    "Vettel",
    "vet",
    "Aston Martin",
    driversPoints.vetPoints
  ),
  ocon: new Driver("Esteban", "Ocon", "oco", "Alpine", driversPoints.ocoPoints),
  alonso: new Driver(
    "Fernando",
    "Alonso",
    "alo",
    "Alpine",
    driversPoints.aloPoints
  ),
  raikkonen: new Driver(
    "Kimi",
    "Raikkonen",
    "rai",
    "Alfa Romeo",
    driversPoints.raiPoints
  ),
  giovinazzi: new Driver(
    "Antonio",
    "Giovinazzi",
    "gio",
    "Alfa Romeo",
    driversPoints.gioPoints
  ),
  russell: new Driver(
    "George",
    "Russel",
    "rus",
    "Williams",
    driversPoints.rusPoints
  ),
  latifi: new Driver(
    "Nicholas",
    "Latifi",
    "lat",
    "Williams",
    driversPoints.latPoints
  ),
  schumacher: new Driver(
    "Mick",
    "Schumacher",
    "msc",
    "Haas",
    driversPoints.mscPoints
  ),
  mazepin: new Driver(
    "Nikita",
    "Mazepin",
    "maz",
    "Haas",
    driversPoints.mazPoints
  ),
};

export { drivers, Driver };
