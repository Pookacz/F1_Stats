import {driversPoints} from './scoreboard.js';
import {drivers, Driver} from './drivers.js';
const teamsAmount = 10;

class Team{
    constructor(teamName, teamPrincipal, firstDriver, secondDriver, teamPoints){
        this.teamName = teamName;
        this.teamPrincipal = teamPrincipal;
        this.firstDriver = firstDriver;
        this.secondDriver = secondDriver;
        this.teamPoints = teamPoints;
    };
}
let teams = {
    "mercedes" : new Team("Mercedes","Toto Wolf", "Lewis Hamilton", "Valtteri Bottas"),
    "redbull": new Team("RedBull", "Christian Horner", "Max Verstappen", "Sergio Perez"),
    "mclaren": new Team("McLaren", "Zak Brown", "Lando Norris", "Daniel Ricciardo"),
    "ferrari": new Team("Ferrari", "Mattia Binotto", "Charles Leclerc", "Carlos Sainz"),
    "alphatauri": new Team("Alpha Tauri", "Helmut Marko", "Pierre Gasly", "Yuki Tsunoda"),
    "astonmartin": new Team("Aston Martin", "Lawrence S. Stroll", "Lance Stroll", "Sebastian Vettel"),
    "alpine": new Team("Alpine", "Cyril Abiteboul", "Esteban Ocon", "Fernando Alonso"),
    "alfaromeo": new Team("Alfa Romeo", "Frederic Vasseur", "Kimi Raikkonen", "Antonio Giovinazzi"),
    "williams": new Team("Williams", "Simon Roberts", "George Russell", "Nicholas Latifi"),
    "haas": new Team("Haas", "Guenther Steiner", "Mick Schumacher", "Nikita Mazepin")
}

export {teams};