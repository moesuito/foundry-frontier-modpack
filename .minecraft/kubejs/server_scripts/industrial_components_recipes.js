// Crafting recipes for the 6 custom industrial components registered in
// startup_scripts/industrial_components.js.
//
// All recipes consume Immersive Engineering items as the dependency anchor,
// so producing any of these implies the player has already built IE LV/MV/HV
// infrastructure. Mekanism (and parallel-tech) recipe overrides downstream
// require these as inputs, achieving cascade gating.
//
// Each pattern follows the visual convention from steel_progression.js style:
// shaped 3x3 with single-letter keys.

ServerEvents.recipes(event => {
  // 6.1 Industrial Machine Frame
  // S W S | S=component_steel  W=treated_wood_horizontal
  // C H C | C=plate_steel       H=heavy_engineering_block
  // S W S |
  event.shaped('4x kubejs:industrial_machine_frame', [
    'SWS',
    'CHC',
    'SWS'
  ], {
    S: 'immersiveengineering:component_steel',
    W: 'immersiveengineering:treated_wood_horizontal',
    C: '#forge:plates/steel',
    H: 'immersiveengineering:heavy_engineering'
  }).id('foundry_frontier:industrial_machine_frame')

  // 6.2 Electromechanical Control Unit
  // T W T | T=electron_tube     W=wirecoil_copper
  // R M O | R=redstone          M=capacitor_mv      O=osmium ingot
  // C S C | C=component_steel   S=plate_steel
  event.shaped('2x kubejs:electromechanical_control_unit', [
    'TWT',
    'RMO',
    'CSC'
  ], {
    T: 'immersiveengineering:electron_tube',
    W: 'immersiveengineering:wirecoil_copper',
    R: 'minecraft:redstone',
    M: 'immersiveengineering:capacitor_mv',
    O: '#forge:ingots/osmium',
    C: 'immersiveengineering:component_steel',
    S: '#forge:plates/steel'
  }).id('foundry_frontier:electromechanical_control_unit')

  // 6.3 Thermal Regulation Core
  // C W C | C=plate_copper       W=wirecoil_copper
  // G M G | G=generator (IE)     M=capacitor_mv
  // S T S | S=component_steel    T=treated_wood_horizontal
  event.shaped('2x kubejs:thermal_regulation_core', [
    'CWC',
    'GMG',
    'STS'
  ], {
    C: '#forge:plates/copper',
    W: 'immersiveengineering:wirecoil_copper',
    G: 'immersiveengineering:generator',
    M: 'immersiveengineering:capacitor_mv',
    S: 'immersiveengineering:component_steel',
    T: 'immersiveengineering:treated_wood_horizontal'
  }).id('foundry_frontier:thermal_regulation_core')

  // 6.4 Pressurized Alloy Core
  // O E O | O=osmium ingot       E=plate_electrum
  // M F M | M=capacitor_mv       F=industrial_machine_frame (our 6.1)
  // C R C | C=component_steel    R=redstone
  event.shaped('1x kubejs:pressurized_alloy_core', [
    'OEO',
    'MFM',
    'CRC'
  ], {
    O: '#forge:ingots/osmium',
    E: '#forge:plates/electrum',
    M: 'immersiveengineering:capacitor_mv',
    F: 'kubejs:industrial_machine_frame',
    C: 'immersiveengineering:component_steel',
    R: 'minecraft:redstone'
  }).id('foundry_frontier:pressurized_alloy_core')

  // 6.5 High-Precision Industrial Core
  // G H G | G=graphite_electrode  H=capacitor_hv
  // E A E | E=heavy_engineering   A=pressurized_alloy_core (our 6.4)
  // C P C | C=component_steel     P=plate_constantan
  event.shaped('1x kubejs:high_precision_industrial_core', [
    'GHG',
    'EAE',
    'CPC'
  ], {
    G: 'immersiveengineering:graphite_electrode',
    H: 'immersiveengineering:capacitor_hv',
    E: 'immersiveengineering:heavy_engineering',
    A: 'kubejs:pressurized_alloy_core',
    C: 'immersiveengineering:component_steel',
    P: '#forge:plates/constantan'
  }).id('foundry_frontier:high_precision_industrial_core')

  // 6.6 Excavation Control Matrix
  // S H S | S=coresample         H=capacitor_hv
  // D I D | D=drillhead_steel    I=high_precision_industrial_core (our 6.5)
  // E G E | E=heavy_engineering  G=graphite_electrode
  // IDs marked with TODO are tentative; if registry confirms different IDs in
  // game, swap here.
  event.shaped('1x kubejs:excavation_control_matrix', [
    'SHS',
    'DID',
    'EGE'
  ], {
    S: 'immersiveengineering:coresample',
    H: 'immersiveengineering:capacitor_hv',
    D: 'immersiveengineering:drillhead_steel',
    I: 'kubejs:high_precision_industrial_core',
    E: 'immersiveengineering:heavy_engineering',
    G: 'immersiveengineering:graphite_electrode'
  }).id('foundry_frontier:excavation_control_matrix')
})
