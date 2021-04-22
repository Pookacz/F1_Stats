import {driversPoints} from './scoreboard.js';
const teamsAmount = 10;

class Team{
    constructor(teamName, teamPrincipal, firstDriver, secondDriver, firstDriverPoints, secondDriverPoints){
        this.teamName = teamName;
        this.teamPrincipal = teamPrincipal;
        this.firstDriver = firstDriver;
        this.secondDriver = secondDriver;
        this.firstDriverPoints = firstDriverPoints;
        this.secondDriverPoints = secondDriverPoints;
    };

    getTeamPoints(){
        let teamPoints = 0;
        for(let i = 0; i < this.firstDriverPoints.length;i++){
            teamPoints += this.firstDriverPoints[i];
        }
        for(let i = 0; i < this.secondDriverPoints.length;i++){
            teamPoints += this.secondDriverPoints[i];
        }
        return teamPoints;
    }
}
let teams = {
    "mercedes" : new Team("Mercedes","Toto Wolf", "Lewis Hamilton", "Valtteri Bottas", driversPoints.hamPoints, driversPoints.botPoints),
    "redbull": new Team("RedBull", "Christian Horner", "Max Verstappen", "Sergio Perez", driversPoints.verPoints, driversPoints.perPoints),
    "mclaren": new Team("McLaren", "Zak Brown", "Lando Norris", "Daniel Ricciardo", driversPoints.norPoints, driversPoints.ricPoints),
    "ferrari": new Team("Ferrari", "Mattia Binotto", "Charles Leclerc", "Carlos Sainz", driversPoints.lecPoints, driversPoints.saiPoints),
    "alphatauri": new Team("Alpha Tauri", "Helmut Marko", "Pierre Gasly", "Yuki Tsunoda", driversPoints.gasPoints, driversPoints.tsuPoints),
    "astonmartin": new Team("Aston Martin", "Lawrence S. Stroll", "Lance Stroll", "Sebastian Vettel", driversPoints.strPoints, driversPoints.vetPoints),
    "alpine": new Team("Alpine", "Cyril Abiteboul", "Esteban Ocon", "Fernando Alonso", driversPoints.ocoPoints, driversPoints.aloPoints),
    "alfaromeo": new Team("Alfa Romeo", "Frederic Vasseur", "Kimi Raikkonen", "Antonio Giovinazzi", driversPoints.raiPoints, driversPoints.gioPoints),
    "williams": new Team("Williams", "Simon Roberts", "George Russell", "Nicholas Latifi", driversPoints.rusPoints, driversPoints.latPoints),
    "haas": new Team("Haas", "Guenther Steiner", "Mick Schumacher", "Nikita Mazepin", driversPoints.mscPoints, driversPoints.mazPoints)
}

export {teams};
