// Digital Miner — endgame Mekanism mining machine. Default recipe already
// requires alloys/atomic + teleportation_core + steel_casing + robit, all
// of which cascade naturally. But the Digital Miner is the SINGLE feature
// in Mekanism that can replace the IE Excavator/Core Sample Drill workflow
// entirely. Without an explicit gate forcing the player to have built an
// Excavator first, Mekanism late-game leapfrogs the IE late-game industry.
//
// We replace both logistical_sorter slots with kubejs:excavation_control_matrix
// (update 0015). Excavation Control Matrix requires coresample, drillhead_steel,
// graphite_electrode, capacitor_hv, heavy_engineering, and HPIC — i.e. the
// player must have actively used the IE Sample Drill chain to get the cores.

ServerEvents.recipes(event => {
  event.remove({ output: 'mekanism:digital_miner' })

  // A C A   A = #mekanism:alloys/atomic
  // E R E   C = #forge:circuits/basic
  // T X T   E = kubejs:excavation_control_matrix (replaces logistical_sorter)
  //         R = mekanism:robit
  //         T = mekanism:teleportation_core
  //         X = mekanism:steel_casing
  event.shaped('mekanism:digital_miner', [
    'ACA',
    'ERE',
    'TXT'
  ], {
    A: '#mekanism:alloys/atomic',
    C: '#forge:circuits/basic',
    E: 'kubejs:excavation_control_matrix',
    R: 'mekanism:robit',
    T: 'mekanism:teleportation_core',
    X: 'mekanism:steel_casing'
  }).id('foundry_frontier:mekanism/digital_miner_excavator_gated')
})
