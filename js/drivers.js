const driversAmount = 20;

class Driver{
    constructor(firstName, lastName, team){
        this.firstName = firstName;
        this.lastName = lastName;
        this.team = team;
    }
}

let drivers = {
    "hamilton": new Driver("Lewis", "Hamilton", "Mercedes"),
    "bottas": new Driver("Valtteri", "Bottas", "Mercedes"),
    "verstappen": new Driver("Max", "Verstappen", "RedBull"),
    "perez": new Driver("Sergio", "Perez", "RedBull"),
    "norris": new Driver("Lando", "Norris", "McLaren"),
    "ricciardo": new Driver("Daniel", "Ricciardo", "McLaren"),
    "leclerc": new Driver("Charles", "Leclerc", "Ferrari"),
    "sainz": new Driver("Carlos", "Sainz", "Ferrari"),
    "gasly": new Driver("Pierre", "Gasly", "Alpha Tauri"),
    "tsunoda": new Driver("Yuki", "Tsunoda", "Alpha Tauri"),
    "stroll": new Driver("Lance", "Stroll", "Aston Martin"),
    "vettel": new Driver("Sebastian", "Vettel", "Aston Martin"),
    "ocon": new Driver("Esteban", "Ocon", "Alpine"),
    "alonso": new Driver("Fernando", "Alonso", "Alpine"),
    "raikkonen": new Driver("Kimi", "Raikkonen", "Alfa Romeo"),
    "giovinazzi": new Driver("Antonio", "Giovinazzi", "Alfa Romeo"),
    "russell": new Driver("George", "Russel", "Williams"),
    "latifi": new Driver("Nicholas", "Latifi", "Williams"),
    "Schumacher": new Driver("Mick", "Schumacher", "Haas"),
    "Mazepin": new Driver("Nikita", "Mazepin", "Haas")
}

export {drivers};