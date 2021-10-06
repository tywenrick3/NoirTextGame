let mode;
let enterKeyCode = 13;
let escpKeyCode = 27;
let oneKeyCode = 49;
let twoKeyCode = 50;
let threeKeyCode = 51;
let TKeyCode = 84;
let LKeyCode = 76;
let backKeyCode = 66;
let correct = false;
let questions = 3;

function preload(){
  jazz = loadSound('assets/jazz_music.mp3');
  typewriter = loadSound('assets/typewriter_sound.mp3');
  dun_dun_dun = loadSound('assets/dun_dun_dun.mp3');
  trencoats = loadSound('assets/trenchcoats.m4a');
  page_turn = loadSound('assets/page_turn.mp3');
}

function setup() {
  createCanvas(1000, 500);
  resetGame();
}

function draw() {
  background('grey');

  if (mode == -1){
    textAlign(CENTER);
    textSize(32);
    textFont('lust');
    text('North Hollywood Nightmare', width/2, height/2);
    textSize(28);
    text("Press 'Enter' To Start", width/2, height/2 + 100);
    textFont();
  }else if (mode == 0){
    //Game has started
    displayMainScreen();
  }else if (mode == 1){
    questionOne();
  }else if (mode == 2){
    questionTwo();
  }else if (mode == 3){
    questionThree();
  }else if (mode == 4){
    loseScreen();
  }else if (mode == 5){
    winScreen();
  }
}

function displayMainScreen(){
  background("grey");
  displayHeader();
  displayQuestions();
  displayVerdictInfo();
}

function displayQuestions(){
  textAlign(LEFT);
  textFont('itc-american-typewriter, serif');
  textStyle(ITALIC);
  textSize(24);
  text(`1: “Was James disturbed in any way the days or weeks prior to his death?”
  `, 60, height/2 + 50);
  text(`2: “Mary, was your husband predominantly right-handed?”
  `, 60, height/2 + 100);
  text(`3: “Has James ever done anything to harm you during your marriage?”
  `, 60, height/2 + 150);

}

function displayHeader(){
  textAlign(LEFT);
  textFont('itc-american-typewriter, serif');
  textStyle(NORMAL);
  textSize(22);
  text("1948, you're a PI for the LAPD. James Finnigan has been found dead at home.", 60, 50);
  text('His wife, Mary Finnigan reports the crime at 10:15 PM Friday, October 15th.', 60, 75);
  text('At the crime scene, James lays face down in his own blood.', 60, 100);
  text('A COLT M1903 firearm rests in the right hand of Mr.Finnigan’s palm.', 60, 125);
  text('Two cigarettes, half finished, sit in a porcelain ashtray on a glass coffee', 60, 150);
  text('table beside the victim.', 60, 175);
  text('You bring in Mary Finnigan for questioning. All signs point to suicide.', 60, 225);
}

function displayVerdictInfo(){
  textAlign(LEFT);
  textFont('lust');
  textStyle(NORMAL);
  textSize(18);
  text('Verdict', width - 100, height - 75);
  text('T: Believe', width - 100, height - 50);
  text('L: Doubt', width - 100, height - 25)
}


function keyPressed(){
  //gameState
  if (keyCode == enterKeyCode && mode == -1){
    typewriter.play();
    mode = 0;
  }
  if (keyCode == escpKeyCode){
    resetGame();
  }
  if (keyCode == oneKeyCode && mode == 0 && questions > 1){
    typewriter.play();
    mode = 1;
  }
  if (keyCode == twoKeyCode && mode == 0 && questions > 1){
    typewriter.play();
    mode = 2;
  }
  if (keyCode == threeKeyCode && mode == 0 && questions > 1){
    typewriter.play();
    mode = 3;
  }
  if (keyCode == TKeyCode && mode == 0 & correct == false){
    dun_dun_dun.play();
    mode = 4;
  }
  if (keyCode == LKeyCode && mode == 0 && correct == false){
    jazz.stop();
    trencoats.setVolume(0.5);
    trencoats.loop();
    mode = 5;
  }
  if (keyCode == backKeyCode && (mode == 1 || mode == 2 || mode == 3)){
    page_turn.play();
    mode = 0;
  }
}

function backPrompt(){
  textAlign(CENTER);
  textFont('itc-american-typewriter, serif');
  textStyle(NORMAL);
  textSize(20);
  color('Black');
  text("B: Back", width/2, height-35);
}

function resetPrompt(){
  textAlign(CENTER);
  textFont('lust');
  textSize(20);
  color('Black');
  text("ESC: Restart", width/2, height-35);
}

function questionOne(){
  backPrompt();
  textAlign(LEFT);
  textFont('itc-american-typewriter, serif');
  textStyle(ITALIC);
  textSize(26);
  text(`“My husband was…not himself that night. He was cold,”`, 150, height/2-80);
  text(`detached like the soul had been sucked out of his body .`, 150, height/2-40);
  text(`He adores my cooking and yet didn’t touch a morsel of his`, 150, height/2);
  text(`meatloaf that evening.”`, 150, height/2 + 40);
}


function questionTwo(){
  backPrompt();
  textAlign(LEFT);
  textFont('itc-american-typewriter, serif');
  textStyle(ITALIC);
  textSize(26);
  text(`“Excuse me officer, but what does this have to do with`, 150, height/2-40);
  text(`my husband’s death? I do believe his golf clubs are`, 150, height/2);
  text(`off-handed.”`, 150, height/2+40);
}

function questionThree(){
  backPrompt();
  textAlign(LEFT);
  textFont('itc-american-typewriter, serif');
  textStyle(ITALIC);
  textSize(26);
  text(`“You make me sick to my stomach detective! James was`, 150, height/2-40);
  text(`a hardworking and affectionate partner. How dare you`, 150, height/2);
  text(`insult my husband's character!”`, 150, height/2+40);
}

function loseScreen(){
  resetPrompt();
  textAlign(CENTER);
  textFont('lust');
  textStyle(NORMAL);
  textSize(26);
  text(`Case Cold: Restart to try again`, width/2, height/2);
}

function winScreen(){
  resetPrompt();
  textAlign(LEFT);
  textFont('lust');
  textStyle(NORMAL);
  textSize(26);
  text(`CASE 09367 Solved: Mary framed her husband’s death as a`, 120, height/2-40);
  text(`suicide, she staged the murder weapon in the wrong hand`, 120, height/2);
  text(`James Finnigan would have used to shoot himself.`, 120, height/2+40);
}

function resetGame(){
  background("grey");
  trencoats.stop();
  jazz.stop();
  jazz.setVolume(0.5);
  jazz.loop();
  questions = 3;
  mode = -1;

}