// Canonical steel unification.
// TConstruct steel is the only generic steel material players should create
// or use as an ingot/nugget/block. Other mods may still provide steel-themed
// components such as plates, rods, casings and machinery.

const CANONICAL_STEEL = {
  ingot: 'tconstruct:steel_ingot',
  nugget: 'tconstruct:steel_nugget',
  block: 'tconstruct:steel_block',
  duplicateIngots: [
    'ad_astra:steel_ingot',
    'tfmg:steel_ingot',
    'mekanism:ingot_steel'
  ],
  duplicateNuggets: [
    'ad_astra:steel_nugget',
    'tfmg:steel_nugget',
    'mekanism:nugget_steel'
  ],
  duplicateBlocks: [
    'ad_astra:steel_block',
    'tfmg:steel_block',
    'mekanism:block_steel'
  ],
  duplicateRecipeIds: [
    'ad_astra:alloying/steel_ingot_from_alloying_iron_ingot_and_coals',
    'ad_astra:steel_block',
    'ad_astra:steel_ingot',
    'ad_astra:steel_ingot_from_steel_block',
    'ad_astra:steel_nugget',
    'tfmg:casting/steel',
    'tfmg:crafting/kinetics/steel_block_from_compacting',
    'tfmg:crafting/kinetics/steel_ingot_from_compacting',
    'tfmg:crafting/kinetics/steel_ingot_from_decompacting',
    'tfmg:crafting/kinetics/steel_nugget_from_decompacting',
    'tfmg:industrial_blasting/steel_from_dust',
    'tfmg:industrial_blasting/steel_from_raw_iron',
    'mekanism:processing/steel/enriched_iron_to_dust',
    'mekanism:processing/steel/ingot_to_dust'
  ]
}

ServerEvents.tags('item', event => {
  event.add('forge:ingots/steel', CANONICAL_STEEL.ingot)
  event.add('forge:nuggets/steel', CANONICAL_STEEL.nugget)
  event.add('forge:storage_blocks/steel', CANONICAL_STEEL.block)
  event.add('c:steel_ingots', CANONICAL_STEEL.ingot)
  event.add('c:steel_nuggets', CANONICAL_STEEL.nugget)
  event.add('c:steel_blocks', CANONICAL_STEEL.block)
  event.add('ad_astra:steel_ingots', CANONICAL_STEEL.ingot)
  event.add('ad_astra:steel_nuggets', CANONICAL_STEEL.nugget)
  event.add('ad_astra:steel_blocks', CANONICAL_STEEL.block)
  event.add('minecraft:beacon_payment_items', CANONICAL_STEEL.ingot)

  event.remove('forge:ingots/steel', CANONICAL_STEEL.duplicateIngots)
  event.remove('forge:nuggets/steel', CANONICAL_STEEL.duplicateNuggets)
  event.remove('forge:storage_blocks/steel', CANONICAL_STEEL.duplicateBlocks)
  event.remove('c:steel_ingots', CANONICAL_STEEL.duplicateIngots)
  event.remove('c:steel_nuggets', CANONICAL_STEEL.duplicateNuggets)
  event.remove('c:steel_blocks', CANONICAL_STEEL.duplicateBlocks)
  event.remove('ad_astra:steel_ingots', CANONICAL_STEEL.duplicateIngots)
  event.remove('ad_astra:steel_nuggets', CANONICAL_STEEL.duplicateNuggets)
  event.remove('ad_astra:steel_blocks', CANONICAL_STEEL.duplicateBlocks)
  event.remove('create:create_ingots', CANONICAL_STEEL.duplicateIngots)
  event.remove('minecraft:beacon_payment_items', CANONICAL_STEEL.duplicateIngots)
})

ServerEvents.tags('block', event => {
  event.add('forge:storage_blocks/steel', CANONICAL_STEEL.block)
  event.add('c:steel_blocks', CANONICAL_STEEL.block)
  event.add('ad_astra:steel_blocks', CANONICAL_STEEL.block)
  event.add('minecraft:beacon_base_blocks', CANONICAL_STEEL.block)

  event.remove('forge:storage_blocks/steel', CANONICAL_STEEL.duplicateBlocks)
  event.remove('c:steel_blocks', CANONICAL_STEEL.duplicateBlocks)
  event.remove('ad_astra:steel_blocks', CANONICAL_STEEL.duplicateBlocks)
  event.remove('minecraft:beacon_base_blocks', CANONICAL_STEEL.duplicateBlocks)
})

ServerEvents.recipes(event => {
  CANONICAL_STEEL.duplicateRecipeIds.forEach(id => {
    event.remove({ id: id })
  })

  CANONICAL_STEEL.duplicateIngots.forEach(item => {
    event.replaceInput({}, item, CANONICAL_STEEL.ingot)
    event.remove({ output: item })
  })

  CANONICAL_STEEL.duplicateNuggets.forEach(item => {
    event.replaceInput({}, item, CANONICAL_STEEL.nugget)
    event.remove({ output: item })
  })

  CANONICAL_STEEL.duplicateBlocks.forEach(item => {
    event.replaceInput({}, item, CANONICAL_STEEL.block)
    event.remove({ output: item })
  })
})
