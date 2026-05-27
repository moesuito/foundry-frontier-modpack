// Powah is a parallel tech tree (Thermo Generator, Magmator, Furnator, Solar
// Panel, Reactor, Energy Cells, cables) entirely independent of IE. Without
// gating, a player can ignore IE completely and run on Powah energy through
// the whole game.
//
// Strategy: gate `powah:dielectric_paste` — the base material that EVERY
// Powah item uses (capacitors, dielectric casings, rods, starters, all
// generators, all cables, all batteries). Adding `immersiveengineering:
// wirecoil_copper` as a required ingredient cascades IE LV requirement to
// the entire Powah tree without 7+ separate overrides.

ServerEvents.recipes(event => {
  event.remove({ id: 'powah:crafting/dielectric_paste' })
  event.remove({ id: 'powah:crafting/dielectric_paste_2' })

  // Shapeless: 3 coal + 2 clay + 1 lava bucket + 1 wirecoil_copper -> 4 paste.
  // Vanilla materials cheap; the wirecoil is the IE gate.
  event.shapeless('4x powah:dielectric_paste', [
    '#minecraft:coals',
    '#minecraft:coals',
    '#minecraft:coals',
    'minecraft:clay_ball',
    'minecraft:clay_ball',
    'minecraft:lava_bucket',
    'immersiveengineering:wirecoil_copper'
  ]).id('foundry_frontier:powah/dielectric_paste_ie_gated')
})
