'use strict';

let get = function(req, res) {
  res.send({
    characters: [
      {
        name: 'Tanis',
        race: 'Half-elf',
        description: 'De facto leader of the companions, torn between the human woman Kitiara and the elfmaid Laurana'
      },
      {
        name: 'Sturm Brightblade',
        race: 'Human',
        description: 'A squire to the Knights of Solamnia and deeply honorable man.'
      },
      {
        name: 'Goldmoon',
        race: 'Human',
        description: 'Daughter of the chief of the Que-Shu tribe, bearer of the Blue Crystal Staff, and first true cleric of good since the Cataclysm'
      },
      {
        name: 'Riverwind',
        race: 'Human',
        description: 'Bodyguard and romantic interest of Goldmoon. Outcast of their tribe.'
      },
      {
        name: 'Caramon Majere',
        race: 'Human',
        description: 'A huge, muscular, sometimes slow-thinking warrior, with a deep affection for his brother, Raistlin, and a romantic interest in Tika.'
      },
      {
        name: 'Raistline Majere',
        race: 'Human',
        description: 'A powerful, sarcastic, cynical, frail mage of the Red Robes, and the twin brother of Caramon.'
      },
      {
        name: 'Flint Fireforge',
        race: 'Dwarf',
        description: 'A gruff old dwarf and old friend of Tanis.'
      },
      {
        name: 'Tasslehoff Burfoot',
        race: 'Kender',
        description: 'A happy-go-lucky, not-so-innocent, and genial kender.'
      }
    ]
  })
}

module.exports = {
  get: get
}
