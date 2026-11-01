export interface ProjectDetail {
  mainImage: string;
  upperMinorImage?: string;
  bottomMinorImage?: string;
  videoSrc: string;
  title: string;
  summary: string;
  points: { title: string; text: string }[];
}

export const afonseDialogData: ProjectDetail[] = [
  {
    "mainImage": "/images/afonse/AfonseLab.webp",
    "upperMinorImage": "/images/afonse/AfonseScreenJump.webp",
    "bottomMinorImage": "/images/afonse/Afonse.webp",
    "videoSrc": "/videos/afonse/AfonseShowCase.mp4",
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
    "mainImage": "/images/afonse/AfonseWalkingDebug.webp",
    "upperMinorImage": "/images/afonse/AfonseJumpDebug.webp",
    "bottomMinorImage": "/images/afonse/AfonseCrouchDebug.webp",
    "videoSrc": "/videos/afonse/AfonseGlideShowCase.mp4",
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
    "mainImage": "/images/afonse/AfonseBossAtack.webp",
    "upperMinorImage": "/images/afonse/AfonseAndBoss.webp",
    "bottomMinorImage": "/images/afonse/AfonseBoss.webp",
    "videoSrc": "/videos/afonse/AfonseBossShowcase.mp4",
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
    "mainImage": "/images/afonse/SpiderEnemyChekingSurroundings.webp",
    "upperMinorImage": "/images/afonse/AfonseAranha.webp",
    "bottomMinorImage": "/images/afonse/SpideEnemy.webp",
    "videoSrc": "/videos/afonse/SpiderEnemyShowcase.mp4",
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
    "mainImage": "/images/bot-vinnik/BotVinnikOverview.webp",
    "upperMinorImage": "/images/bot-vinnik/BotVinnikTeaching.webp",
    "bottomMinorImage": "/images/bot-vinnik/BotVinnikBoard.webp",
    "videoSrc": "/videos/bot-vinnik/BotVinnikShowCase.mp4",
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
    "mainImage": "/images/bot-vinnik/BotVinnikLaikaTip.webp",
    "upperMinorImage": "/images/bot-vinnik/BotVinnikChessTrail.webp",
    "bottomMinorImage": "/images/bot-vinnik/BotVinnikChessHighlights.webp",
    "videoSrc": "/videos/bot-vinnik/BotVinnikLaikaHint.mp4",
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
    "mainImage": "/images/bot-vinnik/BotVinnikWrongMove.webp",
    "upperMinorImage": "/images/bot-vinnik/BotVinnikTeachingText.webp",
    "bottomMinorImage": "/images/bot-vinnik/BotVinnikCard.webp",
    "videoSrc": "/videos/bot-vinnik/BotVinnikReactions.mp4",
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
    "mainImage": "/images/wonder-wallace/WonderWalaceCardMainImage.webp",
    "upperMinorImage": "/images/wonder-wallace/WonderWallaceFood.webp",
    "bottomMinorImage": "/images/wonder-wallace/WonderWallaceFishing.webp",
    "videoSrc": "/videos/wonder-wallace/WonderWallaceShowCase.mp4",
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
    "mainImage": "/images/ti-and-te/TiETeMain.webp",
    "videoSrc": "/videos/ti-and-te/TiETeVideo.mp4",
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
  },
  {
    "mainImage": "/images/ti-and-te/GameplayPoster.webp",
    "videoSrc": "/videos/ti-and-te/TieTeGameplay_comp.mp4",
    "title": "Gameplay",
    "summary": "A closer look at Ti & Tê in action.",
    "points": []
  },
  {
    "mainImage": "/images/ti-and-te/BubbleShaderPoster.webp",
    "videoSrc": "/videos/ti-and-te/TieTeBubleShaderShowcase_comp.mp4",
    "title": "Bubble shader",
    "summary": "A showcase of the game's bubble shader effect.",
    "points": []
  }
];

export const duckHuntCrossyRoadDialogData: ProjectDetail[] = [
  {
    "mainImage": "/images/duck-hunt-crossy-road/DuckHuntCrossyRoadMainImage.webp",
    "upperMinorImage": "/images/duck-hunt-crossy-road/DuckHuntCrossyRoadSecondImage.webp",
    "bottomMinorImage": "/images/duck-hunt-crossy-road/DuckHuntCrossyRoadThirdImage.webp",
    "videoSrc": "/videos/duck-hunt-crossy-road/DuckHuntCrossyRoadVideoShowcase.mp4",
    "title": "Overview",
    "summary": "A retro-inspired mobile arcade game where the tables have turned: take control of the classic Duck Hunt hound as he navigates a treacherous forest swarming with ducks out for revenge.",
    "points": [
      {
        "title": "The core loop",
        "text": "Players navigate the forest, avoid obstacles, and collect items while looking for a safe route forward. Each run features procedurally generated terrain powered by a pathfinding algorithm that always guarantees at least one viable path."
      },
      {
        "title": "Voice-controlled hunting",
        "text": "Optimized specifically for mobile devices, the game incorporates low-latency voice input that lets players trigger hunting actions as ducks fly past."
      }
    ]
  }
];

export const boitataDialogData: ProjectDetail[] = [
  {
    "mainImage": "/images/boitata/BoitataMainfirstimage.webp",
    "upperMinorImage": "/images/boitata/BoitataSecondImage.webp",
    "bottomMinorImage": "/images/boitata/BoitataThirdImage.webp",
    "videoSrc": "/videos/boitata/BoitataMainVideoShowCase.mp4",
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

export const tsDialogData: ProjectDetail[] = [
  {
    "mainImage": "/images/wave-function-collapse/TSMainImage.webp",
    "upperMinorImage": "/images/wave-function-collapse/Preview1.webp",
    "bottomMinorImage": "/images/wave-function-collapse/Preview2.webp",
    "videoSrc": "/videos/wave-function-collapse/TSVideoShowCase.mp4",
    "title": "Overview",
    "summary": "A cozy Wave Function Collapse case study, featuring player movement and ambient butterflies.",
    "points": [
      {
        "title": "Island Builder",
        "text": "As players build across the water, the Wave Function Collapse algorithm dynamically bridges heights with stairs and anchors overhangs with stilts."
      },
      {
        "title": "Player Movement and Ambiance",
        "text": "Once the island is resolved, the structure serves as an interactive playground for smooth navigation and fluttering wildlife."
      }
    ]
  }
];

