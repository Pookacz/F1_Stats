import { showTeamsStandings, showDriversStandings } from "./standings.js";
window.showTeamsStandings = showTeamsStandings;
window.showDriversStandings = showDriversStandings;

function check() {
  if (container.hasChildNodes() != false) {
    console.log("okej");
  }
}
window.check = check;
