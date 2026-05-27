// Steel Casing is the structural linchpin of nearly every Mekanism machine
// (Enrichment Chamber, Energized Smelter, Crusher, Osmium Compressor, basic
// Energy Cube, Gas Burning Generator, Fission Reactor Casing, all factories,
// etc. — all use mekanism:steel_casing as the central component).
//
// Default recipe (4 steel + 4 silica glass + 1 osmium) skips IE entirely. By
// rewiring it to require Industrial Machine Frame + IE component_steel, every
// downstream Mekanism machine inherits the IE dependency via cascade.

ServerEvents.recipes(event => {
  // Remove vanilla + mekanism_tfmg_compat versions (both produce
  // mekanism:steel_casing with identical content; only the compat condition
  // differs).
  event.remove({ output: 'mekanism:steel_casing' })

  // P C P  P=plate_steel        C=component_steel
  // F O F  F=industrial_machine_frame  O=osmium ingot
  // P C P
  event.shaped('mekanism:steel_casing', [
    'PCP',
    'FOF',
    'PCP'
  ], {
    P: '#forge:plates/steel',
    C: 'immersiveengineering:component_steel',
    F: 'kubejs:industrial_machine_frame',
    O: '#forge:ingots/osmium'
  }).id('foundry_frontier:mekanism/steel_casing_ie_gated')
})
