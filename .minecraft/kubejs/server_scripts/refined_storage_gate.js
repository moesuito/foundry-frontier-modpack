// Refined Storage is the ultimate late-game item storage and automation mod.
//
// In patch/v2.0.3, we gate Refined Storage behind Immersive Engineering advanced
// technology to align it with Mekanism progression:
// 1. Quartz Enriched Iron now requires Steel Ingot + Redstone + Quartz.
// 2. Machine Casing is gated by the industrial_machine_frame (IE MV/HV).
// 3. Raw Processors require IE Electron Tubes/Capacitors and advanced metals.
// 4. Controller & Disk Drive require MV control units, cores, and capacitors.

ServerEvents.recipes(event => {
  // 1. Quartz Enriched Iron
  event.remove({ output: 'refinedstorage:quartz_enriched_iron' })
  event.shaped('4x refinedstorage:quartz_enriched_iron', [
    'SSS',
    'QRQ',
    'SSS'
  ], {
    S: '#forge:ingots/steel', // Canonical steel
    Q: 'minecraft:quartz',
    R: 'minecraft:redstone'
  }).id('foundry_frontier:refinedstorage/quartz_enriched_iron_gated')

  // 2. Machine Casing (Requires Industrial Machine Frame)
  event.remove({ output: 'refinedstorage:machine_casing' })
  event.shaped('refinedstorage:machine_casing', [
    'PCP',
    'IFI',
    'PCP'
  ], {
    P: 'refinedstorage:quartz_enriched_iron',
    C: 'immersiveengineering:component_steel',
    I: 'immersiveengineering:component_iron',
    F: 'kubejs:industrial_machine_frame' // IE MV/HV
  }).id('foundry_frontier:refinedstorage/machine_casing_gated')

  // 3. Raw Processors (Requires IE logic parts and high-tech inputs)
  event.remove({ output: 'refinedstorage:raw_basic_processor' })
  event.shaped('refinedstorage:raw_basic_processor', [
    'TSR',
    ' I '
  ], {
    T: 'immersiveengineering:electron_tube', // IE LV
    S: 'refinedstorage:silicon',
    R: 'minecraft:redstone',
    I: '#forge:ingots/steel'
  }).id('foundry_frontier:refinedstorage/raw_basic_processor_gated')

  event.remove({ output: 'refinedstorage:raw_improved_processor' })
  event.shaped('refinedstorage:raw_improved_processor', [
    'CSR',
    ' E '
  ], {
    C: 'immersiveengineering:capacitor_lv', // IE LV
    S: 'refinedstorage:silicon',
    R: 'minecraft:redstone',
    E: '#forge:ingots/electrum' // IE MV
  }).id('foundry_frontier:refinedstorage/raw_improved_processor_gated')

  event.remove({ output: 'refinedstorage:raw_advanced_processor' })
  event.shaped('refinedstorage:raw_advanced_processor', [
    'CSR',
    ' D '
  ], {
    C: 'immersiveengineering:capacitor_mv', // IE MV
    S: 'refinedstorage:silicon',
    R: 'minecraft:redstone',
    D: '#forge:gems/diamond'
  }).id('foundry_frontier:refinedstorage/raw_advanced_processor_gated')

  // 4. Controller (The brain of the network, requires thermal/electrical control)
  event.remove({ output: 'refinedstorage:controller' })
  event.shaped('refinedstorage:controller', [
    'QEQ',
    'TMT',
    'QPQ'
  ], {
    Q: 'refinedstorage:quartz_enriched_iron',
    E: 'kubejs:electromechanical_control_unit', // IE MV
    T: 'kubejs:thermal_regulation_core', // IE MV
    M: 'refinedstorage:machine_casing',
    P: 'refinedstorage:advanced_processor'
  }).id('foundry_frontier:refinedstorage/controller_gated')

  // 5. Disk Drive (Requires data cabling stability and medium voltage capacitor)
  event.remove({ output: 'refinedstorage:disk_drive' })
  event.shaped('refinedstorage:disk_drive', [
    'QPQ',
    'CMC',
    'QHQ'
  ], {
    Q: 'refinedstorage:quartz_enriched_iron',
    P: 'refinedstorage:advanced_processor',
    C: '#forge:chests/wooden',
    M: 'refinedstorage:machine_casing',
    H: 'immersiveengineering:capacitor_mv' // IE MV
  }).id('foundry_frontier:refinedstorage/disk_drive_gated')
})
