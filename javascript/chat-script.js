document.addEventListener("DOMContentLoaded", () => {
  const messageInput = document.getElementById("messageInput");
  const sendButton = document.getElementById("sendButton");
  const chatMessages = document.querySelector(".chat-messages");
  const responseOptions = document.getElementById("responseOptions");
  const searchContacts = document.getElementById("searchContacts");
  const contactListContent = document.querySelector(".contact-list-content");
  const achievementPopup = document.getElementById("achievementPopup");

  //   button to start the next dialogue
  const startDay2Button = document.getElementById("startDay2Button");
  const startDay3Button = document.getElementById("startDay3Button");
  const startDay4Button = document.getElementById("startDay4Button");
  const startDay5Button = document.getElementById("startDay5Button");
  const saveProgressButton = document.getElementById("saveProgressButton");
  const loadButton = document.getElementById("loadButton");
  const matchedName = localStorage.getItem("lastMatchedName");
  const userName = localStorage.getItem("UserName");
  const Gender = localStorage.getItem("lastMatchedGender")

  //  voice dialogue
  let yomp =
    '<a href="../html/tictactoe.html" style="color: white;">Tic Tac Toe</a>';
  
  let voice1 =
    '<audio controls><source src="../audio/halbert1.mp3" type="audio/mpeg">Your browser does not support the audio element</audio>';
  
    let voiceend1 =
    '<audio controls><source src="../audio/End1.mp3" type="audio/mpeg">Your browser does not support the audio element</audio>';
    let voiceend2 =
    '<audio controls><source src="../audio/End2.mp3" type="audio/mpeg">Your browser does not support the audio element</audio>';
    let voiceend3 =
    '<audio controls><source src="../audio/End3.mp3" type="audio/mpeg">Your browser does not support the audio element</audio>';
    let voiceend4 =
    '<audio controls><source src="../audio/End4.mp3" type="audio/mpeg">Your browser does not support the audio element</audio>';
    let voiceend5 =
    '<audio controls><source src="../audio/End5.mp3" type="audio/mpeg">Your browser does not support the audio element</audio>';

    if(Gender == "Female"){
      voice1 = '<audio controls><source src="../audio/voicegirl.m4a" type="audio/mpeg">Your browser does not support the audio element</audio>'
       voiceend1 =
      '<audio controls><source src="../audio/EndW1.mp3" type="audio/mpeg">Your browser does not support the audio element</audio>';
      voiceend2 =
      '<audio controls><source src="../audio/EndW2.mp3" type="audio/mpeg">Your browser does not support the audio element</audio>';
       voiceend3 =
      '<audio controls><source src="../audio/EndW3.mp3" type="audio/mpeg">Your browser does not support the audio element</audio>';
       voiceend4 =
      '<audio controls><source src="../audio/EndW4.mp3" type="audio/mpeg">Your browser does not support the audio element</audio>';
       voiceend5 =
      '<audio controls><source src="../audio/EndW5.mp3" type="audio/mpeg">Your browser does not support the audio element</audio>';
    }

  const Endingimg = '<img width = 300px height = 300px src="../img/Endingphoto.png"></img>'  
  const Endingimg1 = '<img width = 300px height = 300px src="../img/Endingphoto2.jpg"></img>'
  const dialogues = {
    day1: {
      start: [
        {
          text: "Heyy, saw your profile, I thought you were cute.",
          options: [
            {
              text: "Hey back, I thought you were cute too.",
              next: "alexIntroduction",
            },
            { text: "Oops… who's this?", next: "alexIntroduction" },
            { text: "If I'm cute, you're stunning!", next: "alexIntroduction" },
          ],
        },
      ],
      alexIntroduction: [
        {
          text: `HAHAHAH you’re funny. I’m ${matchedName} btw`,
          options: [
            { text: "I know. It’s on your profile", next: "alexComment" },
            { text: `Heyy ${matchedName}, I’m ${userName}`, next: "alexComment1" },
            {
              text: `${matchedName}… that suits you. A beautiful name for a beautiful person.`,
              next: "alexComment2",
            },
          ],
        },
      ],
      alexComment: [
        {
          text: `Ooops, you’re right HAHA.`,
          options: [
            { text: "HAHA. Thanks for matching me, by the way", next: "interests" },
          ],
        },
      ],
      alexComment1:[
        {
          text: `${userName} huh, even that sounds cute.`,
          options: [
            { text: "HAHA. Thanks for matching me, by the way", next: "interests" },
          ],
        }
        
      ],
      alexComment2:[
        {
          text: `Stop it. I'm blushing :)`,
          options: [
            {text:  "HAHA. Thanks for matching me, by the way", next: "interests"}
          ]
        }
      ],
      interests: [
        {
          text: `It was my pleasure. So, tell me, ${userName}, what’s your interest recently?`,
          options: [
            {
              text: "I’ve been reading this book for a while now. It’s called The Fourth Wing. It’s a dystopian fantasy, so check it out if that’s your jam.",
              next: "Hobbies1",
            },
            {
              text: "Hiking. I lovee hiking the hills close to my house. Sure don’t love having to wake up so early though",
              next: "Hobbies2",
            },
            {
              text: "I haven’t had much time to do much other than work honestly… Gosh I wish I have more free time. All this work work work is killing me",
              next: "Hobbies3",
            },
          ],
        },
      ],
      Hobbies1:[
        {
          text: "Wow, fantasy stories. That's not really my cup of tea, but the title sounds interesting. Maybe I'll pick it up sometime soon.",
          options:[{
          text: "But who has time for hobbies anyway, we're all too busy working", next: "work"
          }
          ]
        }
      ],
      Hobbies2:[
        {
          text: "I see, I’m more of an indoor typa guy though. So I wouldn’t know how that feels like.",
          options:[{
          text: "But who has time for hobbies anyway, we're all too busy working", next: "work"
          }
          ]
        }
      ],
      Hobbies3:[
        {
          text: "That's harsh… You should take some time off if your work is burning you out",
          options:[{
          text: "Nah… I’ll quit working when I’m dead", next: "work"
          }
          ]
        }
      ],
      work: [
        {
          text: "HAHA, you're not wrong. What do you do anyway? For work I mean.",
          options: [
            {
              text: "I work at the vet shop in my neighborhood. Do you know PetsRUs? There’s only one in New Yolk. Not a doctor though, I work the register upfront. So don’t come to me if your dog gets sick",
              next: "dog",
            },
          ],
        },
      ],
      dog: [
        {
          text: "HAHAH you’re lucky I don’t have a pet for now.",
          options: [
            {
              text: `How about you, ${matchedName}? What do you do to make your money?`,
              next: "alexWork",
            },
          ],
        },
      ],
      alexWork: [
        {
          text: "Let’s see, on weekends I work at a local market near the town and on weekdays I work as a barista at Starbucks.",
          options: [
            {
              text: "You’re one hard-working man… Kinda my type to be honest",
              next: "answer1",
            },
            {
              text: "A barista? That’s sweet. How about you become my personal coffee maker? I couldn’t live a day without having at least a cup",
              next: "answer2",
            },
            {
              text: "You’re working so hard! Are you saving up for something?",
              next: "answer3",
            },
          ],
        },
      ],
      answer1: [
        {
          text: "Then we’re in luck cause you’re 100% my type too",
          options: [
            {
              text: "<33",
              next: "music",
            },
          ],
        },
      ],
      answer2: [
        {
          text: "Wow, its like you’re another version of me.",
          options: [
            {
              text: "HAHA",
              next: "music",
            },
          ],
        },
      ],
      answer3: [
        {
          text: "Not really, I just got used to working myself to death ever since I lost both my parents.",
          options: [
            {
              text: "Oh my gosh, that’s horrible… Are you fine now?",
              next: "music1",
            },
          ],
        },
      ],
      music: [
        {
          text: "BTW, do you listen to music often?",
          options: [
            {
              text: "Yeah! Do you know Fiona Apple? Her songs are amazing…. Lowkey underrated tho",
              next: "musicReply1",
            },
            {
              text: "I like some of those Nirvana songs… ‘Come as You Are’ is my favourite",
              next: "musicReply2",
            },
            {
              text: "Not really… I sometimes just turn on the radio and listen to that I guess, but I don’t have any preferences",
              next: "musicReply3",
            },
          ],
        },
      ],
      music1: [
        {
          text: "Yeah, it was years ago anyway. I’m all good now. But I had to learn to take care of myself early on so that’s why sometimes I don’t even notice when I’m working too hard. BTW, do you listen to music often?",
          options: [
            {
              text: "Yeah! Do you know Fiona Apple? Her songs are amazing…. Lowkey underrated tho",
              next: "musicReply1",
            },
            {
              text: "I like some of those Nirvana songs… ‘Come as You Are’ is my favourite",
              next: "musicReply2",
            },
            {
              text: "Not really… I sometimes just turn on the radio and listen to that I guess, but I don’t have any preferences",
              next: "musicReply3",
            },
          ],
        },
      ],
      musicReply1: [
        {
          text: "Ooh.. I think I’ve heard her name a couple times. But I’ve never listened to any of her music.",
          options: [
            {
              text: "Listen to it now! You have to!! I promise you won’t regret it",
              next: "end",
            },
          ],
        },
      ],
      musicReply2: [
        {
          text: "What really? Nirvana’s raddd. That’s my favorite too, along with ‘Smells Like Teen Spirit’ and ‘Something in The Way’.",
          options: [
            {
              text: "I love you. Wait, is that too early? HAHA Anyway… we’re definitely soulmates!",
              next: "end",
            },
          ],
        },
      ],
      musicReply3: [
        {
          text: "You’re totally missing out. There is sooooo much good music nowadays I can’t even keep up.",
          options: [
            {
              text: "Yeah well… You win some, you lose some, I guess. Believe me, I’ve tried every genre and none of them did anything for me. I guess I’ll just be the cruel heartless harpy who hates music",
              next: "end",
            },
          ],
        },
      ],
      end: [
        {
          text: "You know... I feel like we have something here. Maybe I'm being too forward but I haven't felt this comfortable with anyone else for quite some time now. To be honest, I've been feeling kinda down these days, but talking with you has made me just that tiny bit happier. How about you?",
          options: [{ text: "I like talking to you too", next: "endFinal" }],
        },
      ],
      endFinal: [
        {
          text: "Then let's keep in touch, yeah? It's getting late now, how about we continue tomorrow?",
          options: [
            { text: "I would like that", next: null },
            { text: `Sure thing, ${matchedName}`, next: null },
            { text: "Okay cutie", next: null },
          ],
        },
      ],
    },
    day2: {
      day2start:[
        {
          text: "Hello.",
          options: [
            {
              text: "You up?",
              next: "early",
            },
            {
              text: "Morninggg cutie",
              next: "early",
            },
            {
              text: "Heyyy. Someone's an early bird",
              next: "early",
            },
          ],
        },
      ],
      early: [
        {
          text: `You're up so early. Are you working today?`,
          options: [
            {
              text: "Yeah… sadly. But I woke up earlier to run a few miles before work. I’ve been trying to get in better shape. You know, people have said it a lot and I didn’t use to believe them but exercising in the morning will really make you more awake during the day",
              next: "run",
            },
          ],
        },
      ],
      run: [
        {
          text: `Wow… Maybe I should start running too. I used to play basketball but my friends all moved away so I don’t have anyone to play with. Running sounds kinda fun.`,
          options: [
            {
              text: "It is fun. Alright BRB, text you when I get back from work. I have to go now",
              next: "gowork",
            },
          ],
        },
      ],
      gowork: [
        {
          text: `Good luck at work.`,
          options: [
            {
              text: "*Go to Work*",
              next: "start",
            },
          ],
        },
      ],
      start: [
        {
          text: "You back yet?",
          options: [{ text: "Yeah, I'm back!", next: "ticTacToe" }],
        },
      ],
      ticTacToe: [
        {
          text: `Sent an invitation to play ${yomp}`,
          options: [
            {
              text: "HAHA You dare challenge me? Let's play, cutie",
              next: "playResult",
            },
          ],
        },
      ],
      playResult: [
        {
          text: "Let's see who wins!",
          options: [
            { text: "I won!", next: "playerWin" },
            { text: "You won...", next: "playerLose" },
            { text: "It's a tie!", next: "playerTie" },
          ],
        },
      ],
      playerWin: [
        {
          text: "Wow, you're pretty good at this, I truly challenged the wrong person HAHA",
          options: [
            {
              text: "I told you soo… Those who challenged me will always taste defeat",
              next: "afterGame",
            },
          ],
        },
      ],
      playerLose: [
        {
          text: "Challenge who you say? HAHAHA You should practice playing more Tic Tac Toe",
          options: [
            {
              text: "No thanks HAHA I'll let you have the title as the Number 1 Tic Tac Toe player",
              next: "afterGame",
            },
          ],
        },
      ],
      playerTie: [
        {
          text: "Well I guess we're both equally good at this",
          options: [
            {
              text: "HAHAHA we really are more alike than I thought",
              next: "afterGame",
            },
          ],
        },
      ],
      afterGame: [
        {
          text: "That was fun.",
          options: [
            {
              text: "It really was. Thanks for letting me let off some steam after work. That was pretty fun",
              next: "askAboutWork",
            },
          ],
        },
      ],
      askAboutWork: [
        {
          text: "Did something happen at work?",
          options: [
            {
              text: "Yeah… kinda. Can you hear me out?",
              next: "offerToListen",
            },
          ],
        },
      ],
      offerToListen: [
        {
          text: "Shoot. I'm all ears.",
          options: [
            {
              text: "So there's this coworker of mine. She's a piece of work. Her name's Bianca. You know, I've never really hated anyone before. So this is my first time feeling like this. I can't stand her!",
              next: "expressFeeling",
            },
          ],
        },
      ],
      expressFeeling: [
        {
          text: "That sounds rough.",
          options: [
            { text: "I wish she would die", next: "reaction1" },
            { text: "I want to quit!", next: "reaction2" },
            {
              text: "She really made me question everything about myself and the work I do, it's frustrating.",
              next: "reaction3",
            },
          ],
        },
      ],
      reaction1: [
        {
          text: `Woah!! Calm down, ${userName}. That's way too much.`,
          options: [
            {
              text: "You're right, sorry. I shouldn't say things like that",
              next: "askForDetails",
            },
          ],
        },
      ],
      reaction2: [
        {
          text: "Oh don't let her make you do that. If she's the one causing you trouble then why should you be the one to leave?",
          options: [
            {
              text: "You have a point. It's just so frustrating",
              next: "askForDetails",
            },
          ],
        },
      ],
      reaction3: [
        {
          text: "Damn, that's horrible. It must be tough working with those kind of people",
          options: [
            {
              text: "It really is. I don't know how to deal with her",
              next: "askForDetails",
            },
          ],
        },
      ],
      askForDetails: [
        {
          text: "Can you tell me what happened?",
          options: [
            {
              text: "Gladly. So. This morning I arrived on time. Bianca might tell you otherwise but I am sure that I wasn't late. Anyway, she insisted that I was a minute late. And my boss, let me tell you is the strictest, most hateable boss you could have. He believed whatever nonsense Bianca whispered in those big ears of his and I got in trouble.",
              next: "moreDetails",
            },
          ],
        },
      ],
      moreDetails: [
        {
          text: "Woww… Something's telling me that's not all.",
          options: [
            {
              text: "Later on, that girl, who's a vet so she thinks she has power over me, starts bothering me at the register. I was trying to check in this little girl with her sick turtle but Bianca wouldn't stop commenting on every little thing I did",
              next: "biancaComments",
            },
          ],
        },
      ],
      biancaComments: [
        {
          text: "What kind of comments?",
          options: [
            {
              text: '"You should be kinder, that girl\'s worried sick ya know," "Work quicker, that turtle\'s not gonna get better on its own" and so mannnnyyyy more',
              next: "playerTell",
            },
          ],
        },
      ],
      playerTell: [
        {
          text: "She should mind her own business.",
          options: [
            {
              text: 'You want to know what I told her?',
              next: "playerReaction",
            },
          ],
        },
      ],
      playerReaction: [
        {
          text: "Oh no... What?",
          options: [
            {
              text: "Nothing, actually. I'm quite the inferior type at work, one of my biggest regrets is not telling her off honestly",
              next: "stalkerReaction1",
            },
            {
              text: "I mouthed 'f*** you' and she saw me HAHA. I'm just waiting for the boss to hear about this and he would either cut off half of my salary or just fire me altogether",
              next: "stalkerReaction2",
            },
            {
              text: 'I said, "If you pay half the attention that you\'re giving me to your ex-husband, then he might not have divorced you"',
              next: "stalkerReaction3",
            },
          ],
        },
      ],
      stalkerReaction1: [
        {
          text: "Well… I think it's good that you didn't try to get back at her. She would definitely use that against you.",
          options: [
            {
              text: "You're probably right. I just wish I could stand up for myself.",
              next: "askAboutBoss",
            },
          ],
        },
      ],
      stalkerReaction2: [
        {
          text: "Man, it's really not fair that you're going to get in trouble for this.",
          options: [
            {
              text: "I know, right? I'm so worried about what's going to happen.",
              next: "askAboutBoss",
            },
          ],
        },
      ],
      stalkerReaction3: [
        {
          text: "HAHAHA that's cold… Serves her right tho.",
          options: [
            {
              text: "I couldn't help myself. She just pushes my buttons.",
              next: "askAboutBoss",
            },
          ],
        },
      ],
      askAboutBoss: [
        {
          text: "Why is your boss always backing her up anyway?",
          options: [
            {
              text: "She's his niece, that's why. It's not enough that I have to walk past her mansion every day, I also get treated like trash at work. If only the pay wasn't better than anywhere else in the area then I wouldn't have even stepped one foot in that cursed place they call a veterinary clinic.",
              next: "comfortPlayer",
            },
          ],
        },
      ],
      comfortPlayer: [
        {
          text: "Alright alright. You had to deal with a lot at work, I really think you should take a rest right now, relax your mind and clear it up. Don't let what upset you today affect your work tomorrow. Hey, I'm sure you'll get through this week just fine.",
          options: [
            {
              text: "Thanks, I really appreciate your support.",
              next: "voiceNote",
            },
          ],
        },
      ],
      voiceNote: [
        {
          text: "You know what, I'll give you something to cheer you up",
          options: [{ text: "Oh? What is it?", next: "sendVoiceNote" }],
        },
      ],
      sendVoiceNote: [
        {
          text: `${voice1}`,
          options: [{ text: "HAHAH", next: "endDay2" }],
        },
      ],
      endDay2: [
        {
          text: "Did that cheer you up?",
          options: [
            {
              text: "Thank you, cutie. You get some sleep too. We'll talk again tomorrow, okay?",
              next: null,
            },
          ],
        },
      ],
    },
    day3: {
      start: [
        {
          text: "Sorry I couldn't talk this morning, I had some work stuff. How are you today?",
          options: [
            {
              text: "No worries, I also had problems of my own today",
              next: "askAboutProblems",
            },
          ],
        },
      ],
      askAboutProblems: [
        {
          text: "Oh no… Did your coworker do something again?",
          options: [
            {
              text: "I wish… That seems better than my newest problem",
              next: "askToTell",
            },
          ],
        },
      ],
      askToTell: [
        {
          text: "Tell me.",
          options: [
            { text: "Promise me you won't laugh", next: "promise" },
            { text: "This will sound unbelievable", next: "unbelievable" },
            { text: "I don't know if I should say it", next: "shouldSay" },
          ],
        },
      ],
      promise: [
        {
          text: "I promise. You can tell me.",
          options: [{ text: "Okay, fine… Maybe I'm being paranoid but I could've sworn that someone was following me today", next: "explainStalker" }],
        },
      ],
      unbelievable: [
        {
          text: "Maybe, but it won't cost you anything if you tell me so go ahead.",
          options: [{ text: "Okay, fine… Maybe I'm being paranoid but I could've sworn that someone was following me today", next: "explainStalker" }],
        },
      ],
      shouldSay: [
        {
          text: "I can give you some advice",
          options: [{ text: "Okay, fine… Maybe I'm being paranoid but I could've sworn that someone was following me today", next: "explainStalker" }],
        },
      ],
      explainStalker: [
        {
          text: "What?",
          options: [
            {
              text: "I'm pretty sure I'm right but it's weird right? Why would anyone follow me? I'm just a regular, overworked person",
              next: "askIfSure",
            },
          ],
        },
      ],
      askIfSure: [
        {
          text: "Are you sure? Did you actually see the person following you?",
          options: [
            {
              text: "I'm telling the truth. Why wouldn't you believe me?!",
              next: "believeYou",
            },
            { text: "I told you I'm not sure", next: "believeYou" },
            { text: "It was a mistake to tell you", next: "believeYou" },
          ],
        },
      ],
      believeYou: [
        {
          text: "Okay. okay… I believe you. Just, give me the reason why you think someone was following you.",
          options: [
            {
              text: "I didn't see the guy. Not really, I caught a glimpse of him every now and then but every time I turned around, there was no one there. But when I pass near windows and stuff, I can see someone wearing a black hoodie and mask behind me, hiding around a corner",
              next: "soundDangerous",
            },
          ],
        },
      ],
      soundDangerous: [
        {
          text: "That sounds dangerous if true.",
          options: [
            {
              text: "So I’m not 100% sure he was following me, but it was strange. Don’t you think? If he wasn’t a bad guy, he wouldn’t be sneaking around like that",
              next: "explainMore",
            },
          ],
        },
      ],
      explainMore: [
        {
          text: "Well… Were you in a crowded or isolated space?",
          options: [
            {
              text: "It was quite crowded, the typical New Yolk streets",
              next: "reassure",
            },
          ],
        },
      ],
      reassure: [
        {
          text: "Well, then you could have just been mistaken. I know you're worried, but there are soo many people dressed all closed up like that lately. Especially in New Yolk.",
          options: [
            {
              text: "You know what, maybe you're right. It was really just me being paranoid. I haven't had a good rest lately so, I must just be seeing things",
              next: "askAboutLivingArrangement",
            },
            {
              text: "Alright, if that's what you think I'll try and let it slide",
              next: "askAboutLivingArrangement",
            },
            { text: "Huh, maybe so", next: "askAboutLivingArrangement" },
          ],
        },
      ],
      askAboutLivingArrangement: [
        {
          text: "Do you live with anyone else? Maybe you can talk to the people at home. Let them know about this and they can help watch out for you.",
          options: [
            {
              text: "No, I've been living alone for a year now. My parents live out of town",
              next: "suggestPolice",
            },
            {
              text: "Not really, I can call them though",
              next: "suggestPolice",
            },
            {
              text: "I don't want to bother anyone else when I'm still not sure if there's really someone following me",
              next: "reassureSafety",
            },
          ],
        },
      ],
      reassureSafety: [
        {
          text: "But I think it's better to be safe than sorry. You do live with someone, right?",
          options: [
            {
              text: "Not really, I can call them though",
              next: "suggestPolice",
            },
          ],
        },
      ],
      suggestPolice: [
        {
          text: "Then, how about asking for help from the local police station? It's their job to protect people.",
          options: [
            {
              text: "Ugh I wish, the nearest station is like miles away, it could take about an hour to get there",
              next: "offerCall",
            },
            {
              text: "They're too far. Even the nearest station is still a few miles away",
              next: "offerCall",
            },
            {
              text: "I don't know… I think that's too extreme. What if I'm wrong?",
              next: "reassureReport",
            },
          ],
        },
      ],
      reassureReport: [
        {
          text: "They wouldn't hold it against it even if you're wrong. Can I call you?",
          options: [
            {
              text: "Yeah, I think I need company right now",
              next: "phoneCall",
            },
          ],
        },
      ],
      offerCall: [
        {
          text: "Can I call you?",
          options: [
            {
              text: "Yeah, I think I need company right now",
              next: "phoneCall",
            },
          ],
        },
      ],
    },
    day4: {
      start: [
        {
          text: "Morning, sunshine. You're not still sleeping, are you? You'll be late for work if you don't hurry.",
          options: [
            {
              text: "I'm up, don't worry. I'm on the bus right now, heading for work. Are you at Starbucks already?",
              next: "alexResponse",
            },
          ],
        },
      ],
      alexResponse: [
        {
          text: "No, my shift starts a little later today.",
          options: [
            {
              text: "Are you texting me because you're bored?",
              next: "alexMissYou",
            },
            {
              text: "If I were you, I would've slept in. Gosh, I'm so tired right now. I want to go back to my beddd",
              next: "alexConstruction",
            },
            {
              text: "That's nice, hope work goes well for us today :)",
              next: "alexCute",
            },
          ],
        },
      ],
      alexMissYou: [
        {
          text: "I'm texting you because I miss you. Do you not miss me?",
          options: [
            { text: "Aww… I miss you too", next: "alexHeart" },
            { text: "Maybe?", next: "alexAdorable" },
            { text: "No, not at all", next: "alexOuch" },
          ],
        },
      ],
      alexHeart: [
        {
          text: "<3",
          options: [
            {
              text: "Okay, I have to go now. Hope the two of us survive our work",
              next: "alexSeeYouSoon",
            },
          ],
        },
      ],
      alexAdorable: [
        {
          text: "You're adorable.",
          options: [
            {
              text: "Okay, I have to go now. Hope the two of us survive our work",
              next: "alexSeeYouSoon",
            },
          ],
        },
      ],
      alexConstruction: [
        {
          text: "Yeah, normally I would too. It's just that I got woken up by the construction sound near my house and I can't go back to bed.",
          options: [
            {
              text: "That's too bad, I hope it stops soon",
              next: "alexHope",
            },
          ],
        },
      ],
      alexCute: [
        {
          text: "HAHA You're cute. I hope so too ;)",
          options: [{ text: "Okay, I have to go now. Hope the two of us survive our work", next: "alexSeeYouSoon" }],
        },
      ],
      alexOuch: [
        {
          text: "Ouch.",
          options: [
            {
              text: "Okay, I have to go now. Hope the two of us survive our work",
              next: "alexSeeYouSoon",
            },
          ],
        },
      ],
      alexHope: [
        {
          text: "I hope so too",
          options: [{ text: "Okay, I have to go now. Hope the two of us survive our work", next: "alexSeeYouSoon" }],
        },
      ],
      alexSeeYouSoon: [
        {
          text: "See you soon.",
          options: [{ text: "*Go to Work*", next: "afterWork" }],
        },
      ],
      afterWork: [
        {
          text: "Are you back yet?",
          options: [{ text: "Yep. Are you free right now? I want to talk", next: "explainFlowers" }],
        },
      ],
      explainFlowers: [
        {
          text: "What's up?",
          options: [{ text: "I just got back from work, and I saw something outside my porch. It was a parcel, wrapped with newspaper and there was no sending receipt. I was a bit suspicious but I thought what's the harm?", next: "showFlowers" }],
        },
      ],
      showFlowers: [
        {
          text: "What was it?",
          options: [{ text: `${Endingimg}`, next: "talkFlowers" }],
        },
      ],
      talkFlowers: [
        {
          text: "They look nice",
          options: [{ text: "Sure, but that's not the point. I don't know who sent me those flowers. I thought for a moment that maybe it was Bianca who felt bad about what happened today. After all, she didn't bother me at all today.\n\nBut then, I saw that it had a note attached to it.", next: "showNote" }],
        },
      ],
      showNote: [
        {
          text: `"Love me. I'll keep you safe."`,
          options: [
            { text: "What do I do?", next: "alexReassure" },
            {
              text: "I'm seriously freaking out right now",
              next: "alexReassure",
            },
            { text: "It's so creepy, isn't it?", next: "alexReassure" },
          ],
        },
      ],
      alexReassure: [
        {
          text: "Maybe it's someone you know?",
          options: [
            {
              text: "I don't think so, I'm not with anyone right now. My family and friends wouldn't send me something like this",
              next: "alexDontWorry",
            },
          ],
        },
      ],
      alexDontWorry: [
        {
          text: "Well, I think you shouldn't worry too much. It's a nice thing to receive flowers. I think the sender didn't mean anything bad",
          options: [
            { text: "Are you kidding?", next: "alexWouldBeHappy" },
            { text: "Maybe… but why me?", next: "alexSecretCrush" },
            {
              text: "You're kinda right. I mean, the flowers **are** nice",
              next: "alexBeThankful",
            },
          ],
        },
      ],
      alexWouldBeHappy: [
        {
          text: "What? No. I would be happy if someone gave **me** flowers.",
          options: [
            {
              text: "But… I don't even know who gave me those flowers.",
              next: "alexDontThinkHard",
            },
          ],
        },
      ],
      alexSecretCrush: [
        {
          text: "Someone might have a secret crush on you.",
          options: [
            {
              text: "But… I don't even know who gave me those flowers.",
              next: "alexDontThinkHard",
            },
          ],
        },
      ],
      alexBeThankful: [
        {
          text: "Right? I think you should just be thankful and keep them.",
          options: [
            {
              text: "But… I don't even know who gave me those flowers.",
              next: "alexDontThinkHard",
            },
          ],
        },
      ],
      alexDontThinkHard: [
        {
          text: "I say, don't think too hard about it. Someone probably just wanted to do something nice for you. Don't let this ruin your day.",
          options: [
            {
              text: 'But… the note is weird. It said "Love me" and it is creepy, right? Why would someone say that and not tell me who they are?',
              next: "alexOverreacting",
            },
            {
              text: "But, I must do something. What if it's from someone dangerous?",
              next: "alexOverreacting",
            },
          ],
        },
      ],
      alexOverreacting: [
        {
          text: "Look.\n\nI'm telling you, you're overreacting. It's flowers and a lovely card, they're good things! Why don't you learn to appreciate what you got instead of complaining about it?",
          options: [
            {
              text: "Are you seriously telling me I'm overreacting? I can't believe this",
              next: "alexLogical",
            },
            { text: "You're acting strange…", next: "alexLogical" },
            {
              text: "… Okay. Let's talk again tomorrow",
              next: "alexDontBeMad",
            },
          ],
        },
      ],
      alexLogical: [
        {
          text: "I'm just being logical. I think you're making too much out of this. I just… don't want you to worry too much. You've been stressed out since yesterday.",
          options: [
            {
              text: "Okay… thank you for your concern. I'm feeling kind of tired now. Let's talk again tomorrow",
              next: "alexDontBeMad",
            },
          ],
        },
      ],
      alexDontBeMad: [
        {
          text: "Heyy… I didn't mean anything bad. Please don't be mad.",
          options: [{ text: ".......", next: null }],
        },
      ],
    },
    day5: {
      start: [
        {
          text: "Heyy, sweetheart. You didn't answer me yesterday. I'm sorry if I offended you but I really didn't mean anything bad by what I said...",
          options: [
            {
              text: "You seem awfully sympathetic to the sender… Do you know them or something?",
              next: "confrontation",
            },
            {
              text: "I think you have something to tell me",
              next: "confrontation",
            },
            { text: "Stop pretending", next: "confrontation" },
          ],
        },
      ],
      confrontation: [
        {
          text: "I don’t understand. What are you implying?",
          options: [
            {
              text: "You’re the freak who’s been following me. And the flowers! Those were from you!",
              next: "denial",
            },
          ],
        },
      ],
      denial: [
        {
          text: "HAHA Stop joking around.",
          options: [
            { text: "Shut up", next: "accusation" },
            { text: "You’re not fooling anyone here", next: "accusation" },
            { text: "Just stop", next: "accusation" },
          ],
        },
      ],
      accusation: [
        {
          text: `${userName}, you're not making any sense.`,
          options: [{ text: "I found a picture on your profile. It was a picture of your journal. How can you explain that your handwriting is the exact same as the one who wrote the note with the flowers that I got?", next: "confession" }],
        },
      ],
      confession: [
        {
          text: "Oh come on… That's just a coincidence. It just looks a little similar. You're too paranoid.",
          options: [{ text: "Stop lying. You have been trying to gaslight me, but it's not working anymore", next: "lastMessage" }],
        },
      ],
      lastMessage: [
        {
          text: " Alright, I’ll confess… I may have lied a bit, but I swear, I’m not trying to hurt you. I genuinely think you’re adorable. And I just couldn’t resist the urge to come see you. I know it may seem obsessive, but that’s because I can’t stop thinking about you.",
          options: [{ text: " I’m texting you for the last time to say, I want to stop talking to you. I don’t know what sort of sick thoughts you have of me in your head but I want none of it.", next: "creepyVoice" }],
        },
      ],
      creepyVoice: [
        {
          text: "I understand now that you’re uncomfortable with what I did. I promise I’m going to stop stalking you… But please, can I at least talk to you in private? I swear I’m not going to do anything bad or weird.",
          options: [{ text: "......", next: "voiceNote1" }],
        },
      ],
      voiceNote1: [
        {
          text: `${userName}?`,
          options: [{ text: "......", next: "voiceNote2" }],
        },
      ],
      voiceNote2: [
        {
          text: `${voiceend1}`,
          options: [{ text: "......", next: "voiceNote3" }],
        },
      ],
      voiceNote3: [
        {
          text: `${voiceend2}`,
          options: [{ text: "......", next: "voiceNote4" }],
        },
      ],
      voiceNote4: [
        {
          text: `${voiceend3}`,
          options: [{ text: "......", next: "neighborhoodPicture" }],
        },
      ],
      neighborhoodPicture: [
        {
          text: `${Endingimg1}`,
          options: [{ text: "......", next: "voiceNote5" }],
        },
      ],
      voiceNote5: [
        {
          text: `${voiceend4}`,
          options: [{ text: "......", next: "voiceNote6" }],
        },
      ],
      voiceNote6: [
        {
          text: `${voiceend5}`,
          options: [{ text: "......", next: null }],
        },
      ],
    },
  };

  let currentDay = "day1";
  let currentStage = "start";
  let firstChoiceMade = false;
  let matchedProfile = null;

  function displayMessage(message, options, isUserMessage) {
    const messageClass = isUserMessage ? "sent" : "received";
    const processedMessage = replaceNameInDialogue(message);
    chatMessages.innerHTML += `<div class="message ${messageClass}">${processedMessage}<div class="time">${new Date().toLocaleTimeString()}</div></div>`;
    renderOptions(options);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function renderOptions(options) {
    responseOptions.innerHTML = "";
    options.forEach((option, index) => {
      const button = document.createElement("button");
      button.className = "response-button";
      button.textContent = option.text;
      button.addEventListener("click", () =>
        handleResponse(option.next, option.text)
      );
      responseOptions.appendChild(button);
    });
  }

  function displayMessage(message, options, isUserMessage) {
    const messageClass = isUserMessage ? "sent" : "received";
    chatMessages.innerHTML += `<div class="message ${messageClass}">${message}<div class="time">${new Date().toLocaleTimeString()}</div></div>`;
    renderOptions(options);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function showAchievement() {
    achievementPopup.style.display = "flex";
    localStorage.setItem('First Chat', true)
    setTimeout(() => {
      achievementPopup.style.display = "none";
    }, 3000);
  }

  // New function to handle manual save
function handleManualSave() {
  saveProgress();
  alert("Progress saved successfully!");
}

  function handleResponse(nextStage, responseText) {
    displayMessage(responseText, [], true);
    messageInput.value = "";
    sendButton.disabled = true;

    if (!firstChoiceMade) {
        firstChoiceMade = true;
        showAchievement();
    }

    // Check if the selected response is "Yeah, I think I need company right now"
    if (responseText === "Yeah, I think I need company right now") {
        document.getElementById("phoneContainer").style.display = "block";
        document.getElementById("blockingLayer").style.display = "block";
        triggercall();
    }

    setTimeout(() => {
        if (nextStage) {
            console.log("Moving to next stage:", nextStage);
            currentStage = nextStage;
            const stage = dialogues[currentDay][currentStage][0];
            displayMessage(stage.text, stage.options, false);
        } else {
            console.log("Conversation ended, currentDay:", currentDay);
            currentStage = "end";
            if (currentDay === "day1") {
                console.log("Day 1 ended, showing Start Day 2 button");
                startDay2Button.style.display = "block";
            } else if (currentDay === "day2") {
                console.log("Day 2 ended, showing Start Day 3 button");
                startDay3Button.style.display = "block";
            } else if (currentDay === "day3") {
                console.log("Day 3 ended, showing Start Day 4 button");
                startDay4Button.style.display = "block";
            } else if (currentDay === "day4") {
                console.log("Day 4 ended, showing Start Day 5 button");
                startDay5Button.style.display = "block";
            } else if (currentDay === "day5") {
                console.log("Day 5 ended, navigating to minigame-keypad.html");
                window.location.href = "minigame-keypad.html";
            }
        }
      saveProgress();
    }, 500);
}

  // phone call
  function triggercall() {
    const matchedImage = localStorage.getItem("lastMatchedImage");
    const audioElement = document.getElementById("audio-element");
    const microphoneBtn = document.getElementById("microphone-btn");
    const replyOptions = document.querySelector(".reply-options");
    const callingStatus = document.querySelector(".calling-status");
    const callDuration = document.querySelector(".call-duration");
    const startPrompt = document.getElementById("start-prompt");

    if (matchedName && matchedImage) {
      // Update the contact list with the matched profile's details
      document.getElementById("contact-name").textContent = matchedName;
      document.getElementById("contact-photo").src = matchedImage;
    }

    const conversation = [
      {
        s: Gender == "Female" ? "../audio/stalker1W.m4a":"../audio/stalker1.m4a",
        p: ["Hi", "Hey too", "Thanks for calling"],
      },
      {
        s: Gender == "Female" ? "../audio/stalker2W.m4a":"../audio/stalker2.m4a",
        p: ["I could be better", "I guess so", "No…"],
      },
      {
        s: Gender == "Female" ? "../audio/stalker3W.m4a" : "../audio/stalker3.m4a",
        p: ["Yeah, just keep the call", "I'm not sure", "Can you sing for me?"],
      },
      {
        s: {
          1: Gender == "Female"? "../audio/stalker4W.m4a":"../audio/stalker4(1).m4a",
          2: Gender == "Female"? "../audio/stalker4W(2).m4a":"../audio/stalker4(2).m4a",
          3: Gender == "Female"? "../audio/stalker4W(2).m4a":"../audio/stalker4(2).m4a",
        },
        p: ["Yes, please"],
      },
      {
        s: Gender == "Female" ? "../audio/Girlsing.mp3":"../audio/Singing.mp3",
        p: [
          "Wow… You have the voice of an angel. Thank you",
          "Thanks for that",
          "Are you sure you should be singing?",
        ],
      },
      {
        s: Gender == "Female"? "../audio/stalker5W.m4a":"../audio/stalker5.m4a",
        p: ["Since we know my day was terrible, how's yours?"],
      },
      {
        s: Gender == "Female"? "../audio/stalker6W.m4a":"../audio/stalker6.m4a",
        p: [
          "That's nice. Can you make me one americano? I don't think I'll sleep tonight anyway",
          "I see. That's nice",
          "That's nice. At least a regular day is better than a bad day",
        ],
      },
      {
        s: {
          1: Gender == "Female"? "../audio/stalker7W.m4a" : "../audio/stalker7(1).m4a",
          2: Gender == "Female"? "../audio/stalker7W(2).m4a" : "../audio/stalker7(2).m4a",
          3: Gender == "Female"? "../audio/stalker7W(3).m4a" : "../audio/stalker7(3).m4a",
        },
        p: [
          "Sorry for being so negative today. I think I better take a warm shower and sleep this off.",
        ],
      },
      {
        s: Gender == "Female"? "../audio/stalker8W.m4a":"../audio/stalker8.m4a",
        p: [
          "You're such a flirt… But really, thanks for the call. It helped cheer me up a little",
        ],
      },
      {
        s: Gender == "Female"? "../audio/stalker9W.m4a":"../audio/stalker9.m4a",
        p: ["See you tomorrow"],
      },
    ];

    let currentStep = 0;
    let lastChoice = null;
    let callTimer;
    let callDurationSeconds = 0;

    function updateCallDuration() {
      callDurationSeconds++;
      const minutes = Math.floor(callDurationSeconds / 60);
      const seconds = callDurationSeconds % 60;
      callDuration.textContent = `${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }

    function startCallTimer() {
      callTimer = setInterval(updateCallDuration, 1000);
    }

    function stopCallTimer() {
      clearInterval(callTimer);
    }

    function updateAudioSource(source) {
      audioElement.src = source;
      audioElement.load();
    }

    function displayOptions(options) {
      replyOptions.innerHTML = "";
      options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("reply-button");
        button.disabled = true;
        button.style.opacity = "0";
        button.style.transform = "translateY(20px)";
        button.addEventListener("click", () => handleOptionClick(index));
        replyOptions.appendChild(button);
        setTimeout(() => {
          button.style.opacity = "1";
          button.style.transform = "translateY(0)";
        }, index * 100);
      });
    }

    function handleOptionClick(index) {
      lastChoice = index + 1;
      currentStep++;
      if (currentStep < conversation.length) {
        const step = conversation[currentStep];
        callingStatus.textContent = `${matchedName} is calling...`;
        replyOptions.style.opacity = "0";
        replyOptions.style.transform = "translateY(20px)";
        setTimeout(() => {
          if (typeof step.s === "object") {
            updateAudioSource(step.s[lastChoice] || step.s[1]);
          } else {
            updateAudioSource(step.s);
          }
          playAudio();
          replyOptions.style.opacity = "1";
          replyOptions.style.transform = "translateY(0)";
          displayOptions(step.p);
        }, 1000);
      } else {
        endConversation();
      }
    }

    function endConversation() {
      callingStatus.textContent = "Call ended";
      replyOptions.innerHTML = "";
      audioElement.src = "";
      stopCallTimer();
      microphoneBtn.classList.remove("active");
    }

    function playAudio() {
      audioElement.play();
      if (callDurationSeconds === 0) {
        startCallTimer();
      }
      microphoneBtn.classList.add("active");
    }

    function enableOptions() {
      const buttons = replyOptions.querySelectorAll(".reply-button");
      buttons.forEach((button) => {
        button.disabled = false;
      });
      microphoneBtn.classList.remove("active");
    }

    window.addEventListener("load", () => {
      startPrompt.classList.add("visible");
    });

    microphoneBtn.addEventListener("click", () => {
      if (currentStep === 0) {
        startConversation();
        startPrompt.classList.remove("visible");
      } else {
        audioElement.play();
      }
    });

    audioElement.addEventListener("ended", () => {
      callingStatus.textContent = "Your turn to speak";
      enableOptions();
    });

    audioElement.addEventListener("play", () => {
      if (audioElement.src.includes("Singing.mp3")) {
        const skipButton = document.createElement("button");
        skipButton.textContent = "Skip";
        skipButton.classList.add("reply-button");
        skipButton.addEventListener("click", () => {
          audioElement.currentTime = audioElement.duration - 1;
        });
        replyOptions.appendChild(skipButton);
      }
      else if (audioElement.src.includes("Girlsing.mp3")) {
        const skipButton = document.createElement("button");
        skipButton.textContent = "Skip";
        skipButton.classList.add("reply-button");
        skipButton.addEventListener("click", () => {
          audioElement.currentTime = audioElement.duration - 1;
        });
        replyOptions.appendChild(skipButton);
    }});

    function startConversation() {
      updateAudioSource(conversation[0].s);
      displayOptions(conversation[0].p);
      callingStatus.textContent = `${matchedName} is calling...`;
      setTimeout(() => {
        callingStatus.textContent = `${matchedName} is speaking...`;
        playAudio();
      }, 2000);
    }

    function endConversation() {
      callingStatus.textContent = "Call ended";
      replyOptions.innerHTML = "";
      audioElement.src = "";
      stopCallTimer();
      microphoneBtn.classList.remove("active");

      // Hide the blocking layer when the call ends
      document.getElementById("blockingLayer").remove();
      document.getElementById("phoneContainer").remove();

      // Reset the response options to their default styling
      const responseOptions = document.querySelector(".response-options");
      responseOptions.style.display = "flex";
      responseOptions.style.flexDirection = "column";
      responseOptions.style.gap = "10px";

      const responseButtons = document.querySelectorAll(".response-button");
      responseButtons.forEach((button) => {
        button.style.padding = "10px 20px";
        button.style.borderRadius = "20px";
        button.style.border = "none";
        button.style.background = "#c71585";
        button.style.color = "#fff";
        button.style.cursor = "pointer";
        button.style.fontSize = "14px";
        button.style.textAlign = "center";
        button.style.transition =
          "background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease";
      });

      const responseButtonsHover = document.querySelectorAll(
        ".response-button:hover"
      );
      responseButtonsHover.forEach((button) => {
        button.style.background = "#a52a2a";
        button.style.transform = "scale(1.03)";
        button.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      });

      startDay4();
    }
  }

  function startDay2() {
    console.log("Starting Day 2");
    currentDay = "day2";
    currentStage = "day2start";
    const newDayStage = dialogues[currentDay][currentStage][0];
    displayMessage("--- Next Day ---", [], false);
    displayMessage(newDayStage.text, newDayStage.options, false);
    startDay2Button.style.display = "none";
  }

  function startDay3() {
    console.log("Starting Day 3");
    currentDay = "day3";
    currentStage = "start";
    const newDayStage = dialogues[currentDay][currentStage][0];
    displayMessage("--- Next Day ---", [], false);
    displayMessage(newDayStage.text, newDayStage.options, false);
    startDay3Button.style.display = "none";
  }

  function startDay4() {
    console.log("Starting Day 4");
    currentDay = "day4";
    currentStage = "start";
    const newDayStage = dialogues[currentDay][currentStage][0];
    // Display the chat container again if it was hidden
    const chatContainer = document.querySelector(".chat-container");
    if (chatContainer) {
      chatContainer.style.display = "flex";
    }

    // Reset the response options
    responseOptions.style.display = "block";

    displayMessage("--- Next Day ---", [], false);
    displayMessage(newDayStage.text, newDayStage.options, false);
  }

  function startDay5() {
    const puzzle = localStorage.getItem("puzzleDone");
    if(puzzle){
      console.log("Starting Day 5");
      currentDay = "day5";
      currentStage = "start";
      const newDayStage = dialogues[currentDay][currentStage][0];
      responseOptions.style.display = "block";
    
      displayMessage("--- Next Day ---", [], false);
      displayMessage(newDayStage.text, newDayStage.options, false);
      startDay5Button.style.display = "none";
    
    }
   else{
    // Show prompt to click profile picture before day 5 starts
    promptProfileClick();
   }
    
  }

  // Add this to your existing event listeners
// profile picture directed to puzzle
// Function to prompt the user to click the profile image
function promptProfileClick() {
  const blurBackground = document.getElementById('blurBackground');
  const chatContactImage = document.getElementById('chatContactImage');

  // Display the blur background
  blurBackground.style.display = 'block';
  chatContactImage.style.zIndex = '12'; // Bring the image in front

  // Add a click event listener to the profile image
  chatContactImage.addEventListener('click', function() {
    // Remove blur and glitch after click
    blurBackground.style.display = 'none';
    chatContactImage.classList.remove('glitch');
    chatContactImage.classList.remove('enlarge-shrink-aura');
  });

  // Add glitch effect to the image
  chatContactImage.classList.add('glitch');
  chatContactImage.classList.add('enlarge-shrink-aura');
}


function saveProgress() {
  const gameState = {
      currentDay: currentDay,
      currentStage: currentStage,
      firstChoiceMade: firstChoiceMade
  };
  localStorage.setItem('gameState', JSON.stringify(gameState));
  console.log("Progress saved:", gameState);
 
}

function loadProgress() {
  const savedState = localStorage.getItem('gameState');
  if (savedState) {
      const gameState = JSON.parse(savedState);
      currentDay = gameState.currentDay;
      currentStage = gameState.currentStage;
      firstChoiceMade = gameState.firstChoiceMade;
      console.log("Progress loaded:", gameState);
      return true;
  }
  return false;
}

function updateUIForLoadedState() {
  // Hide all day buttons first
  startDay2Button.style.display = "none";
  startDay3Button.style.display = "none";
  startDay4Button.style.display = "none";
  startDay5Button.style.display = "none";

  // Show the appropriate button or continue the conversation based on the loaded state
  if (currentStage === "end") {
      switch(currentDay) {
          case "day1":
              startDay2Button.style.display = "block";
              break;
          case "day2":
              startDay3Button.style.display = "block";
              break;
          case "day3":
              startDay4Button.style.display = "block";
              break;
          case "day4":
              startDay5Button.style.display = "block";
              break;
          case "day5":
              // If day5 is completed, you might want to handle this case differently
              console.log("Game completed");
              break;
      }
  } else {
      // Continue the conversation from where it left off
      const stage = dialogues[currentDay][currentStage][0];
      displayMessage(stage.text, stage.options, false);
  }
}



  function initializeGame() {
    if (loadProgress()) {
        // If we loaded a saved state, update the UI accordingly
        updateUIForLoadedState();
    } else {
        // If no saved state, start from the beginning
        const startStage = dialogues[currentDay][currentStage][0];
        displayMessage(startStage.text, startStage.options, false);
    }

    addSaveButton();
}


  function initializeChat() {
    currentDay = "day1";
    currentStage = "start";
    firstChoiceMade = false;
    chatMessages.innerHTML = "";
    const initialStage = dialogues[currentDay][currentStage][0];
    displayMessage(initialStage.text, initialStage.options, false);
  }

// New function to add the save button
function addSaveButton() {
  const saveButton = document.getElementById('saveProgressButton');
  saveButton.addEventListener('click', handleManualSave);
}



  // Make sure to call initializeGame when the page loads
window.onload = initializeGame;

  startDay2Button.addEventListener("click", startDay2);
  startDay3Button.addEventListener("click", startDay3);
  startDay4Button.addEventListener("click", startDay4);
  startDay5Button.addEventListener("click", startDay5);
  saveProgressButton.addEventListener("click", saveProgress);

  
  try {
    loadProgress();
  } catch (error) {
    console.error("An error occurred while loading progress:", error);
    initializeChat();
  }
});
