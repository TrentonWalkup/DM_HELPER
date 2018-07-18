var arm = require('./armor.js')
var _ = require('lodash');
var dice = require('./utils/dice.js')

var spell = 1

var enemies = [
    {
      Level: 1,
      Monster: 'Goblin pup',
      HP: Math.floor(Math.random() * 1) +1,
      Armour:0
    },
    {
      Level: 1,
      Monster: 'Goblin apprentice',
      HP: Math.floor(Math.random() * 10) +1,
      Spell: spell,
      Armour: arm.apprentice_robes
    },
    {
      Level: 1,
      Monster: 'Goblin Recruit',
      HP: Math.floor(Math.random() * 5) +1,
      Armour: Math.floor(Math.random() * 1) +1
    },
    {
      Level: 1,
      Monster: 'bat',
      HP: Math.floor(Math.random() * 3) +1,
      Armour: 0
    },
    {
      Level: 1,
      Monster: 'raven',
      HP: Math.floor(Math.random() * 3) +1,
      Armour: 0
    },
    {
      Level: 1,
      Monster: 'bandit',
      HP: Math.floor(Math.random() * 10) +1,
      Armour: _.sample(arm.lightArmor)
    },
    {
      Level: 2,
      Monster: 'Goblin Soldier',
      HP: Math.floor(Math.random() * 10) +1,
      Armour: _.sample(arm.lightArmor)
    },
    {
      Level: 2,
      Monster: 'Fire Goblin',
      HP: Math.floor(Math.random() * 10) +1,
      Armour: _.sample(arm.mediumArmor),
      Note: 'Melee attacks will burn the player'
    },
    {
      Level: 2,
      Monster: 'Goblin Archer',
      HP: Math.floor(Math.random() * 10) +1,
      Armour: _.sample(arm.lightArmor)
    },
    {
      Level: 2,
      Monster: 'Goblin Pikeman',
      HP: Math.floor(Math.random() * 25) +10,
      Armour: _.sample(arm.mediumArmor)
    },
    {
      Level: 3,
      Monster: 'Goblin Hellhound',
      HP: Math.floor(Math.random() * 25) +20,
      Armour: 0
    },
    {
      Level: 2,
      Monster: 'Goblin thief',
      HP: Math.floor(Math.random() * 10) +1,
      Armour: _.sample(arm.lightArmor)
    },
    {
      Level: 2,
      Monster: 'Goblin caster',
      HP: Math.floor(Math.random() * 25) +10,
      Spell: spell,
      Armour: arm.magic_robes
    },
    {
      Level: 3,
      Monster: 'Goblin war lord',
      HP: Math.floor(Math.random() * 25) +5,
      Armour: _.sample(arm.heavyArmor),
      Attack_Mod: dice.roll(6)
    },
    {
      Level: 3,
      Monster: 'Goblin adept',
      HP: Math.floor(Math.random() * 15) +10,
      Spell: spell,
      Armour: arm.magic_robes,
      Attack_Mod: dice.roll(6)
    },
    {
      Level: 3,
      Monster: 'Goblin Necromancer',
      HP: Math.floor(Math.random() * 25) +3,
      Armour: arm.magic_robes,
      Attack_Mod: dice.roll(6)
    },
    {
      Level: 2, Monster: 'Goblin',
      HP: Math.floor(Math.random() * 10) +2,
      Armour: _.sample(arm.lightArmor)
    },
    {
      Level: 1, Monster: 'Goblin Slave',
      HP: Math.floor(Math.random()* 5) +1,
      Armour: 0
    },
    {
      Level: 3, Monster: 'Goblin Knight',
      HP: Math.floor(Math.random()* 25) +3,
      Armour: _.sample(arm.heavyArmor),
      Attack_Mod: dice.roll(6)
    }
  ]



module.exports = {
enemies
}
