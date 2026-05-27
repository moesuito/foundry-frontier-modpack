// Compatibility recipes to allow Create: The Factory Must Grow (TFMG) ores and blocks 
// to be processed in the Immersive Engineering Crusher.

ServerEvents.recipes(event => {
  // 1. Galena -> 2x Lead Dust + 10% chance of Silver Dust
  event.custom({
    type: 'immersiveengineering:crusher',
    energy: 6000,
    input: {
      item: 'tfmg:galena'
    },
    result: {
      count: 2,
      item: 'immersiveengineering:dust_lead'
    },
    secondaries: [
      {
        chance: 0.1,
        output: {
          item: 'immersiveengineering:dust_silver'
        }
      }
    ]
  }).id('foundry_frontier:immersiveengineering/crusher/galena_to_lead_silver')

  // 2. Bauxite -> 2x Bauxite Powder + 30% chance of 1x Bauxite Powder
  event.custom({
    type: 'immersiveengineering:crusher',
    energy: 4000,
    input: {
      item: 'tfmg:bauxite'
    },
    result: {
      count: 2,
      item: 'tfmg:bauxite_powder'
    },
    secondaries: [
      {
        chance: 0.3,
        output: {
          item: 'tfmg:bauxite_powder'
        }
      }
    ]
  }).id('foundry_frontier:immersiveengineering/crusher/bauxite_to_powder')

  // 3. Lignite -> 1x Coal (guaranteed) + 25% chance of 1x Coal
  event.custom({
    type: 'immersiveengineering:crusher',
    energy: 3000,
    input: {
      item: 'tfmg:lignite'
    },
    result: {
      count: 1,
      item: 'minecraft:coal'
    },
    secondaries: [
      {
        chance: 0.25,
        output: {
          item: 'minecraft:coal'
        }
      }
    ]
  }).id('foundry_frontier:immersiveengineering/crusher/lignite_to_coal')

  // 4. Lithium Ore -> 2x Crushed Raw Lithium
  event.custom({
    type: 'immersiveengineering:crusher',
    energy: 6000,
    input: {
      item: 'tfmg:lithium_ore'
    },
    result: {
      count: 2,
      item: 'tfmg:crushed_raw_lithium'
    },
    secondaries: []
  }).id('foundry_frontier:immersiveengineering/crusher/lithium_ore_to_raw')

  // 5. Deepslate Lithium Ore -> 2x Crushed Raw Lithium
  event.custom({
    type: 'immersiveengineering:crusher',
    energy: 6000,
    input: {
      item: 'tfmg:deepslate_lithium_ore'
    },
    result: {
      count: 2,
      item: 'tfmg:crushed_raw_lithium'
    },
    secondaries: []
  }).id('foundry_frontier:immersiveengineering/crusher/deepslate_lithium_ore_to_raw')

  // 6. Sulfur -> 1x Mekanism Sulfur Dust (30% chance)
  // Since IE crusher requires a result item, we set the result as 1x sulfur dust with a secondary 
  // chance or simply 1x guaranteed (since it's a dedicated sulfur block). 
  // To keep it balanced, we give 1x guaranteed sulfur dust.
  event.custom({
    type: 'immersiveengineering:crusher',
    energy: 3000,
    input: {
      item: 'tfmg:sulfur'
    },
    result: {
      count: 1,
      item: 'mekanism:dust_sulfur'
    },
    secondaries: []
  }).id('foundry_frontier:immersiveengineering/crusher/sulfur_to_dust')

  // === 7. BIOMES O' PLENTY SANDSTONES COMPATIBILITY ===
  // Black Sandstone -> 2x Black Sand + 50% chance of IE Nitrate Dust
  event.custom({
    type: 'immersiveengineering:crusher',
    energy: 3200,
    input: {
      item: 'biomesoplenty:black_sandstone'
    },
    result: {
      count: 2,
      item: 'biomesoplenty:black_sand'
    },
    secondaries: [
      {
        chance: 0.5,
        output: {
          item: 'immersiveengineering:dust_saltpeter'
        }
      }
    ]
  }).id('foundry_frontier:immersiveengineering/crusher/black_sandstone_to_saltpeter')

  // Orange Sandstone -> 2x Orange Sand + 50% chance of IE Nitrate Dust
  event.custom({
    type: 'immersiveengineering:crusher',
    energy: 3200,
    input: {
      item: 'biomesoplenty:orange_sandstone'
    },
    result: {
      count: 2,
      item: 'biomesoplenty:orange_sand'
    },
    secondaries: [
      {
        chance: 0.5,
        output: {
          item: 'immersiveengineering:dust_saltpeter'
        }
      }
    ]
  }).id('foundry_frontier:immersiveengineering/crusher/orange_sandstone_to_saltpeter')

  // White Sandstone -> 2x White Sand + 50% chance of IE Nitrate Dust
  event.custom({
    type: 'immersiveengineering:crusher',
    energy: 3200,
    input: {
      item: 'biomesoplenty:white_sandstone'
    },
    result: {
      count: 2,
      item: 'biomesoplenty:white_sand'
    },
    secondaries: [
      {
        chance: 0.5,
        output: {
          item: 'immersiveengineering:dust_saltpeter'
        }
      }
    ]
  }).id('foundry_frontier:immersiveengineering/crusher/white_sandstone_to_saltpeter')

  // Venus Sandstone -> 2x Venus Sand + 50% chance of IE Nitrate Dust
  event.custom({
    type: 'immersiveengineering:crusher',
    energy: 3200,
    input: {
      item: 'ad_astra:venus_sandstone'
    },
    result: {
      count: 2,
      item: 'ad_astra:venus_sand'
    },
    secondaries: [
      {
        chance: 0.5,
        output: {
          item: 'immersiveengineering:dust_saltpeter'
        }
      }
    ]
  }).id('foundry_frontier:immersiveengineering/crusher/venus_sandstone_to_saltpeter')

  // Calcite -> 3x White Dye + 25% chance of 1x extra
  event.custom({
    type: 'immersiveengineering:crusher',
    energy: 3200,
    input: {
      item: 'minecraft:calcite'
    },
    result: {
      count: 3,
      item: 'minecraft:white_dye'
    },
    secondaries: [
      {
        chance: 0.25,
        output: {
          item: 'minecraft:white_dye'
        }
      }
    ]
  }).id('foundry_frontier:immersiveengineering/crusher/calcite_to_white_dye')
})


