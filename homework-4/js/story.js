console.log("The Loop Begins");

const journeyRef = document.querySelector("#journey");

let ownOrange = false;

let ownRock = false;

function startLoop() {
  journeyRef.innerHTML =
    "<p> It is March 20, 1963. You wake up and get out of bed. Over a bowl of cereal, you listen to the radio. You go to work at the record store. You have dinner. And before bed, you silently pray for a more interesting life. You close your eyes and have a night of no dreams.</p> <p> It is March 20, 1963, again. What do you do?</p>";

  const actionOne = ["get out of bed", "go back to sleep"];

  for (let index = 0; index < actionOne.length; index++) {
    const actionOneChoice = actionOne[index];

    const newSection = document.createElement("section");
    newSection.innerHTML += "<button>" + actionOneChoice + "</button>";

    newSection.dataset.firstAction = actionOneChoice;
    newSection.onclick = chooseAction;

    journeyRef.appendChild(newSection);
    console.log(actionOneChoice);
  }
}

function chooseAction(e) {
  console.log(e.currentTarget);
  const firstAction = e.currentTarget.dataset.firstAction;

  const confirmChoice = confirm("You choose to " + firstAction + "?");

  if (confirmChoice) {
    journeyRef.innerHTML += "You chose to " + firstAction + ".";
  }

  if (firstAction == "get out of bed") {
    stepTwo();
  }
  if (firstAction == "go back to sleep") {
    journeyRef.innerHTML +=
      "You close your eyes and have a night of no dreams. The Loop begins again.";
    // journeyRef.style.display = "none";
  }
}

function stepTwo() {
  const newSection = document.createElement("section");
  newSection.innerHTML +=
    "<p>You pour youself a bowl of cereal. The silence bugs your mind. What do you do?</p>";

  journeyRef.appendChild(newSection);

  const actionTwo = ["listen to the radio", "turn on the TV", "sit in silence"];

  for (let index = 0; index < actionTwo.length; index++) {
    const actionTwoChoice = actionTwo[index];

    const newSection = document.createElement("section");
    newSection.innerHTML += "<button>" + actionTwoChoice + "</button>";

    newSection.dataset.secondAction = actionTwoChoice;
    newSection.onclick = chooseActionTwo;

    journeyRef.appendChild(newSection);
    console.log(actionTwoChoice);
  }
}

function chooseActionTwo(e) {
  console.log(e.currentTarget);
  const secondAction = e.currentTarget.dataset.secondAction;

  const confirmChoice = confirm("You choose to " + secondAction + "?");

  if (confirmChoice) {
    journeyRef.innerHTML += "You chose to " + secondAction + ".";
  }

  if (secondAction == "listen to the radio") {
    journeyRef.innerHTML +=
      "<p>The radio crackles to life. You twist the knob until it lands on a scratchy recording of Joan Baez that fills the room and keeps ill intented forces at bay. </p>";
    stepThree();
  }
  if (secondAction == "turn on the TV") {
    journeyRef.innerHTML +=
      "<p>The TV static slowly turns into a picture as you find the right channel. A blurry image of your local newcaster stutters through the forecast for the upcoming week. After claiming it would be 70 degrees this Friday, his face grows solemn. 'Orange. Rock. Nightly News.' he says in a ton he never had before. The words don't make sense to you, so you ignore them as the program seems to go back to normal.</p>";
    stepThree();
  }
  if (secondAction == "sit in silence") {
    journeyRef.innerHTML +=
      "<p>The silence tears at the inside of your mind. It is almost as if it has shape as it presses into the furthest corners of your brain. A voice begins to swarm the room, beckoning you to sleep. Your eyes begin to droop as your spoon clatters to the floor. You close your eyes and have a night of no dreams. The Loop begins again.</p>";
    // journeyRef.style.display = "none";
  }
}

function stepThree() {
  const newSection = document.createElement("section");
  newSection.innerHTML +=
    "<p>With the final scoop of cereal in your mouth, you head off to work. When you arrive, your boss offers you a few jobs to complete. Which do you choose?</p>";

  journeyRef.appendChild(newSection);

  const actionThree = [
    "restock the vinyls",
    "man the register",
    "orgainize the backroom",
    "ignore the tasks and hide",
  ];

  for (let index = 0; index < actionThree.length; index++) {
    const actionThreeChoice = actionThree[index];

    const newSection = document.createElement("section");
    newSection.innerHTML += "<button>" + actionThreeChoice + "</button>";

    newSection.dataset.thirdAction = actionThreeChoice;
    newSection.onclick = chooseActionThree;

    journeyRef.appendChild(newSection);
    console.log(actionThreeChoice);
  }
}

function chooseActionThree(e) {
  console.log(e.currentTarget);
  const thirdAction = e.currentTarget.dataset.thirdAction;

  const confirmChoice = confirm("You choose to " + thirdAction + "?");

  if (confirmChoice) {
    journeyRef.innerHTML += "You chose to " + thirdAction + ".";
  }

  if (thirdAction == "restock the vinyls") {
    stepFourOne();
  }
  if (thirdAction == "man the register") {
    stepFourTwo();
  }
  if (thirdAction == "orgainize the backroom") {
    stepFourThree();
  }
  if (thirdAction == "ignore the tasks and hide") {
    stepFourFour();
  }
}

function stepFourOne() {
  const newSection = document.createElement("section");
  newSection.innerHTML +=
    "<p>You give your boss a nod and let them know you're going to restock the vinyls. Taking a quick inventory over the shop, you see a few options for where you could go. Which do you choose?</p>";

  journeyRef.appendChild(newSection);

  const action41 = ["Folk", "Rock", "Blues"];

  for (let index = 0; index < action41.length; index++) {
    const action41Choice = action41[index];

    const newSection = document.createElement("section");
    newSection.innerHTML += "<button>" + action41Choice + "</button>";

    newSection.dataset.workOneAction = action41Choice;
    newSection.onclick = chooseAction41;

    journeyRef.appendChild(newSection);
  }
}

function chooseAction41(e) {
  console.log(e.currentTarget);
  const workOneAction = e.currentTarget.dataset.workOneAction;

  const confirmChoice = confirm("You choose " + workOneAction + "?");

  if (confirmChoice) {
    journeyRef.innerHTML += "You chose " + workOneAction + ".";
  }

  if (workOneAction == "Folk") {
    branchFolk();
  }
  if (workOneAction == "Rock") {
    branchRock();
  }
  if (workOneAction == "Blues") {
    branchBlues();
  }
}

function branchFolk() {
  const newSection = document.createElement("section");
  newSection.innerHTML +=
    "<p>You head over to the Folk section of the record shop. With the rise of some new artists in the genre, this section always seems to be running out of stock. A quick trip to the storage room allows you to grab a box full of fresh records to hit the shelves. As you begin stocking the records, you notice someone loitering around the Pop section. Do you go speak to them?</p>";

  journeyRef.appendChild(newSection);

  const action41 = ["Yes", "No"];

  for (let index = 0; index < action41.length; index++) {
    const action41Choice = action41[index];

    const newSection = document.createElement("section");
    newSection.innerHTML += "<button>" + action41Choice + "</button>";

    newSection.dataset.workOneBAction = action41Choice;
    newSection.onclick = chooseAction41B;

    journeyRef.appendChild(newSection);
    console.log(action41Choice);
  }
}

function chooseAction41B(e) {
  console.log(e.currentTarget);
  const action41YN = e.currentTarget.dataset.workOneBAction;

  const confirmChoice = confirm("You choose " + action41YN + "?");

  if (confirmChoice) {
    journeyRef.innerHTML += "You chose " + action41YN + ".";
  }

  if (action41YN == "Yes") {
    branchFolkYes();
  }
  if (action41YN == "No") {
    stepFiveA();
  }
}

function branchFolkYes() {
  const newSection = document.createElement("section");
  newSection.innerHTML +=
    "<p>You approach the person and give them a friendly 'Hello! Can I help you?' but when they turn to you, you are shocked by their worried expression. 'I keep seeing this monster in my dreams,' they begin to tell you. 'It has one large eye in the middle of its face, and four hands that all hold quickly spinning clocks. I want it to stop--I can't sleep anymore. Do you have any idea what I mean?' You stare blankly at them for a moment before you graciously hear you boss calling you to the other side of the store.</p>";

  journeyRef.appendChild(newSection);

  const action41D = ["Proceed"];

  for (let index = 0; index < action41D.length; index++) {
    const action41DChoice = action41D[index];

    const newSection = document.createElement("section");
    newSection.innerHTML += "<button>" + action41DChoice + "</button>";

    newSection.dataset.workOneDAction = action41DChoice;
    newSection.onclick = stepFiveA;

    journeyRef.appendChild(newSection);
  }
}

function branchRock() {
  const newSection = document.createElement("section");
  newSection.innerHTML +=
    "<p>You head over to the Rock section of the record shop. As a employee at a record shop, you tend to listen to a lot of music genres. Rock is currently your favorite and you have been saving up to buy a vinyl for your home collection. As you begin to restock the section, you notice that the shop finally has a copy of The Tornadoes album from last winter within your price range. Do you buy it? </p>";

  journeyRef.appendChild(newSection);

  const action41C = ["Yes", "No"];

  for (let index = 0; index < action41C.length; index++) {
    const action41CChoice = action41C[index];

    const newSection = document.createElement("section");
    newSection.innerHTML += "<button>" + action41CChoice + "</button>";

    newSection.dataset.workOneCAction = action41CChoice;
    newSection.onclick = chooseAction41C;

    journeyRef.appendChild(newSection);
    console.log(action41CChoice);
  }
}

function chooseAction41C(e) {
  console.log(e.currentTarget);
  const action41CYN = e.currentTarget.dataset.workOneCAction;

  const confirmChoice = confirm("You choose " + action41CYN + "?");

  if (confirmChoice) {
    journeyRef.innerHTML += "You chose " + action41CYN + ".";
  }

  if (action41CYN == "Yes") {
    journeyRef.innerHTML +=
      "<p>You take advantage of your employee discount and grab that alubm. You put it into your backpack to take home later.</p>";
    ownRock = true;
    stepFiveA();
  } else {
    ownRock = false;
    stepFiveA();
  }
}

function branchBlues() {
  const newSection = document.createElement("section");
  newSection.innerHTML +=
    "<p>You head over to the Blues section to begin restocking the area. Your boss stepped out back, leaving the store to you and your thoughts. The slight hum of the record in the background keeps the silence from being overwhelming. Suddenly three words bubble up in the back of your mind. Orange. Rock. Nightly news. You frown for a second before shaking your head. What silly things your mind can come up with when you're bored at work, huh?</p>";

  journeyRef.appendChild(newSection);

  const action41D = ["Proceed"];

  for (let index = 0; index < action41D.length; index++) {
    const action41DChoice = action41D[index];

    const newSection = document.createElement("section");
    newSection.innerHTML += "<button>" + action41DChoice + "</button>";

    newSection.dataset.workOneDAction = action41DChoice;
    newSection.onclick = stepFiveA;

    journeyRef.appendChild(newSection);
  }
}

function stepFourTwo() {
  const newSection = document.createElement("section");
  newSection.innerHTML +=
    "<p>You give your boss a nod and let them know you'll be at the register. Just as you begin settling in to your spot, a person approaches the register with couple records in hand. As you begin ringing them up, they say 'You know, the strangest thing happened to me on the way here...'</p>";

  journeyRef.appendChild(newSection);

  const action42 = ["Listen", "Ignore"];

  for (let index = 0; index < action42.length; index++) {
    const action42Choice = action42[index];

    const newSection = document.createElement("section");
    newSection.innerHTML += "<button>" + action42Choice + "</button>";

    newSection.dataset.workTwoAction = action42Choice;
    newSection.onclick = chooseAction42;

    journeyRef.appendChild(newSection);
  }
}

function chooseAction42(e) {
  console.log(e.currentTarget);
  const action42YN = e.currentTarget.dataset.workTwoAction;

  const confirmChoice = confirm("You choose " + action42YN + "?");

  if (confirmChoice) {
    journeyRef.innerHTML += "You chose " + action42YN + ".";
  }

  if (action42YN == "Listen") {
    journeyRef.innerHTML +=
      "<p>You decide to pay attention to the story they are telling. They describe a strange man they saw on the streetcorner. He was ranting and raving about the end of the world, screaming somehting about oranges and Elvis and the news. 'Can't have anyhthing in this city, huh?' they end with a chuckle. You shake your head with a smile and finish out the transaction.</p>";
    stepFiveA();
  }
  if (action42YN == "Ignore") {
    journeyRef.innerHTML +=
      "<p>Not able to be bothered by another customer story, you let their words slip into the background as you ring up their total. 'Can't have anyhthing in this city, huh?' you catch as they end the story with a chuckle. You shake your head with a smile and finish out the transaction.</p>";
    stepFiveA();
  }
}

function stepFourThree() {
  const newSection = document.createElement("section");
  newSection.innerHTML +=
    "<p>You give your boss a nod and let them know you'll be organizing the back. When you get there, you realize the monster of the task you have taken on. You could just fake it--there's quite a few boxes that could be filled with random stuff... What do you do?</p>";

  journeyRef.appendChild(newSection);

  const action43 = ["fake it", "really clean"];

  for (let index = 0; index < action43.length; index++) {
    const action43Choice = action43[index];

    const newSection = document.createElement("section");
    newSection.innerHTML += "<button>" + action43Choice + "</button>";

    newSection.dataset.workThreeAction = action43Choice;
    newSection.onclick = chooseAction43;

    journeyRef.appendChild(newSection);
  }
}

function chooseAction43(e) {
  console.log(e.currentTarget);
  const action43YN = e.currentTarget.dataset.workThreeAction;

  const confirmChoice = confirm("You choose " + action43YN + "?");

  if (confirmChoice) {
    journeyRef.innerHTML += "You chose " + action43YN + ".";
  }

  if (action43YN == "fake it") {
    journeyRef.innerHTML +=
      "You lazily shove some boxes around for a minute, doing your best to at least get all of the junk off the floor. If it works in your bedroom, it should work here! After a few hours of meaningless box moving, you hear your boss's voice calling from the front of the shop.</p>";
    stepFiveA();
  }
  if (action43YN == "really clean") {
    journeyRef.innerHTML +=
      "<p>You know that a job well done is the best kind of job to do! And this hard working spirit is rewarded--behind a shelf you find a really cool Rock vinyl that hasn't been sold in the shop for months. Your boss comes in and is very impressed by your work. You barely get two words out before they tell you to just keep the vinyl. With a smile you slip it into your backpack as they head back to the front of the shop.</p>";
    ownRock = true;
    stepFiveA();
  }
}

function stepFourFour() {
  const newSection = document.createElement("section");
  newSection.innerHTML +=
    "<p>You give your boss a nod and tell them you'll be working in the back... but after the restless night you had, the last thing you want to do is move baxes. You decide a quick walk will be nice, giving your boss a shout to say you'll be grabbing something from outside. Onece out the front door, you remember you didn't have time to go to the market before work. However, that will take up your whole work day. What do you do?</p>";

  journeyRef.appendChild(newSection);

  const action44 = ["go to the market", "walk around the block"];

  for (let index = 0; index < action44.length; index++) {
    const action44Choice = action44[index];

    const newSection = document.createElement("section");
    newSection.innerHTML += "<button>" + action44Choice + "</button>";

    newSection.dataset.workFourAction = action44Choice;
    newSection.onclick = chooseAction44;

    journeyRef.appendChild(newSection);
  }
}

function chooseAction44(e) {
  console.log(e.currentTarget);
  const action44YN = e.currentTarget.dataset.workFourAction;

  const confirmChoice = confirm("You choose " + action44YN + "?");

  if (confirmChoice) {
    journeyRef.innerHTML += "You chose " + action44YN + ".";
  }

  if (action44YN == "go to the market") {
    journeyRef.innerHTML +=
      "<p>You head off to the market. You love wandering the aisles, looking at all of the fresh produce. A stunning orange catches your eye, almost glowing against the other fruits. It was like it was made for you! You grab it and head up to the register. Walking out of the store you are the proud owner of one beautiful orange.</p>";
    ownOrange = true;
    stepFiveB();
  }
  if (action44YN == "walk around the block") {
    journeyRef.innerHTML +=
      "<p>A quick stroll around the block is enough to wake you up and clear your mind. You're even back before your boss notices your abscence and you're able to check out a few customers.</p>";
    stepFiveA();
  }
}

function stepFiveA() {
  const newSection = document.createElement("section");
  newSection.innerHTML +=
    "<p>You hear your boss calling for you and you head over to where they are scouring the list of what records will be coming in the next shipment. They flash you a smile as you approach and tell you that you did a good job today. As a reward, they're letting you off a bit early. With a joyful 'Thank you!', you grab your backpack and head outside. What do you do?</p>";

  journeyRef.appendChild(newSection);

  const actionFive = ["go to the market", "head home"];

  for (let index = 0; index < actionFive.length; index++) {
    const actionFiveChoice = actionFive[index];

    const newSection = document.createElement("section");
    newSection.innerHTML += "<button>" + actionFiveChoice + "</button>";

    newSection.dataset.actionFive = actionFiveChoice;
    newSection.onclick = chooseActionFiveA;

    journeyRef.appendChild(newSection);
  }
}

function chooseActionFiveA(e) {
  console.log(e.currentTarget);
  const fifthAction = e.currentTarget.dataset.actionFive;

  const confirmChoice = confirm("You choose " + fifthAction + "?");

  if (confirmChoice) {
    journeyRef.innerHTML += "You chose " + fifthAction + ".";
  }

  if (fifthAction == "go to the market") {
    journeyRef.innerHTML +=
      "<p>You head off to the market. You love wandering the aisles, looking at all of the fresh produce. A stunning orange catches your eye, almost glowing against the other fruits. It was like it was made for you! You grab it and head up to the register. Walking out of the store you are the proud owner of one beautiful orange.</p>";
    ownOrange = true;
    stepSix();
  }
  if (fifthAction == "head home") {
    journeyRef.innerHTML +=
      "<p>The walk home is uneventful as you daydream of your dinner plans.</p>";
    ownOrange = false;
    stepSix();
  }
}

function stepFiveB() {
  const newSection = document.createElement("section");
  newSection.innerHTML +=
    "<p>You're boss is not particularly happy that you disappeared, and asks you to really clean the back this time. You set to work moving all of the heavy boxes as the hours tick by before you can head home.</p>";

  journeyRef.appendChild(newSection);

  const action41D = ["Proceed"];

  for (let index = 0; index < action41D.length; index++) {
    const action41DChoice = action41D[index];

    const newSection = document.createElement("section");
    newSection.innerHTML += "<button>" + action41DChoice + "</button>";

    newSection.dataset.workOneDAction = action41DChoice;
    newSection.onclick = stepSix;

    journeyRef.appendChild(newSection);
  }
}

function stepSix() {
  const newSection = document.createElement("section");
  newSection.innerHTML +=
    "<p>Arriving at home, you decide to eat some dinner. What do you choose?</p>";

  journeyRef.appendChild(newSection);

  const actionSix = ["meatloaf", "pasta"];

  for (let index = 0; index < actionSix.length; index++) {
    const actionSixChoice = actionSix[index];

    const newSection = document.createElement("section");
    newSection.innerHTML += "<button>" + actionSixChoice + "</button>";

    newSection.dataset.sixthAction = actionSixChoice;
    newSection.onclick = chooseActionSix;

    journeyRef.appendChild(newSection);
    console.log(actionSixChoice);
  }
}

function chooseActionSix(e) {
  console.log(e.currentTarget);
  const sixthAction = e.currentTarget.dataset.sixthAction;

  const confirmChoice = confirm("You choose " + sixthAction + "?");

  if (confirmChoice) {
    journeyRef.innerHTML += "You chose " + sixthAction + ".";
  }

  if (sixthAction == "meatloaf") {
    journeyRef.innerHTML +=
      "<p>Grabbing a slice of meatloaf from the fridge and begin to heat it up on the stove. As you sit down for your dinner, you can't help but think this would go well with some kind of fruit...</p>";
    orangeCheck();
  }
  if (sixthAction == "pasta") {
    journeyRef.innerHTML +=
      "<p>You bring a pot of water to a boil and cook up some quick pasta. Tossing a bit of oil and spices in the pot, you begin to consider yourself a true home chef. As you sit down for your dinner, you can't help but think this would go well with some kind of fruit...</p>";
    orangeCheck();
  }
}

function orangeCheck() {
  if (ownOrange == true) {
    const newSection = document.createElement("section");
    newSection.innerHTML +=
      "<p>You remember the orange you purchased, and grab it from your bag. As you peel it, the silence in the room begins to grow...</p>";

    journeyRef.appendChild(newSection);
    rockCheck();
  }
  if (ownOrange == false) {
    badEnding1();
  }
}

function rockCheck() {
  if (ownRock == true) {
    const newSection = document.createElement("section");
    newSection.innerHTML +=
      "<p>The silence rubs at your mind until it springs to life, remembering your new album! You place the vinyl on your record player and the air is filled with faint music.</p>";

    journeyRef.appendChild(newSection);
    stepSeven();
  }
  if (ownRock == false) {
    badEnding2();
  }
}

function stepSeven() {
  const newSection = document.createElement("section");
  newSection.innerHTML +=
    "<p>You are content with your music and dinner, but something pulls at the corners of your mind. Your eyes keep drifting to your TV... perhaps that cute nightly newscaster will be on TV again. Should you turn it on?</p>";

  journeyRef.appendChild(newSection);

  const actionSeven = ["Yes", "No"];

  for (let index = 0; index < actionSeven.length; index++) {
    const actionSevenChoice = actionSeven[index];

    const newSection = document.createElement("section");
    newSection.innerHTML += "<button>" + actionSevenChoice + "</button>";

    newSection.dataset.seventhAction = actionSevenChoice;
    newSection.onclick = chooseActionSeven;

    journeyRef.appendChild(newSection);
    console.log(actionSevenChoice);
  }
}

function chooseActionSeven(e) {
  console.log(e.currentTarget);
  const seventhAction = e.currentTarget.dataset.seventhAction;

  const confirmChoice = confirm("You choose " + seventhAction + "?");

  if (confirmChoice) {
    journeyRef.innerHTML += "You chose " + seventhAction + ".";
  }

  if (seventhAction == "Yes") {
    journeyRef.innerHTML +=
      "<p>You turn on the TV until the channel for the nightly news fuzzily appears on the screen. Something seems to relax in your body, almost as if some kind of heavy weight has been lifted. You sit down and enjoy your meal.</p>";
    goodEnding();
  }
  if (seventhAction == "No") {
    journeyRef.innerHTML +=
      "<p>You decide that the record is enough noise for you. You can't help but feel a headache on the verge of forming though as you finish your meal.</p>";
    badEnding3();
  }
}

function badEnding1() {
  journeyRef.innerHTML +=
    "<p>Your dinner is sticky in your mouth, your meal getting less apetizing by the second. With a huff you set down your fork only a few bites in. If you can't have dinner, there's no reason to stay awake. After shoving a barely finished meal in the fridge, you get ready for bed, trying to ignore the pounding headache that has formed. You close your eyes and have a night of no dreams. The Loop begins again.</p>";
}

function badEnding2() {
  journeyRef.innerHTML +=
    "<p>The silence makes your dinner unbearable. It is almost like a force of nature, wrapping and squeezing your brain like a python. Even the sweetness of the orange can't fight off the pit in your stomach, so you opt to go to bed. You close your eyes and have a night of no dreams. The Loop begins again.</p>";
}

function badEnding3() {
  journeyRef.innerHTML +=
    "<p>Despite the gentle crackle of the record and the sweet taste of the orange, something stills seems off about your evening. Being unable to tell what is missing drives you insane, and you're barely able to focus on finishing your dinner. As you set your fork down after a final bite, you feel your eyelids droop as a heavy sleepiness is cast over you. You close your eyes and have a night of no dreams. The Loop begins again.</p>";
}

function goodEnding() {
  journeyRef.innerHTML +=
    "<p>As you taste the sweetness of the orange, listen to the music, and watch the people talk in the TV, you feel as though something has righted itself in the world. The soft ache in your mind that has plauged you all day seems to dissapate, and the restlessness that hung to your bones is gone. You finish your meal with a smile, even having the energy to wash the dishes afterwards. Later as you curl up in a soft bed, you close your eyes. Your sleep is full of bright dreams, all watched over by bright creatures of fur and feathers.</p> <p>You wake up to March 21, 1963. You have been freed from the Loop.</p>";
}
