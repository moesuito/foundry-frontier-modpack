// Early steel progression routes.
// Create provides coal dust before Mekanism machines; Tinkers melts that dust
// into molten coal and alloys it with molten iron for the first steel.

ServerEvents.recipes(event => {
  event.custom({
    type: 'create:pressing',
    ingredients: [
      {
        item: 'minecraft:coal'
      }
    ],
    results: [
      {
        item: 'mekanism:dust_coal'
      }
    ]
  }).id('foundry_frontier:create/pressing/coal_dust')

  event.custom({
    type: 'tconstruct:melting',
    ingredient: {
      tag: 'forge:dusts/coal'
    },
    result: {
      amount: 90,
      fluid: 'kubejs:molten_coal'
    },
    temperature: 900,
    time: 40
  }).id('foundry_frontier:tconstruct/melting/molten_coal_from_coal_dust')

  event.custom({
    type: 'tconstruct:alloy',
    inputs: [
      {
        amount: 450,
        tag: 'forge:molten_iron'
      },
      {
        amount: 90,
        tag: 'forge:molten_coal'
      }
    ],
    result: {
      amount: 450,
      tag: 'forge:molten_steel'
    },
    temperature: 900
  }).id('foundry_frontier:tconstruct/alloy/molten_steel_from_iron_and_coal')
})
