// expected map type: <Array<[number, number]>>

function getMostVisitedMarker(sprintMap) {

  const visitMap = {}

  let mostVisits = 0;
  let mostVisitedMarker = Infinity;

  // for each sprint
  for (const [startMarker, stopMarker] of sprintMap) {
    const runDirection = startMarker < stopMarker ? 1 : -1;
    
    // count each visited markers
    for (let markerIndex = startMarker; markerIndex != stopMarker + runDirection; markerIndex += runDirection) {
      const visits = (visitMap[markerIndex] || 0) + 1;
      
      visitMap[markerIndex] = visits;

      // and keep track of the lowest most visited one
      if (visits > mostVisits) {
        mostVisits = visits
        mostVisitedMarker = markerIndex
      }
      else if (visits == mostVisits && markerIndex < mostVisitedMarker)
        mostVisitedMarker = markerIndex
    }
  }

  return mostVisitedMarker;
}