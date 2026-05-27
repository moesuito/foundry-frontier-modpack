// Silver progression routes for Foundry & Frontier.
//
// Silver is provider-locked to Immersive Engineering and the world was
// pre-generated before IE was added, so IE silver oregen does not appear in
// existing chunks. These recipes give two reliable mid-game silver routes
// that work entirely in already-loaded chunks:
//
// 1. Industrial alloy: 5 iron + 1 redstone dust in the Smeltery casts 5
//    silver ingots. Mirrors the steel pattern (5+1 -> 5). Thematic: silver
//    is the most electrically conductive metal in real life; redstone is
//    Minecraft's conductor.
// 2. Galena byproduct: TFMG galena blocks already exist in the world. Real
//    galena (PbS) is historically the primary silver source via argentiferous
//    lead ore. We override the TFMG galena crushing recipe to keep its lead
//    outputs and add a small silver chance.
//
// Tinkers already auto-registers `forge:molten_silver` and the casting-table
// recipe for the IE silver ingot, so no fluid registration or casting recipe
// is needed in startup_scripts.

ServerEvents.recipes(event => {
  event.custom({
    type: 'tconstruct:melting',
    ingredient: {
      tag: 'forge:dusts/redstone'
    },
    result: {
      amount: 100,
      fluid: 'kubejs:molten_redstone'
    },
    temperature: 500,
    time: 40
  }).id('foundry_frontier:tconstruct/melting/molten_redstone_from_redstone_dust')

  event.custom({
    type: 'tconstruct:alloy',
    inputs: [
      {
        amount: 450,
        tag: 'forge:molten_iron'
      },
      {
        amount: 100,
        tag: 'forge:redstone'
      }
    ],
    result: {
      amount: 450,
      tag: 'forge:molten_silver'
    },
    temperature: 900
  }).id('foundry_frontier:tconstruct/alloy/molten_silver_from_iron_and_redstone')

  event.remove({ id: 'tfmg:crushing/galena' })
  event.custom({
    type: 'create:crushing',
    ingredients: [
      {
        item: 'tfmg:galena'
      }
    ],
    results: [
      {
        chance: 0.4,
        item: 'create:crushed_raw_lead'
      },
      {
        chance: 0.1,
        count: 2,
        item: 'tfmg:lead_nugget'
      },
      {
        chance: 0.12,
        item: 'immersiveengineering:raw_silver'
      },
      {
        chance: 0.04,
        item: 'immersiveengineering:nugget_silver'
      }
    ]
  }).id('foundry_frontier:create/crushing/galena_with_silver')
})
