// Refined Storage is the ultimate late-game item storage and automation mod.
//
// In patch/v2.0.3, we gate Refined Storage behind Immersive Engineering advanced
// technology and integrate its semiconductor progression into Create and Mekanism:
// 1. Quartz Enriched Iron now requires Steel Ingot + Redstone + Quartz.
// 2. Machine Casing is gated by the industrial_machine_frame (IE MV/HV).
// 3. Silicon is made by mixing Quartz + Sand in the Create Mixer, then infusing the
//    unprocessed silicon with Redstone in the Mekanism Metallurgic Infuser.
// 4. Raw Processors and smelting are eliminated. Plaque bases are made in the Crafting Table
//    with Silicon + Binding + Redstone + Metal, then finished in the Metallurgic Infuser
//    via logical doping:
//      - Basic: Infused with Carbon
//      - Improved: Infused with Redstone
//      - Advanced: Infused with Diamond
// 5. Controller & Disk Drive require MV control units, cores, and capacitors.

ServerEvents.recipes(event => {
  // --- REMOVALS ---
  // Remove original Refined Storage semiconductor recipes
  event.remove({ output: 'refinedstorage:quartz_enriched_iron' })
  event.remove({ output: 'refinedstorage:machine_casing' })
  event.remove({ output: 'refinedstorage:silicon' }) // Removes furnace smelting recipe for silicon
  event.remove({ output: 'refinedstorage:raw_basic_processor' })
  event.remove({ output: 'refinedstorage:raw_improved_processor' })
  event.remove({ output: 'refinedstorage:raw_advanced_processor' })
  event.remove({ output: 'refinedstorage:basic_processor' })
  event.remove({ output: 'refinedstorage:improved_processor' })
  event.remove({ output: 'refinedstorage:advanced_processor' })
  event.remove({ output: 'refinedstorage:controller' })
  event.remove({ output: 'refinedstorage:disk_drive' })
  event.remove({ output: 'refinedstorage:wireless_transmitter' })

  // --- LIGA BASE & ESTRUTURA ---
  // 1. Quartz Enriched Iron (Requires Immersive Engineering Arc Furnace)
  event.remove({ output: 'refinedstorage:quartz_enriched_iron' })
  event.custom({
    type: 'immersiveengineering:arc_furnace',
    results: [
      {
        item: 'refinedstorage:quartz_enriched_iron',
        count: 4
      }
    ],
    input: {
      count: 3,
      base_ingredient: {
        tag: 'forge:ingots/steel'
      }
    },
    additives: [
      {
        item: 'minecraft:quartz'
      }
    ],
    slag: {
      item: 'immersiveengineering:slag'
    },
    time: 100,
    energy: 51200
  }).id('foundry_frontier:refinedstorage/quartz_enriched_iron_arc_furnace')

  // 2. Machine Casing (Requires Industrial Machine Frame)
  event.shaped('refinedstorage:machine_casing', [
    'PCP',
    'IFI',
    'PCP'
  ], {
    P: 'refinedstorage:quartz_enriched_iron',
    C: 'immersiveengineering:component_steel',
    I: 'immersiveengineering:component_iron',
    F: 'kubejs:industrial_machine_frame'
  }).id('foundry_frontier:refinedstorage/machine_casing_gated')

  // --- FLUXO DO SILÍCIO ---
  // 3. Unprocessed Silicon (Create Mixer)
  event.custom({
    type: 'create:mixing',
    ingredients: [
      { item: 'minecraft:quartz' },
      { tag: 'forge:sand' }
    ],
    results: [
      { item: 'kubejs:unprocessed_silicon' }
    ]
  }).id('foundry_frontier:create/mixing/unprocessed_silicon')

  // 4. Silicon (Mekanism Metallurgic Infuser - Redstone Infusion)
  event.custom({
    type: 'mekanism:metallurgic_infusing',
    itemInput: { ingredient: { item: 'kubejs:unprocessed_silicon' } },
    chemicalInput: { amount: 10, infuse_type: 'mekanism:redstone' },
    output: { item: 'refinedstorage:silicon' }
  }).id('foundry_frontier:mekanism/infusing/silicon_gated')

  // --- FLUXO DOS PROCESSADORES (SEM RAW PROCESSORS) ---
  // 5. Processor Bases (Crafting Table - Shapeless)
  event.shapeless('kubejs:basic_processor_base', [
    'refinedstorage:processor_binding',
    'minecraft:redstone',
    '#forge:ingots/steel',
    'refinedstorage:silicon'
  ]).id('foundry_frontier:refinedstorage/basic_processor_base')

  event.shapeless('kubejs:improved_processor_base', [
    'refinedstorage:processor_binding',
    'minecraft:redstone',
    '#forge:ingots/electrum',
    'refinedstorage:silicon'
  ]).id('foundry_frontier:refinedstorage/improved_processor_base')

  event.shapeless('kubejs:advanced_processor_base', [
    'refinedstorage:processor_binding',
    'minecraft:redstone',
    'minecraft:diamond',
    'refinedstorage:silicon'
  ]).id('foundry_frontier:refinedstorage/advanced_processor_base')

  // 6. Finished Processors (Mekanism Metallurgic Infuser - Logical Doping)
  // Basic Processor (Carbon Infusion)
  event.custom({
    type: 'mekanism:metallurgic_infusing',
    itemInput: { ingredient: { item: 'kubejs:basic_processor_base' } },
    chemicalInput: { amount: 10, infuse_type: 'mekanism:carbon' },
    output: { item: 'refinedstorage:basic_processor' }
  }).id('foundry_frontier:mekanism/infusing/basic_processor')

  // Improved Processor (Redstone Infusion)
  event.custom({
    type: 'mekanism:metallurgic_infusing',
    itemInput: { ingredient: { item: 'kubejs:improved_processor_base' } },
    chemicalInput: { amount: 10, infuse_type: 'mekanism:redstone' },
    output: { item: 'refinedstorage:improved_processor' }
  }).id('foundry_frontier:mekanism/infusing/improved_processor')

  // Advanced Processor (Diamond Infusion)
  event.custom({
    type: 'mekanism:metallurgic_infusing',
    itemInput: { ingredient: { item: 'kubejs:advanced_processor_base' } },
    chemicalInput: { amount: 10, infuse_type: 'mekanism:diamond' },
    output: { item: 'refinedstorage:advanced_processor' }
  }).id('foundry_frontier:mekanism/infusing/advanced_processor')

  // --- MÁQUINAS PRINCIPAIS ---
  // 7. Controller
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

  // 8. Disk Drive
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

  // 9. Wireless Transmitter (Requires Aerial Pearl and Electromechanical Control Unit)
  event.shaped('refinedstorage:wireless_transmitter', [
    'QAQ',
    'CDC',
    'QEQ'
  ], {
    Q: 'refinedstorage:quartz_enriched_iron',
    A: 'powah:aerial_pearl',
    C: 'refinedstorage:construction_core',
    D: 'refinedstorage:destruction_core',
    E: 'kubejs:electromechanical_control_unit'
  }).id('foundry_frontier:refinedstorage/wireless_transmitter_gated')
})
