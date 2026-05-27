// Compatibility recipes for Create Crushing Wheels and Immersive Engineering Crusher.
//
// 1. Sandstone crushing: Brings parity to Create Crushing Wheels by adding 
//    a 50% chance of producing Immersive Engineering's Nitrate Dust (dust_saltpeter).
// 2. Coal ore crushing: Replaces Create's default coal ore crushing recipes to 
//    add a 15% chance of producing Mekanism's Sulfur Dust (dust_sulfur) as a byproduct.

ServerEvents.recipes(event => {
  // === 1. NITRATE / SALTPETER PROGRESSION ===
  // --- 1.0 MILLSTONE (CREATE MILLING) ---
  // Remove default milling recipes for sandstones to prevent duplicates
  event.remove({ type: 'create:milling', input: 'minecraft:sandstone' })
  event.remove({ type: 'create:milling', input: 'minecraft:red_sandstone' })
  event.remove({ type: 'create:milling', input: 'ad_astra:venus_sandstone' })
  event.remove({ type: 'create:milling', input: 'biomesoplenty:black_sandstone' })
  event.remove({ type: 'create:milling', input: 'biomesoplenty:orange_sandstone' })
  event.remove({ type: 'create:milling', input: 'biomesoplenty:white_sandstone' })

  // Register new milling recipes yielding 2x sand + 50% chance of Nitrate Dust
  event.custom({
    type: 'create:milling',
    ingredients: [{ item: 'minecraft:sandstone' }],
    processingTime: 150,
    results: [
      { count: 2, item: 'minecraft:sand' },
      { chance: 0.5, item: 'immersiveengineering:dust_saltpeter' }
    ]
  }).id('foundry_frontier:create/milling/sandstone_to_saltpeter')

  event.custom({
    type: 'create:milling',
    ingredients: [{ item: 'minecraft:red_sandstone' }],
    processingTime: 150,
    results: [
      { count: 2, item: 'minecraft:red_sand' },
      { chance: 0.5, item: 'immersiveengineering:dust_saltpeter' }
    ]
  }).id('foundry_frontier:create/milling/red_sandstone_to_saltpeter')

  event.custom({
    type: 'create:milling',
    ingredients: [{ item: 'ad_astra:venus_sandstone' }],
    processingTime: 150,
    results: [
      { count: 2, item: 'ad_astra:venus_sand' },
      { chance: 0.5, item: 'immersiveengineering:dust_saltpeter' }
    ]
  }).id('foundry_frontier:create/milling/venus_sandstone_to_saltpeter')

  event.custom({
    type: 'create:milling',
    ingredients: [{ item: 'biomesoplenty:black_sandstone' }],
    processingTime: 150,
    results: [
      { count: 2, item: 'biomesoplenty:black_sand' },
      { chance: 0.5, item: 'immersiveengineering:dust_saltpeter' }
    ]
  }).id('foundry_frontier:create/milling/black_sandstone_to_saltpeter')

  event.custom({
    type: 'create:milling',
    ingredients: [{ item: 'biomesoplenty:orange_sandstone' }],
    processingTime: 150,
    results: [
      { count: 2, item: 'biomesoplenty:orange_sand' },
      { chance: 0.5, item: 'immersiveengineering:dust_saltpeter' }
    ]
  }).id('foundry_frontier:create/milling/orange_sandstone_to_saltpeter')

  event.custom({
    type: 'create:milling',
    ingredients: [{ item: 'biomesoplenty:white_sandstone' }],
    processingTime: 150,
    results: [
      { count: 2, item: 'biomesoplenty:white_sand' },
      { chance: 0.5, item: 'immersiveengineering:dust_saltpeter' }
    ]
  }).id('foundry_frontier:create/milling/white_sandstone_to_saltpeter')

  // Calcite -> 2x White Dye
  event.custom({
    type: 'create:milling',
    ingredients: [{ item: 'minecraft:calcite' }],
    processingTime: 150,
    results: [
      { count: 2, item: 'minecraft:white_dye' }
    ]
  }).id('foundry_frontier:create/milling/calcite_to_white_dye')


  // --- 1.1 CRUSHING WHEELS (CREATE CRUSHING) ---
  // Sandstone (colorless) -> 2x Sand + 50% chance of IE Nitrate Dust
  event.custom({
    type: 'create:crushing',
    ingredients: [
      {
        tag: 'forge:sandstone/colorless'
      }
    ],
    processingTime: 150,
    results: [
      {
        count: 2,
        item: 'minecraft:sand'
      },
      {
        chance: 0.5,
        item: 'immersiveengineering:dust_saltpeter'
      }
    ]
  }).id('foundry_frontier:create/crushing/sandstone_to_saltpeter')

  // Red Sandstone -> 2x Red Sand + 50% chance of IE Nitrate Dust
  event.custom({
    type: 'create:crushing',
    ingredients: [
      {
        tag: 'forge:sandstone/red'
      }
    ],
    processingTime: 150,
    results: [
      {
        count: 2,
        item: 'minecraft:red_sand'
      },
      {
        chance: 0.5,
        item: 'immersiveengineering:dust_saltpeter'
      }
    ]
  }).id('foundry_frontier:create/crushing/red_sandstone_to_saltpeter')

  // Venus Sandstone -> 2x Venus Sand + 50% chance of IE Nitrate Dust
  event.custom({
    type: 'create:crushing',
    ingredients: [
      {
        tag: 'forge:sandstone/venus_sandstone'
      }
    ],
    processingTime: 150,
    results: [
      {
        count: 2,
        item: 'ad_astra:venus_sand'
      },
      {
        chance: 0.5,
        item: 'immersiveengineering:dust_saltpeter'
      }
    ]
  }).id('foundry_frontier:create/crushing/venus_sandstone_to_saltpeter')

  // === 1.1 BIOMES O' PLENTY SANDSTONES (CREATE CRUSHING) ===
  // Black Sandstone -> 2x Black Sand + 50% chance of IE Nitrate Dust
  event.custom({
    type: 'create:crushing',
    ingredients: [
      {
        item: 'biomesoplenty:black_sandstone'
      }
    ],
    processingTime: 150,
    results: [
      {
        count: 2,
        item: 'biomesoplenty:black_sand'
      },
      {
        chance: 0.5,
        item: 'immersiveengineering:dust_saltpeter'
      }
    ]
  }).id('foundry_frontier:create/crushing/black_sandstone_to_saltpeter')

  // Orange Sandstone -> 2x Orange Sand + 50% chance of IE Nitrate Dust
  event.custom({
    type: 'create:crushing',
    ingredients: [
      {
        item: 'biomesoplenty:orange_sandstone'
      }
    ],
    processingTime: 150,
    results: [
      {
        count: 2,
        item: 'biomesoplenty:orange_sand'
      },
      {
        chance: 0.5,
        item: 'immersiveengineering:dust_saltpeter'
      }
    ]
  }).id('foundry_frontier:create/crushing/orange_sandstone_to_saltpeter')

  // White Sandstone -> 2x White Sand + 50% chance of IE Nitrate Dust
  event.custom({
    type: 'create:crushing',
    ingredients: [
      {
        item: 'biomesoplenty:white_sandstone'
      }
    ],
    processingTime: 150,
    results: [
      {
        count: 2,
        item: 'biomesoplenty:white_sand'
      },
      {
        chance: 0.5,
        item: 'immersiveengineering:dust_saltpeter'
      }
    ]
  }).id('foundry_frontier:create/crushing/white_sandstone_to_saltpeter')

  // Calcite -> 3x White Dye + 25% chance of 1x extra
  event.custom({
    type: 'create:crushing',
    ingredients: [
      {
        item: 'minecraft:calcite'
      }
    ],
    processingTime: 150,
    results: [
      {
        count: 3,
        item: 'minecraft:white_dye'
      },
      {
        chance: 0.25,
        item: 'minecraft:white_dye'
      }
    ]
  }).id('foundry_frontier:create/crushing/calcite_to_white_dye')


  // === 1.2 BIOMES O' PLENTY & OTHER MOD SANDSTONES (MEKANISM CRUSHING) ===
  // Venus Sandstone -> 2x Venus Sand
  event.custom({
    type: 'mekanism:crushing',
    input: {
      ingredient: {
        item: 'ad_astra:venus_sandstone'
      }
    },
    output: {
      count: 2,
      item: 'ad_astra:venus_sand'
    }
  }).id('foundry_frontier:mekanism/crushing/venus_sandstone_to_sand')

  // Black Sandstone -> 2x Black Sand
  event.custom({
    type: 'mekanism:crushing',
    input: {
      ingredient: {
        item: 'biomesoplenty:black_sandstone'
      }
    },
    output: {
      count: 2,
      item: 'biomesoplenty:black_sand'
    }
  }).id('foundry_frontier:mekanism/crushing/black_sandstone_to_sand')

  // Orange Sandstone -> 2x Orange Sand
  event.custom({
    type: 'mekanism:crushing',
    input: {
      ingredient: {
        item: 'biomesoplenty:orange_sandstone'
      }
    },
    output: {
      count: 2,
      item: 'biomesoplenty:orange_sand'
    }
  }).id('foundry_frontier:mekanism/crushing/orange_sandstone_to_sand')

  // White Sandstone -> 2x White Sand
  event.custom({
    type: 'mekanism:crushing',
    input: {
      ingredient: {
        item: 'biomesoplenty:white_sandstone'
      }
    },
    output: {
      count: 2,
      item: 'biomesoplenty:white_sand'
    }
  }).id('foundry_frontier:mekanism/crushing/white_sandstone_to_sand')

  // Calcite -> 3x White Dye
  event.custom({
    type: 'mekanism:crushing',
    input: {
      ingredient: {
        item: 'minecraft:calcite'
      }
    },
    output: {
      count: 3,
      item: 'minecraft:white_dye'
    }
  }).id('foundry_frontier:mekanism/crushing/calcite_to_white_dye')



  // === 2. SULFUR PROGRESSION ===
  // Remove default Create coal ore crushing recipes
  event.remove({ id: 'create:crushing/coal_ore' })
  event.remove({ id: 'create:crushing/deepslate_coal_ore' })

  // Re-add Coal Ore -> Coal + 15% chance of Mekanism Sulfur Dust
  event.custom({
    type: 'create:crushing',
    ingredients: [
      {
        item: 'minecraft:coal_ore'
      }
    ],
    processingTime: 150,
    results: [
      {
        item: 'minecraft:coal'
      },
      {
        chance: 0.75,
        item: 'minecraft:coal'
      },
      {
        chance: 0.75,
        item: 'create:experience_nugget'
      },
      {
        chance: 0.125,
        item: 'minecraft:cobblestone'
      },
      {
        chance: 0.15,
        item: 'mekanism:dust_sulfur'
      }
    ]
  }).id('foundry_frontier:create/crushing/coal_ore_with_sulfur')

  // Re-add Deepslate Coal Ore -> Coal + 15% chance of Mekanism Sulfur Dust
  event.custom({
    type: 'create:crushing',
    ingredients: [
      {
        item: 'minecraft:deepslate_coal_ore'
      }
    ],
    processingTime: 300,
    results: [
      {
        count: 2,
        item: 'minecraft:coal'
      },
      {
        chance: 0.25,
        item: 'minecraft:coal'
      },
      {
        chance: 0.75,
        item: 'create:experience_nugget'
      },
      {
        chance: 0.125,
        item: 'minecraft:cobbled_deepslate'
      },
      {
        chance: 0.15,
        item: 'mekanism:dust_sulfur'
      }
    ]
  }).id('foundry_frontier:create/crushing/deepslate_coal_ore_with_sulfur')
})
