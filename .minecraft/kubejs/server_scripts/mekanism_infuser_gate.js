// Metallurgic Infuser is the Mekanism entry-point machine. It produces
// Enriched Alloy (mekanism:alloy_infused) and Basic Control Circuit
// (mekanism:basic_control_circuit) — the two infusing outputs that are
// referenced by mekanism:alloys/basic and forge:circuits/basic tags, which
// in turn appear in ~every Mekanism machine recipe.
//
// By gating the Infuser CRAFTING recipe to require Industrial Machine Frame
// + Electromechanical Control Unit + plates_steel + osmium, every downstream
// Mekanism item (alloys, circuits, machines that use them) inherits the
// IE LV/MV dependency transitively.
//
// We do NOT override the alloy_infused or basic_control_circuit infusing
// recipes themselves — once the player owns an Infuser, those production
// chains are intentionally cheap. The Infuser purchase IS the gate.

ServerEvents.recipes(event => {
  // Remove vanilla + mekanism_tfmg_compat versions (both produce same item
  // with same shape; only the compat conditions differ).
  event.remove({ output: 'mekanism:metallurgic_infuser' })

  // P F P  P = #forge:plates/steel
  // M E M  F = #forge:ingots/osmium
  // P F P  M = kubejs:industrial_machine_frame
  //        E = kubejs:electromechanical_control_unit
  event.shaped('mekanism:metallurgic_infuser', [
    'PFP',
    'MEM',
    'PFP'
  ], {
    P: '#forge:plates/steel',
    F: '#forge:ingots/osmium',
    M: 'kubejs:industrial_machine_frame',
    E: 'kubejs:electromechanical_control_unit'
  }).id('foundry_frontier:mekanism/metallurgic_infuser_ie_gated')
})
