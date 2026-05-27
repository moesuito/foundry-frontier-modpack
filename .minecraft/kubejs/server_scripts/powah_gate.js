// Powah is a parallel tech tree (Thermo Generator, Magmator, Furnator, Solar
// Panel, Reactor, Energy Cells, cables) entirely independent of IE. Without
// gating, a player can ignore IE completely and run on Powah energy through
// the whole game.
//
// Strategy: gate `powah:dielectric_paste` — the base material that EVERY
// Powah item uses (capacitors, dielectric casings, rods, starters, all
// generators, all cables, all batteries). Adding `immersiveengineering:
// wirecoil_copper` as a required ingredient cascades IE LV requirement to
// the entire Powah tree without 7+ separate overrides.
//
// In patch/v2.0.3, we expand this gating to balance Powah alongside Mekanism:
// 1. Gate Energizing Orb behind IE MV industrial components (industrial_machine_frame,
//    electromechanical_control_unit, thermal_regulation_core).
// 2. Rewrite Energizing Orb recipes to consume IE metals & alloys (Steel, Electrum,
//    Constantan, Aluminum, Hop Graphite) instead of raw ores.
// 3. Rewrite all Powah capacitors to require their corresponding IE Capacitor tier
//    (LV, MV, HV), avoiding progression skipping.

ServerEvents.recipes(event => {
  // 1. Paste Gating (Base IE LV Gate)
  event.remove({ id: 'powah:crafting/dielectric_paste' })
  event.remove({ id: 'powah:crafting/dielectric_paste_2' })

  // Shapeless: 3 coal + 2 clay + 1 lava bucket + 1 wirecoil_copper -> 4 paste.
  event.shapeless('4x powah:dielectric_paste', [
    '#minecraft:coals',
    '#minecraft:coals',
    '#minecraft:coals',
    'minecraft:clay_ball',
    'minecraft:clay_ball',
    'minecraft:lava_bucket',
    'immersiveengineering:wirecoil_copper'
  ]).id('foundry_frontier:powah/dielectric_paste_ie_gated')

  // 2. Gating Entry Devices (Orb & Rod Starter)
  event.remove({ output: 'powah:energizing_orb' })
  event.shaped('powah:energizing_orb', [
    'GDG',
    'CTC',
    'MRM'
  ], {
    G: '#forge:glass',
    D: 'powah:dielectric_casing',
    C: 'kubejs:electromechanical_control_unit', // IE MV
    T: 'kubejs:thermal_regulation_core', // IE MV
    M: 'kubejs:industrial_machine_frame', // IE MV/HV
    R: 'powah:dielectric_rod'
  }).id('foundry_frontier:powah/energizing_orb_gated')

  event.remove({ output: 'powah:energizing_rod_starter' })
  event.shaped('powah:energizing_rod_starter', [
    'G',
    'W',
    'C'
  ], {
    G: '#forge:glass',
    W: 'immersiveengineering:wirecoil_copper', // IE LV
    C: 'powah:dielectric_casing'
  }).id('foundry_frontier:powah/energizing_rod_starter_gated')

  // 3. Rebalance Energizing Orb Crystals
  event.remove({ type: 'powah:energizing' })

  // Energized Steel: 2 steel + 1 electrum + 20k FE
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      { item: 'tconstruct:steel_ingot' },
      { item: 'tconstruct:steel_ingot' },
      { item: 'immersiveengineering:ingot_electrum' }
    ],
    energy: 20000,
    result: {
      item: 'powah:steel_energized',
      count: 2
    }
  }).id('foundry_frontier:powah/energizing/steel_energized')

  // Blaze Crystal: 1 blaze powder + 1 constantan + 120k FE
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      { item: 'minecraft:blaze_powder' },
      { item: 'immersiveengineering:ingot_constantan' }
    ],
    energy: 120000,
    result: {
      item: 'powah:crystal_blazing',
      count: 1
    }
  }).id('foundry_frontier:powah/energizing/crystal_blazing')

  // Niotic Crystal: 1 diamond + 1 aluminum + 300k FE
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      { item: 'minecraft:diamond' },
      { item: 'immersiveengineering:ingot_aluminum' }
    ],
    energy: 300000,
    result: {
      item: 'powah:crystal_niotic',
      count: 1
    }
  }).id('foundry_frontier:powah/energizing/crystal_niotic')

  // Spirited Crystal: 1 emerald + 1 hop graphite + 800k FE
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      { item: 'minecraft:emerald' },
      { item: 'immersiveengineering:ingot_hop_graphite' }
    ],
    energy: 800000,
    result: {
      item: 'powah:crystal_spirited',
      count: 1
    }
  }).id('foundry_frontier:powah/energizing/crystal_spirited')

  // Nitro Crystal: 1 nether star + 2 blaze crystals + 1 high-precision core + 20M FE
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      { item: 'minecraft:nether_star' },
      { item: 'powah:crystal_blazing' },
      { item: 'powah:crystal_blazing' },
      { item: 'kubejs:high_precision_industrial_core' }
    ],
    energy: 20000000,
    result: {
      item: 'powah:crystal_nitro',
      count: 16
    }
  }).id('foundry_frontier:powah/energizing/crystal_nitro')

  // 4. Rebalance Capacitors (Progression Lock)
  event.remove({ output: 'powah:capacitor_basic_tiny' })
  event.remove({ output: 'powah:capacitor_basic' })
  event.remove({ output: 'powah:capacitor_hardened' })
  event.remove({ output: 'powah:capacitor_blazing' })
  event.remove({ output: 'powah:capacitor_niotic' })
  event.remove({ output: 'powah:capacitor_spirited' })
  event.remove({ output: 'powah:capacitor_nitro' })

  // Tiny Basic Capacitor
  event.shaped('powah:capacitor_basic_tiny', [
    ' P ',
    'IWI',
    ' P '
  ], {
    P: 'powah:dielectric_paste',
    I: '#forge:nuggets/iron',
    W: 'immersiveengineering:wirecoil_copper'
  }).id('foundry_frontier:powah/capacitor_basic_tiny_gated')

  // Basic Capacitor
  event.shaped('powah:capacitor_basic', [
    ' P ',
    'CLC',
    ' P '
  ], {
    P: 'powah:dielectric_paste',
    C: 'powah:steel_energized',
    L: 'immersiveengineering:capacitor_lv'
  }).id('foundry_frontier:powah/capacitor_basic_gated')

  // Hardened Capacitor
  event.shaped('powah:capacitor_hardened', [
    ' P ',
    'CMC',
    ' P '
  ], {
    P: 'powah:capacitor_basic',
    C: 'powah:steel_energized',
    M: 'immersiveengineering:capacitor_mv'
  }).id('foundry_frontier:powah/capacitor_hardened_gated')

  // Blazing Capacitor
  event.shaped('powah:capacitor_blazing', [
    ' P ',
    'CMC',
    ' P '
  ], {
    P: 'powah:capacitor_hardened',
    C: 'powah:crystal_blazing',
    M: 'immersiveengineering:capacitor_mv'
  }).id('foundry_frontier:powah/capacitor_blazing_gated')

  // Niotic Capacitor
  event.shaped('powah:capacitor_niotic', [
    ' P ',
    'CHC',
    ' P '
  ], {
    P: 'powah:capacitor_blazing',
    C: 'powah:crystal_niotic',
    H: 'immersiveengineering:capacitor_hv'
  }).id('foundry_frontier:powah/capacitor_niotic_gated')

  // Spirited Capacitor
  event.shaped('powah:capacitor_spirited', [
    ' P ',
    'CHC',
    ' G '
  ], {
    P: 'powah:capacitor_niotic',
    C: 'powah:crystal_spirited',
    H: 'immersiveengineering:capacitor_hv',
    G: 'immersiveengineering:ingot_hop_graphite'
  }).id('foundry_frontier:powah/capacitor_spirited_gated')

  // Nitro Capacitor
  event.shaped('powah:capacitor_nitro', [
    ' P ',
    'CIC',
    ' P '
  ], {
    P: 'powah:capacitor_spirited',
    C: 'powah:crystal_nitro',
    I: 'kubejs:high_precision_industrial_core'
  }).id('foundry_frontier:powah/capacitor_nitro_gated')
})
