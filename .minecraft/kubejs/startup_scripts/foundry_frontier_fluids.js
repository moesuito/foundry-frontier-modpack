// Custom fluids used by Foundry & Frontier progression recipes.

StartupEvents.registry('fluid', event => {
  event.create('molten_coal')
    .displayName('Molten Coal')
    .thickTexture(0x1E1A16)
    .bucketColor(0x1E1A16)
    .temperature(900)
    .viscosity(6000)
    .density(1800)
    .tag('forge:molten_coal')

  // Tagged forge:redstone so it joins the fluid tag Tinkers alloys already
  // reference (e.g. signalum). Required by the silver alloy in
  // server_scripts/silver_progression.js.
  event.create('molten_redstone')
    .displayName('Molten Redstone')
    .thinTexture(0xCC0F2C)
    .bucketColor(0xCC0F2C)
    .temperature(500)
    .viscosity(1500)
    .density(1700)
    .tag('forge:redstone')
})
