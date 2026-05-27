// Industrial Foregoing is a parallel tech mod with its own progression:
// Machine Frames (Pity -> Simple -> Advanced -> Supreme), Black Hole Storage,
// Laser Drill (ore-on-demand bypass), Resourceful Furnace, etc.
//
// Two strategic gates:
//
// 1. machine_frame_pity — the entry-level frame. All higher tier frames are
//    crafted via IF's own Dissolution Chamber (no vanilla recipe), which
//    cascades from pity_frame infrastructure. Gating pity_frame gates the
//    whole IF tree.
// 2. laser_drill — the most disruptive single item in IF. Mines ores on
//    demand without touching the world. Mirrors the Mekanism Digital Miner
//    gate (Excavation Control Matrix) to align the two "mining shortcuts"
//    behind the same IE Excavator requirement.

ServerEvents.recipes(event => {
  // 1. Machine Frame Pity gate
  // Original: 4 iron + 4 logs + 1 redstone_block (wrapped in forge:conditional)
  // New: replace center redstone_block with industrial_machine_frame (custom).
  event.remove({ output: 'industrialforegoing:machine_frame_pity' })
  event.shaped('industrialforegoing:machine_frame_pity', [
    'WIW',
    'IFI',
    'WIW'
  ], {
    W: '#minecraft:logs',
    I: '#forge:ingots/iron',
    F: 'kubejs:industrial_machine_frame'
  }).id('foundry_frontier:industrialforegoing/machine_frame_pity_ie_gated')

  // 2. Laser Drill gate
  // Original: piston + 2 diamond_gears + machine_frame_simple + 4 plastic + 2 gold_gears + 1 redstone
  // New: replace machine_frame_simple center with kubejs:excavation_control_matrix
  // and replace 2 plastics with HPIC. Forces IE HV + Excavator chain.
  event.remove({ output: 'industrialforegoing:laser_drill' })
  event.shaped('industrialforegoing:laser_drill', [
    'PFP',
    'BEB',
    'GRG'
  ], {
    P: '#forge:plastic',
    F: '#forge:gears/diamond',
    B: 'minecraft:piston',
    E: 'kubejs:excavation_control_matrix',
    G: '#forge:gears/gold',
    R: 'minecraft:redstone'
  }).id('foundry_frontier:industrialforegoing/laser_drill_excavator_gated')
})
