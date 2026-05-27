// Register 6 custom industrial components used by the Mekanism / parallel-tech
// rebalance. Each component represents a "miniaturized IE achievement" and is
// consumed by Mekanism (and parallel-tech) machine recipes to enforce that the
// player progressed through Immersive Engineering before unlocking the compact
// tech tier.
//
// Items have placeholder textures (no .png shipped). Acceptable for MVP — they
// show the missing-texture purple/black checker. Custom textures may come in a
// later update.

StartupEvents.registry('item', event => {
  // Gate 1 — structural body of first-tier Mekanism / IF machines.
  event.create('industrial_machine_frame')
    .displayName('Industrial Machine Frame')
    .tooltip('Miniaturized structural frame from heavy industry')
    .maxStackSize(16)

  // Gate 1 — electromechanical brain. Input to Basic Control Circuit override.
  event.create('electromechanical_control_unit')
    .displayName('Electromechanical Control Unit')
    .tooltip('Compact electronics bridging IE wires and Mekanism circuits')
    .maxStackSize(16)

  // Gate 1 — thermal core. Required by Mekanism generators.
  event.create('thermal_regulation_core')
    .displayName('Thermal Regulation Core')
    .tooltip('Heat-tolerant assembly for compact power generation')
    .maxStackSize(16)

  // Gate 1/2 — ponte tematica entre IE e Mekanism. Input to Enriched Alloy
  // infusing recipe override.
  event.create('pressurized_alloy_core')
    .displayName('Pressurized Alloy Core')
    .tooltip('Pressed osmium-electrum assembly used in Mekanism alloying')
    .maxStackSize(16)

  // Gate 2 — high-precision core for Mekanism mid/late machines.
  event.create('high_precision_industrial_core')
    .displayName('High-Precision Industrial Core')
    .tooltip('Reactor-grade core required for chemical and processing machines')
    .maxStackSize(16)

  // Gate 3 — endgame mining gate. Required by Digital Miner and parallel-tech
  // equivalents (e.g., IF Laser Drill).
  event.create('excavation_control_matrix')
    .displayName('Excavation Control Matrix')
    .tooltip('Mineral-mapping matrix descended from the IE Excavator')
    .maxStackSize(16)
})
