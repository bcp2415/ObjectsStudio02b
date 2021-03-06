// Code your orbitCircumference function here:
function findCircumference(radius) {
  return Math.round(2 * Math.PI * radius);
}

// Code your missionDuration function here:
function missionDuration(numOrbits, orbitalRadius = 2000, orbitalSpeed = 28000) {
  const circumference = findCircumference(orbitalRadius);
  const duration = (numOrbits * circumference) / orbitalSpeed;
  return Math.round(duration * 100) / 100;
}
const numberOfOrbits = 5;
const missionRadius = 2000;
const duration = missionDuration(numberOfOrbits);
const totalDistance = findCircumference(missionRadius);
console.log(`The mission will travel ${totalDistance} km around the planet, and it will take ${duration} hours to complete.`);

// Copy/paste your selectRandomEntry function here:
let idNumbers = [291, 414, 503, 599, 796, 890];



// Code your buildCrewArray function here:
function buildCrewArray() {
  let crewArray = [];
  while (crewArray.length < 3) {
    let newSelection = randomEntry();
    while (crewArray.includes(newSelection)) {
      newSelection = randomEntry();
    };
    crewArray.push(newSelection);
  }
  return crewArray;
}





// Candidate data & crew array.
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let crew = [candidateA,candidateC,candidateE];
let animals = [candidateA, candidateB, candidateC, candidateD, candidateE, candidateF];

// Code your selectRandomEntry function here:
function randomEntry() {
  return idNumbers[Math.floor(Math.random() * idNumbers.length)];
}

function getSingleAstronaut() {
  const randomAstronautID = randomEntry();
  for (animal of animals) {
    if (randomAstronautID === animal.astronautID) {
    return animal;
    }
  }
}

function getLeastOxygenUser(candidateArray) {
  let winner = candidateArray[0];
  let o2Rate = candidateArray[0].o2Used(1);
  for (animal of candidateArray) {
    if (animal.o2Used(1) < o2Rate) {
      winner = animal;
      o2Rate = animal.o2Used(1);
    }
  }
  return winner;
}

// Code your oxygenExpended function here:
function oxygenExpended(astronautObject, orbRadius = 2000, orbSpeed = 28000) {
  const walkTime = missionDuration(3, orbRadius, orbSpeed);
  const oxygenUsed = Math.round(astronautObject.o2Used(walkTime) * 1000) / 1000;
  return `${astronautObject.name} will perform the spacewalk, which will last ${walkTime} hours and require ${oxygenUsed} kg of oxygen.`;
}

const randomAstronaut = getSingleAstronaut();
console.log(oxygenExpended(randomAstronaut));

const leastO2User = getLeastOxygenUser(animals);
console.log(oxygenExpended(leastO2User));