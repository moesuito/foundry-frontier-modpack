// Peaceful-mode routes for mob drops used across this modpack.
// These recipes add alternatives only; they do not remove or replace mod recipes.

ServerEvents.recipes(event => {
  event.shapeless('minecraft:bone', [
    'minecraft:bone_meal',
    'minecraft:bone_meal',
    'minecraft:bone_meal'
  ]).id('alano_peaceful:bone_from_bone_meal')

  event.shapeless('2x minecraft:gunpowder', [
    'minecraft:flint',
    'minecraft:charcoal',
    'create:cinder_flour'
  ]).id('alano_peaceful:gunpowder_from_flint_charcoal_cinder')

  event.shaped('2x minecraft:ender_pearl', [
    'AMA',
    'LOL',
    'AMA'
  ], {
    A: 'minecraft:amethyst_shard',
    M: 'integrateddynamics:menril_berries',
    L: 'minecraft:lapis_lazuli',
    O: 'create:powdered_obsidian'
  }).id('alano_peaceful:ender_pearl_from_menril_obsidian')

  event.shapeless('minecraft:spider_eye', [
    'minecraft:poisonous_potato',
    'minecraft:sugar',
    'minecraft:brown_mushroom',
    'minecraft:red_dye'
  ]).id('alano_peaceful:spider_eye_from_poisonous_potato')

  event.shapeless('minecraft:slime_ball', [
    'minecraft:clay_ball',
    'minecraft:lime_dye',
    'minecraft:sugar'
  ]).id('alano_peaceful:slime_ball_from_clay_lime')

  event.shapeless('2x minecraft:magma_cream', [
    'minecraft:magma_block',
    'minecraft:slime_ball',
    'create:cinder_flour'
  ]).id('alano_peaceful:magma_cream_from_magma_block')

  event.shaped('minecraft:blaze_rod', [
    ' C ',
    'SMS',
    ' R '
  ], {
    C: 'create:cinder_flour',
    S: '#forge:dusts/sulfur',
    M: 'minecraft:magma_cream',
    R: 'minecraft:stick'
  }).id('alano_peaceful:blaze_rod_from_sulfur_magma')

  event.shapeless('minecraft:ghast_tear', [
    'minecraft:quartz',
    'minecraft:glowstone_dust',
    'minecraft:soul_sand',
    'minecraft:glass_bottle'
  ]).id('alano_peaceful:ghast_tear_from_soul_quartz')

  event.shapeless('2x minecraft:prismarine_shard', [
    'minecraft:lapis_lazuli',
    'minecraft:quartz',
    'minecraft:cyan_dye'
  ]).id('alano_peaceful:prismarine_shard_from_lapis_quartz')

  event.shapeless('minecraft:prismarine_crystals', [
    'minecraft:prismarine_shard',
    'minecraft:glowstone_dust',
    'minecraft:quartz'
  ]).id('alano_peaceful:prismarine_crystals_from_shard')

  event.shaped('minecraft:phantom_membrane', [
    'FSF',
    'SCS',
    'FSF'
  ], {
    F: 'minecraft:feather',
    S: 'minecraft:string',
    C: 'farmersdelight:canvas'
  }).id('alano_peaceful:phantom_membrane_from_canvas')

  event.shaped('minecraft:shulker_shell', [
    ' P ',
    'CEC',
    ' P '
  ], {
    P: 'minecraft:purpur_block',
    C: 'minecraft:popped_chorus_fruit',
    E: 'minecraft:ender_pearl'
  }).id('alano_peaceful:shulker_shell_from_chorus')

  // Create progression in peaceful mode: activate an empty burner without catching a Blaze.
  event.shaped('create:blaze_burner', [
    ' C ',
    'SMS',
    ' B '
  ], {
    C: 'create:cinder_flour',
    S: '#forge:dusts/sulfur',
    M: 'minecraft:magma_cream',
    B: 'create:empty_blaze_burner'
  }).id('alano_peaceful:blaze_burner_from_empty_burner')
})
