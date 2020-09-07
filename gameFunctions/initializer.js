const Room = require("../gameClasses/roomClass");

module.exports = () => {
  return {
    generateRooms: generateRooms,
    generatePlayer: generatePlayer,
  };
};

function generateRooms(user, game, difficulty) {
  //Rooms
  //Home Base (You can trade in Scrap Metal here to restore health);
  let falloutBunker = new Room(
    user,
    game,
    "Fallout Bunker",
    JSON.stringify([
      `Ella, as always, is happy to see you...`,
      `'How's everything going?`,
      `If you have any cool items, type 'craft' to see what we can build!'`,
      ``,
      `'If you ever get stuck you can type 'Help' for a list of commands!'`,
    ]),
    JSON.stringify([]),
    null,
    "RUN_Entrance",
    "",
    "RUE_Entrance",
    "RUW_Entrance",
    "",
    "",
    null,
    null,
    null,
    null,
    null,
    0
  );
  //Robotics United Towers
  //R.U. West
  let RUW_Entrance = new Room(
    user,
    game,
    "R.U.West Entrance",
    JSON.stringify([
      "You stand at the Entrance of the Robotics United Tower West. Everything around the tower is destroyed, yet the tower itself is mostly intact. There is a sign on the door...",
    ]),
    JSON.stringify([]),
    null,
    "",
    "",
    "falloutBunker",
    "RUW_WelcomeDesk",
    "",
    "",
    null,
    "w",
    "Sign",
    null,
    null,
    0
  );
  let RUW_WelcomeDesk = new Room(
    user,
    game,
    "Welcome Desk",
    JSON.stringify([
      "Outside of the Circulation Desk looking to be mostly intact, the room has been mostly destroyed and left in a state of disarray. Apparently being welcoming is not something we machines are good at...",
      "",
      "At least the directory with a nice map of the tower is still mostly legible...",
    ]),
    JSON.stringify(["Scrap Metal", "Scrap Metal"]),
    null,
    "RUW_BreakRoom",
    "RUW_Cubicle1",
    "RUW_Entrance",
    "",
    "",
    "",
    null,
    "w",
    "Desk",
    JSON.stringify(["Plasma Grenade"]),
    null,
    difficulty
  );
  let RUW_BreakRoom = new Room(
    user,
    game,
    "Break Room",
    JSON.stringify([
      "As you enter the break room, you are met with a strong musty smell. Judging by the thick smell of mold and decay ... it must have been lunch time when the machines attacked ...",
    ]),
    JSON.stringify(["Repair Kit"]),
    null,
    "",
    "RUW_WelcomeDesk",
    "",
    "RUW_Hallway1N",
    "",
    "",
    null,
    "w",
    "Refridgerator",
    JSON.stringify([]),
    null,
    difficulty
  );
  let RUW_Hallway1N = new Room(
    user,
    game,
    "Hallway 1N - W",
    JSON.stringify([
      "This side of the building seems to have gotten the worst of the fight. The north wall is mostly destroyed, and the floor is littered with debris.",
    ]),
    JSON.stringify(["Scrap Metal"]),
    null,
    "",
    "RUW_FabUnit",
    "RUW_BreakRoom",
    "RUW_ExpLabs",
    "",
    "",
    null,
    "w",
    null,
    null,
    null,
    diffculty
  );
  let RUW_ExpLabs = new Room(
    user,
    game,
    "Experimental Arms Lab",
    JSON.stringify([
      "It looks like the machines have already cleaned out most of the lab. There might still be something of use here though...",
    ]),
    JSON.stringify(["Particle Battery", "Scrap Metal"]),
    null,
    "",
    "",
    "RUW_Hallway1N",
    "",
    "",
    "",
    null,
    "w",
    null,
    null,
    null,
    difficulty
  );
  let RUW_Cubicle1 = new Room(
    user,
    game,
    "Cubicle Block 1",
    JSON.stringify([
      "The room looks like it was a cubicle block at one point, but most of the cubicle walls have been destroyed. There is a mostly in tact desk in the corner.",
    ]),
    JSON.stringify(["Repair Kit"]),
    null,
    "RUW_WelcomeDesk",
    "",
    "",
    "RUW_Hallway1S",
    "",
    "",
    null,
    "w",
    "Desk",
    JSON.stringify([]),
    null,
    difficulty
  );
  let RUW_Hallway1S = new Room(
    user,
    game,
    "Hallway 1S - W",
    JSON.stringify([
      "The machines must have barracaded the Emergency Exit on the south wall before their attack. The pile of bones in the room is proof enough of that.",
    ]),
    JSON.stringify([]),
    null,
    "RUW_FabUnit",
    "RUW_ParkingLot",
    "RUW_Cubicle1",
    "RUW_Office",
    "",
    "",
    null,
    "w",
    null,
    null,
    null,
    difficulty
  );
  let RUW_Office = new Room(
    user,
    game,
    "R.U.West Office",
    JSON.stringify([
      "The office seems to have mostly survived the attack some how. There is a filing cabinet that seems to be unscaythed in the corner. You also notice a strange box underneath a smashed desk",
    ]),
    JSON.stringify(["West Riddle Box"]),
    null,
    "",
    "",
    "RUW_Hallway1S",
    "",
    "",
    "",
    null,
    "w",
    "Filing Cabinet",
    JSON.stringify(["Portable Shield"]),
    null,
    difficulty
  );
  let RUW_FabUnit = new Room(
    user,
    game,
    "Fabrication Unit West",
    JSON.stringify([
      "At one point, specialized parts for various types of medical robots were built here. At this point, the room only builds fear in what was created here...",
    ]),
    JSON.stringify(["Thick Carbon Coating", "Scrap Metal", "Scrap Metal"]),
    null,
    "RUW_Hallway1N",
    "RUW_Hallway1S",
    "",
    "RUW_ServerW",
    "",
    "",
    null,
    "w",
    null,
    null,
    null,
    difficulty
  );
  let RUW_ServerW = new Room(
    user,
    game,
    "Server Room West",
    JSON.stringify([
      `Immidiately upon entering the Server Room, you are greeted by a nimble but heavily armed Combat Class Robot. 'INTRUDER DETECTED!!! It fires a shot that narrowly misses, you spring into action...`,
    ]),
    JSON.stringify([
      "Combat Repair Module",
      "Scrap Metal",
      "Scrap Metal",
      "Scrap Metal",
    ]),
    1,
    "",
    "",
    "RUW_FabUnit",
    "",
    "",
    "",
    "Office Keycard West",
    "w",
    null,
    null,
    null,
    0
  );
  let RUW_ParkingLot = new Room(
    user,
    game,
    "R.U.West Parking Lot",
    JSON.stringify([
      `Stepping out into the sunlight, you hear the pounding of metal feet running towards you... The sound from the blast must have alarmed some nearby guards. As you look towards the sound, you see a highly advanced combat machine coming at you fast, lets hope you are ready!`,
    ]),
    JSON.stringify([]),
    5,
    "RUW_Hallway1S",
    "",
    "falloutBunker",
    "",
    "",
    "",
    "blocked",
    "w",
    "Large Chest",
    JSON.stringify(["Particle Battery", "EMP", "Thick Carbon Coating"]),
    null,
    0
  );
  //R.U. East
  let RUE_Entrance = new Room(
    user,
    game,
    "R.U.East Entrance",
    JSON.stringify([
      "Standing at the Entrance of Robotics United Tower East, you can see a giant hole blasted through the building about 10 stories up... Something big hit this place, at least the sign on the door is ledgible...",
    ]),
    JSON.stringify([]),
    null,
    "",
    "",
    "RUE_WelcomeDesk",
    "falloutBunker",
    "",
    "",
    null,
    "e",
    "Sign",
    null,
    null,
    0
  );
  let RUE_WelcomeDesk = new Room(
    user,
    game,
    "Welcome Desk",
    JSON.stringify([
      "The vaulted ceilings of the once grand welcome lounge has mostly collapsed, leaving a mess of rubble covering most of the room... The Cirrculation Desk stoically stands in the middle of the room, almost as if it is proud to have survived the attack...",
      "",
      "At least the directory with a nice map of the tower is still mostly legible...",
    ]),
    JSON.stringify(["Scrap Metal", "Scrap Metal"]),
    null,
    "RUE_Cubicle2",
    "RUE_Charging",
    "",
    "RUE_Entrance",
    "",
    "",
    null,
    "e",
    "Desk",
    JSON.stringify(["Repair Kit"]),
    null,
    difficulty
  );
  let RUE_Cubicle2 = new Room(
    user,
    game,
    "Cubicle Block 2",
    JSON.stringify([
      "There must not have been many people in this cubicle block during the attack, as it is still in pretty good shape. There is sure to be something of use here...",
    ]),
    JSON.stringify(["Repair Kit"]),
    null,
    "",
    "RUE_WelcomeDesk",
    "RUE_Hallway1N",
    "",
    "",
    "",
    null,
    "e",
    "Desk",
    JSON.stringify(["Plasma Grenade"]),
    null,
    difficulty
  );
  let RUE_Hallway1N = new Room(
    user,
    game,
    "Hallway 1N - E",
    JSON.stringify([
      "Upon entering the hallway, you see an Employee of the Month picture that somehow survived the attack undamaged hanging on the wall... The man looked so happy...",
    ]),
    JSON.stringify(["Scrap Metal"]),
    null,
    "",
    "RUE_FabUnit",
    "RUE_QA",
    "RUE_Cubicle2",
    "",
    "",
    null,
    "e",
    null,
    null,
    null,
    difficulty
  );
  let RUE_QA = new Room(
    user,
    game,
    "Quality Assurance",
    JSON.stringify([
      "The QA room is large but mostly empty. Anything of use must have already been salvaged by the machines... You notice a strange box on one of the tables...",
    ]),
    JSON.stringify(["East Riddle Box"]),
    null,
    "",
    "",
    "",
    "RUE_Hallway1N",
    "",
    "",
    null,
    "e",
    null,
    null,
    null,
    difficulty
  );
  let RUE_Charging = new Room(
    user,
    game,
    "Charging Station",
    JSON.stringify([
      "This room was used to give new Robots their first initial charge after after being fabricated. As this was a fully automated unit, the room is mostly untouched, and looks just like it did in the past...",
    ]),
    JSON.stringify(["Repair Kit"]),
    null,
    "RUE_WelcomeDesk",
    "",
    "RUE_Hallway1S",
    "",
    "",
    "",
    null,
    "e",
    null,
    null,
    null,
    difficulty
  );
  let RUE_Hallway1S = new Room(
    user,
    game,
    "Hallway 1S - E",
    JSON.stringify([
      "It looks like the humans fought hard in this hallway. Bullet holes cover the walls, and there are two downed robots amongst the bones on the floor. There is a supply closet on the south wall, but it appears to be locked...",
    ]),
    JSON.stringify(["Scrap Metal", "Scrap Metal"]),
    null,
    "RUE_FabUnit",
    "RUE_SupplyCloset",
    "RUE_AdvWeapons",
    "RUE_Charging",
    "",
    "",
    null,
    "e",
    null,
    null,
    null,
    difficulty
  );
  let RUE_SupplyCloset = new Room(
    user,
    game,
    "Supply Closet",
    JSON.stringify([
      "It appears the invaders missed this closet during their sweep, as there are a few potentially useful items amongst the various cleaning and maintenance supplies...",
    ]),
    JSON.stringify(["Plasma Grenade", "Nuclear Fuel Cell", "Repair Kit"]),
    null,
    "RUE_Hallway1S",
    "",
    "",
    "",
    "",
    "",
    "Office Keycard East",
    "e",
    null,
    null,
    null,
    0
  );
  let RUE_AdvWeapons = new Room(
    user,
    game,
    "Advanced Weapons Lab",
    JSON.stringify([
      "This lab was used to research some pretty high tech weapons it seems. There are blueprints scattered across the room. One for a Nuclear Heat Ray catches your eye...sounds pretty sweet!",
    ]),
    JSON.stringify(["Particle Battery"]),
    null,
    "",
    "",
    "",
    "RUE_Hallway1S",
    "",
    "",
    null,
    "e",
    null,
    null,
    null,
    difficulty
  );
  let RUE_FabUnit = new Room(
    user,
    game,
    "Fabrication Unit East",
    JSON.stringify([
      "This Fabrication Unit focused soley on military grade machines. You can tell by the bullet casings that litter the floor, and the large amount of extremely disfigured skeletal remains strewn across the room...",
    ]),
    JSON.stringify(["Thick Carbon Coating", "Scrap Metal", "Scrap Metal"]),
    null,
    "RUE_Hallway1N",
    "RUE_Hallway1S",
    "RUE_ServerE",
    "",
    "",
    "",
    null,
    "e",
    null,
    null,
    null,
    difficulty
  );
  let RUE_ServerE = new Room(
    user,
    game,
    "Server Room East",
    JSON.stringify([
      `Before the door finishes opening, a large fist puts a sizeable dent in it, barely missing you. A big Combat Class Robot with large missile launchers mounted on it's shoulders points at you and yells 'TRAITOR! You must be terminated! ... Looks like you have to fight ...`,
    ]),
    JSON.stringify([
      "Missle Launcher",
      "Scrap Metal",
      "Scrap Metal",
      "Scrap Metal",
      "Scrap Metal",
    ]),
    2,
    "",
    "",
    "",
    "RUE_FabUnit",
    "",
    "",
    "Office Keycard East",
    "e",
    null,
    null,
    null,
    0
  );
  //R.U. North
  let RUN_Entrance = new Room(
    user,
    game,
    "R.U.North Entrance",
    JSON.stringify([
      `Unlike the other two towers, the Robotics United Tower North seems to be in pretty good shape from the outside. The machines must have been worried about destroying the main server computer that resides inside Ella's Dad's office. I wonder how he would have felt about the sign on the door now...`,
    ]),
    JSON.stringify([]),
    null,
    "RUN_WelcomeDesk",
    "falloutBunker",
    "",
    "",
    "",
    "",
    "North Tower Keycard",
    "n",
    "Sign",
    null,
    null,
    0
  );
  let RUN_WelcomeDesk = new Room(
    user,
    game,
    "Welcome Desk",
    JSON.stringify([
      `The outside might have looked like it had avoided the brunt of the machine onslaught, but the inside sure didn't. The room is littered with the remains of both machine and human alike. The one takeaway from this gruesome sight is that the desks at Robotics United were rock solid, as the one in this welcome area is still standing tall, just like in the other Towers...`,
      ``,
      `At least the directory with a nice map of the tower is still mostly legible...`,
    ]),
    JSON.stringify(["Scrap Metal", "Scrap Metal", "Scrap Metal"]),
    null,
    "RUN_aiLab",
    "RUN_Entrance",
    "RUN_Cubicle3",
    "RUN_Cubicle4",
    "",
    "",
    null,
    "n",
    "Desk",
    JSON.stringify(["Thick Carbon Coating"]),
    null,
    difficulty
  );
  let RUN_Cubicle3 = new Room(
    user,
    game,
    "Cubicle Block 3",
    JSON.stringify([
      "Half of the room is completely leveled, as if a bulldozer drove right through the room. There must have been a big fight here. The other side of the room is in disarray, but one cubicle managed to escape unscathed. Whoever worked there was a huge Hitchhikers Guide to the Galaxy fan, there are posters from the movie all over the cubicle. It looks like the computer still works too...",
    ]),
    JSON.stringify(["Repair Kit"]),
    null,
    "RUN_Hallway1E",
    "",
    "",
    "RUN_WelcomeDesk",
    "",
    "",
    null,
    "n",
    "Computer",
    JSON.stringify([]),
    null,
    difficulty
  );
  let RUN_Hallway1E = new Room(
    user,
    game,
    "Hallway 1E - N",
    JSON.stringify([
      `The walls in this hallway are mostly intact, and are lined with awards celebrating the accomplishments of AI before things went south... If the machines don't have emotion, why save all of this?`,
    ]),
    JSON.stringify(["Thick Carbon Coating"]),
    null,
    "RUN_AdminOffice",
    "RUN_Cubicle3",
    null,
    "RUN_aiLab",
    "",
    "",
    null,
    "n",
    null,
    null,
    null,
    difficulty
  );
  let RUN_AdminOffice = new Room(
    user,
    game,
    "Administrative Offices",
    JSON.stringify([
      "The machines must have took out the higher ups first, as this room looks like it was cleared before the panic set in. It looks as if most the room has already been ransacked for supplies, but a lone Filing Cabinet at the back of the office remains untouched...",
    ]),
    JSON.stringify(["Repair Kit", "Scrap Metal"]),
    null,
    "",
    "RUN_Hallway1E",
    "",
    "RUN_Hallway3N",
    "",
    "",
    null,
    "n",
    "Filing Cabinet",
    ["Smoke Bomb"],
    null,
    difficulty
  );
  let RUN_Cubicle4 = new Room(
    user,
    game,
    "Cubicle Block 4",
    JSON.stringify([
      `This cubicle block seems to have avoided the carnage, as it looks as if the staff had just left for the day. You look around the cubicles and see pictures of friends, family, loved ones...all gone. You still don't understand these feelings, but you know you don't like them...`,
    ]),
    JSON.stringify(["Particle Battery"]),
    null,
    "RUN_Hallway1W",
    "",
    "RUN_WelcomeDesk",
    "",
    "",
    "",
    null,
    "n",
    null,
    null,
    null,
    difficulty
  );
  let RUN_Hallway1W = new Room(
    user,
    game,
    "Hallway 1W - N",
    JSON.stringify([
      "On the wall in this hallway is a giant framed picture, with a plaque mounted under it. The plaque reads: James Lloyd, Father of all Machines... There is a single bullet hole in his head...",
    ]),
    JSON.stringify(["Thick Carbon Coating", "Scrap Metal"]),
    null,
    "RUN_Treasury",
    "RUN_Cubicle4",
    "RUN_aiLab",
    "",
    "",
    "",
    null,
    "n",
    null,
    null,
    "picture",
    difficulty
  );
  let RUN_Treasury = new Room(
    user,
    game,
    "R.U. Treasury",
    JSON.stringify([
      "If you had any use for money, you would be one happy camper as the room looked like someone popped a giant confetti launcher that was just full of $100 bills...",
    ]),
    JSON.stringify(["Repair Kit"]),
    null,
    "",
    "RUN_Hallway1W",
    "RUN_Hallway3N",
    "",
    "",
    "",
    null,
    "n",
    "Broken Safe",
    ["Particle Battery"],
    null,
    difficulty
  );
  let RUN_aiLab = new Room(
    user,
    game,
    "Artificial Intelligence Laboratory",
    JSON.stringify([
      `As you enter the room, it is completely dark... Suddenly all the lights blast on, and you are met with a machine that looks like a giant turret with arms ...'INTRUDER DETECTED, ELIMINATION SEQUENCE INITIATED'... The door slams shut behind you, it appears there is only one way out of this...`,
    ]),
    JSON.stringify(["Fission Cannon", "Scrap Metal", "Scrap Metal"]),
    3,
    "RUN_Hallway3N",
    "RUN_WelcomeDesk",
    "RUN_Hallway1E",
    "RUN_Hallway1W",
    "",
    "",
    null,
    "n",
    null,
    null,
    null,
    0
  );
  let RUN_Hallway3N = new Room(
    user,
    game,
    "Hallway 3N - N",
    JSON.stringify([
      `There must have been a mad dash to get to James' office just north of here. The hall has so much rubble, decimated machines, and skeletal remains that it is hard to walk through...`,
    ]),
    JSON.stringify(["Scrap Metal", "Scrap Metal"]),
    null,
    "RUN_MainServer",
    "RUN_aiLab",
    "RUN_AdminOffice",
    "RUN_Treasury",
    "",
    "",
    null,
    "n",
    null,
    null,
    null,
    difficulty
  );
  let RUN_MainServer = new Room(
    user,
    game,
    "Main Server Room",
    JSON.stringify([
      `This is the last room before the office, and you are met with one last foe. You immidiately recognize this Robot. It was the same one that almost ended your time here on what is left of Earth... Thanks to Ella, you have a shot at revenge!`,
    ]),
    JSON.stringify(["Scrap Metal", "Scrap Metal", "Scrap Metal"]),
    4,
    "RUN_PresOffice",
    "RUN_Hallway3N",
    "",
    "",
    "",
    "",
    "Office Keycard North",
    "n",
    null,
    null,
    null,
    0
  );
  let RUN_PresOffice = new Room(
    user,
    game,
    "R.U. Presidents Office",
    JSON.stringify([
      `Well, you made it...are you ready for this? You see James' computer in the middle of the office completely untouched by the war. There is one more big choice in your journey...`,
    ]),
    JSON.stringify([]),
    null,
    "",
    "RUN_MainServer",
    "",
    "",
    "",
    "",
    null,
    "n",
    "Computer",
    JSON.stringify([]),
    null,
    0
  );
  let RUN_SecretStairwell = new Room(
    user,
    game,
    "Secret Stairwell",
    JSON.stringify([
      `Behind the hidden door you find a long, dark stairwell heading deep underground...`,
    ]),
    JSON.stringify([]),
    null,
    "",
    "",
    "RUN_Hallway1W",
    "RUN_BasementLanding",
    "",
    "",
    null,
    "no_map",
    null,
    null,
    null,
    difficulty
  );
  let RUN_BasementLanding = new Room(
    user,
    game,
    "Basement Landing",
    JSON.stringify([
      `As you reach the bottom of the stairs, bright white lights suddenly switch on and you notice an automated turret on the ceiling... it looks like it has it's sights on you...`,
    ]),
    JSON.stringify(["Scrap Metal", "Scrap Metal"]),
    6,
    "RUN_BasementHallway",
    "null",
    "RUN_SecretStairwell",
    "RUN_FalloutWarehouse",
    "",
    "",
    null,
    "no_map",
    null,
    null,
    null,
    0
  );
  let RUN_FalloutWarehouse = new Room(
    user,
    game,
    "Fallout Warehouse",
    JSON.stringify([
      `It looks like James was fully prepared for the fallout, the underground warehouse is huge and filled with enough resources to last a group of people a few years... it is also apparently well guarded...`,
    ]),
    JSON.stringify([
      "Repair Kit",
      "Repair Kit",
      "Scrap Metal",
      "Scrap Metal",
      "Portable Shield",
      "Plasma Grenade",
      "Thick Carbon Coating",
      "Thick Carbon Coating",
    ]),
    7,
    "",
    "",
    "RUN_BasementLanding",
    "",
    "",
    "",
    null,
    "no_map",
    null,
    null,
    null,
    0
  );
  let RUN_BasementHallway = new Room(
    user,
    game,
    "Basement Hallway",
    JSON.stringify([
      `As you walk down the hallway, you feel a sense of comfort. Nothing is destroyed, there are no holes in the wall ... you haven't experienced calm like this in a long time. You are quickly reminded of the times though when you see military supplies piled in the corner... James was getting ready for anything...`,
    ]),
    JSON.stringify([
      "Repair Kit",
      "Repair Kit",
      "Plasma Grenade",
      "Plasma Grenade",
      "Nuclear Heat Ray",
      "Portable Shield",
    ]),
    null,
    "RUN_Vault",
    "RUN_BasementLanding",
    "",
    "",
    "",
    "",
    null,
    "no_map",
    "Computer",
    JSON.stringify([]),
    null,
    difficulty
  );
  let RUN_Vault = new Room(
    user,
    game,
    "The Vault",
    JSON.stringify([
      `The room is filled with shelves, each littered with their own treasures. James must have used this room to store his most advanced inventions... He also guarded it well...`,
    ]),
    JSON.stringify([
      "Scrap Metal",
      "Scrap Metal",
      "Scrap Metal",
      "Regeneration Diode",
      "Graphene Plating",
    ]),
    8,
    "",
    "RUN_BasementHallway",
    "",
    "",
    "",
    "",
    "Basement Keycard",
    "no_map",
    "Desk",
    JSON.stringify(["Letter"]),
    null,
    0
  );

  return [
    [
      falloutBunker.queryArray,
      RUW_Entrance.queryArray,
      RUW_WelcomeDesk,queryArray,
      RUW_BreakRoom.queryArray,
      RUW_Hallway1N.queryArray,
      RUW_ExpLabs.queryArray,
      RUW_Cubicle1.queryArray,
      RUW_Hallway1S.queryArray,
      RUW_Office.queryArray,
      RUW_FabUnit.queryArray,
      RUW_ServerW.queryArray,
      RUW_ParkingLot.queryArray,
      RUE_Entrance.queryArray,
      RUE_WelcomeDesk.queryArray,
      RUE_Cubicle2.queryArray,
      RUE_Hallway1N.queryArray,
      RUE_QA.queryArray,
      RUE_Charging.queryArray,
      RUE_Hallway1S.queryArray,
      RUE_SupplyCloset.queryArray,
      RUE_AdvWeapons.queryArray,
      RUE_FabUnit.queryArray,
      RUE_ServerE.queryArray,
      RUN_Entrance.queryArray,
      RUN_WelcomeDesk.queryArray,
      RUN_Cubicle3.queryArray,
      RUN_Hallway1E.queryArray,
      RUN_AdminOffice.queryArray,
      RUN_Cubicle4.queryArray,
      RUN_Hallway1W.queryArray,
      RUN_Treasury.queryArray,
      RUN_aiLab.queryArray,
      RUN_Hallway3N.queryArray,
      RUN_MainServer.queryArray,
      RUN_PresOffice.queryArray,
      RUN_SecretStairwell.queryArray,
      RUN_BasementLanding.queryArray,
      RUN_FalloutWarehouse.queryArray,
      RUN_BasementHallway.queryArray,
      RUN_Vault.queryArray
    ]
  ]
}
