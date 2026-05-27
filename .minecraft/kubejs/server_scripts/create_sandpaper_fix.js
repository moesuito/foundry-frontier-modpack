// Sand-paper recipe redesign (v2.0.1).
//
// History:
//   - v2.0.1/0001: defensive re-register of Create sand_paper. Did not work
//     in-game; phantom minecraft:suspicious_sand recipe (Java-side, source
//     unidentified) kept winning over our 2-item shapeless.
//   - v2.0.1/0004: tried overriding suspicious_sand to need 8 sand + 1 bone.
//     JEI showed the new recipe correctly, but sand + paper IN THE CRAFTING
//     TABLE still produced suspicious_sand — proving that event.remove
//     does not catch the phantom registration. REVERTED.
//   - v2.0.1/0005 (this version): redesign Create sand_paper recipes to
//     require a THIRD ingredient. Now "sand + paper" alone matches no
//     sandpaper recipe, so the player will never accidentally hit the
//     phantom suspicious_sand recipe while trying to craft sandpaper.
//
// Third ingredient: #forge:slimeballs as adhesive/binder. This accepts
// vanilla slime balls plus Tinkers' sky/ender slime balls.
//
// All sandpaper variants covered:
//   - create:sand_paper                         (regular)
//   - create:red_sand_paper                     (red sand variant)
//   - northstar:moon_sand_paper                 (Northstar moon sand variant)
//   - createaddition:diamond_grit_sandpaper     (diamond grit variant)

const SANDPAPER_BINDER = '#forge:slimeballs'

ServerEvents.recipes(event => {
  // Remove the original 2-item shapeless recipes.
  event.remove({ id: 'create:crafting/materials/sand_paper' })
  event.remove({ id: 'create:crafting/materials/red_sand_paper' })
  event.remove({ id: 'northstar:crafting/moon_sand_paper' })
  event.remove({ id: 'createaddition:crafting/diamond_grit_sandpaper' })

  // Re-add as 3-item shapeless with slimeballs as binder.
  event.shapeless('create:sand_paper', [
    'minecraft:paper',
    '#forge:sand/colorless',
    SANDPAPER_BINDER
  ]).id('foundry_frontier:create/sand_paper_3item')

  event.shapeless('create:red_sand_paper', [
    'minecraft:paper',
    '#forge:sand/red',
    SANDPAPER_BINDER
  ]).id('foundry_frontier:create/red_sand_paper_3item')

  event.shapeless('northstar:moon_sand_paper', [
    'minecraft:paper',
    'northstar:moon_sand',
    SANDPAPER_BINDER
  ]).id('foundry_frontier:northstar/moon_sand_paper_3item')

  event.shapeless('createaddition:diamond_grit_sandpaper', [
    'minecraft:paper',
    '#forge:dusts/diamond',
    SANDPAPER_BINDER
  ]).id('foundry_frontier:createaddition/diamond_grit_sandpaper_3item')
})
