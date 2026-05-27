// Sulfur processing and unification routes.
//
// 1. Biomes O' Plenty brimstone becomes Mekanism sulfur dust through actual
//    crushing machines, without making decorative brimstone variants duplicable.
// 2. Globally unify all sulfur dust variants (TFMG, Immersive Engineering) 
//    under Mekanism's Sulfur Dust (mekanism:dust_sulfur).
// 3. Add custom Create Crushing recipe for TFMG's Sulfur Ore (tfmg:sulfur) 
//    producing Mekanism's canonical Sulfur Dust.

ServerEvents.recipes(event => {
  // === 1. BIOMES O' PLENTY BRIMSTONE ===
  event.custom({
    type: 'mekanism:crushing',
    input: {
      ingredient: {
        item: 'biomesoplenty:brimstone'
      }
    },
    output: {
      item: 'mekanism:dust_sulfur'
    }
  }).id('foundry_frontier:mekanism/crushing/sulfur_dust_from_brimstone')

  event.custom({
    type: 'create:crushing',
    ingredients: [
      {
        item: 'biomesoplenty:brimstone'
      }
    ],
    processingTime: 100,
    results: [
      {
        item: 'mekanism:dust_sulfur'
      }
    ]
  }).id('foundry_frontier:create/crushing/sulfur_dust_from_brimstone')


  // === 2. GLOBAL SULFUR UNIFICATION ===
  // Replace alternative sulfur dust inputs and outputs in all recipes
  event.replaceInput({}, 'tfmg:sulfur_dust', 'mekanism:dust_sulfur')
  event.replaceOutput({}, 'tfmg:sulfur_dust', 'mekanism:dust_sulfur')
  event.replaceInput({}, 'immersiveengineering:dust_sulfur', 'mekanism:dust_sulfur')
  event.replaceOutput({}, 'immersiveengineering:dust_sulfur', 'mekanism:dust_sulfur')

  // Shapeless recipes for manual conversion of legacy sulfur dust items
  event.shapeless('mekanism:dust_sulfur', 'tfmg:sulfur_dust')
    .id('foundry_frontier:crafting/tfmg_sulfur_dust_to_canonical')
  event.shapeless('mekanism:dust_sulfur', 'immersiveengineering:dust_sulfur')
    .id('foundry_frontier:crafting/ie_sulfur_dust_to_canonical')


  // === 3. CREATE CRUSHING FOR TFMG SULFUR ORE ===
  // Remove default TFMG crushing recipe that produced tfmg:sulfur_dust
  event.remove({ id: 'tfmg:crushing/sulfur' })

  // Re-add recipe yielding Mekanism's canonical Sulfur Dust
  event.custom({
    type: 'create:crushing',
    ingredients: [
      {
        item: 'tfmg:sulfur'
      }
    ],
    processingTime: 100,
    results: [
      {
        chance: 0.2,
        item: 'mekanism:dust_sulfur'
      },
      {
        chance: 0.1,
        item: 'mekanism:dust_sulfur'
      }
    ]
  }).id('foundry_frontier:create/crushing/sulfur_ore_to_canonical')
})
