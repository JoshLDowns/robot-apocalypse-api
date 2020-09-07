class Room {
  constructor(
    user_id,
    game_id,
    name,
    info,
    inventory,
    enemy,
    north,
    south,
    east,
    west,
    up,
    down,
    keycard,
    map,
    intObject,
    intObject_inventory,
    secret,
    difficulty
  ) {
    this.queryArray = [
      user_id,
      game_id,
      name,
      info,
      inventory,
      enemy,
      north,
      south,
      east,
      west,
      up,
      down,
      keycard,
      map,
      intObject,
      intObject_inventory,
      secret,
      Math.floor(Math.random() + 10 + 1) <= difficulty,
      false,
    ];
  }
}

module.exports = Room;
