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
    intobject,
    intobject_inventory,
    secret,
    difficulty,
    room_id,
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
      intobject,
      intobject_inventory,
      secret,
      Math.floor(Math.random() + 10 + 1) <= difficulty,
      false,
      room_id,
    ];
  }
}

module.exports = Room;
