// Disable TFMG colored-concrete stonecutting recipes that overlap with the
// More Concrete mod (installed in v2.0.1/0002). Both mods produce stairs/slab/
// wall for each of the 16 vanilla concrete colors, causing recipe-list clutter
// in JEI and player confusion.
//
// Decision (per user): keep More Concrete versions (have both crafting +
// stonecutter paths, and look better), disable TFMG equivalents (only had
// stonecutter paths anyway).
//
// What is REMOVED (16 colors × 3 types = 48 stonecutting recipes):
//   tfmg:<color>_concrete_slab_from_<color>_concrete_stonecutting
//   tfmg:<color>_concrete_stairs_from_<color>_concrete_stonecutting
//   tfmg:<color>_concrete_wall_from_<color>_concrete_stonecutting
//
// What is KEPT (TFMG-only, no overlap with More Concrete):
//   - tfmg:<color>_rebar_concrete_* (REBAR variants — TFMG industrial flavor)
//   - tfmg:concrete_slab/stairs/wall (uses tfmg:concrete block, no MC analog)
//   - tfmg:cinderblock_from_concrete_stonecutting
//   - any other tfmg-only decorative blocks

ServerEvents.recipes(event => {
  const colors = [
    'black', 'blue', 'brown', 'cyan',
    'gray', 'green', 'light_blue', 'light_gray',
    'lime', 'magenta', 'orange', 'pink',
    'purple', 'red', 'white', 'yellow'
  ]
  const variants = ['slab', 'stairs', 'wall']

  colors.forEach(color => {
    variants.forEach(variant => {
      event.remove({
        id: `tfmg:${color}_concrete_${variant}_from_${color}_concrete_stonecutting`
      })
    })
  })
})
