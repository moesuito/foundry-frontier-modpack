// Speed Upgrade is the most balance-disrupting Mekanism upgrade — it makes
// machines process much faster, effectively letting one machine do the work
// of several. The default recipe (2 alloys/infused + 1 osmium dust + 2 silica
// glass) cascade-gates via alloys/infused, but only requires Mekanism early
// game (Infuser). Adding HPIC forces it into the HV tier alongside other
// mid-game Mekanism upgrades.
//
// Other upgrades (Energy, Filter, Gas, Muffling, Anchor, Stone Generator)
// stay cascade-only; their gameplay impact does not justify HV requirements.

ServerEvents.recipes(event => {
  event.remove({ output: 'mekanism:upgrade_speed' })

  //   G    G = #forge:glass/silica
  // A H A  A = #mekanism:alloys/infused
  //   G    H = kubejs:high_precision_industrial_core (replaces osmium dust center)
  event.shaped('mekanism:upgrade_speed', [
    ' G ',
    'AHA',
    ' G '
  ], {
    G: '#forge:glass/silica',
    A: '#mekanism:alloys/infused',
    H: 'kubejs:high_precision_industrial_core'
  }).id('foundry_frontier:mekanism/upgrade_speed_hv_gated')
})
