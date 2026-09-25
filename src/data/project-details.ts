export interface ProjectDetail {
  mainImage: string;
  upperMinorImage: string;
  bottomMinorImage: string;
  videoSrc: string;
  title: string;
  summary: string;
  points: { title: string; text: string }[];
}

export const afonseDialogData: ProjectDetail[] = [
  {
    "mainImage": "/assets/AfonseLab.png",
    "upperMinorImage": "/assets/AfonseScreenJump.png",
    "bottomMinorImage": "/assets/Afonse.png",
    "videoSrc": "/videos/AfonseShowCase.MP4",
    "title": "Overview",
    "summary": "A post-apocalyptic adventure built around responsive movement, reactive enemies, and a challenging first boss.",
    "points": [
      {
        "title": "My contribution",
        "text": "I built the state-machine system that manages the player, enemies, and boss, keeping movement, jumps, and attacks organized."
      },
      {
        "title": "Gameplay focus",
        "text": "The player responds directly to input, while enemies react to their surroundings. Boss attack patterns give players room to observe, learn, and adapt."
      }
    ]
  },
  {
    "mainImage": "/assets/AfonseWalkingDebug.png",
    "upperMinorImage": "/assets/AfonseJumpDebug.png",
    "bottomMinorImage": "/assets/AfonseCrouchDebug.png",
    "videoSrc": "/videos/AfonseGlideShowCase.MP4",
    "title": "Character controller",
    "summary": "A shared state machine lets the player move between walking, jumping, crouching, and gliding.",
    "points": [
      {
        "title": "Modular architecture",
        "text": "PlayerBrain initializes the StateMachine. Each state owns its behavior: GlideState, for example, handles input and airborne physics."
      },
      {
        "title": "State transitions",
        "text": "States change when their internal conditions are met. Global exceptions can also force a transition when the player needs to react immediately."
      }
    ]
  },
  {
    "mainImage": "/assets/AfonseBossAtack.png",
    "upperMinorImage": "/assets/AfonseAndBoss.png",
    "bottomMinorImage": "/assets/AfonseBoss.png",
    "videoSrc": "/videos/AfonseBossShowcase.MP4",
    "title": "Boss behavior",
    "summary": "The boss uses its own state machine to choose actions and react to the player.",
    "points": [
      {
        "title": "Attack patterns",
        "text": "Each state represents an action. Once it finishes, the boss returns to its idle behavior or moves into the next attack."
      },
      {
        "title": "Readable encounters",
        "text": "Consistent patterns make the fight learnable. Players can recognize the boss’s behavior and choose when to move or attack."
      }
    ]
  },
  {
    "mainImage": "/assets/SpiderEnemyChekingSurroundings.png",
    "upperMinorImage": "/assets/AfonseAranha.png",
    "bottomMinorImage": "/assets/SpideEnemy.png",
    "videoSrc": "/videos/SpiderEnemyShowcase.MP4",
    "title": "Enemy navigation",
    "summary": "Spider enemies use raycasts to find their next move, creating unpredictable pressure around the player.",
    "points": [
      {
        "title": "Environment checks",
        "text": "Raycasts scan for walls and possible landing points. The enemy then chooses whether to walk or jump toward the selected position."
      },
      {
        "title": "A focused state machine",
        "text": "Three states — Idle, Move, and Jump — organize navigation and keep the behavior straightforward to maintain."
      }
    ]
  }
];

export const botVinnikDialogData: ProjectDetail[] = [
  {
    "mainImage": "/assets/BotVinnikOverview.png",
    "upperMinorImage": "/assets/BotVinnikTeaching.png",
    "bottomMinorImage": "/assets/BotVinnikBoard.png",
    "videoSrc": "/videos/BotVinnikShowCase.MP4",
    "title": "Overview",
    "summary": "An educational chess game developed with DeepGreen Studios, combining guided lessons with a memorable AI instructor.",
    "points": [
      {
        "title": "Scene flow & saved progress",
        "text": "I implemented communication and transitions between scenes, along with a save system that restores the player’s progress."
      },
      {
        "title": "Gameplay polish",
        "text": "Animations provide clear feedback throughout the lessons. Unity coroutines coordinate asynchronous tasks and keep the experience responsive."
      }
    ]
  },
  {
    "mainImage": "/assets/BotVinnikLaikaTip.png",
    "upperMinorImage": "/assets/BotVinnikChessTrail.png",
    "bottomMinorImage": "/assets/BotVinnikChessHighlights.png",
    "videoSrc": "/videos/BotVinnikLaikaHint.MP4",
    "title": "Animation & feedback",
    "summary": "Coordinated motion helps players follow each move and understand the result.",
    "points": [
      {
        "title": "Pieces & visual effects",
        "text": "Tweens synchronize chess-piece movement, interface elements, and the particles that highlight a correct move."
      },
      {
        "title": "Laika’s hints",
        "text": "The same approach coordinates Laika’s movement and hints with her barking sounds, connecting the animation and audio cues."
      }
    ]
  },
  {
    "mainImage": "/assets/BotVinnikWrongMove.png",
    "upperMinorImage": "/assets/BotVinnikTeachingText.png",
    "bottomMinorImage": "/assets/BotVinnikCard.png",
    "videoSrc": "/videos/BotVinnikReactions.MP4",
    "title": "Character interactions",
    "summary": "Bot Vinnik brings personality to the lessons, reacting to the player’s pace and offering contextual hints.",
    "points": [
      {
        "title": "Responsive dialogue",
        "text": "The instructor expresses emotions and reacts when the player takes longer to make a move."
      },
      {
        "title": "Lesson-specific guidance",
        "text": "Hints relate to the selected lesson and help the player identify the next move, keeping instruction connected to the game."
      }
    ]
  }
];

export const wonderWallaceDialogData: ProjectDetail[] = [
  {
    "mainImage": "/assets/WonderWallaceOverview.png",
    "upperMinorImage": "/assets/WonderWallaceFood.png",
    "bottomMinorImage": "/assets/WonderWallaceFishing.png",
    "videoSrc": "/videos/WonderWallaceShowCase.MP4",
    "title": "Overview",
    "summary": "Wallace is a hungry bear with three fish to catch before the timer runs out.",
    "points": [
      {
        "title": "Fishing mechanics",
        "text": "I developed the fishing loop from casting to catching, with randomly selected fish and a timer that keeps each attempt moving."
      },
      {
        "title": "Cinematic cameras",
        "text": "Cinemachine transitions connect the fishing actions and create cinematic moments throughout the game."
      }
    ]
  }
];

export const titeDialogData: ProjectDetail[] = [
  {
    "mainImage": "/assets/TiETe/TiETeMain.png",
    "upperMinorImage": "/assets/TiETe/TiETeCamiaurao.png",
    "bottomMinorImage": "/assets/TiETe/TiETeCatfish.png",
    "videoSrc": "/videos/TiETeVideo.mp4",
    "title": "Overview",
    "summary": "A fast-paced strategy game about gathering resources, growing an army of cat-like fish, and destroying the enemy base.",
    "points": [
      {
        "title": "Units & resources",
        "text": "Unity’s NavMesh system handles unit navigation. Collected resources let players spawn more troops and build their forces."
      },
      {
        "title": "Camera controls",
        "text": "The camera supports click-to-move navigation, keyboard controls, smooth zooming, and full 360-degree rotation."
      }
    ]
  }
];

export const duckHuntCrossyRoadDialogData: ProjectDetail[] = [
  {
    "mainImage": "/assets/duckHuntCrossyRoad/DuckHuntCrossyRoadMainImage.png",
    "upperMinorImage": "/assets/duckHuntCrossyRoad/DuckHuntCrossyRoadSecondImage.png",
    "bottomMinorImage": "/assets/duckHuntCrossyRoad/DuckHuntCrossyRoadThirdImage.png",
    "videoSrc": "/videos/DuckHuntCrossyRoadVideoShowcase.mp4",
    "title": "Overview",
    "summary": "A mobile arcade game starring a hunting dog trying to cross a forest full of vengeful ducks.",
    "points": [
      {
        "title": "The core loop",
        "text": "Players navigate the forest, avoid obstacles, and collect items while looking for a safe route forward."
      },
      {
        "title": "Voice-controlled hunting",
        "text": "Voice input lets players trigger hunting actions when ducks fly past, adding another way to interact with the game."
      }
    ]
  }
];

export const boitataDialogData: ProjectDetail[] = [
  {
    "mainImage": "/assets/boitata/BoitataMainfirstimage.png",
    "upperMinorImage": "/assets/boitata/BoitataSecondImage.png",
    "bottomMinorImage": "/assets/boitata/BoitataThirdImage.png",
    "videoSrc": "/videos/BoitataMainVideoShowCase.mp4",
    "title": "Overview",
    "summary": "A tower defense adventure inspired by Brazilian folklore and the Kingdom series, with Boitatá protecting the forest from woodcutters.",
    "points": [
      {
        "title": "Day & night",
        "text": "During the day, players gather resources, recruit animal allies, and upgrade the main totem. At night, they deploy tactical abilities to defend the forest."
      },
      {
        "title": "Collaboration",
        "text": "Developed with Blueberry Turtle during GameJam+, the project combines folklore, resource management, and tactical defense."
      }
    ]
  }
];
