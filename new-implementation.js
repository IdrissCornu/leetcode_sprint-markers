// expected map type: <Array<[number, number]>>

function getMostVisitedMarker(sprintMap) {

  const START = 0;
  const STOP = 1;

  // flatten the map and flag the bounding markers
  const flatMap = []
  for (const entry of sprintMap) {
    if (entry[1] < entry[0]) {
      flatMap.push({ marker: entry[1], state: START })
      flatMap.push({ marker: entry[0], state: STOP })
    }
    else {
      flatMap.push({ marker: entry[0], state: START })
      flatMap.push({ marker: entry[1], state: STOP })
    }
  }
  
  // sort the map to get all markers in ascending order
  const sortedMap = flatMap.sort((a, b) => a.marker - b.marker);
  
  let overlapDepth = 0;
  let maxOverlapDepth = 0;
  let mostVisitedMarker = Infinity;

  // compute
  // for each starting / stopping marker
  for (const entry of sortedMap) {

    // update the overlap depth to see the most visited section
    if (entry.state == START) {
      overlapDepth++;

      // and keep track of the lowest most visited marker
      if (overlapDepth > maxOverlapDepth) {
        maxOverlapDepth = overlapDepth;
        mostVisitedMarker = entry.marker
      }
    }
    else overlapDepth--;
  }

  return mostVisitedMarker;
}
