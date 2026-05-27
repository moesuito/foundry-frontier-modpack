// PneumaticCraft Repressurized has its own pressure-based tech tree entirely
// independent of IE. Player can build Air Compressor, Charging Station, the
// Pressure Chamber multiblock, drones, sentries — full progression — without
// ever touching IE.
//
// Strategy: gate `pneumaticcraft:pressure_tube` — the core component used by
// virtually every PNC machine (Air Compressor, Charging Station, Pressure
// Chamber Valve, Refinery, Liquid Compressor, etc.). Adding IE wirecoil_copper
// as a required ingredient cascades IE LV requirement to almost all of PNC.
//
// We intentionally do NOT gate compressed_iron_ingot directly — that item is
// produced by TNT explosion on iron (entity-based, not a normal crafting
// recipe; complex to override via KubeJS). The pressure_tube gate is the
// next bottleneck and catches everything industrial.

ServerEvents.recipes(event => {
  event.remove({ id: 'pneumaticcraft:pressure_tube' })

  // I G I W   I = forge:ingots/compressed_iron
  //           G = forge:glass
  //           W = immersiveengineering:wirecoil_copper  (NEW, IE gate)
  // Output: 8 pressure_tubes (preserved)
  // Pattern continues at 1 row but now 4 wide (was IGI = 3 wide).
  event.shaped('8x pneumaticcraft:pressure_tube', [
    'IGIW'
  ], {
    I: '#forge:ingots/compressed_iron',
    G: '#forge:glass',
    W: 'immersiveengineering:wirecoil_copper'
  }).id('foundry_frontier:pneumaticcraft/pressure_tube_ie_gated')
})
