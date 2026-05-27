// Mekanism mid-tier chemical machines — explicit HV-tier IE gate via
// kubejs:high_precision_industrial_core (HPIC, update 0015).
//
// All these machines already cascade via steel_casing (update 0016) +
// alloys/infused (update 0017 Infuser). Adding HPIC forces them to ALSO
// require IE HV materials (graphite_electrode, capacitor_hv, heavy_engineering)
// transitively via HPIC's recipe. This matches the user-stated goal that
// "Mekanism mid game must depend on IE HV / Arc Furnace".
//
// Strategic override targets: only the two CHEMICAL ENTRY-POINT machines
// (Chemical Infuser + Pressurized Reaction Chamber). Downstream chemical
// processing (Chemical Oxidizer, Washer, Dissolution, Crystallizer,
// Injection Chamber, Purification Chamber) cascade either via these two,
// via steel_casing, or via alloys/reinforced/atomic which already imply HV.

ServerEvents.recipes(event => {
  // Pressurized Reaction Chamber
  // Original: S A S / C P C / T # T  (S=steel, A=alloys/infused, C=circuits/basic,
  //           P=enrichment_chamber, T=basic_chemical_tank, #=dynamic_tank)
  // New: substitui dynamic_tank por HPIC. Mantem enrichment_chamber e tanks pra
  //      cascata e tematica.
  event.remove({ output: 'mekanism:pressurized_reaction_chamber' })
  event.shaped('mekanism:pressurized_reaction_chamber', [
    'SAS',
    'CPC',
    'THT'
  ], {
    S: '#forge:ingots/steel',
    A: '#mekanism:alloys/infused',
    C: '#forge:circuits/basic',
    P: 'mekanism:enrichment_chamber',
    T: 'mekanism:basic_chemical_tank',
    H: 'kubejs:high_precision_industrial_core'
  }).id('foundry_frontier:mekanism/prc_hv_gated')

  // Chemical Infuser
  // Original: A C A / T X T / A C A (X=steel_casing, T=basic_chemical_tank)
  // New: substitui ambos os tanks centrais por HPIC pra forcar gate HV explicito.
  event.remove({ output: 'mekanism:chemical_infuser' })
  event.shaped('mekanism:chemical_infuser', [
    'ACA',
    'HXH',
    'ACA'
  ], {
    A: '#mekanism:alloys/infused',
    C: '#forge:circuits/basic',
    X: 'mekanism:steel_casing',
    H: 'kubejs:high_precision_industrial_core'
  }).id('foundry_frontier:mekanism/chemical_infuser_hv_gated')
})
