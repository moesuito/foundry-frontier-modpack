// Mekanism Generators — explicit gating for the Heat Generator only.
//
// Solar / Wind / Bio / Gas Burning / Advanced Solar generators all cascade
// naturally via mekanism:alloys/infused, forge:circuits/basic, or
// mekanism:steel_casing dependencies — already gated by updates 0016/0017.
//
// Heat Generator is the exception: its default recipe uses only vanilla iron
// + osmium + furnace + planks + copper. Once built, it gives perpetual power
// from coal/charcoal/lava buckets — bypassing the entire IE energy chain.
// This is the most dangerous early-game power source and needs an explicit
// IE-tied gate.

ServerEvents.recipes(event => {
  event.remove({ output: 'mekanismgenerators:heat_generator' })

  // P T P  P = #forge:plates/steel
  // F G F  T = kubejs:thermal_regulation_core
  // P # P  F = #forge:ingots/osmium
  //        G = kubejs:industrial_machine_frame
  //        # = minecraft:furnace (kept for thematic — Heat = furnace)
  event.shaped('mekanismgenerators:heat_generator', [
    'PTP',
    'FGF',
    'P#P'
  ], {
    P: '#forge:plates/steel',
    T: 'kubejs:thermal_regulation_core',
    F: '#forge:ingots/osmium',
    G: 'kubejs:industrial_machine_frame',
    '#': 'minecraft:furnace'
  }).id('foundry_frontier:mekanism/heat_generator_ie_gated')
})
