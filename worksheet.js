const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];


//***MAP***

//1. Get array of all names
const names = characters.map( character => character.name );

//2. Get array of all heights
const heights = characters.map ( character => character.height );

//3. Get array of objects with just name and height properties
const namesAndHeights = characters.map( character => {
  return { name: character.name, height: character.height }
});

//4. Get array of all first names
const firstNames = characters.map( character => character.name.split(' ')[0] );


//***REDUCE***

//1. Get total mass of all characters
const massTotal = characters.map( character => character.mass ).reduce( (accumulator, characterMass) => {
  return accumulator += characterMass;
});
      // Better solution:
      const totalMass = characters.reduce( (acc, current) => acc + current.mass, 0);

//2. Get total height of all characters
const heightTotal = heights.reduce( (accumulator, characterHeight) => {
  return accumulator += characterHeight;
});
    // Better solution:
    const totalHeight = characters.reduce( (acc, cur) => acc + cur.height, 0);

//3. Get total number of characters by eye color
const eyeColors = characters.reduce((acc, cur) => {
  if (cur.eye_color in acc) acc[cur.eye_color]++;
  else acc[cur.eye_color] = 1;
  return acc;
}, {})

//4. Get total number of characters in all the character names
const totalCharactersInNames = characters.reduce((acc, cur) => {
  let nameLength = cur.name.split(' ').join('').length;
  // alt: = cur.name.replace(' ', '').length;

  return acc + nameLength;
}, 0)


//***FILTER***

//1. Get characters with mass greater than 100
const massOver100 = characters.filter(
  character => character.mass > 100
); // implicit return obviates brackets

//2. Get characters with height less than 200
const heightUnder200 = characters.filter(
  character => character.height < 200
);

//3. Get all male characters
const males = characters.filter(
  character => character.gender === 'male'
);

//4. Get all female characters
const females = characters.filter(
  character => character.gender === 'female'
);

//Bonus practice:
const goodSide = characters.filter( character => {
  let lowercase = character.name.toLowerCase();
  return lowercase.includes('skywalker') || lowercase.includes('leia');
});

const badSide = characters.filter( character => {
  let lowercase = character.name.toLowerCase();
  return lowercase.includes('vader') || lowercase.includes('anakin');
});


//***SORT***

//1. Sort by mass
const byMass = characters.sort((a,b) => a.mass - b.mass);

//2. Sort by height
const byHeight = characters.sort((a,b) => a.height - b.height);

//3. Sort by name
const byName = characters.sort((a,b) => {
  return (a.name < b.name) ? -1 : 1;
});

//4. Sort by gender
const byGender = characters.sort((a,b) => {
  return (a.gender < b.gender) ? -1 : 1;
});


//***EVERY***

//1. Does every character have blue eyes?
const everyEyeBlue = characters.every(char => char.eye_color === 'blue');

//2. Does every character have mass more than 40?
const everyMassOver40 = characters.every(char => char.mass > 40);
//3. Is every character shorter than 200?
const everyHeightUnder200 = characters.every(char => char.height < 200);
//4. Is every character male?
const everyGenderMale = characters.every(char => char.gender === 'male');


//***SOME***

//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
