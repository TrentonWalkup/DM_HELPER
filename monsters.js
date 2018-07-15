
var armour = [
  {"name": "Padded", "cost": "5 gp", Armor_Rating: 11, "armor type": "Light Armor"},
  {"name": "Leather", "cost": "10 gp", "weight": "10 lb.", "stealth": "---", "catagory": "Armor", Armor_Rating: "11 + Dex modifier", "armor type": "Light Armor"},
  {"name": "Studded leather", "cost": "45 gp", "weight": "13 lb.", "stealth": "---", "catagory": "Armor", Armor_Rating: "12 + Dex modifier", "strength": "---", "armor type": "Light Armor"},
  {"name": "Hide", "cost": "10 gp", "weight": "12 lb.", "stealth": "---", "catagory": "Armor", Armor_Rating: "12 + Dex modifier (max 2)", "strength": "---", "armor type": "Medium Armor"},
  {"name": "Chain shirt", "cost": "50 gp", "weight": "20 lb.", "stealth": "---", "catagory": "Armor", Armor_Rating: "13 + Dex modifier (max 2)", "strength": "---", "armor type": "Medium Armor"},
  {"name": "Scale mail", "cost": "50 gp", "weight": "45 lb.", "stealth": "Disadvantage", "catagory": "Armor", Armor_Rating: "14 + Dex modifier (max 2)", "strength": "---", "armor type": "Medium Armor"},
  {"name": "Breastplate", "cost": "400 gp", "weight": "20 lb.", "stealth": "---", "catagory": "Armor", Armor_Rating: "14 + Dex modifier (max 2)", "strength": "---", "armor type": "Medium Armor"},
  {"name": "Half plate", "cost": "750 gp", "weight": "40 lb.", "stealth": "Disadvantage", "catagory": "Armor", Armor_Rating: "15 + Dex modifier (max 2)", "strength": "---", "armor type": "Medium Armor"},
  {"name": "Ring mail", "cost": "30 gp", "weight": "40 lb.", "stealth": "Disadvantage", "catagory": "Armor", Armor_Rating: "14", "strength": "---", "armor type": "Heavy Armor"},
  {"name": "Chain mail", "cost": "75 gp", "weight": "55 lb.", "stealth": "Disadvantage", "catagory": "Armor", Armor_Rating: "16", "strength": "Str 13", "armor type": "Heavy Armor"},
  {"name": "Splint", "cost": "200 gp", "weight": "60 lb.", "stealth": "Disadvantage", "catagory": "Armor", Armor_Rating: "17", "strength": "Str 15", "armor type": "Heavy Armor"},
  {"name": "Plate", "cost": "1,500 gp", "weight": "65 lb.", "stealth": "Disadvantage", "catagory": "Armor", Armor_Rating: "18", "strength": "Str 15", "armor type": "Heavy Armor"},
  {"name": "Shield", "cost": "10 gp", "weight": "6 lb.", "stealth": "---", "catagory": "Armor", Armor_Rating: "+2", "strength": "---", "armor type": "Shields"}
]

var goodArm = armour.filter(obj => {
  return obj.Armor_Rating > 6
})

var a = goodArm[(Math.random() * goodArm.length) | 0];
var happy = a.cost
// console.log(a)
console.log(a)

var spell = 1





var enemies = [
    {Level: 1, Monster: 'Goblin pup',
    HP: Math.floor(Math.random() * 10) +1,
    Armour: 0},
    {Level: 1, Monster: 'Goblin apprentice',
    HP: Math.floor(Math.random() * 10) +1,
    Spell: spell,
    Armour: Math.floor(Math.random() * 1) +1},
    {Level: 1, Monster: 'Goblin Recruit',
    HP: Math.floor(Math.random() * 10) +1,
    Armour: Math.floor(Math.random() * 1) +1},
    {Level: 1, Monster: 'bat',
    HP: Math.floor(Math.random() * 10) +1,
    Armour: 0},
    {Level: 1, Monster: 'raven',
    HP: Math.floor(Math.random() * 10) +1,
    Armour: 0},
    {Level: 1, Monster: 'bandit',
    HP: Math.floor(Math.random() * 10) +1,
    Armour: Math.floor(Math.random() * 5) +1},
    {Level: 2, Monster: 'Goblin Soldier',
    HP: Math.floor(Math.random() * 25) +1,
    Armour: Math.floor(Math.random() * 5) +1},
    {Level: 2, Monster: 'Fire Goblin',
    HP: Math.floor(Math.random() * 25) +1,
    Armour: Math.floor(Math.random() * 5) +1},
    {Level: 2, Monster: 'Goblin Archer',
    HP: Math.floor(Math.random() * 10) +1,
    Armour: Math.floor(Math.random() * 5) +1},
    {Level: 2, Monster: 'Goblin Pikeman',
    HP: Math.floor(Math.random() * 25) +10,
    Armour: Math.floor(Math.random() * 5) +1},
    {Level: 3, Monster: 'Goblin Hellhound',
    HP: Math.floor(Math.random() * 25) +20,
    Armour: 0},
    {Level: 2, Monster: 'Goblin thief',
    HP: Math.floor(Math.random() * 10) +1,
    Armour: Math.floor(Math.random() * 1) +1},
    {Level: 2, Monster: 'Goblin caster',
    HP: Math.floor(Math.random() * 25) +10,
    Spell: spell,
    Armour: Math.floor(Math.random() * 1) +1},
    {Level: 3, Monster: 'Goblin war lord',
    HP: Math.floor(Math.random() * 25) +5,
    Armour: Math.floor(Math.random() * 15) +1},
    {Level: 3, Monster: 'Goblin adept',
    HP: Math.floor(Math.random() * 15) +10,
    Spell: spell,
    Armour: Math.floor(Math.random() * 1) +1},
    {Level: 3, Monster: 'Goblin Necromancer',
    HP: Math.floor(Math.random() * 25) +3,
    Armour: Math.floor(Math.random() * 1) +1},
    {Level: 2, Monster: 'Goblin',
    HP: Math.floor(Math.random() * 10) +2,
    Armour: Math.floor(Math.random() * 1) +1},
    {Level: 1, Monster: 'Goblin Slave',
    HP: Math.floor(Math.random()* 5) +1,
    Armour: 0},
    {Level: 3, Monster: 'Goblin Knight',
    HP: Math.floor(Math.random()* 25) +3,
    Armour: Math.floor(Math.random() * 5) +5}
  ]


var dieRoll = Math.floor(Math.random() * 100) +1;
var lowDieRoll = Math.floor(Math.random() * 15) + 1;
var medDieRoll = Math.floor(Math.random() * 50) + 1;
var highDieRoll = Math.floor(Math.random() * 100) + 1;

if (dieRoll < 50) {
  hit = lowDieRoll
} else if (dieRoll > 51 && dieRoll < 80){
  hit = medDieRoll
} else {
  hit = highDieRoll
}

var monster = enemies[(Math.random() * enemies.length) | 0];

if (dieRoll < 50){
  attack = Math.floor(Math.random() * 5) + 1;
} else {
  attack = Math.floor(Math.random() * 10) + 1;
}


var encounter = [
  {Monster: monster, hitpoints: hit, damage: attack}
]

console.log(monster)
