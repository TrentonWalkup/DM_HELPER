var reg_armour = [
  { Name: 'Padded',
    Value: 5,
    Armor_Rating: 5,
    Armor_Type: 'Light'
  },
  {
    Name: 'Leather',
    Value: 10,
    Armor_Rating: 8,
    Armor_Type: 'Light'
  },
  {
    Name: 'Studded Leather',
    Value: 15,
    Armor_Rating: 12,
    Armor_Type: 'Light'
  },
  {
    Name: 'Hide',
    Value: 10,
    Armor_Rating: 12,
    Armor_Type: 'Medium'
  },
  {
    Name: 'Chain Shirt',
    Value: 20,
    Armor_Rating: 13,
    Armor_Type: 'Medium'
  },
  {
    Name: 'Ring Mail',
    Value: 35,
    Armor_Rating: 15,
    Armor_Type: 'Medium'
  },
  {
    Name: 'Iron Plate',
    Value: 100,
    Armor_Rating: 15,
    Armor_Type: 'Heavy'
  },
  {
    Name: 'Steel Plate',
    Value: 150,
    Armor_Rating: 18,
    Armor_Type: 'Heavy'
  }
]

var caster_armor = [
  {
    Name: 'Apprentice Robes',
    Value: 15,
    Armor_Rating: 3,
    Armor_Type: 'Magic',
    Ability: 'Immune to Magic'
  },
  {
    Name: 'Magic Robes',
    Value: 50,
    Armor_Rating: 10,
    Armor_Type: 'Magic',
    Ability: 'Immune to Magic, Int mod + 4'
  }
]

var heavyArmor = reg_armour.filter(obj => {
  return obj.Armor_Type === 'Heavy'
})

var mediumArmor = reg_armour.filter(obj => {
  return obj.Armor_Type === 'Medium'
})

var lightArmor = reg_armour.filter(obj => {
  return obj.Armor_Type === 'Light'
})

var apprentice_robes = caster_armor.filter(obj => {
  return obj.Name === 'Apprentice Robes'
})
var magic_robes = caster_armor.filter(obj => {
  return obj.Name === 'Magic Robes'
})

module.exports = {
  heavyArmor,
  mediumArmor,
  lightArmor,
  apprentice_robes,
  magic_robes
}
