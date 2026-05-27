// Extreme Reactors gate.
//
// IMPORTANT: ExtremeReactors2 2.0.84 ships its main reactor / turbine block
// recipes via Java code at runtime, NOT as JSON datapack recipes. We CANNOT
// reliably override `bigreactors:basic_reactorcasing`, `basic_reactorcontroller`,
// `basic_reactorfuelrod`, `basic_reactorcontrolrod`, `basic_turbinecasing` etc.
// via KubeJS — the recipes are added programmatically by the mod after KubeJS
// loads, so event.remove may or may not catch them.
//
// What WE CAN gate (these have proper JSON recipes in the JAR):
//   - bigreactors:energizercasing     (energy storage multiblock)
//   - bigreactors:fluidizercasing     (fluid converter multiblock)
//   - bigreactors:reprocessorcasing   (yellorium recycling multiblock)
//
// We add 1 graphite_electrode + 1 component_steel as IE-flavored gates. This
// touches all three utility multiblocks; the actual reactor casing remains
// uncovered until a future update can investigate Java-side recipe overrides.

ServerEvents.recipes(event => {
  // Energizer Casing
  // Original: 8 iron + 1 forge:storage_blocks/gold + 2 redstone_block (IRI/IGI/IRI)
  // New: substitui 2 redstone_blocks por 1 graphite_electrode + 1 component_steel.
  event.remove({ output: 'bigreactors:energizercasing' })
  event.shaped('bigreactors:energizercasing', [
    'ICI',
    'IGI',
    'ISI'
  ], {
    I: '#forge:ingots/iron',
    G: '#forge:storage_blocks/gold',
    C: 'immersiveengineering:component_steel',
    S: 'immersiveengineering:graphite_electrode'
  }).id('foundry_frontier:extreme_reactors/energizer_casing_ie_gated')

  // Fluidizer Casing
  // Original: 4 iron + 4 yellorium + 1 water_bucket (ICI/CWC/ICI)
  // New: substitui water_bucket por component_steel.
  event.remove({ output: 'bigreactors:fluidizercasing' })
  event.shaped('bigreactors:fluidizercasing', [
    'ICI',
    'CSC',
    'ICI'
  ], {
    I: '#forge:ingots/iron',
    C: '#forge:ingots/yellorium',
    S: 'immersiveengineering:component_steel'
  }).id('foundry_frontier:extreme_reactors/fluidizer_casing_ie_gated')

  // Reprocessor Casing
  // Original: 4 iron + 4 cyanite + 1 water_bucket (ICI/CWC/ICI)
  // New: substitui water_bucket por graphite_electrode.
  event.remove({ output: 'bigreactors:reprocessorcasing' })
  event.shaped('bigreactors:reprocessorcasing', [
    'ICI',
    'CGC',
    'ICI'
  ], {
    I: '#forge:ingots/iron',
    C: '#forge:ingots/cyanite',
    G: 'immersiveengineering:graphite_electrode'
  }).id('foundry_frontier:extreme_reactors/reprocessor_casing_ie_gated')
})
