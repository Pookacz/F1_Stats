import {drivers, Driver} from './drivers.js';
import {positionPoints} from './scoreboard.js';

let {
    hamilton: ham, 
    bottas: bot, 
    verstappen: ver, 
    perez: per, 
    norris: nor, 
    ricciardo: ric, 
    leclerc: lec, 
    sainz: sai, 
    gasly: gas, 
    tsunoda: tsu, 
    stroll: str, 
    vettel: vet,
    ocon: oco,
    alonso: alo,
    raikkonen: rai,
    giovinazzi: gio,
    russell: rus,
    latifi: lat,
    schumacher: msc,
    mazepin: maz
    } = drivers || {};


const racesAmount = 23;

class Race{
    constructor(raceName, ...positions){
        this.raceName = raceName;
        this.positions = positions;
    }

    getPositions(){
        return this.positions;
    }

    addPoints(){
        let arr = this.positions;
        for(let i = 0; i < arr.length; i++){
            arr[i].driverPoints.push(positionPoints[i]);
        }

    }
}

let races = {
    "bahrain": new Race("Bahrain", ham, ver, bot, nor, per, lec, ric, sai, tsu, str, rai, gio, oco, rus, vet, msc, gas, lat, alo, maz, bot).addPoints(),
    "imola": new Race("Imola", ver, ham, nor, lec, sai, ric, gas, str, oco, alo, per, tsu, rai, gio, vet, msc, maz, bot, rus, lat, ham).addPoints()
}

// console.log(races.bahrain.getPositions())
export {races};
