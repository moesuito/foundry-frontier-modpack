// Blocks hostile mobs only in the Overworld.
// server_scripts run on dedicated servers and on the client's integrated server.

function foundryFrontierIsOverworldMonster(event) {
  return String(event.level.dimension) == 'minecraft:overworld' && event.entity != null && event.entity.isMonster()
}

// Prevent normal/spawner/worldgen spawn attempts before the entity is created.
EntityEvents.checkSpawn(event => {
  if (foundryFrontierIsOverworldMonster(event)) {
    event.cancel()
  }
})

// Catch entities about to be added to the world, including entities loaded from save.
EntityEvents.spawned(event => {
  if (foundryFrontierIsOverworldMonster(event)) {
    event.cancel()
  }
})
