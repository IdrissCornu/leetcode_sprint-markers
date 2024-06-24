
function main() {
  const nbrMarkers = parseInt(process.argv[2]) || 10;
  const nbrSprints = parseInt(process.argv[3]) || 10;
  const mapName = process.argv[4] || new String(Math.random());
  
  const map = generateSprintsMap(nbrMarkers, nbrSprints)
  writeSprintMapToFile(map, mapName);
}

function generateSprintsMap(nbrMarkers, nbrSprints) {
  const sprintsMap = []

  for (let sprint = 0; sprint < nbrSprints; sprint++) {
    const startMarker = Math.round(Math.random() * nbrMarkers);
    const stopMarker = Math.round(Math.random() * nbrMarkers);

    if (startMarker == stopMarker) {
      if (startMarker == nbrMarkers) startMarker -= 1;
      else startMarker += 1;
    }

    sprintsMap.push([startMarker, stopMarker]);
  }

  return sprintsMap;
}

const fs = require("node:fs");

function writeSprintMapToFile(sprintMap, mapName) {
  fs.writeFile('./maps/map-' + mapName + '.json', JSON.stringify(sprintMap), (err) => {
    if (err) console.log("ERR " + err)
  })  
}

main();