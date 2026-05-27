// Plastic and rubber unification across PneumaticCraft, TFMG, Industrial
// Foregoing, and Mekanism.
//
// Without this, each mod operates in its own namespace and players cannot
// use TFMG plastic in PNC recipes, etc. Recipes that consume #forge:plastic
// (tag) only see IF's variant, even though the player may have plenty of
// TFMG or PNC plastic.
//
// Strategy: populate the unified forge:plastic / forge:rubber tags with
// every available variant. Mods that use these tags then accept any plastic
// or rubber as input. Mods that hardcode their own item IDs are unaffected
// (small surface).

ServerEvents.tags('item', event => {
  // Plastic family — unified under #forge:plastic
  // industrialforegoing:plastic already in the tag (IF ships it), kept for clarity.
  event.add('forge:plastic', 'industrialforegoing:plastic')
  event.add('forge:plastic', 'pneumaticcraft:plastic')
  event.add('forge:plastic', 'tfmg:plastic_sheet')
  event.add('forge:plastic', 'mekanism:hdpe_sheet')

  // Rubber family — new unified tag forge:rubber
  event.add('forge:rubber', 'industrialforegoing:dry_rubber')
  event.add('forge:rubber', 'tfmg:rubber_sheet')

  // Defensive: also populate forge:ingots/plastic + forge:ingots/rubber
  // (TFMG style) with all variants so TFMG recipes accept any plastic/rubber.
  event.add('forge:ingots/plastic', 'industrialforegoing:plastic')
  event.add('forge:ingots/plastic', 'pneumaticcraft:plastic')
  event.add('forge:ingots/plastic', 'mekanism:hdpe_sheet')
  event.add('forge:ingots/rubber', 'industrialforegoing:dry_rubber')
})
