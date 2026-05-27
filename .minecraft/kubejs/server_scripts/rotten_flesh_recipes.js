// Recipes to produce Rotten Flesh since zombie spawns are disabled.
// 
// 1. Create Haunting: Blows Soul Fire air on raw meat to transform it into Rotten Flesh.
// 2. Shapeless Crafting: Combine raw meat with a mushroom (representing fungal decay/rot).

ServerEvents.recipes(event => {
  // === 1. CREATE HAUNTING ===
  // Converts any raw meat (beef, porkchop, chicken, mutton, rabbit, etc.) into Rotten Flesh.
  event.custom({
    type: 'create:haunting',
    ingredients: [
      {
        tag: 'forge:raw_meat'
      }
    ],
    results: [
      {
        item: 'minecraft:rotten_flesh'
      }
    ]
  }).id('foundry_frontier:create/haunting/raw_meat_to_rotten_flesh')


  // === 2. SHAPELESS CRAFTING (DECOMPOSITION) ===
  // Combine 1x Raw Meat with 1x Brown or Red Mushroom to get 1x Rotten Flesh.
  event.shapeless('minecraft:rotten_flesh', [
    '#forge:raw_meat',
    'minecraft:brown_mushroom'
  ]).id('foundry_frontier:crafting/raw_meat_and_brown_mushroom_to_rotten_flesh')

  event.shapeless('minecraft:rotten_flesh', [
    '#forge:raw_meat',
    'minecraft:red_mushroom'
  ]).id('foundry_frontier:crafting/raw_meat_and_red_mushroom_to_rotten_flesh')
})
