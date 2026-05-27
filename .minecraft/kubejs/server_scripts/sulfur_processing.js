// Sulfur processing routes.
// Biomes O' Plenty brimstone becomes Mekanism sulfur dust through actual
// crushing machines, without making decorative brimstone variants duplicable.

ServerEvents.recipes(event => {
  event.custom({
    type: 'mekanism:crushing',
    input: {
      ingredient: {
        item: 'biomesoplenty:brimstone'
      }
    },
    output: {
      item: 'mekanism:dust_sulfur'
    }
  }).id('foundry_frontier:mekanism/crushing/sulfur_dust_from_brimstone')

  event.custom({
    type: 'create:crushing',
    ingredients: [
      {
        item: 'biomesoplenty:brimstone'
      }
    ],
    processingTime: 100,
    results: [
      {
        item: 'mekanism:dust_sulfur'
      }
    ]
  }).id('foundry_frontier:create/crushing/sulfur_dust_from_brimstone')
})
