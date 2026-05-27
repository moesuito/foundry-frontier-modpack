// Block createaddition's Create-pressing bypass for advanced metal plates.
//
// Without this gate, a player can build a Mechanical Press (early game Create)
// and convert any forge:ingots/X tag into a plate (or createaddition sheet)
// for advanced metals, bypassing the IE Metal Press progression entirely.
// This kills the value of IE LV/MV as a mid-game requirement.
//
// Removed: steel, aluminum, lead, electrum, constantan, nickel, silver, uranium.
// Iron/copper/gold/brass pressing recipes are Create-native, NOT createaddition,
// and remain available (basic plates needed in early-game Create progression).
// Zinc stays too — createaddition:zinc_sheet is Create's own ecosystem item.
//
// After this gate, the IE Metal Press becomes the only mechanized route for
// advanced metal plates (a hand-crafted plate via Engineer's Hammer also stays
// allowed; it is intentionally slow and steel-only for early steel parts).

ServerEvents.recipes(event => {
  const blockedPressingIds = [
    'createaddition:pressing/steel_ingot',
    'createaddition:pressing/aluminum_ingot',
    'createaddition:pressing/lead_ingot',
    'createaddition:pressing/electrum_ingot',
    'createaddition:pressing/constantan_ingot',
    'createaddition:pressing/nickel_ingot',
    'createaddition:pressing/silver_ingot',
    'createaddition:pressing/uranium_ingot'
  ]
  blockedPressingIds.forEach(id => {
    event.remove({ id: id })
  })
})
