//get function for getElementByID - x is a parameter for arguments
function get(x){
  return document.getElementById(x);
}


	var startButton = get("startButton");
    var answerOne = get("answerOne");
    var answerTwo = get("answerTwo");
    var answeThree = get("answerThree");
    var answerFour = get("answerFour");
    var responseButton = get("responseButton");
    var responseNext = get("responseNext");



//This sets up the name of the app and four seoparate games
function appName() {get("boxTwo").innerHTML = "12 Labors";}

function gameTitle() {get("startButton").innerHTML = "How Tense Are You?";}

function gameOneTitle() {return game1Title;}

function gameTwoTitle() {return game2Title;}

function gameThreeTitle(){return game3Title;}

function gameFourTitle(){return game4Title;}


//CHANGE THE NAMES OF THE GAMES HERE
  var game1Title = get("answerOne").innerHTML = "Let's First Get Random!";
  var game2Title = get("answerTwo").innerHTML = "I Want Seconds!";
  var game3Title = get("answerThree").innerHTML = "Who Wants Thirds?";
  var game4Title = get("answerFour").innerHTML = "Hold On For 3rd-io's and Fourths!";



//This loads the names of the games

    appName();
    gameTitle();
    gameOneTitle();
    gameTwoTitle();
    gameThreeTitle();
    gameFourTitle();


/*
    var nomPE1 = "a";
    var genPE1 = "ae";
    var datPE1 = "ae";
    var accPE1 = "am";
    var ablPE1 = "ā";
    var vocPE1 = "a";

    var nomPE1Pl = "ae";
    var genPE1Pl = "ārum";
    var datPE1Pl = "īs";
    var accPE1Pl = "ās";
    var ablPE1Pl = "īs";
    var vocPE1Pl = "ae";

    var nomPE2 = "us";
    var genPE2 = "ī";
    var datPE2 = "ō";
    var accPE2 = "um";
    var ablPE2 = "ō";
    var vocPE2 = "e";

    var nomPE2Pl = "ī";
    var genPE2Pl = "ōrum";
    var datPE2Pl = "īs";
    var accPE2Pl = "ōs";
    var ablP2Pl = "īs";
    var vocPE2Pl = "ī";

    var nomPE3 = "is";
    var genPE3 = "is";
    var datPE3 = "ī";
    var accPE3 = "em";
    var ablPE3 = "e";
    var vocPE3 = "is";

    var nomPE3Pl = "ēs";
    var genPE3Pl = "ium";
    var datPE3Pl = "ibus";
    var accPE3Pl = "ēs";
    var ablPE3Pl = "ibus";
    var vocPE3Pl = "ēs";

*/

    		var pres1stSing = "ō";
    		var pres2ndSing = "ās";
    		var pres3rdSing = "at";
    		var pres1stPl = "āmus";
    		var pres2ndPl = "ātis";
    		var pres3rdPl = "ant";

        var presP1stSing = "or";
    		var presP2ndSing = "āris";
    		var presP3rdSing = "ātur";
    		var presP1stPl = "āmur";
    		var presP2ndPl = "āminī";
    		var presP3rdPl = "antur";

        var pres1stSing2 = "eō";
    		var pres2ndSing2 = "ēs";
    		var pres3rdSing2 = "et";
    		var pres1stPl2 = "ēmus";
    		var pres2ndPl2 = "ētis";
    		var pres3rdPl2 = "ent";

        var presP1stSing2 = "eor";
    		var presP2ndSing2 = "ēris";
    		var presP3rdSing2 = "ētur";
    		var presP1stPl2 = "ēmur";
    		var presP2ndPl2 = "ēminī";
    		var presP3rdPl2 = "entur";

        var pres1stSing3 = "ō";
    		var pres2ndSing3 = "is";
    		var pres3rdSing3 = "it";
    		var pres1stPl3 = "imus";
    		var pres2ndPl3 = "itis";
    		var pres3rdPl3 = "unt";

        var presP1stSing3 = "or";
    		var presP2ndSing3 = "eris";
    		var presP3rdSing3 = "itur";
    		var presP1stPl3 = "imur";
    		var presP2ndPl3 = "iminī";
    		var presP3rdPl3 = "untur";

        var pres1stSing3io = "iō";
    		var pres2ndSing3io = "is";
    		var pres3rdSing3io = "it";
    		var pres1stPl3io = "imus";
    		var pres2ndPl3io = "itis";
    		var pres3rdPl3io = "iunt";

        var presP1stSing3io = "ior";
    		var presP2ndSing3io = "eris";
    		var presP3rdSing3io = "itur";
    		var presP1stPl3io = "imur";
    		var presP2ndPl3io = "iminī";
    		var presP3rdPl3io = "iuntur";

        var pres1stSing3io4 = "iō";
    		var pres2ndSing3io4 = "īs";
    		var pres3rdSing3io4 = "it";
    		var pres1stPl3io4 = "īmus";
    		var pres2ndPl3io4 = "ītis";
    		var pres3rdPl3io4 = "iunt";

        var presP1stSing3io4 = "ior";
    		var presP2ndSing3io4 = "īris";
    		var presP3rdSing3io4 = "itur";
    		var presP1stPl3io4 = "īmur";
    		var presP2ndPl3io4 = "īmini";
    		var presP3rdPl3io4 = "iuntur";

        var imp1stSing = "ābam";
    		var imp2ndSing = "ābās";
    		var imp3rdSing = "ābat";
        var imp1stPl = "ābāmus";
    		var imp2ndPl = "ābātis";
    		var imp3rdPl = "ābant";

        var impP1stSing = "ābar";
    		var impP2ndSing = "ābāris";
    		var impP3rdSing = "ābātur";
        var impP1stPl = "ābāmur";
    		var impP2ndPl = "ābāminī";
    		var impP3rdPl = "ābantur";


        var imp1stSing2 = "ēbam";
    		var imp2ndSing2 = "ēbās";
    		var imp3rdSing2 = "ēbat";
        var imp1stPl2 = "ēbāmus";
    		var imp2ndPl2 = "ēbātis";
    		var imp3rdPl2 = "ēbant";

        var impP1stSing2 = "ēbar";
    		var impP2ndSing2 = "ēbāris";
    		var impP3rdSing2 = "ēbātur";
        var impP1stPl2 = "ēbāmur";
    		var impP2ndPl2 = "ēbāminī";
    		var impP3rdPl2 = "ēbantur";


        var impP1stSing3 = "ēbar";
    		var impP2ndSing3 = "ēbāris";
    		var impP3rdSing3 = "ēbātur";
        var impP1stPl3 = "ēbāmur";
    		var impP2ndPl3 = "ēbāminī";
    		var impP3rdPl3 = "ēbantur";


        var imp1stSing3 = "ēbam";
    		var imp2ndSing3 = "ēbās";
    		var imp3rdSing3 = "ēbat";
        var imp1stPl3 = "ēbāmus";
    		var imp2ndPl3 = "ēbātis";
    		var imp3rdPl3 = "ēbant";



        var imp1stSing3io4 = "iēbam";
    		var imp2ndSing3io4 = "iēbās";
    		var imp3rdSing3io4 = "iēbat";
        var imp1stPl3io4  = "iēbāmus";
    		var imp2ndPl3io4  = "iēbātis";
    		var imp3rdPl3io4  = "iēbant";

        var impP1stSing3io4  = "iēbar";
    		var impP2ndSing3io4  = "iēbāris";
    		var impP3rdSing3io4  = "iēbātur";
        var impP1stPl3io4  = "iēbāmur";
    		var impP2ndPl3io4  = "iēbāminī";
    		var impP3rdPl3io4  = "iēbantur";



        var fut1stSing = "ābō";
    		var fut2ndSing = "ābis";
    		var fut3rdSing = "ābit";
        var fut1stPl = "ābimus";
    		var fut2ndPl = "ābitis";
    		var fut3rdPl = "ābunt";

        var futP1stSing = "ābor";
    		var futP2ndSing = "āberis";
    		var futP3rdSing = "ābitur";
        var futP1stPl = "ābimur";
    		var futP2ndPl = "ābiminī";
    		var futP3rdPl = "ābuntur";

        var fut1stSing2 = "ēbō";
    		var fut2ndSing2 = "ēbis";
    		var fut3rdSing2 = "ēbit";
        var fut1stPl2 = "ēbimus";
    		var fut2ndPl2 = "ēbitis";
    		var fut3rdPl2 = "ēbunt";

        var futP1stSing2 = "ēbor";
    		var futP2ndSing2 = "ēberis";
    		var futP3rdSing2 = "ēbitur";
        var futP1stPl2 = "ēbimur";
    		var futP2ndPl2 = "ēbiminī";
    		var futP3rdPl2 = "ēbuntur";

        var fut1stSing3 = "am";
        var fut2ndSing3 = "ēs";
        var fut3rdSing3 = "et";
        var fut1stPl3 = "ēmus";
        var fut2ndPl3 = "ētis";
        var fut3rdPl3 = "ent";

        var futP1stSing3 = "ar";
        var futP2ndSing3 = "ēris";
        var futP3rdSing3 = "ētur";
        var futP1stPl3 = "ēmur";
        var futP2ndPl3 = "ēminī";
        var futP3rdPl3 = "entur";

        var fut1stSing3io4 = "iam";
        var fut2ndSing3io4 = "iēs";
        var fut3rdSing3io4 = "iet";
        var fut1stPl3io4 = "iēmus";
        var fut2ndPl3io4 = "iētis";
        var fut3rdPl3io4 = "ient";

        var futP1stSing3io4 = "iar";
        var futP2ndSing3io4 = "iēris";
        var futP3rdSing3io4 = "iētur";
        var futP1stPl3io4 = "iēmur";
        var futP2ndPl3io4 = "iēminī";
        var futP3rdPl3io4 = "ientur";

        //var per3rdSing = "āvit";
    		//var per3rdPl = "āvērunt";

        //var perfect1stSing = "ī";
        //var perfect2ndSing = "isti";
    		//var perfect3rdSing = "it";
        //var perfect1stPl = "imus";
        //var perfect2ndPl = "istis";
    		//var perfect3rdPl = "ērunt";

        var per1stSing = "ī";
        var per2ndSing = "istī";
    		var per3rdSing = "it";
        var per1stPl = "imus";
        var per2ndPl = "istis";
    		var per3rdPl = "ērunt";

        var plu1stSing = "eram";
        var plu2ndSing = "erās";
        var plu3rdSing = "erat";
        var plu1stPl = "erāmus";
        var plu2ndPl = "erātis";
        var plu3rdPl = "erant";

        var futPer1stSing = "erō";
        var futPer2ndSing = "eris";
    		var futPer3rdSing = "erit";
        var futPer1stPl = "erimus";
        var futPer2ndPl = "eritis";
    		var futPer3rdPl = "erint";



var answers = ["answerOne", "answerTwo", "answerThree", "answerFour"];



//Random index for Shuffle
	 var randomIndex = 0;



function gameOverAudio(){
       var gameOverAudio = document.getElementById("gameOverAudio");
       gameOverAudio.play();
                 }

  function correctAnswerAudio(){
       var correctAnswerAudio = document.getElementById("correctAnswerAudio");
       correctAnswerAudio.play();
                 }

function wrongAnswerAudio(){
       var wrongAnswerAudio = document.getElementById("wrongAnswerAudio");
       wrongAnswerAudio.play();
                 }



//Score Variables

	var correctAnswer = "";

    var points = 0;

    var pointsPerCorrectAnswer = 10;

    //var gameOneChosen = false;


    function addPoints(){
    	points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;

    }


    function subtractPoints(){
    	points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;

    }

//Counter variable for number of questions

var num_questions = 5;
var count = 11;

function decrementCount(){
	count--;
}


//Timer variables
var timeleft = 25;
var countdown = setInterval(0,1000);


function countDownTimer(){

		document.getElementById("boxOne").innerHTML = timeleft;
  		timeleft -= 1;
  			if(timeleft <= 0)  {
    			clearInterval(countdown);
    			document.getElementById("boxOne").innerHTML = "Timer";
    			disableButtons();
    			startButton.disabled = false;
    			startButton.innerHTML = "Next Question!";
    			responseButton.innerHTML = "Tempus Fugit!"
    			resetAnswerColors();
    			answerOne.innerHTML = "";
				answerTwo.innerHTML = "";
				answerThree.innerHTML = "";
				answerFour.innerHTML = "";

  }

}




function stopTimer() {


	clearInterval(countdown);


}



//This randomizes an array. The parameter array takes as its argument the questions.


function shuffle(array){
	var currentIndex = array.length;
	var temporaryValue;
	//var randIndex;

	while (currentIndex > 0){
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex --;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
		return array;
}



function answerSetup(){
		answerOne.innerHTML = "";
		answerTwo.innerHTML = "";
		answerThree.innerHTML = "";
		answerFour.innerHTML = "";
		responseButton.innerHTML = "";
		answerOne.onclick = function(){clickedAnswerOne()};
		answerTwo.onclick = function(){clickedAnswerTwo()};
		answerThree.onclick = function(){clickedAnswerThree()};
		answerFour.onclick = function(){clickedAnswerFour()};
}



 function selectGame1(){

 	startButton.disabled = false;
 	startButton.onclick = function(){randomVerbFirst()};
  //responseButton.onclick = function(){hint()};
	startButton.innerHTML = "Click to Start " + game1Title;
    answerSetup();
    gameOverAudio();
 	return true;


}


function selectGame2(){

	startButton.disabled = false;
 	startButton.onclick = function(){ranVerbSecond()};
 	startButton.innerHTML = "Click to Start " + game2Title;
    answerSetup();
    gameOverAudio();
    return true;
}

function selectGame3(){

	startButton.disabled = false;
 	startButton.onclick = function(){ranVerbThird()};
 	startButton.innerHTML = "Click to Start " + game3Title;
    answerSetup();
    gameOverAudio();
    return true;
}

function selectGame4(){

	startButton.disabled = false;
 	startButton.onclick = function(){mixup3io4()};
 	startButton.innerHTML = "Click to Start " + game4Title;
    answerSetup();
    gameOverAudio();
 }



var sentence = "";
var correctAnswer = "";
var wrongAnswer1 = "";
var wrongAnswer2 = "";
var wrongAnswer3 = "";


var sentencePast = "";
var correctAnswerPast = "";
var wrongAnswer1Past = "";
var wrongAnswer2Past = "";
var wrongAnswer3Past = "";

var  checkAnswers = [[correctAnswer,true],[wrongAnswer1,false],[wrongAnswer2,false],[wrongAnswer3,false]];





function randomVerbFirst(){

  var verbArrayFirst = [["am","amav","amat","love","loves","loving","loved","loved"],["d","ded","dat","give","gives","giving","gave","given"]];

    var randomVerbIndexFirst = Math.floor(Math.random() * verbArrayFirst.length);

    var singSubj = ["He ", "She ", "It "];
    var ranSubjIndex = Math.floor(Math.random() * singSubj.length);

  //First Declension Latin Present Tense
  var pA1S = verbArrayFirst[randomVerbIndexFirst][0] + pres1stSing;
  var pA2S = verbArrayFirst[randomVerbIndexFirst][0] + pres2ndSing;
  var pA3S = verbArrayFirst[randomVerbIndexFirst][0] + pres3rdSing;

  var pA1P = verbArrayFirst[randomVerbIndexFirst][0] + pres1stPl;
  var pA2P = verbArrayFirst[randomVerbIndexFirst][0] + pres2ndPl;
  var pA3P = verbArrayFirst[randomVerbIndexFirst][0] + pres3rdPl;

  //First Declension English Translation Present Tense
  var pA1SEng = "I " + verbArrayFirst[randomVerbIndexFirst][3];
  var pA2SEng = "You " + verbArrayFirst[randomVerbIndexFirst][3];
  var pA3SEng = singSubj[ranSubjIndex] + verbArrayFirst[randomVerbIndexFirst][4];

  var pA1PEng = "We " + verbArrayFirst[randomVerbIndexFirst][3];
  var pA2PEng = "Ya'll " + verbArrayFirst[randomVerbIndexFirst][3];
  var pA3PEng = "They " + verbArrayFirst[randomVerbIndexFirst][3];


  var presVerb = [[pA1S,pA1SEng],[pA2S,pA2SEng], [pA3S, pA3SEng], [pA1P,pA1PEng],[pA2P,pA2PEng], [pA3P, pA3PEng]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(presVerb);


  //First Declension Latin Present PASSIVE Tense
  var pP1S = verbArrayFirst[randomVerbIndexFirst][0] + presP1stSing;
  var pP2S = verbArrayFirst[randomVerbIndexFirst][0] + presP2ndSing;
  var pP3S = verbArrayFirst[randomVerbIndexFirst][0] + presP3rdSing;

  var pP1P = verbArrayFirst[randomVerbIndexFirst][0] + presP1stPl;
  var pP2P = verbArrayFirst[randomVerbIndexFirst][0] + presP2ndPl;
  var pP3P = verbArrayFirst[randomVerbIndexFirst][0] + presP3rdPl;

  //First Declension English Translation Present PASSIVE Tense
  var pP1SEng = "I am " + verbArrayFirst[randomVerbIndexFirst][7];
  var pP2SEng = "You are " + verbArrayFirst[randomVerbIndexFirst][7];
  var pP3SEng = singSubj[ranSubjIndex] + "is " + verbArrayFirst[randomVerbIndexFirst][7];

  var pP1PEng = "We are " + verbArrayFirst[randomVerbIndexFirst][7];
  var pP2PEng = "Ya'll are " + verbArrayFirst[randomVerbIndexFirst][7];
  var pP3PEng = "They are " + verbArrayFirst[randomVerbIndexFirst][7];


  var presPVerb = [[pP1S,pP1SEng],[pP2S,pP2SEng], [pP3S, pP3SEng], [pP1P,pP1PEng],[pP2P,pP2PEng], [pP3P, pP3PEng]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(presPVerb);




  //First Declension Latin Imperfect Tense
  var impA1S = verbArrayFirst[randomVerbIndexFirst][0] + imp1stSing;
  var impA2S = verbArrayFirst[randomVerbIndexFirst][0] + imp2ndSing;
  var impA3S = verbArrayFirst[randomVerbIndexFirst][0] + imp3rdSing;

  var impA1P = verbArrayFirst[randomVerbIndexFirst][0] + imp1stPl;
  var impA2P = verbArrayFirst[randomVerbIndexFirst][0] + imp2ndPl;
  var impA3P = verbArrayFirst[randomVerbIndexFirst][0] + imp3rdPl;

  //First Declension English Translation Imperfect Tense
  var impA1SEng = "I was " + verbArrayFirst[randomVerbIndexFirst][5];
  var impA2SEng = "You were " + verbArrayFirst[randomVerbIndexFirst][5];
  var impA3SEng = singSubj[ranSubjIndex] + "was " + verbArrayFirst[randomVerbIndexFirst][5];

  var impA1PEng = "We were " + verbArrayFirst[randomVerbIndexFirst][5];
  var impA2PEng = "Ya'll were " + verbArrayFirst[randomVerbIndexFirst][5];
  var impA3PEng = "They were " + verbArrayFirst[randomVerbIndexFirst][5];

  var impVerb = [[impA1S,impA1SEng],[impA2S,impA2SEng], [impA3S, impA3SEng], [impA1P,impA1PEng],[impA2P,impA2PEng], [impA3P, impA3PEng]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(impVerb);





  //First Declension Latin Imperfect PASSIVE Tense
  var impP1S = verbArrayFirst[randomVerbIndexFirst][0] + impP1stSing;
  var impP2S = verbArrayFirst[randomVerbIndexFirst][0] + impP2ndSing;
  var impP3S = verbArrayFirst[randomVerbIndexFirst][0] + impP3rdSing;

  var impP1P = verbArrayFirst[randomVerbIndexFirst][0] + impP1stPl;
  var impP2P = verbArrayFirst[randomVerbIndexFirst][0] + impP2ndPl;
  var impP3P = verbArrayFirst[randomVerbIndexFirst][0] + impP3rdPl;

  //First Declension English Translation Imperfect PASSIVE Tense
  var impP1SEng = "I was being " + verbArrayFirst[randomVerbIndexFirst][7];
  var impP2SEng = "You were being " + verbArrayFirst[randomVerbIndexFirst][7];
  var impP3SEng = singSubj[ranSubjIndex] + "was being " + verbArrayFirst[randomVerbIndexFirst][7];

  var impP1PEng = "We were being " + verbArrayFirst[randomVerbIndexFirst][7];
  var impP2PEng = "Ya'll were being " + verbArrayFirst[randomVerbIndexFirst][7];
  var impP3PEng = "They were being " + verbArrayFirst[randomVerbIndexFirst][7];

  var impPVerb = [[impP1S,impP1SEng],[impP2S,impP2SEng], [impP3S, impP3SEng], [impP1P,impP1PEng],[impP2P,impP2PEng], [impP3P, impP3PEng]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(impPVerb);




  //First Declension Latin Future Tense
  var futA1S = verbArrayFirst[randomVerbIndexFirst][0] + fut1stSing;
  var futA2S = verbArrayFirst[randomVerbIndexFirst][0] + fut2ndSing;
  var futA3S = verbArrayFirst[randomVerbIndexFirst][0] + fut3rdSing;

  var futA1P = verbArrayFirst[randomVerbIndexFirst][0] + fut1stPl;
  var futA2P = verbArrayFirst[randomVerbIndexFirst][0] + fut2ndPl;
  var futA3P = verbArrayFirst[randomVerbIndexFirst][0] + fut3rdPl;

  //First Declension English Translation Future Tense
  var futA1SEng = "I will " + verbArrayFirst[randomVerbIndexFirst][3];
  var futA2SEng = "You will " + verbArrayFirst[randomVerbIndexFirst][3];
  var futA3SEng = singSubj[ranSubjIndex] + "will " + verbArrayFirst[randomVerbIndexFirst][3];

  var futA1PEng = "We will " + verbArrayFirst[randomVerbIndexFirst][3];
  var futA2PEng = "Ya'll will " + verbArrayFirst[randomVerbIndexFirst][3];
  var futA3PEng = "They will " + verbArrayFirst[randomVerbIndexFirst][3];


  var futVerb = [[futA1S,futA1SEng],[futA2S,futA2SEng], [futA3S, futA3SEng], [futA1P,futA1PEng],[futA2P,futA2PEng], [futA3P, futA3PEng]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(futVerb);



  //First Declension Latin Future PASSIVE Tense
  var futP1S = verbArrayFirst[randomVerbIndexFirst][0] + futP1stSing;
  var futP2S = verbArrayFirst[randomVerbIndexFirst][0] + futP2ndSing;
  var futP3S = verbArrayFirst[randomVerbIndexFirst][0] + futP3rdSing;

  var futP1P = verbArrayFirst[randomVerbIndexFirst][0] + futP1stPl;
  var futP2P = verbArrayFirst[randomVerbIndexFirst][0] + futP2ndPl;
  var futP3P = verbArrayFirst[randomVerbIndexFirst][0] + futP3rdPl;

  //First Declension English Translation Future PASSIVE Tense
  var futP1SEng = "I will be " + verbArrayFirst[randomVerbIndexFirst][7];
  var futP2SEng = "You will be " + verbArrayFirst[randomVerbIndexFirst][7];
  var futP3SEng = singSubj[ranSubjIndex] + "will be " + verbArrayFirst[randomVerbIndexFirst][7];

  var futP1PEng = "We will be " + verbArrayFirst[randomVerbIndexFirst][7];
  var futP2PEng = "Ya'll will be " + verbArrayFirst[randomVerbIndexFirst][7];
  var futP3PEng = "They will be " + verbArrayFirst[randomVerbIndexFirst][7];


  var futPVerb = [[futP1S,futP1SEng],[futP2S,futP2SEng], [futP3S, futP3SEng], [futP1P,futP1PEng],[futP2P,futP2PEng], [futP3P, futP3PEng]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(futPVerb);



  //First Declension Latin Perfect Tense
  var perA1S = verbArrayFirst[randomVerbIndexFirst][1] + per1stSing;
  var perA2S = verbArrayFirst[randomVerbIndexFirst][1] + per2ndSing;
  var perA3S = verbArrayFirst[randomVerbIndexFirst][1] + per3rdSing;

  var perA1P = verbArrayFirst[randomVerbIndexFirst][1] + per1stPl;
  var perA2P = verbArrayFirst[randomVerbIndexFirst][1] + per2ndPl;
  var perA3P = verbArrayFirst[randomVerbIndexFirst][1] + per3rdPl;

  //First Declension English Translation Perfect Tense
  var perA1SEng = "I " + verbArrayFirst[randomVerbIndexFirst][6];
  var perA2SEng = "You " + verbArrayFirst[randomVerbIndexFirst][6];
  var perA3SEng = singSubj[ranSubjIndex] + verbArrayFirst[randomVerbIndexFirst][6];

  var perA1PEng = "We " + verbArrayFirst[randomVerbIndexFirst][6];
  var perA2PEng = "Ya'll " + verbArrayFirst[randomVerbIndexFirst][6];
  var perA3PEng = "They " + verbArrayFirst[randomVerbIndexFirst][6];


  var perVerb = [[perA1S,perA1SEng],[perA2S,perA2SEng], [perA3S, perA3SEng], [perA1P,perA1PEng],[perA2P,perA2PEng], [perA3P, perA3PEng]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(perVerb);

  var ranPerSubjIndex = Math.floor(Math.random() * 3);
  var perfectSubjectSing = [["us","He "],["a","She "],["um","It "]];
  var perfectSubjectPl = [["ī"," The boys "],["ae"," The girls "],["a"," The things "]];



  //First Declension Latin Perfect PASSIVE Tense
  var perP1S = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[ranPerSubjIndex][0] + " sum";
  var perP2S = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[ranPerSubjIndex][0] + " es";
  var perP3Sm = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[0][0] + " est";
  var perP3Sf = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[1][0] + " est";
  var perP3Sn = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[2][0] + " est";


  var perP1P = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[ranPerSubjIndex][0] + " sumus";
  var perP2P = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[ranPerSubjIndex][0] + " estis";
  var perP3Pm = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[0][0] + " sunt";
  var perP3Pf = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[1][0] + " sunt";
  var perP3Pn = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[2][0] + " sunt";



  //First Declension English Translation Perfect PASSIVE Tense
  var perP1SEng = "I was " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP2SEng = "You were " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3SEngm = perfectSubjectSing[0][1] + "was " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3SEngf = perfectSubjectSing[1][1] + "was " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3SEngn = perfectSubjectSing[2][1] + "was " + verbArrayFirst[randomVerbIndexFirst][7];

  var perP1PEng = "We were " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP2PEng = "Ya'll were " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3PEng = "They were " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3PEngm = perfectSubjectPl[0][1] + "were " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3PEngf = perfectSubjectPl[1][1] + "were " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3PEngn = perfectSubjectPl[2][1] + "were " + verbArrayFirst[randomVerbIndexFirst][7];


  var perPVerb = [[perP1S,perP1SEng],[perP2S,perP2SEng], [perP3Sm, perP3SEngm], [perP3Sf, perP3SEngf],[perP3Sn, perP3SEngn],[perP1P,perP1PEng],[perP2P,perP2PEng], [perP3Pm, perP3PEngm],[perP3Pf, perP3PEngf],[perP3Pn, perP3PEngn]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(perPVerb);


  //First Declension Latin PLUPERFECT PASSIVE Tense
  var pluP1S = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[ranPerSubjIndex][0] + " eram";
  var pluP2S = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[ranPerSubjIndex][0] + " eras";
  var pluP3Sm = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[0][0] + " erat";
  var pluP3Sf = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[1][0] + " erat";
  var pluP3Sn = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[2][0] + " erat";


  var pluP1P = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[ranPerSubjIndex][0] + " eramus";
  var pluP2P = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[ranPerSubjIndex][0] + " eratis";
  var pluP3Pm = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[0][0] + " erant";
  var pluP3Pf = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[1][0] + " erant";
  var pluP3Pn = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[2][0] + " erant";



  //First Declension English Translation PLUPERFECT PASSIVE Tense
  var pluP1SEng = "I had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP2SEng = "You had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3SEngm = perfectSubjectSing[0][1] + "had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3SEngf = perfectSubjectSing[1][1] + "had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3SEngn = perfectSubjectSing[2][1] + "had been " + verbArrayFirst[randomVerbIndexFirst][7];

  var pluP1PEng = "We had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP2PEng = "Ya'll had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3PEng = "They had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3PEngm = perfectSubjectPl[0][1] + "had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3PEngf = perfectSubjectPl[1][1] + "had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3PEngn = perfectSubjectPl[2][1] + "had been " + verbArrayFirst[randomVerbIndexFirst][7];


  var pluPVerb = [[pluP1S,pluP1SEng],[pluP2S,pluP2SEng], [pluP3Sm, pluP3SEngm], [pluP3Sf, pluP3SEngf],[pluP3Sn, pluP3SEngn],[pluP1P,pluP1PEng],[pluP2P,pluP2PEng], [pluP3Pm, pluP3PEngm],[pluP3Pf, pluP3PEngf],[pluP3Pn, pluP3PEngn]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(pluPVerb);


  //First Declension Latin FUTURE PERFECT  PASSIVE Tense
  var futPerP1S = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[ranPerSubjIndex][0] + " ero";
  var futPerP2S = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[ranPerSubjIndex][0] + " eris";
  var futPerP3Sm = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[0][0] + " erit";
  var futPerP3Sf = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[1][0] + " erit";
  var futPerP3Sn = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[2][0] + " erit";


  var futPerP1P = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[ranPerSubjIndex][0] + " erimus";
  var futPerP2P = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[ranPerSubjIndex][0] + " eritis";
  var futPerP3Pm = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[0][0] + " erunt";
  var futPerP3Pf = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[1][0] + " erunt";
  var futPerP3Pn = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[2][0] + " erunt";



  //First Declension English Translation FUTURE PERFECT Perfect PASSIVE Tense
  var futPerP1SEng = "I will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP2SEng = "You will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3SEngm = perfectSubjectSing[0][1] + "will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3SEngf = perfectSubjectSing[1][1] + "will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3SEngn = perfectSubjectSing[2][1] + "will have been " + verbArrayFirst[randomVerbIndexFirst][7];

  var futPerP1PEng = "We will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP2PEng = "Ya'll will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3PEng = "They will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3PEngm = perfectSubjectPl[0][1] + "will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3PEngf = perfectSubjectPl[1][1] + "will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3PEngn = perfectSubjectPl[2][1] + "will have been " + verbArrayFirst[randomVerbIndexFirst][7];


  var futPerPVerb = [[futPerP1S,futPerP1SEng],[futPerP2S,futPerP2SEng], [futPerP3Sm, futPerP3SEngm], [futPerP3Sf, futPerP3SEngf],[futPerP3Sn, futPerP3SEngn],[futPerP1P,futPerP1PEng],[futPerP2P,pluP2PEng], [futPerP3Pm, futPerP3PEngm],[futPerP3Pf, futPerP3PEngf],[futPerP3Pn, futPerP3PEngn]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(futPerPVerb);






  //var verb = [presVerb,perVerb,impVerb,futVerb];

  //shuffle(verb);


  //First Declension Latin Pluperfect Tense
  var pluA1S = verbArrayFirst[randomVerbIndexFirst][1] + plu1stSing;
  var pluA2S = verbArrayFirst[randomVerbIndexFirst][1] + plu2ndSing;
  var pluA3S = verbArrayFirst[randomVerbIndexFirst][1] + plu3rdSing;

  var pluA1P = verbArrayFirst[randomVerbIndexFirst][1] + plu1stPl;
  var pluA2P = verbArrayFirst[randomVerbIndexFirst][1] + plu2ndPl;
  var pluA3P = verbArrayFirst[randomVerbIndexFirst][1] + plu3rdPl;

  //First Declension English Translation Pluperfect Tense
  var pluA1SEng = "I had " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluA2SEng = "You had " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluA3SEng = singSubj[ranSubjIndex] + "had " + verbArrayFirst[randomVerbIndexFirst][7];

  var pluA1PEng = "We had " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluA2PEng = "Ya'll had " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluA3PEng = "They had " + verbArrayFirst[randomVerbIndexFirst][7];


  var pluVerb = [[pluA1S,pluA1SEng],[pluA2S,pluA2SEng], [pluA3S, pluA3SEng], [pluA1P,pluA1PEng],[pluA2P,pluA2PEng], [pluA3P, pluA3PEng]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(pluVerb);


  //First Declension Latin Future Perfect Tense
  var futPerA1S = verbArrayFirst[randomVerbIndexFirst][1] + futPer1stSing;
  var futPerA2S = verbArrayFirst[randomVerbIndexFirst][1] + futPer2ndSing;
  var futPerA3S = verbArrayFirst[randomVerbIndexFirst][1] + futPer3rdSing;

  var futPerA1P = verbArrayFirst[randomVerbIndexFirst][1] + futPer1stPl;
  var futPerA2P = verbArrayFirst[randomVerbIndexFirst][1] + futPer2ndPl;
  var futPerA3P = verbArrayFirst[randomVerbIndexFirst][1] + futPer3rdPl;

  //First Declension English Translation Future Perfect Tense
  var futPerA1SEng = "I will have " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerA2SEng = "You will have " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerA3SEng = singSubj[ranSubjIndex] + "will have " + verbArrayFirst[randomVerbIndexFirst][7];

  var futPerA1PEng = "We will have " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerA2PEng = "Ya'll will have " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerA3PEng = "They will have " + verbArrayFirst[randomVerbIndexFirst][7];


  var futPerVerb = [[futPerA1S,futPerA1SEng],[futPerA2S,futPerA2SEng], [futPerA3S, futPerA3SEng], [futPerA1P,futPerA1PEng],[futPerA2P,futPerA2PEng], [futPerA3P, futPerA3PEng]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(futPerVerb);


//var verb = [futPerPVerb];
var verb = [perPVerb,presVerb,perVerb,impVerb,futVerb,pluVerb,futPerVerb,presPVerb,impPVerb, futPVerb, pluPVerb,futPerPVerb];

//[perPVerb,presVerb,perVerb,impVerb,futVerb,pluVerb,futPerVerb,presPVerb,impPVerb, futPVerb];
  shuffle(verb);



  timeleft = 25;
  responseButton.innerHTML = "";
  //responseButton.onclick = function(){testIndirectStatement()};

      countDownTimer();

       countdown = setInterval(countDownTimer,1000);

       //shuffle(answers);


      startButton.disabled = true;



      ranISIndex = Math.floor(Math.random() * 1);


      if (ranISIndex == 0){

      sentence = verb[0][0][0];

        correctAnswer = verb[0][0][1];

        wrongAnswer1 = verb[0][1][1];

        wrongAnswer2 = verb[0][2][1];

        wrongAnswer3 = verb[0][3][1];


      checkAnswers = [[correctAnswer,true],[wrongAnswer1,false],[wrongAnswer2,false],[wrongAnswer3,false]];
      shuffle(checkAnswers);

  }

  startButton.innerHTML = sentence;

  document.getElementById(answers[0]).innerHTML = checkAnswers[0][0];

  document.getElementById(answers[1]).innerHTML = checkAnswers[1][0];

  document.getElementById(answers[2]).innerHTML =  checkAnswers[2][0];

  document.getElementById(answers[3]).innerHTML = checkAnswers[3][0];



    responseButton.disabled = false;



      resetAnswerColors();

      enableButtons();

        decrementCount();






      if (count == 0){

        gameOverAudio();

        startButton.innerHTML = "Select a New Game!";

        answerOne.innerHTML = game1Title;
        answerTwo.innerHTML = game2Title;
        answerThree.innerHTML = game3Title;
        answerFour.innerHTML = game4Title;

        document.getElementById("boxThree").innerHTML = "Score";
        responseButton.innerHTML = "You earned " + points + " points!";
        points = 0;

        stopTimer();
        document.getElementById("boxOne").innerHTML = "Timer";

        answerOne.onclick = function(){selectGame1()};
        answerTwo.onclick = function(){selectGame2()};
        answerThree.onclick = function(){selectGame3()};
        answerFour.onclick = function(){selectGame4()};

        count = 11;


         }

//resetUndefinedValues();

}



function ranVerbSecond() {

  var verbArrayFirst = [["mon","monu","monit","warn","warns","warning","warned","warned"],["terr","terru","territ","frighten","frightens","frightening","frigthened","frightened"]];

    var randomVerbIndexFirst = Math.floor(Math.random() * verbArrayFirst.length);

    var singSubj = ["He ", "She ", "It "];
    var ranSubjIndex = Math.floor(Math.random() * singSubj.length);

  //First Declension Latin Present Tense
  var pA1S = verbArrayFirst[randomVerbIndexFirst][0] + pres1stSing2;
  var pA2S = verbArrayFirst[randomVerbIndexFirst][0] + pres2ndSing2;
  var pA3S = verbArrayFirst[randomVerbIndexFirst][0] + pres3rdSing2;

  var pA1P = verbArrayFirst[randomVerbIndexFirst][0] + pres1stPl2;
  var pA2P = verbArrayFirst[randomVerbIndexFirst][0] + pres2ndPl2;
  var pA3P = verbArrayFirst[randomVerbIndexFirst][0] + pres3rdPl2;

  //First Declension English Translation Present Tense
  var pA1SEng = "I " + verbArrayFirst[randomVerbIndexFirst][3];
  var pA2SEng = "You " + verbArrayFirst[randomVerbIndexFirst][3];
  var pA3SEng = singSubj[ranSubjIndex] + verbArrayFirst[randomVerbIndexFirst][4];

  var pA1PEng = "We " + verbArrayFirst[randomVerbIndexFirst][3];
  var pA2PEng = "Ya'll " + verbArrayFirst[randomVerbIndexFirst][3];
  var pA3PEng = "They " + verbArrayFirst[randomVerbIndexFirst][3];


  var presVerb = [[pA1S,pA1SEng],[pA2S,pA2SEng], [pA3S, pA3SEng], [pA1P,pA1PEng],[pA2P,pA2PEng], [pA3P, pA3PEng]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(presVerb);


  //First Declension Latin Present PASSIVE Tense
  var pP1S = verbArrayFirst[randomVerbIndexFirst][0] + presP1stSing2;
  var pP2S = verbArrayFirst[randomVerbIndexFirst][0] + presP2ndSing2;
  var pP3S = verbArrayFirst[randomVerbIndexFirst][0] + presP3rdSing2;

  var pP1P = verbArrayFirst[randomVerbIndexFirst][0] + presP1stPl2;
  var pP2P = verbArrayFirst[randomVerbIndexFirst][0] + presP2ndPl2;
  var pP3P = verbArrayFirst[randomVerbIndexFirst][0] + presP3rdPl2;

  //First Declension English Translation Present PASSIVE Tense
  var pP1SEng = "I am " + verbArrayFirst[randomVerbIndexFirst][7];
  var pP2SEng = "You are " + verbArrayFirst[randomVerbIndexFirst][7];
  var pP3SEng = singSubj[ranSubjIndex] + "is " + verbArrayFirst[randomVerbIndexFirst][7];

  var pP1PEng = "We are " + verbArrayFirst[randomVerbIndexFirst][7];
  var pP2PEng = "Ya'll are " + verbArrayFirst[randomVerbIndexFirst][7];
  var pP3PEng = "They are " + verbArrayFirst[randomVerbIndexFirst][7];


  var presPVerb = [[pP1S,pP1SEng],[pP2S,pP2SEng], [pP3S, pP3SEng], [pP1P,pP1PEng],[pP2P,pP2PEng], [pP3P, pP3PEng]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(presPVerb);




  //First Declension Latin Imperfect Tense
  var impA1S = verbArrayFirst[randomVerbIndexFirst][0] + imp1stSing2;
  var impA2S = verbArrayFirst[randomVerbIndexFirst][0] + imp2ndSing2;
  var impA3S = verbArrayFirst[randomVerbIndexFirst][0] + imp3rdSing2;

  var impA1P = verbArrayFirst[randomVerbIndexFirst][0] + imp1stPl2;
  var impA2P = verbArrayFirst[randomVerbIndexFirst][0] + imp2ndPl2;
  var impA3P = verbArrayFirst[randomVerbIndexFirst][0] + imp3rdPl2;

  //First Declension English Translation Imperfect Tense
  var impA1SEng = "I was " + verbArrayFirst[randomVerbIndexFirst][5];
  var impA2SEng = "You were " + verbArrayFirst[randomVerbIndexFirst][5];
  var impA3SEng = singSubj[ranSubjIndex] + "was " + verbArrayFirst[randomVerbIndexFirst][5];

  var impA1PEng = "We were " + verbArrayFirst[randomVerbIndexFirst][5];
  var impA2PEng = "Ya'll were " + verbArrayFirst[randomVerbIndexFirst][5];
  var impA3PEng = "They were " + verbArrayFirst[randomVerbIndexFirst][5];

  var impVerb = [[impA1S,impA1SEng],[impA2S,impA2SEng], [impA3S, impA3SEng], [impA1P,impA1PEng],[impA2P,impA2PEng], [impA3P, impA3PEng]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(impVerb);





  //First Declension Latin Imperfect PASSIVE Tense
  var impP1S = verbArrayFirst[randomVerbIndexFirst][0] + impP1stSing2;
  var impP2S = verbArrayFirst[randomVerbIndexFirst][0] + impP2ndSing2;
  var impP3S = verbArrayFirst[randomVerbIndexFirst][0] + impP3rdSing2;

  var impP1P = verbArrayFirst[randomVerbIndexFirst][0] + impP1stPl2;
  var impP2P = verbArrayFirst[randomVerbIndexFirst][0] + impP2ndPl2;
  var impP3P = verbArrayFirst[randomVerbIndexFirst][0] + impP3rdPl2;

  //First Declension English Translation Imperfect PASSIVE Tense
  var impP1SEng = "I was being " + verbArrayFirst[randomVerbIndexFirst][7];
  var impP2SEng = "You were being " + verbArrayFirst[randomVerbIndexFirst][7];
  var impP3SEng = singSubj[ranSubjIndex] + "was being " + verbArrayFirst[randomVerbIndexFirst][7];

  var impP1PEng = "We were being " + verbArrayFirst[randomVerbIndexFirst][7];
  var impP2PEng = "Ya'll were being " + verbArrayFirst[randomVerbIndexFirst][7];
  var impP3PEng = "They were being " + verbArrayFirst[randomVerbIndexFirst][7];

  var impPVerb = [[impP1S,impP1SEng],[impP2S,impP2SEng], [impP3S, impP3SEng], [impP1P,impP1PEng],[impP2P,impP2PEng], [impP3P, impP3PEng]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(impPVerb);




  //First Declension Latin Future Tense
  var futA1S = verbArrayFirst[randomVerbIndexFirst][0] + fut1stSing2;
  var futA2S = verbArrayFirst[randomVerbIndexFirst][0] + fut2ndSing2;
  var futA3S = verbArrayFirst[randomVerbIndexFirst][0] + fut3rdSing2;

  var futA1P = verbArrayFirst[randomVerbIndexFirst][0] + fut1stPl2;
  var futA2P = verbArrayFirst[randomVerbIndexFirst][0] + fut2ndPl2;
  var futA3P = verbArrayFirst[randomVerbIndexFirst][0] + fut3rdPl2;

  //First Declension English Translation Future Tense
  var futA1SEng = "I will " + verbArrayFirst[randomVerbIndexFirst][3];
  var futA2SEng = "You will " + verbArrayFirst[randomVerbIndexFirst][3];
  var futA3SEng = singSubj[ranSubjIndex] + "will " + verbArrayFirst[randomVerbIndexFirst][3];

  var futA1PEng = "We will " + verbArrayFirst[randomVerbIndexFirst][3];
  var futA2PEng = "Ya'll will " + verbArrayFirst[randomVerbIndexFirst][3];
  var futA3PEng = "They will " + verbArrayFirst[randomVerbIndexFirst][3];


  var futVerb = [[futA1S,futA1SEng],[futA2S,futA2SEng], [futA3S, futA3SEng], [futA1P,futA1PEng],[futA2P,futA2PEng], [futA3P, futA3PEng]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(futVerb);



  //First Declension Latin Future PASSIVE Tense
  var futP1S = verbArrayFirst[randomVerbIndexFirst][0] + futP1stSing2;
  var futP2S = verbArrayFirst[randomVerbIndexFirst][0] + futP2ndSing2;
  var futP3S = verbArrayFirst[randomVerbIndexFirst][0] + futP3rdSing2;

  var futP1P = verbArrayFirst[randomVerbIndexFirst][0] + futP1stPl2;
  var futP2P = verbArrayFirst[randomVerbIndexFirst][0] + futP2ndPl2;
  var futP3P = verbArrayFirst[randomVerbIndexFirst][0] + futP3rdPl2;

  //First Declension English Translation Future PASSIVE Tense
  var futP1SEng = "I will be " + verbArrayFirst[randomVerbIndexFirst][7];
  var futP2SEng = "You will be " + verbArrayFirst[randomVerbIndexFirst][7];
  var futP3SEng = singSubj[ranSubjIndex] + "will be " + verbArrayFirst[randomVerbIndexFirst][7];

  var futP1PEng = "We will be " + verbArrayFirst[randomVerbIndexFirst][7];
  var futP2PEng = "Ya'll will be " + verbArrayFirst[randomVerbIndexFirst][7];
  var futP3PEng = "They will be " + verbArrayFirst[randomVerbIndexFirst][7];


  var futPVerb = [[futP1S,futP1SEng],[futP2S,futP2SEng], [futP3S, futP3SEng], [futP1P,futP1PEng],[futP2P,futP2PEng], [futP3P, futP3PEng]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(futPVerb);



  //First Declension Latin Perfect Tense
  var perA1S = verbArrayFirst[randomVerbIndexFirst][1] + per1stSing;
  var perA2S = verbArrayFirst[randomVerbIndexFirst][1] + per2ndSing;
  var perA3S = verbArrayFirst[randomVerbIndexFirst][1] + per3rdSing;

  var perA1P = verbArrayFirst[randomVerbIndexFirst][1] + per1stPl;
  var perA2P = verbArrayFirst[randomVerbIndexFirst][1] + per2ndPl;
  var perA3P = verbArrayFirst[randomVerbIndexFirst][1] + per3rdPl;

  //First Declension English Translation Perfect Tense
  var perA1SEng = "I " + verbArrayFirst[randomVerbIndexFirst][6];
  var perA2SEng = "You " + verbArrayFirst[randomVerbIndexFirst][6];
  var perA3SEng = singSubj[ranSubjIndex] + verbArrayFirst[randomVerbIndexFirst][6];

  var perA1PEng = "We " + verbArrayFirst[randomVerbIndexFirst][6];
  var perA2PEng = "Ya'll " + verbArrayFirst[randomVerbIndexFirst][6];
  var perA3PEng = "They " + verbArrayFirst[randomVerbIndexFirst][6];


  var perVerb = [[perA1S,perA1SEng],[perA2S,perA2SEng], [perA3S, perA3SEng], [perA1P,perA1PEng],[perA2P,perA2PEng], [perA3P, perA3PEng]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(perVerb);

  var ranPerSubjIndex = Math.floor(Math.random() * 3);
  var perfectSubjectSing = [["us","He "],["a","She "],["um","It "]];
  var perfectSubjectPl = [["ī"," The boys "],["ae"," The girls "],["a"," The things "]];



  //First Declension Latin Perfect PASSIVE Tense
  var perP1S = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[ranPerSubjIndex][0] + " sum";
  var perP2S = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[ranPerSubjIndex][0] + " es";
  var perP3Sm = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[0][0] + " est";
  var perP3Sf = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[1][0] + " est";
  var perP3Sn = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[2][0] + " est";


  var perP1P = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[ranPerSubjIndex][0] + " sumus";
  var perP2P = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[ranPerSubjIndex][0] + " estis";
  var perP3Pm = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[0][0] + " sunt";
  var perP3Pf = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[1][0] + " sunt";
  var perP3Pn = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[2][0] + " sunt";



  //First Declension English Translation Perfect PASSIVE Tense
  var perP1SEng = "I was " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP2SEng = "You were " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3SEngm = perfectSubjectSing[0][1] + "was " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3SEngf = perfectSubjectSing[1][1] + "was " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3SEngn = perfectSubjectSing[2][1] + "was " + verbArrayFirst[randomVerbIndexFirst][7];

  var perP1PEng = "We were " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP2PEng = "Ya'll were " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3PEng = "They were " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3PEngm = perfectSubjectPl[0][1] + "were " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3PEngf = perfectSubjectPl[1][1] + "were " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3PEngn = perfectSubjectPl[2][1] + "were " + verbArrayFirst[randomVerbIndexFirst][7];


  var perPVerb = [[perP1S,perP1SEng],[perP2S,perP2SEng], [perP3Sm, perP3SEngm], [perP3Sf, perP3SEngf],[perP3Sn, perP3SEngn],[perP1P,perP1PEng],[perP2P,perP2PEng], [perP3Pm, perP3PEngm],[perP3Pf, perP3PEngf],[perP3Pn, perP3PEngn]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(perPVerb);


  //First Declension Latin PLUPERFECT PASSIVE Tense
  var pluP1S = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[ranPerSubjIndex][0] + " eram";
  var pluP2S = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[ranPerSubjIndex][0] + " eras";
  var pluP3Sm = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[0][0] + " erat";
  var pluP3Sf = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[1][0] + " erat";
  var pluP3Sn = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[2][0] + " erat";


  var pluP1P = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[ranPerSubjIndex][0] + " eramus";
  var pluP2P = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[ranPerSubjIndex][0] + " eratis";
  var pluP3Pm = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[0][0] + " erant";
  var pluP3Pf = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[1][0] + " erant";
  var pluP3Pn = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[2][0] + " erant";



  //First Declension English Translation PLUPERFECT PASSIVE Tense
  var pluP1SEng = "I had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP2SEng = "You had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3SEngm = perfectSubjectSing[0][1] + "had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3SEngf = perfectSubjectSing[1][1] + "had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3SEngn = perfectSubjectSing[2][1] + "had been " + verbArrayFirst[randomVerbIndexFirst][7];

  var pluP1PEng = "We had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP2PEng = "Ya'll had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3PEng = "They had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3PEngm = perfectSubjectPl[0][1] + "had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3PEngf = perfectSubjectPl[1][1] + "had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3PEngn = perfectSubjectPl[2][1] + "had been " + verbArrayFirst[randomVerbIndexFirst][7];


  var pluPVerb = [[pluP1S,pluP1SEng],[pluP2S,pluP2SEng], [pluP3Sm, pluP3SEngm], [pluP3Sf, pluP3SEngf],[pluP3Sn, pluP3SEngn],[pluP1P,pluP1PEng],[pluP2P,pluP2PEng], [pluP3Pm, pluP3PEngm],[pluP3Pf, pluP3PEngf],[pluP3Pn, pluP3PEngn]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(pluPVerb);


  //First Declension Latin FUTURE PERFECT  PASSIVE Tense
  var futPerP1S = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[ranPerSubjIndex][0] + " ero";
  var futPerP2S = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[ranPerSubjIndex][0] + " eris";
  var futPerP3Sm = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[0][0] + " erit";
  var futPerP3Sf = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[1][0] + " erit";
  var futPerP3Sn = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[2][0] + " erit";


  var futPerP1P = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[ranPerSubjIndex][0] + " erimus";
  var futPerP2P = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[ranPerSubjIndex][0] + " eritis";
  var futPerP3Pm = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[0][0] + " erunt";
  var futPerP3Pf = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[1][0] + " erunt";
  var futPerP3Pn = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[2][0] + " erunt";



  //First Declension English Translation FUTURE PERFECT Perfect PASSIVE Tense
  var futPerP1SEng = "I will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP2SEng = "You will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3SEngm = perfectSubjectSing[0][1] + "will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3SEngf = perfectSubjectSing[1][1] + "will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3SEngn = perfectSubjectSing[2][1] + "will have been " + verbArrayFirst[randomVerbIndexFirst][7];

  var futPerP1PEng = "We will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP2PEng = "Ya'll will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3PEng = "They will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3PEngm = perfectSubjectPl[0][1] + "will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3PEngf = perfectSubjectPl[1][1] + "will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3PEngn = perfectSubjectPl[2][1] + "will have been " + verbArrayFirst[randomVerbIndexFirst][7];


  var futPerPVerb = [[futPerP1S,futPerP1SEng],[futPerP2S,futPerP2SEng], [futPerP3Sm, futPerP3SEngm], [futPerP3Sf, futPerP3SEngf],[futPerP3Sn, futPerP3SEngn],[futPerP1P,futPerP1PEng],[futPerP2P,futPerP2PEng], [futPerP3Pm, futPerP3PEngm],[futPerP3Pf, futPerP3PEngf],[futPerP3Pn, futPerP3PEngn]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(futPerPVerb);






  //var verb = [presVerb,perVerb,impVerb,futVerb];

  //shuffle(verb);


  //First Declension Latin Pluperfect Tense
  var pluA1S = verbArrayFirst[randomVerbIndexFirst][1] + plu1stSing;
  var pluA2S = verbArrayFirst[randomVerbIndexFirst][1] + plu2ndSing;
  var pluA3S = verbArrayFirst[randomVerbIndexFirst][1] + plu3rdSing;

  var pluA1P = verbArrayFirst[randomVerbIndexFirst][1] + plu1stPl;
  var pluA2P = verbArrayFirst[randomVerbIndexFirst][1] + plu2ndPl;
  var pluA3P = verbArrayFirst[randomVerbIndexFirst][1] + plu3rdPl;

  //First Declension English Translation Pluperfect Tense
  var pluA1SEng = "I had " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluA2SEng = "You had " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluA3SEng = singSubj[ranSubjIndex] + "had " + verbArrayFirst[randomVerbIndexFirst][7];

  var pluA1PEng = "We had " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluA2PEng = "Ya'll had " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluA3PEng = "They had " + verbArrayFirst[randomVerbIndexFirst][7];


  var pluVerb = [[pluA1S,pluA1SEng],[pluA2S,pluA2SEng], [pluA3S, pluA3SEng], [pluA1P,pluA1PEng],[pluA2P,pluA2PEng], [pluA3P, pluA3PEng]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(pluVerb);


  //First Declension Latin Future Perfect Tense
  var futPerA1S = verbArrayFirst[randomVerbIndexFirst][1] + futPer1stSing;
  var futPerA2S = verbArrayFirst[randomVerbIndexFirst][1] + futPer2ndSing;
  var futPerA3S = verbArrayFirst[randomVerbIndexFirst][1] + futPer3rdSing;

  var futPerA1P = verbArrayFirst[randomVerbIndexFirst][1] + futPer1stPl;
  var futPerA2P = verbArrayFirst[randomVerbIndexFirst][1] + futPer2ndPl;
  var futPerA3P = verbArrayFirst[randomVerbIndexFirst][1] + futPer3rdPl;

  //First Declension English Translation Future Perfect Tense
  var futPerA1SEng = "I will have " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerA2SEng = "You will have " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerA3SEng = singSubj[ranSubjIndex] + "will have " + verbArrayFirst[randomVerbIndexFirst][7];

  var futPerA1PEng = "We will have " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerA2PEng = "Ya'll will have " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerA3PEng = "They will have " + verbArrayFirst[randomVerbIndexFirst][7];


  var futPerVerb = [[futPerA1S,futPerA1SEng],[futPerA2S,futPerA2SEng], [futPerA3S, futPerA3SEng], [futPerA1P,futPerA1PEng],[futPerA2P,futPerA2PEng], [futPerA3P, futPerA3PEng]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(futPerVerb);


//var verb = [futPerPVerb];
var verb = [perPVerb,presVerb,perVerb,impVerb,futVerb,pluVerb,futPerVerb,presPVerb,impPVerb, futPVerb, pluPVerb,futPerPVerb];

//[perPVerb,presVerb,perVerb,impVerb,futVerb,pluVerb,futPerVerb,presPVerb,impPVerb, futPVerb];
  shuffle(verb);



  timeleft = 25;
  responseButton.innerHTML = "";
  //responseButton.onclick = function(){testIndirectStatement()};

      countDownTimer();

       countdown = setInterval(countDownTimer,1000);

       //shuffle(answers);


      startButton.disabled = true;



      ranISIndex = Math.floor(Math.random() * 1);


      if (ranISIndex == 0){

      sentence = verb[0][0][0];

        correctAnswer = verb[0][0][1];

        wrongAnswer1 = verb[0][1][1];

        wrongAnswer2 = verb[0][2][1];

        wrongAnswer3 = verb[0][3][1];


      checkAnswers = [[correctAnswer,true],[wrongAnswer1,false],[wrongAnswer2,false],[wrongAnswer3,false]];
      shuffle(checkAnswers);

  }

  startButton.innerHTML = sentence;

  document.getElementById(answers[0]).innerHTML = checkAnswers[0][0];

  document.getElementById(answers[1]).innerHTML = checkAnswers[1][0];

  document.getElementById(answers[2]).innerHTML =  checkAnswers[2][0];

  document.getElementById(answers[3]).innerHTML = checkAnswers[3][0];



    responseButton.disabled = false;



      resetAnswerColors();

      enableButtons();

        decrementCount();






      if (count == 0){

        gameOverAudio();

        startButton.innerHTML = "Select a New Game!";

        answerOne.innerHTML = game1Title;
        answerTwo.innerHTML = game2Title;
        answerThree.innerHTML = game3Title;
        answerFour.innerHTML = game4Title;

        document.getElementById("boxThree").innerHTML = "Score";
        responseButton.innerHTML = "You earned " + points + " points!";
        points = 0;

        stopTimer();
        document.getElementById("boxOne").innerHTML = "Timer";

        answerOne.onclick = function(){selectGame1()};
        answerTwo.onclick = function(){selectGame2()};
        answerThree.onclick = function(){selectGame3()};
        answerFour.onclick = function(){selectGame4()};

        count = 11;


         }

//resetUndefinedValues();


}














function ranVerbThird() {

  var verbArrayFirst = [["duc","dux","duct","lead","leads","leading","led","led"],["mitt","mīs","miss","send","sends","sending","sent","sent"]];

    var randomVerbIndexFirst = Math.floor(Math.random() * verbArrayFirst.length);

    var singSubj = ["He ", "She ", "It "];
    var ranSubjIndex = Math.floor(Math.random() * singSubj.length);

  //First Declension Latin Present Tense
  var pA1S3 = verbArrayFirst[randomVerbIndexFirst][0] + pres1stSing3;
  var pA2S3 = verbArrayFirst[randomVerbIndexFirst][0] + pres2ndSing3;
  var pA3S3 = verbArrayFirst[randomVerbIndexFirst][0] + pres3rdSing3;

  var pA1P3 = verbArrayFirst[randomVerbIndexFirst][0] + pres1stPl3;
  var pA2P3 = verbArrayFirst[randomVerbIndexFirst][0] + pres2ndPl3;
  var pA3P3 = verbArrayFirst[randomVerbIndexFirst][0] + pres3rdPl3;

  //First Declension English Translation Present Tense
  var pA1SEng3 = "I " + verbArrayFirst[randomVerbIndexFirst][3];
  var pA2SEng3 = "You " + verbArrayFirst[randomVerbIndexFirst][3];
  var pA3SEng3 = singSubj[ranSubjIndex] + verbArrayFirst[randomVerbIndexFirst][4];

  var pA1PEng3 = "We " + verbArrayFirst[randomVerbIndexFirst][3];
  var pA2PEng3 = "Ya'll " + verbArrayFirst[randomVerbIndexFirst][3];
  var pA3PEng3 = "They " + verbArrayFirst[randomVerbIndexFirst][3];


  var presVerb3 = [[pA1S3,pA1SEng3],[pA2S3,pA2SEng3], [pA3S3, pA3SEng3], [pA1P3,pA1PEng3],[pA2P3,pA2PEng3], [pA3P3, pA3PEng3]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(presVerb3);


  //First Declension Latin Present PASSIVE Tense
  var pP1S3 = verbArrayFirst[randomVerbIndexFirst][0] + presP1stSing3;
  var pP2S3 = verbArrayFirst[randomVerbIndexFirst][0] + presP2ndSing3;
  var pP3S3 = verbArrayFirst[randomVerbIndexFirst][0] + presP3rdSing3;

  var pP1P3 = verbArrayFirst[randomVerbIndexFirst][0] + presP1stPl3;
  var pP2P3 = verbArrayFirst[randomVerbIndexFirst][0] + presP2ndPl3;
  var pP3P3 = verbArrayFirst[randomVerbIndexFirst][0] + presP3rdPl3;

  //First Declension English Translation Present PASSIVE Tense
  var pP1SEng3 = "I am " + verbArrayFirst[randomVerbIndexFirst][7];
  var pP2SEng3 = "You are " + verbArrayFirst[randomVerbIndexFirst][7];
  var pP3SEng3 = singSubj[ranSubjIndex] + "is " + verbArrayFirst[randomVerbIndexFirst][7];

  var pP1PEng3 = "We are " + verbArrayFirst[randomVerbIndexFirst][7];
  var pP2PEng3 = "Ya'll are " + verbArrayFirst[randomVerbIndexFirst][7];
  var pP3PEng3 = "They are " + verbArrayFirst[randomVerbIndexFirst][7];


  var presPVerb3 = [[pP1S3,pP1SEng3],[pP2S3,pP2SEng3], [pP3S3, pP3SEng3], [pP1P3,pP1PEng3],[pP2P3,pP2PEng3], [pP3P3, pP3PEng3]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(presPVerb3);




  //First Declension Latin Imperfect Tense
  var impA1S3 = verbArrayFirst[randomVerbIndexFirst][0] + imp1stSing3;
  var impA2S3 = verbArrayFirst[randomVerbIndexFirst][0] + imp2ndSing3;
  var impA3S3 = verbArrayFirst[randomVerbIndexFirst][0] + imp3rdSing3;

  var impA1P3 = verbArrayFirst[randomVerbIndexFirst][0] + imp1stPl3;
  var impA2P3 = verbArrayFirst[randomVerbIndexFirst][0] + imp2ndPl3;
  var impA3P3 = verbArrayFirst[randomVerbIndexFirst][0] + imp3rdPl3;

  //First Declension English Translation Imperfect Tense
  var impA1SEng3 = "I was " + verbArrayFirst[randomVerbIndexFirst][5];
  var impA2SEng3 = "You were " + verbArrayFirst[randomVerbIndexFirst][5];
  var impA3SEng3 = singSubj[ranSubjIndex] + "was " + verbArrayFirst[randomVerbIndexFirst][5];

  var impA1PEng3 = "We were " + verbArrayFirst[randomVerbIndexFirst][5];
  var impA2PEng3 = "Ya'll were " + verbArrayFirst[randomVerbIndexFirst][5];
  var impA3PEng3 = "They were " + verbArrayFirst[randomVerbIndexFirst][5];

  var impVerb3 = [[impA1S3,impA1SEng3],[impA2S3,impA2SEng3], [impA3S3, impA3SEng3], [impA1P3,impA1PEng3],[impA2P3,impA2PEng3], [impA3P3, impA3PEng3]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(impVerb3);





  //First Declension Latin Imperfect PASSIVE Tense
  var impP1S3 = verbArrayFirst[randomVerbIndexFirst][0] + impP1stSing3;
  var impP2S3 = verbArrayFirst[randomVerbIndexFirst][0] + impP2ndSing3;
  var impP3S3 = verbArrayFirst[randomVerbIndexFirst][0] + impP3rdSing3;

  var impP1P3 = verbArrayFirst[randomVerbIndexFirst][0] + impP1stPl3;
  var impP2P3 = verbArrayFirst[randomVerbIndexFirst][0] + impP2ndPl3;
  var impP3P3 = verbArrayFirst[randomVerbIndexFirst][0] + impP3rdPl3;

  //First Declension English Translation Imperfect PASSIVE Tense
  var impP1SEng3 = "I was being " + verbArrayFirst[randomVerbIndexFirst][7];
  var impP2SEng3 = "You were being " + verbArrayFirst[randomVerbIndexFirst][7];
  var impP3SEng3 = singSubj[ranSubjIndex] + "was being " + verbArrayFirst[randomVerbIndexFirst][7];

  var impP1PEng3 = "We were being " + verbArrayFirst[randomVerbIndexFirst][7];
  var impP2PEng3 = "Ya'll were being " + verbArrayFirst[randomVerbIndexFirst][7];
  var impP3PEng3 = "They were being " + verbArrayFirst[randomVerbIndexFirst][7];

  var impPVerb3 = [[impP1S3,impP1SEng3],[impP2S3,impP2SEng3], [impP3S3, impP3SEng3], [impP1P3,impP1PEng3],[impP2P3,impP2PEng3], [impP3P3, impP3PEng3]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(impPVerb3);




  //First Declension Latin Future Tense
  var futA1S3 = verbArrayFirst[randomVerbIndexFirst][0] + fut1stSing3;
  var futA2S3 = verbArrayFirst[randomVerbIndexFirst][0] + fut2ndSing3;
  var futA3S3 = verbArrayFirst[randomVerbIndexFirst][0] + fut3rdSing3;

  var futA1P3 = verbArrayFirst[randomVerbIndexFirst][0] + fut1stPl3;
  var futA2P3 = verbArrayFirst[randomVerbIndexFirst][0] + fut2ndPl3;
  var futA3P3 = verbArrayFirst[randomVerbIndexFirst][0] + fut3rdPl3;

  //First Declension English Translation Future Tense
  var futA1SEng3 = "I will " + verbArrayFirst[randomVerbIndexFirst][3];
  var futA2SEng3 = "You will " + verbArrayFirst[randomVerbIndexFirst][3];
  var futA3SEng3 = singSubj[ranSubjIndex] + "will " + verbArrayFirst[randomVerbIndexFirst][3];

  var futA1PEng3 = "We will " + verbArrayFirst[randomVerbIndexFirst][3];
  var futA2PEng3 = "Ya'll will " + verbArrayFirst[randomVerbIndexFirst][3];
  var futA3PEng3 = "They will " + verbArrayFirst[randomVerbIndexFirst][3];


  var futVerb3 = [[futA1S3,futA1SEng3],[futA2S3,futA2SEng3], [futA3S3, futA3SEng3], [futA1P3,futA1PEng3],[futA2P3,futA2PEng3], [futA3P3, futA3PEng3]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(futVerb3);



  //First Declension Latin Future PASSIVE Tense
  var futP1S3 = verbArrayFirst[randomVerbIndexFirst][0] + futP1stSing3;
  var futP2S3 = verbArrayFirst[randomVerbIndexFirst][0] + futP2ndSing3;
  var futP3S3 = verbArrayFirst[randomVerbIndexFirst][0] + futP3rdSing3;

  var futP1P3 = verbArrayFirst[randomVerbIndexFirst][0] + futP1stPl3;
  var futP2P3 = verbArrayFirst[randomVerbIndexFirst][0] + futP2ndPl3;
  var futP3P3 = verbArrayFirst[randomVerbIndexFirst][0] + futP3rdPl3;

  //First Declension English Translation Future PASSIVE Tense
  var futP1SEng3 = "I will be " + verbArrayFirst[randomVerbIndexFirst][7];
  var futP2SEng3 = "You will be " + verbArrayFirst[randomVerbIndexFirst][7];
  var futP3SEng3 = singSubj[ranSubjIndex] + "will be " + verbArrayFirst[randomVerbIndexFirst][7];

  var futP1PEng3 = "We will be " + verbArrayFirst[randomVerbIndexFirst][7];
  var futP2PEng3 = "Ya'll will be " + verbArrayFirst[randomVerbIndexFirst][7];
  var futP3PEng3 = "They will be " + verbArrayFirst[randomVerbIndexFirst][7];


  var futPVerb3 = [[futP1S3,futP1SEng3],[futP2S3,futP2SEng3], [futP3S3, futP3SEng3], [futP1P3,futP1PEng3],[futP2P3,futP2PEng3], [futP3P3, futP3PEng3]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(futPVerb3);



  //First Declension Latin Perfect Tense
  var perA1S = verbArrayFirst[randomVerbIndexFirst][1] + per1stSing;
  var perA2S = verbArrayFirst[randomVerbIndexFirst][1] + per2ndSing;
  var perA3S = verbArrayFirst[randomVerbIndexFirst][1] + per3rdSing;

  var perA1P = verbArrayFirst[randomVerbIndexFirst][1] + per1stPl;
  var perA2P = verbArrayFirst[randomVerbIndexFirst][1] + per2ndPl;
  var perA3P = verbArrayFirst[randomVerbIndexFirst][1] + per3rdPl;

  //First Declension English Translation Perfect Tense
  var perA1SEng = "I " + verbArrayFirst[randomVerbIndexFirst][6];
  var perA2SEng = "You " + verbArrayFirst[randomVerbIndexFirst][6];
  var perA3SEng = singSubj[ranSubjIndex] + verbArrayFirst[randomVerbIndexFirst][6];

  var perA1PEng = "We " + verbArrayFirst[randomVerbIndexFirst][6];
  var perA2PEng = "Ya'll " + verbArrayFirst[randomVerbIndexFirst][6];
  var perA3PEng = "They " + verbArrayFirst[randomVerbIndexFirst][6];


  var perVerb = [[perA1S,perA1SEng],[perA2S,perA2SEng], [perA3S, perA3SEng], [perA1P,perA1PEng],[perA2P,perA2PEng], [perA3P, perA3PEng]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(perVerb);

  var ranPerSubjIndex = Math.floor(Math.random() * 3);
  var perfectSubjectSing = [["us","He "],["a","She "],["um","It "]];
  var perfectSubjectPl = [["ī"," The boys "],["ae"," The girls "],["a"," The things "]];



  //First Declension Latin Perfect PASSIVE Tense
  var perP1S = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[ranPerSubjIndex][0] + " sum";
  var perP2S = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[ranPerSubjIndex][0] + " es";
  var perP3Sm = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[0][0] + " est";
  var perP3Sf = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[1][0] + " est";
  var perP3Sn = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[2][0] + " est";


  var perP1P = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[ranPerSubjIndex][0] + " sumus";
  var perP2P = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[ranPerSubjIndex][0] + " estis";
  var perP3Pm = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[0][0] + " sunt";
  var perP3Pf = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[1][0] + " sunt";
  var perP3Pn = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[2][0] + " sunt";



  //First Declension English Translation Perfect PASSIVE Tense
  var perP1SEng = "I was " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP2SEng = "You were " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3SEngm = perfectSubjectSing[0][1] + "was " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3SEngf = perfectSubjectSing[1][1] + "was " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3SEngn = perfectSubjectSing[2][1] + "was " + verbArrayFirst[randomVerbIndexFirst][7];

  var perP1PEng = "We were " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP2PEng = "Ya'll were " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3PEng = "They were " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3PEngm = perfectSubjectPl[0][1] + "were " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3PEngf = perfectSubjectPl[1][1] + "were " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3PEngn = perfectSubjectPl[2][1] + "were " + verbArrayFirst[randomVerbIndexFirst][7];


  var perPVerb = [[perP1S,perP1SEng],[perP2S,perP2SEng], [perP3Sm, perP3SEngm], [perP3Sf, perP3SEngf],[perP3Sn, perP3SEngn],[perP1P,perP1PEng],[perP2P,perP2PEng], [perP3Pm, perP3PEngm],[perP3Pf, perP3PEngf],[perP3Pn, perP3PEngn]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(perPVerb);


  //First Declension Latin PLUPERFECT PASSIVE Tense
  var pluP1S = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[ranPerSubjIndex][0] + " eram";
  var pluP2S = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[ranPerSubjIndex][0] + " eras";
  var pluP3Sm = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[0][0] + " erat";
  var pluP3Sf = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[1][0] + " erat";
  var pluP3Sn = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[2][0] + " erat";


  var pluP1P = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[ranPerSubjIndex][0] + " eramus";
  var pluP2P = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[ranPerSubjIndex][0] + " eratis";
  var pluP3Pm = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[0][0] + " erant";
  var pluP3Pf = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[1][0] + " erant";
  var pluP3Pn = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[2][0] + " erant";



  //First Declension English Translation PLUPERFECT PASSIVE Tense
  var pluP1SEng = "I had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP2SEng = "You had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3SEngm = perfectSubjectSing[0][1] + "had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3SEngf = perfectSubjectSing[1][1] + "had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3SEngn = perfectSubjectSing[2][1] + "had been " + verbArrayFirst[randomVerbIndexFirst][7];

  var pluP1PEng = "We had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP2PEng = "Ya'll had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3PEng = "They had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3PEngm = perfectSubjectPl[0][1] + "had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3PEngf = perfectSubjectPl[1][1] + "had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3PEngn = perfectSubjectPl[2][1] + "had been " + verbArrayFirst[randomVerbIndexFirst][7];


  var pluPVerb = [[pluP1S,pluP1SEng],[pluP2S,pluP2SEng], [pluP3Sm, pluP3SEngm], [pluP3Sf, pluP3SEngf],[pluP3Sn, pluP3SEngn],[pluP1P,pluP1PEng],[pluP2P,pluP2PEng], [pluP3Pm, pluP3PEngm],[pluP3Pf, pluP3PEngf],[pluP3Pn, pluP3PEngn]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(pluPVerb);


  //First Declension Latin FUTURE PERFECT  PASSIVE Tense
  var futPerP1S = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[ranPerSubjIndex][0] + " ero";
  var futPerP2S = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[ranPerSubjIndex][0] + " eris";
  var futPerP3Sm = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[0][0] + " erit";
  var futPerP3Sf = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[1][0] + " erit";
  var futPerP3Sn = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[2][0] + " erit";


  var futPerP1P = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[ranPerSubjIndex][0] + " erimus";
  var futPerP2P = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[ranPerSubjIndex][0] + " eritis";
  var futPerP3Pm = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[0][0] + " erunt";
  var futPerP3Pf = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[1][0] + " erunt";
  var futPerP3Pn = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[2][0] + " erunt";



  //First Declension English Translation FUTURE PERFECT Perfect PASSIVE Tense
  var futPerP1SEng = "I will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP2SEng = "You will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3SEngm = perfectSubjectSing[0][1] + "will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3SEngf = perfectSubjectSing[1][1] + "will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3SEngn = perfectSubjectSing[2][1] + "will have been " + verbArrayFirst[randomVerbIndexFirst][7];

  var futPerP1PEng = "We will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP2PEng = "Ya'll will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3PEng = "They will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3PEngm = perfectSubjectPl[0][1] + "will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3PEngf = perfectSubjectPl[1][1] + "will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3PEngn = perfectSubjectPl[2][1] + "will have been " + verbArrayFirst[randomVerbIndexFirst][7];


  var futPerPVerb = [[futPerP1S,futPerP1SEng],[futPerP2S,futPerP2SEng], [futPerP3Sm, futPerP3SEngm], [futPerP3Sf, futPerP3SEngf],[futPerP3Sn, futPerP3SEngn],[futPerP1P,futPerP1PEng],[futPerP2P,futPerP2PEng], [futPerP3Pm, futPerP3PEngm],[futPerP3Pf, futPerP3PEngf],[futPerP3Pn, futPerP3PEngn]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(futPerPVerb);






  //var verb = [presVerb,perVerb,impVerb,futVerb];

  //shuffle(verb);


  //First Declension Latin Pluperfect Tense
  var pluA1S = verbArrayFirst[randomVerbIndexFirst][1] + plu1stSing;
  var pluA2S = verbArrayFirst[randomVerbIndexFirst][1] + plu2ndSing;
  var pluA3S = verbArrayFirst[randomVerbIndexFirst][1] + plu3rdSing;

  var pluA1P = verbArrayFirst[randomVerbIndexFirst][1] + plu1stPl;
  var pluA2P = verbArrayFirst[randomVerbIndexFirst][1] + plu2ndPl;
  var pluA3P = verbArrayFirst[randomVerbIndexFirst][1] + plu3rdPl;

  //First Declension English Translation Pluperfect Tense
  var pluA1SEng = "I had " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluA2SEng = "You had " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluA3SEng = singSubj[ranSubjIndex] + "had " + verbArrayFirst[randomVerbIndexFirst][7];

  var pluA1PEng = "We had " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluA2PEng = "Ya'll had " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluA3PEng = "They had " + verbArrayFirst[randomVerbIndexFirst][7];


  var pluVerb = [[pluA1S,pluA1SEng],[pluA2S,pluA2SEng], [pluA3S, pluA3SEng], [pluA1P,pluA1PEng],[pluA2P,pluA2PEng], [pluA3P, pluA3PEng]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(pluVerb);


  //First Declension Latin Future Perfect Tense
  var futPerA1S = verbArrayFirst[randomVerbIndexFirst][1] + futPer1stSing;
  var futPerA2S = verbArrayFirst[randomVerbIndexFirst][1] + futPer2ndSing;
  var futPerA3S = verbArrayFirst[randomVerbIndexFirst][1] + futPer3rdSing;

  var futPerA1P = verbArrayFirst[randomVerbIndexFirst][1] + futPer1stPl;
  var futPerA2P = verbArrayFirst[randomVerbIndexFirst][1] + futPer2ndPl;
  var futPerA3P = verbArrayFirst[randomVerbIndexFirst][1] + futPer3rdPl;

  //First Declension English Translation Future Perfect Tense
  var futPerA1SEng = "I will have " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerA2SEng = "You will have " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerA3SEng = singSubj[ranSubjIndex] + "will have " + verbArrayFirst[randomVerbIndexFirst][7];

  var futPerA1PEng = "We will have " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerA2PEng = "Ya'll will have " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerA3PEng = "They will have " + verbArrayFirst[randomVerbIndexFirst][7];


  var futPerVerb = [[futPerA1S,futPerA1SEng],[futPerA2S,futPerA2SEng], [futPerA3S, futPerA3SEng], [futPerA1P,futPerA1PEng],[futPerA2P,futPerA2PEng], [futPerA3P, futPerA3PEng]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(futPerVerb);


//var verb = [futPerPVerb];
var verb = [perPVerb,presVerb3,perVerb,impVerb3,futVerb3,pluVerb,futPerVerb,presPVerb3,impPVerb3, futPVerb3, pluPVerb,futPerPVerb];

//[perPVerb,presVerb,perVerb,impVerb,futVerb,pluVerb,futPerVerb,presPVerb,impPVerb, futPVerb];
  shuffle(verb);



  timeleft = 25;
  responseButton.innerHTML = "";
  //responseButton.onclick = function(){testIndirectStatement()};

      countDownTimer();

       countdown = setInterval(countDownTimer,1000);

       //shuffle(answers);


      startButton.disabled = true;



      ranISIndex = Math.floor(Math.random() * 1);


      if (ranISIndex == 0){

      sentence = verb[0][0][0];

        correctAnswer = verb[0][0][1];

        wrongAnswer1 = verb[0][1][1];

        wrongAnswer2 = verb[0][2][1];

        wrongAnswer3 = verb[0][3][1];


      checkAnswers = [[correctAnswer,true],[wrongAnswer1,false],[wrongAnswer2,false],[wrongAnswer3,false]];
      shuffle(checkAnswers);

  }

  startButton.innerHTML = sentence;

  document.getElementById(answers[0]).innerHTML = checkAnswers[0][0];

  document.getElementById(answers[1]).innerHTML = checkAnswers[1][0];

  document.getElementById(answers[2]).innerHTML =  checkAnswers[2][0];

  document.getElementById(answers[3]).innerHTML = checkAnswers[3][0];



    responseButton.disabled = false;



      resetAnswerColors();

      enableButtons();

        decrementCount();






      if (count == 0){

        gameOverAudio();

        startButton.innerHTML = "Select a New Game!";

        answerOne.innerHTML = game1Title;
        answerTwo.innerHTML = game2Title;
        answerThree.innerHTML = game3Title;
        answerFour.innerHTML = game4Title;

        document.getElementById("boxThree").innerHTML = "Score";
        responseButton.innerHTML = "You earned " + points + " points!";
        points = 0;

        stopTimer();
        document.getElementById("boxOne").innerHTML = "Timer";

        answerOne.onclick = function(){selectGame1()};
        answerTwo.onclick = function(){selectGame2()};
        answerThree.onclick = function(){selectGame3()};
        answerFour.onclick = function(){selectGame4()};

        count = 11;


         }

//resetUndefinedValues();


}







function ranVerb3io() {

  var verbArrayFirst = [["cap","cēp","capt","capture","captures","capturing","captured","captured"],["iac","iēc","iact","throw","throws","throwing","threw","thrown"]];

    var randomVerbIndexFirst = Math.floor(Math.random() * verbArrayFirst.length);

    var singSubj = ["He ", "She ", "It "];
    var ranSubjIndex = Math.floor(Math.random() * singSubj.length);

  //First Declension Latin Present Tense
  var pA1S3io = verbArrayFirst[randomVerbIndexFirst][0] + pres1stSing3io;
  var pA2S3io = verbArrayFirst[randomVerbIndexFirst][0] + pres2ndSing3io;
  var pA3S3io = verbArrayFirst[randomVerbIndexFirst][0] + pres3rdSing3io;

  var pA1P3io = verbArrayFirst[randomVerbIndexFirst][0] + pres1stPl3io;
  var pA2P3io = verbArrayFirst[randomVerbIndexFirst][0] + pres2ndPl3io;
  var pA3P3io = verbArrayFirst[randomVerbIndexFirst][0] + pres3rdPl3io;

  //First Declension English Translation Present Tense
  var pA1SEng3io = "I " + verbArrayFirst[randomVerbIndexFirst][3];
  var pA2SEng3io = "You " + verbArrayFirst[randomVerbIndexFirst][3];
  var pA3SEng3io = singSubj[ranSubjIndex] + verbArrayFirst[randomVerbIndexFirst][4];

  var pA1PEng3io = "We " + verbArrayFirst[randomVerbIndexFirst][3];
  var pA2PEng3io = "Ya'll " + verbArrayFirst[randomVerbIndexFirst][3];
  var pA3PEng3io = "They " + verbArrayFirst[randomVerbIndexFirst][3];


  var presVerb3io = [[pA1S3io,pA1SEng3io],[pA2S3io,pA2SEng3io], [pA3S3io, pA3SEng3io], [pA1P3io,pA1PEng3io],[pA2P3io,pA2PEng3io], [pA3P3io, pA3PEng3io]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(presVerb3io);


  //First Declension Latin Present PASSIVE Tense
  var pP1S3io = verbArrayFirst[randomVerbIndexFirst][0] + presP1stSing3io;
  var pP2S3io = verbArrayFirst[randomVerbIndexFirst][0] + presP2ndSing3io;
  var pP3S3io = verbArrayFirst[randomVerbIndexFirst][0] + presP3rdSing3io;

  var pP1P3io = verbArrayFirst[randomVerbIndexFirst][0] + presP1stPl3io;
  var pP2P3io = verbArrayFirst[randomVerbIndexFirst][0] + presP2ndPl3io;
  var pP3P3io = verbArrayFirst[randomVerbIndexFirst][0] + presP3rdPl3io;

  //First Declension English Translation Present PASSIVE Tense
  var pP1SEng3io = "I am " + verbArrayFirst[randomVerbIndexFirst][7];
  var pP2SEng3io = "You are " + verbArrayFirst[randomVerbIndexFirst][7];
  var pP3SEng3io = singSubj[ranSubjIndex] + "is " + verbArrayFirst[randomVerbIndexFirst][7];

  var pP1PEng3io = "We are " + verbArrayFirst[randomVerbIndexFirst][7];
  var pP2PEng3io = "Ya'll are " + verbArrayFirst[randomVerbIndexFirst][7];
  var pP3PEng3io = "They are " + verbArrayFirst[randomVerbIndexFirst][7];


  var presPVerb3io = [[pP1S3io,pP1SEng3io],[pP2S3io,pP2SEng3io], [pP3S3io, pP3SEng3io], [pP1P3io,pP1PEng3io],[pP2P3io,pP2PEng3io], [pP3P3io, pP3PEng3io]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(presPVerb3io);




  //First Declension Latin Imperfect Tense
  var impA1S3io = verbArrayFirst[randomVerbIndexFirst][0] + imp1stSing3io4;
  var impA2S3io = verbArrayFirst[randomVerbIndexFirst][0] + imp2ndSing3io4;
  var impA3S3io = verbArrayFirst[randomVerbIndexFirst][0] + imp3rdSing3io4;

  var impA1P3io = verbArrayFirst[randomVerbIndexFirst][0] + imp1stPl3io4;
  var impA2P3io = verbArrayFirst[randomVerbIndexFirst][0] + imp2ndPl3io4;
  var impA3P3io = verbArrayFirst[randomVerbIndexFirst][0] + imp3rdPl3io4;

  //First Declension English Translation Imperfect Tense
  var impA1SEng3io = "I was " + verbArrayFirst[randomVerbIndexFirst][5];
  var impA2SEng3io = "You were " + verbArrayFirst[randomVerbIndexFirst][5];
  var impA3SEng3io = singSubj[ranSubjIndex] + "was " + verbArrayFirst[randomVerbIndexFirst][5];

  var impA1PEng3io = "We were " + verbArrayFirst[randomVerbIndexFirst][5];
  var impA2PEng3io = "Ya'll were " + verbArrayFirst[randomVerbIndexFirst][5];
  var impA3PEng3io = "They were " + verbArrayFirst[randomVerbIndexFirst][5];

  var impVerb3io = [[impA1S3io,impA1SEng3io],[impA2S3io,impA2SEng3io], [impA3S3io, impA3SEng3io], [impA1P3io,impA1PEng3io],[impA2P3io,impA2PEng3io], [impA3P3io, impA3PEng3io]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(impVerb3io);





  //First Declension Latin Imperfect PASSIVE Tense
  var impP1S3io = verbArrayFirst[randomVerbIndexFirst][0] + impP1stSing3io4;
  var impP2S3io = verbArrayFirst[randomVerbIndexFirst][0] + impP2ndSing3io4;
  var impP3S3io = verbArrayFirst[randomVerbIndexFirst][0] + impP3rdSing3io4;

  var impP1P3io = verbArrayFirst[randomVerbIndexFirst][0] + impP1stPl3io4;
  var impP2P3io = verbArrayFirst[randomVerbIndexFirst][0] + impP2ndPl3io4;
  var impP3P3io = verbArrayFirst[randomVerbIndexFirst][0] + impP3rdPl3io4;

  //First Declension English Translation Imperfect PASSIVE Tense
  var impP1SEng3io = "I was being " + verbArrayFirst[randomVerbIndexFirst][7];
  var impP2SEng3io = "You were being " + verbArrayFirst[randomVerbIndexFirst][7];
  var impP3SEng3io = singSubj[ranSubjIndex] + "was being " + verbArrayFirst[randomVerbIndexFirst][7];

  var impP1PEng3io = "We were being " + verbArrayFirst[randomVerbIndexFirst][7];
  var impP2PEng3io = "Ya'll were being " + verbArrayFirst[randomVerbIndexFirst][7];
  var impP3PEng3io = "They were being " + verbArrayFirst[randomVerbIndexFirst][7];

  var impPVerb3io = [[impP1S3io,impP1SEng3io],[impP2S3io,impP2SEng3io], [impP3S3io, impP3SEng3io], [impP1P3io,impP1PEng3io],[impP2P3io,impP2PEng3io], [impP3P3io, impP3PEng3io]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(impPVerb3io);




  //First Declension Latin Future Tense
  var futA1S3io = verbArrayFirst[randomVerbIndexFirst][0] + fut1stSing3io4;
  var futA2S3io = verbArrayFirst[randomVerbIndexFirst][0] + fut2ndSing3io4;
  var futA3S3io = verbArrayFirst[randomVerbIndexFirst][0] + fut3rdSing3io4;

  var futA1P3io = verbArrayFirst[randomVerbIndexFirst][0] + fut1stPl3io4;
  var futA2P3io = verbArrayFirst[randomVerbIndexFirst][0] + fut2ndPl3io4;
  var futA3P3io = verbArrayFirst[randomVerbIndexFirst][0] + fut3rdPl3io4;

  //First Declension English Translation Future Tense
  var futA1SEng3io = "I will " + verbArrayFirst[randomVerbIndexFirst][3];
  var futA2SEng3io = "You will " + verbArrayFirst[randomVerbIndexFirst][3];
  var futA3SEng3io = singSubj[ranSubjIndex] + "will " + verbArrayFirst[randomVerbIndexFirst][3];

  var futA1PEng3io = "We will " + verbArrayFirst[randomVerbIndexFirst][3];
  var futA2PEng3io = "Ya'll will " + verbArrayFirst[randomVerbIndexFirst][3];
  var futA3PEng3io = "They will " + verbArrayFirst[randomVerbIndexFirst][3];


  var futVerb3io = [[futA1S3io,futA1SEng3io],[futA2S3io,futA2SEng3io], [futA3S3io, futA3SEng3io], [futA1P3io,futA1PEng3io],[futA2P3io,futA2PEng3io], [futA3P3io, futA3PEng3io]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(futVerb3io);



  //First Declension Latin Future PASSIVE Tense
  var futP1S3io = verbArrayFirst[randomVerbIndexFirst][0] + futP1stSing3io4;
  var futP2S3io = verbArrayFirst[randomVerbIndexFirst][0] + futP2ndSing3io4;
  var futP3S3io = verbArrayFirst[randomVerbIndexFirst][0] + futP3rdSing3io4;

  var futP1P3io = verbArrayFirst[randomVerbIndexFirst][0] + futP1stPl3io4;
  var futP2P3io = verbArrayFirst[randomVerbIndexFirst][0] + futP2ndPl3io4;
  var futP3P3io = verbArrayFirst[randomVerbIndexFirst][0] + futP3rdPl3io4;

  //First Declension English Translation Future PASSIVE Tense
  var futP1SEng3io = "I will be " + verbArrayFirst[randomVerbIndexFirst][7];
  var futP2SEng3io = "You will be " + verbArrayFirst[randomVerbIndexFirst][7];
  var futP3SEng3io = singSubj[ranSubjIndex] + "will be " + verbArrayFirst[randomVerbIndexFirst][7];

  var futP1PEng3io = "We will be " + verbArrayFirst[randomVerbIndexFirst][7];
  var futP2PEng3io = "Ya'll will be " + verbArrayFirst[randomVerbIndexFirst][7];
  var futP3PEng3io = "They will be " + verbArrayFirst[randomVerbIndexFirst][7];


  var futPVerb3io = [[futP1S3io,futP1SEng3io],[futP2S3io,futP2SEng3io], [futP3S3io, futP3SEng3io], [futP1P3io,futP1PEng3io],[futP2P3io,futP2PEng3io], [futP3P3io, futP3PEng3io]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(futPVerb3io);



  //First Declension Latin Perfect Tense
  var perA1S = verbArrayFirst[randomVerbIndexFirst][1] + per1stSing;
  var perA2S = verbArrayFirst[randomVerbIndexFirst][1] + per2ndSing;
  var perA3S = verbArrayFirst[randomVerbIndexFirst][1] + per3rdSing;

  var perA1P = verbArrayFirst[randomVerbIndexFirst][1] + per1stPl;
  var perA2P = verbArrayFirst[randomVerbIndexFirst][1] + per2ndPl;
  var perA3P = verbArrayFirst[randomVerbIndexFirst][1] + per3rdPl;

  //First Declension English Translation Perfect Tense
  var perA1SEng = "I " + verbArrayFirst[randomVerbIndexFirst][6];
  var perA2SEng = "You " + verbArrayFirst[randomVerbIndexFirst][6];
  var perA3SEng = singSubj[ranSubjIndex] + verbArrayFirst[randomVerbIndexFirst][6];

  var perA1PEng = "We " + verbArrayFirst[randomVerbIndexFirst][6];
  var perA2PEng = "Ya'll " + verbArrayFirst[randomVerbIndexFirst][6];
  var perA3PEng = "They " + verbArrayFirst[randomVerbIndexFirst][6];


  var perVerb = [[perA1S,perA1SEng],[perA2S,perA2SEng], [perA3S, perA3SEng], [perA1P,perA1PEng],[perA2P,perA2PEng], [perA3P, perA3PEng]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(perVerb);

  var ranPerSubjIndex = Math.floor(Math.random() * 3);
  var perfectSubjectSing = [["us","He "],["a","She "],["um","It "]];
  var perfectSubjectPl = [["ī"," The boys "],["ae"," The girls "],["a"," The things "]];



  //First Declension Latin Perfect PASSIVE Tense
  var perP1S = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[ranPerSubjIndex][0] + " sum";
  var perP2S = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[ranPerSubjIndex][0] + " es";
  var perP3Sm = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[0][0] + " est";
  var perP3Sf = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[1][0] + " est";
  var perP3Sn = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[2][0] + " est";


  var perP1P = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[ranPerSubjIndex][0] + " sumus";
  var perP2P = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[ranPerSubjIndex][0] + " estis";
  var perP3Pm = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[0][0] + " sunt";
  var perP3Pf = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[1][0] + " sunt";
  var perP3Pn = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[2][0] + " sunt";



  //First Declension English Translation Perfect PASSIVE Tense
  var perP1SEng = "I was " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP2SEng = "You were " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3SEngm = perfectSubjectSing[0][1] + "was " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3SEngf = perfectSubjectSing[1][1] + "was " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3SEngn = perfectSubjectSing[2][1] + "was " + verbArrayFirst[randomVerbIndexFirst][7];

  var perP1PEng = "We were " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP2PEng = "Ya'll were " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3PEng = "They were " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3PEngm = perfectSubjectPl[0][1] + "were " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3PEngf = perfectSubjectPl[1][1] + "were " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3PEngn = perfectSubjectPl[2][1] + "were " + verbArrayFirst[randomVerbIndexFirst][7];


  var perPVerb = [[perP1S,perP1SEng],[perP2S,perP2SEng], [perP3Sm, perP3SEngm], [perP3Sf, perP3SEngf],[perP3Sn, perP3SEngn],[perP1P,perP1PEng],[perP2P,perP2PEng], [perP3Pm, perP3PEngm],[perP3Pf, perP3PEngf],[perP3Pn, perP3PEngn]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(perPVerb);


  //First Declension Latin PLUPERFECT PASSIVE Tense
  var pluP1S = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[ranPerSubjIndex][0] + " eram";
  var pluP2S = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[ranPerSubjIndex][0] + " eras";
  var pluP3Sm = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[0][0] + " erat";
  var pluP3Sf = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[1][0] + " erat";
  var pluP3Sn = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[2][0] + " erat";


  var pluP1P = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[ranPerSubjIndex][0] + " eramus";
  var pluP2P = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[ranPerSubjIndex][0] + " eratis";
  var pluP3Pm = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[0][0] + " erant";
  var pluP3Pf = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[1][0] + " erant";
  var pluP3Pn = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[2][0] + " erant";



  //First Declension English Translation PLUPERFECT PASSIVE Tense
  var pluP1SEng = "I had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP2SEng = "You had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3SEngm = perfectSubjectSing[0][1] + "had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3SEngf = perfectSubjectSing[1][1] + "had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3SEngn = perfectSubjectSing[2][1] + "had been " + verbArrayFirst[randomVerbIndexFirst][7];

  var pluP1PEng = "We had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP2PEng = "Ya'll had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3PEng = "They had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3PEngm = perfectSubjectPl[0][1] + "had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3PEngf = perfectSubjectPl[1][1] + "had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3PEngn = perfectSubjectPl[2][1] + "had been " + verbArrayFirst[randomVerbIndexFirst][7];


  var pluPVerb = [[pluP1S,pluP1SEng],[pluP2S,pluP2SEng], [pluP3Sm, pluP3SEngm], [pluP3Sf, pluP3SEngf],[pluP3Sn, pluP3SEngn],[pluP1P,pluP1PEng],[pluP2P,pluP2PEng], [pluP3Pm, pluP3PEngm],[pluP3Pf, pluP3PEngf],[pluP3Pn, pluP3PEngn]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(pluPVerb);


  //First Declension Latin FUTURE PERFECT  PASSIVE Tense
  var futPerP1S = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[ranPerSubjIndex][0] + " ero";
  var futPerP2S = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[ranPerSubjIndex][0] + " eris";
  var futPerP3Sm = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[0][0] + " erit";
  var futPerP3Sf = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[1][0] + " erit";
  var futPerP3Sn = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[2][0] + " erit";


  var futPerP1P = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[ranPerSubjIndex][0] + " erimus";
  var futPerP2P = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[ranPerSubjIndex][0] + " eritis";
  var futPerP3Pm = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[0][0] + " erunt";
  var futPerP3Pf = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[1][0] + " erunt";
  var futPerP3Pn = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[2][0] + " erunt";



  //First Declension English Translation FUTURE PERFECT Perfect PASSIVE Tense
  var futPerP1SEng = "I will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP2SEng = "You will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3SEngm = perfectSubjectSing[0][1] + "will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3SEngf = perfectSubjectSing[1][1] + "will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3SEngn = perfectSubjectSing[2][1] + "will have been " + verbArrayFirst[randomVerbIndexFirst][7];

  var futPerP1PEng = "We will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP2PEng = "Ya'll will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3PEng = "They will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3PEngm = perfectSubjectPl[0][1] + "will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3PEngf = perfectSubjectPl[1][1] + "will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3PEngn = perfectSubjectPl[2][1] + "will have been " + verbArrayFirst[randomVerbIndexFirst][7];


  var futPerPVerb = [[futPerP1S,futPerP1SEng],[futPerP2S,futPerP2SEng], [futPerP3Sm, futPerP3SEngm], [futPerP3Sf, futPerP3SEngf],[futPerP3Sn, futPerP3SEngn],[futPerP1P,futPerP1PEng],[futPerP2P,futPerP2PEng], [futPerP3Pm, futPerP3PEngm],[futPerP3Pf, futPerP3PEngf],[futPerP3Pn, futPerP3PEngn]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(futPerPVerb);






  //var verb = [presVerb,perVerb,impVerb,futVerb];

  //shuffle(verb);


  //First Declension Latin Pluperfect Tense
  var pluA1S = verbArrayFirst[randomVerbIndexFirst][1] + plu1stSing;
  var pluA2S = verbArrayFirst[randomVerbIndexFirst][1] + plu2ndSing;
  var pluA3S = verbArrayFirst[randomVerbIndexFirst][1] + plu3rdSing;

  var pluA1P = verbArrayFirst[randomVerbIndexFirst][1] + plu1stPl;
  var pluA2P = verbArrayFirst[randomVerbIndexFirst][1] + plu2ndPl;
  var pluA3P = verbArrayFirst[randomVerbIndexFirst][1] + plu3rdPl;

  //First Declension English Translation Pluperfect Tense
  var pluA1SEng = "I had " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluA2SEng = "You had " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluA3SEng = singSubj[ranSubjIndex] + "had " + verbArrayFirst[randomVerbIndexFirst][7];

  var pluA1PEng = "We had " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluA2PEng = "Ya'll had " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluA3PEng = "They had " + verbArrayFirst[randomVerbIndexFirst][7];


  var pluVerb = [[pluA1S,pluA1SEng],[pluA2S,pluA2SEng], [pluA3S, pluA3SEng], [pluA1P,pluA1PEng],[pluA2P,pluA2PEng], [pluA3P, pluA3PEng]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(pluVerb);


  //First Declension Latin Future Perfect Tense
  var futPerA1S = verbArrayFirst[randomVerbIndexFirst][1] + futPer1stSing;
  var futPerA2S = verbArrayFirst[randomVerbIndexFirst][1] + futPer2ndSing;
  var futPerA3S = verbArrayFirst[randomVerbIndexFirst][1] + futPer3rdSing;

  var futPerA1P = verbArrayFirst[randomVerbIndexFirst][1] + futPer1stPl;
  var futPerA2P = verbArrayFirst[randomVerbIndexFirst][1] + futPer2ndPl;
  var futPerA3P = verbArrayFirst[randomVerbIndexFirst][1] + futPer3rdPl;

  //First Declension English Translation Future Perfect Tense
  var futPerA1SEng = "I will have " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerA2SEng = "You will have " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerA3SEng = singSubj[ranSubjIndex] + "will have " + verbArrayFirst[randomVerbIndexFirst][7];

  var futPerA1PEng = "We will have " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerA2PEng = "Ya'll will have " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerA3PEng = "They will have " + verbArrayFirst[randomVerbIndexFirst][7];


  var futPerVerb = [[futPerA1S,futPerA1SEng],[futPerA2S,futPerA2SEng], [futPerA3S, futPerA3SEng], [futPerA1P,futPerA1PEng],[futPerA2P,futPerA2PEng], [futPerA3P, futPerA3PEng]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(futPerVerb);


//var verb = [futPerPVerb];
var verb = [perPVerb,presVerb3io,perVerb,impVerb3io,futVerb3io,pluVerb,futPerVerb,presPVerb3io,impPVerb3io, futPVerb3io, pluPVerb,futPerPVerb];

//[perPVerb,presVerb,perVerb,impVerb,futVerb,pluVerb,futPerVerb,presPVerb,impPVerb, futPVerb];
  shuffle(verb);



  timeleft = 25;
  responseButton.innerHTML = "";
  //responseButton.onclick = function(){testIndirectStatement()};

      countDownTimer();

       countdown = setInterval(countDownTimer,1000);

       //shuffle(answers);


      startButton.disabled = true;



      ranISIndex = Math.floor(Math.random() * 1);


      if (ranISIndex == 0){

      sentence = verb[0][0][0];

        correctAnswer = verb[0][0][1];

        wrongAnswer1 = verb[0][1][1];

        wrongAnswer2 = verb[0][2][1];

        wrongAnswer3 = verb[0][3][1];


      checkAnswers = [[correctAnswer,true],[wrongAnswer1,false],[wrongAnswer2,false],[wrongAnswer3,false]];
      shuffle(checkAnswers);

  }

  startButton.innerHTML = sentence;

  document.getElementById(answers[0]).innerHTML = checkAnswers[0][0];

  document.getElementById(answers[1]).innerHTML = checkAnswers[1][0];

  document.getElementById(answers[2]).innerHTML =  checkAnswers[2][0];

  document.getElementById(answers[3]).innerHTML = checkAnswers[3][0];



    responseButton.disabled = false;



      resetAnswerColors();

      enableButtons();

        decrementCount();






      if (count == 0){

        gameOverAudio();

        startButton.innerHTML = "Select a New Game!";

        answerOne.innerHTML = game1Title;
        answerTwo.innerHTML = game2Title;
        answerThree.innerHTML = game3Title;
        answerFour.innerHTML = game4Title;

        document.getElementById("boxThree").innerHTML = "Score";
        responseButton.innerHTML = "You earned " + points + " points!";
        points = 0;

        stopTimer();
        document.getElementById("boxOne").innerHTML = "Timer";

        answerOne.onclick = function(){selectGame1()};
        answerTwo.onclick = function(){selectGame2()};
        answerThree.onclick = function(){selectGame3()};
        answerFour.onclick = function(){selectGame4()};

        count = 11;


         }

//resetUndefinedValues();


}







function ranVerb4() {

  var verbArrayFirst = [["aud","audiv","audit","hear","hears","hearing","heard","heard"],["pun","puniv","punit","punish","punishes","punishing","punished","punished"]];

    var randomVerbIndexFirst = Math.floor(Math.random() * verbArrayFirst.length);

    var singSubj = ["He ", "She ", "It "];
    var ranSubjIndex = Math.floor(Math.random() * singSubj.length);

  //First Declension Latin Present Tense
  var pA1S3io4 = verbArrayFirst[randomVerbIndexFirst][0] + pres1stSing3io4;
  var pA2S3io4 = verbArrayFirst[randomVerbIndexFirst][0] + pres2ndSing3io4;
  var pA3S3io4 = verbArrayFirst[randomVerbIndexFirst][0] + pres3rdSing3io4;

  var pA1P3io4 = verbArrayFirst[randomVerbIndexFirst][0] + pres1stPl3io4;
  var pA2P3io4 = verbArrayFirst[randomVerbIndexFirst][0] + pres2ndPl3io4;
  var pA3P3io4 = verbArrayFirst[randomVerbIndexFirst][0] + pres3rdPl3io4;

  //First Declension English Translation Present Tense
  var pA1SEng3io4 = "I " + verbArrayFirst[randomVerbIndexFirst][3];
  var pA2SEng3io4 = "You " + verbArrayFirst[randomVerbIndexFirst][3];
  var pA3SEng3io4 = singSubj[ranSubjIndex] + verbArrayFirst[randomVerbIndexFirst][4];

  var pA1PEng3io4 = "We " + verbArrayFirst[randomVerbIndexFirst][3];
  var pA2PEng3io4 = "Ya'll " + verbArrayFirst[randomVerbIndexFirst][3];
  var pA3PEng3io4 = "They " + verbArrayFirst[randomVerbIndexFirst][3];


  var presVerb3io4 = [[pA1S3io4,pA1SEng3io4],[pA2S3io4,pA2SEng3io4], [pA3S3io4, pA3SEng3io4], [pA1P3io4,pA1PEng3io4],[pA2P3io4,pA2PEng3io4], [pA3P3io4, pA3PEng3io4]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(presVerb3io4);


  //First Declension Latin Present PASSIVE Tense
  var pP1S3io4 = verbArrayFirst[randomVerbIndexFirst][0] + presP1stSing3io4;
  var pP2S3io4 = verbArrayFirst[randomVerbIndexFirst][0] + presP2ndSing3io4;
  var pP3S3io4 = verbArrayFirst[randomVerbIndexFirst][0] + presP3rdSing3io4;

  var pP1P3io4 = verbArrayFirst[randomVerbIndexFirst][0] + presP1stPl3io4;
  var pP2P3io4 = verbArrayFirst[randomVerbIndexFirst][0] + presP2ndPl3io4;
  var pP3P3io4 = verbArrayFirst[randomVerbIndexFirst][0] + presP3rdPl3io4;

  //First Declension English Translation Present PASSIVE Tense
  var pP1SEng3io4 = "I am " + verbArrayFirst[randomVerbIndexFirst][7];
  var pP2SEng3io4 = "You are " + verbArrayFirst[randomVerbIndexFirst][7];
  var pP3SEng3io4 = singSubj[ranSubjIndex] + "is " + verbArrayFirst[randomVerbIndexFirst][7];

  var pP1PEng3io4 = "We are " + verbArrayFirst[randomVerbIndexFirst][7];
  var pP2PEng3io4 = "Ya'll are " + verbArrayFirst[randomVerbIndexFirst][7];
  var pP3PEng3io4 = "They are " + verbArrayFirst[randomVerbIndexFirst][7];


  var presPVerb3io4 = [[pP1S3io4,pP1SEng3io4],[pP2S3io4,pP2SEng3io4], [pP3S3io4, pP3SEng3io4], [pP1P3io4,pP1PEng3io4],[pP2P3io4,pP2PEng3io4], [pP3P3io4, pP3PEng3io4]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(presPVerb3io4);




  //First Declension Latin Imperfect Tense
  var impA1S3io4 = verbArrayFirst[randomVerbIndexFirst][0] + imp1stSing3io4;
  var impA2S3io4 = verbArrayFirst[randomVerbIndexFirst][0] + imp2ndSing3io4;
  var impA3S3io4 = verbArrayFirst[randomVerbIndexFirst][0] + imp3rdSing3io4;

  var impA1P3io4 = verbArrayFirst[randomVerbIndexFirst][0] + imp1stPl3io4;
  var impA2P3io4 = verbArrayFirst[randomVerbIndexFirst][0] + imp2ndPl3io4;
  var impA3P3io4 = verbArrayFirst[randomVerbIndexFirst][0] + imp3rdPl3io4;

  //First Declension English Translation Imperfect Tense
  var impA1SEng3io4 = "I was " + verbArrayFirst[randomVerbIndexFirst][5];
  var impA2SEng3io4 = "You were " + verbArrayFirst[randomVerbIndexFirst][5];
  var impA3SEng3io4 = singSubj[ranSubjIndex] + "was " + verbArrayFirst[randomVerbIndexFirst][5];

  var impA1PEng3io4 = "We were " + verbArrayFirst[randomVerbIndexFirst][5];
  var impA2PEng3io4 = "Ya'll were " + verbArrayFirst[randomVerbIndexFirst][5];
  var impA3PEng3io4 = "They were " + verbArrayFirst[randomVerbIndexFirst][5];

  var impVerb3io4 = [[impA1S3io4,impA1SEng3io4],[impA2S3io4,impA2SEng3io4], [impA3S3io4, impA3SEng3io4], [impA1P3io4,impA1PEng3io4],[impA2P3io4,impA2PEng3io4], [impA3P3io4, impA3PEng3io4]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(impVerb3io4);





  //First Declension Latin Imperfect PASSIVE Tense
  var impP1S3io = verbArrayFirst[randomVerbIndexFirst][0] + impP1stSing3io4;
  var impP2S3io = verbArrayFirst[randomVerbIndexFirst][0] + impP2ndSing3io4;
  var impP3S3io = verbArrayFirst[randomVerbIndexFirst][0] + impP3rdSing3io4;

  var impP1P3io = verbArrayFirst[randomVerbIndexFirst][0] + impP1stPl3io4;
  var impP2P3io = verbArrayFirst[randomVerbIndexFirst][0] + impP2ndPl3io4;
  var impP3P3io = verbArrayFirst[randomVerbIndexFirst][0] + impP3rdPl3io4;

  //First Declension English Translation Imperfect PASSIVE Tense
  var impP1SEng3io = "I was being " + verbArrayFirst[randomVerbIndexFirst][7];
  var impP2SEng3io = "You were being " + verbArrayFirst[randomVerbIndexFirst][7];
  var impP3SEng3io = singSubj[ranSubjIndex] + "was being " + verbArrayFirst[randomVerbIndexFirst][7];

  var impP1PEng3io = "We were being " + verbArrayFirst[randomVerbIndexFirst][7];
  var impP2PEng3io = "Ya'll were being " + verbArrayFirst[randomVerbIndexFirst][7];
  var impP3PEng3io = "They were being " + verbArrayFirst[randomVerbIndexFirst][7];

  var impPVerb3io4 = [[impP1S3io,impP1SEng3io],[impP2S3io,impP2SEng3io], [impP3S3io, impP3SEng3io], [impP1P3io,impP1PEng3io],[impP2P3io,impP2PEng3io], [impP3P3io, impP3PEng3io]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(impPVerb3io4);




  //First Declension Latin Future Tense
  var futA1S3io4 = verbArrayFirst[randomVerbIndexFirst][0] + fut1stSing3io4;
  var futA2S3io4 = verbArrayFirst[randomVerbIndexFirst][0] + fut2ndSing3io4;
  var futA3S3io4 = verbArrayFirst[randomVerbIndexFirst][0] + fut3rdSing3io4;

  var futA1P3io4 = verbArrayFirst[randomVerbIndexFirst][0] + fut1stPl3io4;
  var futA2P3io4 = verbArrayFirst[randomVerbIndexFirst][0] + fut2ndPl3io4;
  var futA3P3io4 = verbArrayFirst[randomVerbIndexFirst][0] + fut3rdPl3io4;

  //First Declension English Translation Future Tense
  var futA1SEng3io4 = "I will " + verbArrayFirst[randomVerbIndexFirst][3];
  var futA2SEng3io4 = "You will " + verbArrayFirst[randomVerbIndexFirst][3];
  var futA3SEng3io4 = singSubj[ranSubjIndex] + "will " + verbArrayFirst[randomVerbIndexFirst][3];

  var futA1PEng3io4 = "We will " + verbArrayFirst[randomVerbIndexFirst][3];
  var futA2PEng3io4 = "Ya'll will " + verbArrayFirst[randomVerbIndexFirst][3];
  var futA3PEng3io4 = "They will " + verbArrayFirst[randomVerbIndexFirst][3];


  var futVerb3io4 = [[futA1S3io4,futA1SEng3io4],[futA2S3io4,futA2SEng3io4], [futA3S3io4, futA3SEng3io4], [futA1P3io4,futA1PEng3io4],[futA2P3io4,futA2PEng3io4], [futA3P3io4, futA3PEng3io4]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(futVerb3io4);



  //First Declension Latin Future PASSIVE Tense
  var futP1S3io4 = verbArrayFirst[randomVerbIndexFirst][0] + futP1stSing3io4;
  var futP2S3io4 = verbArrayFirst[randomVerbIndexFirst][0] + futP2ndSing3io4;
  var futP3S3io4 = verbArrayFirst[randomVerbIndexFirst][0] + futP3rdSing3io4;

  var futP1P3io4 = verbArrayFirst[randomVerbIndexFirst][0] + futP1stPl3io4;
  var futP2P3io4 = verbArrayFirst[randomVerbIndexFirst][0] + futP2ndPl3io4;
  var futP3P3io4 = verbArrayFirst[randomVerbIndexFirst][0] + futP3rdPl3io4;

  //First Declension English Translation Future PASSIVE Tense
  var futP1SEng3io4 = "I will be " + verbArrayFirst[randomVerbIndexFirst][7];
  var futP2SEng3io4 = "You will be " + verbArrayFirst[randomVerbIndexFirst][7];
  var futP3SEng3io4 = singSubj[ranSubjIndex] + "will be " + verbArrayFirst[randomVerbIndexFirst][7];

  var futP1PEng3io4 = "We will be " + verbArrayFirst[randomVerbIndexFirst][7];
  var futP2PEng3io4 = "Ya'll will be " + verbArrayFirst[randomVerbIndexFirst][7];
  var futP3PEng3io4 = "They will be " + verbArrayFirst[randomVerbIndexFirst][7];


  var futPVerb3io4 = [[futP1S3io4,futP1SEng3io4],[futP2S3io4,futP2SEng3io4], [futP3S3io4, futP3SEng3io4], [futP1P3io4,futP1PEng3io4],[futP2P3io4,futP2PEng3io4], [futP3P3io4, futP3PEng3io4]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(futPVerb3io4);



  //First Declension Latin Perfect Tense
  var perA1S = verbArrayFirst[randomVerbIndexFirst][1] + per1stSing;
  var perA2S = verbArrayFirst[randomVerbIndexFirst][1] + per2ndSing;
  var perA3S = verbArrayFirst[randomVerbIndexFirst][1] + per3rdSing;

  var perA1P = verbArrayFirst[randomVerbIndexFirst][1] + per1stPl;
  var perA2P = verbArrayFirst[randomVerbIndexFirst][1] + per2ndPl;
  var perA3P = verbArrayFirst[randomVerbIndexFirst][1] + per3rdPl;

  //First Declension English Translation Perfect Tense
  var perA1SEng = "I " + verbArrayFirst[randomVerbIndexFirst][6];
  var perA2SEng = "You " + verbArrayFirst[randomVerbIndexFirst][6];
  var perA3SEng = singSubj[ranSubjIndex] + verbArrayFirst[randomVerbIndexFirst][6];

  var perA1PEng = "We " + verbArrayFirst[randomVerbIndexFirst][6];
  var perA2PEng = "Ya'll " + verbArrayFirst[randomVerbIndexFirst][6];
  var perA3PEng = "They " + verbArrayFirst[randomVerbIndexFirst][6];


  var perVerb = [[perA1S,perA1SEng],[perA2S,perA2SEng], [perA3S, perA3SEng], [perA1P,perA1PEng],[perA2P,perA2PEng], [perA3P, perA3PEng]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(perVerb);

  var ranPerSubjIndex = Math.floor(Math.random() * 3);
  var perfectSubjectSing = [["us","He "],["a","She "],["um","It "]];
  var perfectSubjectPl = [["ī"," The boys "],["ae"," The girls "],["a"," The things "]];



  //First Declension Latin Perfect PASSIVE Tense
  var perP1S = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[ranPerSubjIndex][0] + " sum";
  var perP2S = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[ranPerSubjIndex][0] + " es";
  var perP3Sm = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[0][0] + " est";
  var perP3Sf = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[1][0] + " est";
  var perP3Sn = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[2][0] + " est";


  var perP1P = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[ranPerSubjIndex][0] + " sumus";
  var perP2P = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[ranPerSubjIndex][0] + " estis";
  var perP3Pm = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[0][0] + " sunt";
  var perP3Pf = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[1][0] + " sunt";
  var perP3Pn = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[2][0] + " sunt";



  //First Declension English Translation Perfect PASSIVE Tense
  var perP1SEng = "I was " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP2SEng = "You were " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3SEngm = perfectSubjectSing[0][1] + "was " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3SEngf = perfectSubjectSing[1][1] + "was " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3SEngn = perfectSubjectSing[2][1] + "was " + verbArrayFirst[randomVerbIndexFirst][7];

  var perP1PEng = "We were " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP2PEng = "Ya'll were " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3PEng = "They were " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3PEngm = perfectSubjectPl[0][1] + "were " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3PEngf = perfectSubjectPl[1][1] + "were " + verbArrayFirst[randomVerbIndexFirst][7];
  var perP3PEngn = perfectSubjectPl[2][1] + "were " + verbArrayFirst[randomVerbIndexFirst][7];


  var perPVerb = [[perP1S,perP1SEng],[perP2S,perP2SEng], [perP3Sm, perP3SEngm], [perP3Sf, perP3SEngf],[perP3Sn, perP3SEngn],[perP1P,perP1PEng],[perP2P,perP2PEng], [perP3Pm, perP3PEngm],[perP3Pf, perP3PEngf],[perP3Pn, perP3PEngn]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(perPVerb);


  //First Declension Latin PLUPERFECT PASSIVE Tense
  var pluP1S = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[ranPerSubjIndex][0] + " eram";
  var pluP2S = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[ranPerSubjIndex][0] + " eras";
  var pluP3Sm = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[0][0] + " erat";
  var pluP3Sf = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[1][0] + " erat";
  var pluP3Sn = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[2][0] + " erat";


  var pluP1P = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[ranPerSubjIndex][0] + " eramus";
  var pluP2P = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[ranPerSubjIndex][0] + " eratis";
  var pluP3Pm = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[0][0] + " erant";
  var pluP3Pf = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[1][0] + " erant";
  var pluP3Pn = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[2][0] + " erant";



  //First Declension English Translation PLUPERFECT PASSIVE Tense
  var pluP1SEng = "I had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP2SEng = "You had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3SEngm = perfectSubjectSing[0][1] + "had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3SEngf = perfectSubjectSing[1][1] + "had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3SEngn = perfectSubjectSing[2][1] + "had been " + verbArrayFirst[randomVerbIndexFirst][7];

  var pluP1PEng = "We had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP2PEng = "Ya'll had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3PEng = "They had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3PEngm = perfectSubjectPl[0][1] + "had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3PEngf = perfectSubjectPl[1][1] + "had been " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluP3PEngn = perfectSubjectPl[2][1] + "had been " + verbArrayFirst[randomVerbIndexFirst][7];


  var pluPVerb = [[pluP1S,pluP1SEng],[pluP2S,pluP2SEng], [pluP3Sm, pluP3SEngm], [pluP3Sf, pluP3SEngf],[pluP3Sn, pluP3SEngn],[pluP1P,pluP1PEng],[pluP2P,pluP2PEng], [pluP3Pm, pluP3PEngm],[pluP3Pf, pluP3PEngf],[pluP3Pn, pluP3PEngn]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(pluPVerb);


  //First Declension Latin FUTURE PERFECT  PASSIVE Tense
  var futPerP1S = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[ranPerSubjIndex][0] + " ero";
  var futPerP2S = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[ranPerSubjIndex][0] + " eris";
  var futPerP3Sm = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[0][0] + " erit";
  var futPerP3Sf = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[1][0] + " erit";
  var futPerP3Sn = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectSing[2][0] + " erit";


  var futPerP1P = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[ranPerSubjIndex][0] + " erimus";
  var futPerP2P = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[ranPerSubjIndex][0] + " eritis";
  var futPerP3Pm = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[0][0] + " erunt";
  var futPerP3Pf = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[1][0] + " erunt";
  var futPerP3Pn = verbArrayFirst[randomVerbIndexFirst][2] + perfectSubjectPl[2][0] + " erunt";



  //First Declension English Translation FUTURE PERFECT Perfect PASSIVE Tense
  var futPerP1SEng = "I will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP2SEng = "You will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3SEngm = perfectSubjectSing[0][1] + "will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3SEngf = perfectSubjectSing[1][1] + "will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3SEngn = perfectSubjectSing[2][1] + "will have been " + verbArrayFirst[randomVerbIndexFirst][7];

  var futPerP1PEng = "We will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP2PEng = "Ya'll will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3PEng = "They will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3PEngm = perfectSubjectPl[0][1] + "will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3PEngf = perfectSubjectPl[1][1] + "will have been " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerP3PEngn = perfectSubjectPl[2][1] + "will have been " + verbArrayFirst[randomVerbIndexFirst][7];


  var futPerPVerb = [[futPerP1S,futPerP1SEng],[futPerP2S,futPerP2SEng], [futPerP3Sm, futPerP3SEngm], [futPerP3Sf, futPerP3SEngf],[futPerP3Sn, futPerP3SEngn],[futPerP1P,futPerP1PEng],[futPerP2P,futPerP2PEng], [futPerP3Pm, futPerP3PEngm],[futPerP3Pf, futPerP3PEngf],[futPerP3Pn, futPerP3PEngn]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(futPerPVerb);






  //var verb = [presVerb,perVerb,impVerb,futVerb];

  //shuffle(verb);


  //First Declension Latin Pluperfect Tense
  var pluA1S = verbArrayFirst[randomVerbIndexFirst][1] + plu1stSing;
  var pluA2S = verbArrayFirst[randomVerbIndexFirst][1] + plu2ndSing;
  var pluA3S = verbArrayFirst[randomVerbIndexFirst][1] + plu3rdSing;

  var pluA1P = verbArrayFirst[randomVerbIndexFirst][1] + plu1stPl;
  var pluA2P = verbArrayFirst[randomVerbIndexFirst][1] + plu2ndPl;
  var pluA3P = verbArrayFirst[randomVerbIndexFirst][1] + plu3rdPl;

  //First Declension English Translation Pluperfect Tense
  var pluA1SEng = "I had " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluA2SEng = "You had " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluA3SEng = singSubj[ranSubjIndex] + "had " + verbArrayFirst[randomVerbIndexFirst][7];

  var pluA1PEng = "We had " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluA2PEng = "Ya'll had " + verbArrayFirst[randomVerbIndexFirst][7];
  var pluA3PEng = "They had " + verbArrayFirst[randomVerbIndexFirst][7];


  var pluVerb = [[pluA1S,pluA1SEng],[pluA2S,pluA2SEng], [pluA3S, pluA3SEng], [pluA1P,pluA1PEng],[pluA2P,pluA2PEng], [pluA3P, pluA3PEng]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(pluVerb);


  //First Declension Latin Future Perfect Tense
  var futPerA1S = verbArrayFirst[randomVerbIndexFirst][1] + futPer1stSing;
  var futPerA2S = verbArrayFirst[randomVerbIndexFirst][1] + futPer2ndSing;
  var futPerA3S = verbArrayFirst[randomVerbIndexFirst][1] + futPer3rdSing;

  var futPerA1P = verbArrayFirst[randomVerbIndexFirst][1] + futPer1stPl;
  var futPerA2P = verbArrayFirst[randomVerbIndexFirst][1] + futPer2ndPl;
  var futPerA3P = verbArrayFirst[randomVerbIndexFirst][1] + futPer3rdPl;

  //First Declension English Translation Future Perfect Tense
  var futPerA1SEng = "I will have " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerA2SEng = "You will have " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerA3SEng = singSubj[ranSubjIndex] + "will have " + verbArrayFirst[randomVerbIndexFirst][7];

  var futPerA1PEng = "We will have " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerA2PEng = "Ya'll will have " + verbArrayFirst[randomVerbIndexFirst][7];
  var futPerA3PEng = "They will have " + verbArrayFirst[randomVerbIndexFirst][7];


  var futPerVerb = [[futPerA1S,futPerA1SEng],[futPerA2S,futPerA2SEng], [futPerA3S, futPerA3SEng], [futPerA1P,futPerA1PEng],[futPerA2P,futPerA2PEng], [futPerA3P, futPerA3PEng]];
  //var ranVerbIndex = Math.floor(Math.random() * ranVerbIndex.length);

  shuffle(futPerVerb);


//var verb = [futPerPVerb];
var verb = [perPVerb,presVerb3io4,perVerb,impVerb3io4,futVerb3io4,pluVerb,futPerVerb,presPVerb3io4,impPVerb3io4, futPVerb3io4, pluPVerb,futPerPVerb];

//[perPVerb,presVerb,perVerb,impVerb,futVerb,pluVerb,futPerVerb,presPVerb,impPVerb, futPVerb];
  shuffle(verb);



  timeleft = 25;
  responseButton.innerHTML = "";
  //responseButton.onclick = function(){testIndirectStatement()};

      countDownTimer();

       countdown = setInterval(countDownTimer,1000);

       //shuffle(answers);


      startButton.disabled = true;



      ranISIndex = Math.floor(Math.random() * 1);


      if (ranISIndex == 0){

      sentence = verb[0][0][0];

        correctAnswer = verb[0][0][1];

        wrongAnswer1 = verb[0][1][1];

        wrongAnswer2 = verb[0][2][1];

        wrongAnswer3 = verb[0][3][1];


      checkAnswers = [[correctAnswer,true],[wrongAnswer1,false],[wrongAnswer2,false],[wrongAnswer3,false]];
      shuffle(checkAnswers);

  }

  startButton.innerHTML = sentence;

  document.getElementById(answers[0]).innerHTML = checkAnswers[0][0];

  document.getElementById(answers[1]).innerHTML = checkAnswers[1][0];

  document.getElementById(answers[2]).innerHTML =  checkAnswers[2][0];

  document.getElementById(answers[3]).innerHTML = checkAnswers[3][0];



    responseButton.disabled = false;



      resetAnswerColors();

      enableButtons();

        decrementCount();






      if (count == 0){

        gameOverAudio();

        startButton.innerHTML = "Select a New Game!";

        answerOne.innerHTML = game1Title;
        answerTwo.innerHTML = game2Title;
        answerThree.innerHTML = game3Title;
        answerFour.innerHTML = game4Title;

        document.getElementById("boxThree").innerHTML = "Score";
        responseButton.innerHTML = "You earned " + points + " points!";
        points = 0;

        stopTimer();
        document.getElementById("boxOne").innerHTML = "Timer";

        answerOne.onclick = function(){selectGame1()};
        answerTwo.onclick = function(){selectGame2()};
        answerThree.onclick = function(){selectGame3()};
        answerFour.onclick = function(){selectGame4()};

        count = 11;


         }

//resetUndefinedValues();


}


function mixup3io4(){

  var mixUp = [ranVerb3io, ranVerb4];
  var ran3io4Index = Math.floor(Math.random() * mixUp.length);

  mixUp[ran3io4Index]();
}










   function resetAnswerColors(){

	A1.style.backgroundColor = "white";
	A2.style.backgroundColor = "white";
	A3.style.backgroundColor = "white";
	A4.style.backgroundColor = "white";

	answerOne.style.backgroundColor = "white";
	answerTwo.style.backgroundColor = "white";
	answerThree.style.backgroundColor = "white";
	answerFour.style.backgroundColor = "white";

	answerOne.style.color = "black";
	answerTwo.style.color = "black";
	answerThree.style.color = "black";
	answerFour.style.color = "black";

}




function enableButtons(){

	answerOne.disabled = false;
	answerTwo.disabled = false;
	answerThree.disabled = false;
	answerFour.disabled = false;

}

function disableButtons(){
		answerOne.disabled = true;
		answerTwo.disabled = true;
		answerThree.disabled = true;
		answerFour.disabled = true;
}









function clickedAnswerOne(){


	if (checkAnswers[0][1] == true){

    correctAnswerAudio();
		//clickedCorrectAnswerTwoAudio();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		//timeleft = 15;


    answerOne.style.backgroundColor = "yellow";
		answerOne.style.border = "yellow";
		document.getElementById("A1").style.backgroundColor = "yellow";


    answerTwo.style.color = "red";
		answerTwo.style.backgroundColor = "black";
		answerTwo.style.border = "black";
    document.getElementById("A2").style.backgroundColor = "black";

    answerThree.style.color = "red";
    answerThree.style.backgroundColor = "black";
    answerThree.style.border = "black";
    document.getElementById("A3").style.backgroundColor = "black";

    answerFour.style.color = "red";
		answerFour.style.backgroundColor = "black";
		answerFour.style.border = "black";
		answerFour.disabled = true;
		document.getElementById("A4").style.backgroundColor = "black";

		responseButton.innerHTML = sentence;
		responseButton.style.color = "yellow";
		startButton.innerHTML = "Optime!  Next Question!";
		startButton.disabled = false;


		//unHideResponseNext();



	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerOneAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerOne.style.color = "red";
		answerOne.style.backgroundColor = "black";
		answerOne.style.border = "black";
		answerOne.disabled = true;
		document.getElementById("A1").style.backgroundColor = "black";


		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

}


function clickedAnswerTwo(){



	if (checkAnswers[1][1] == true){

		correctAnswerAudio();
		//clickedCorrectAnswerTwoAudio();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		//timeleft = 15;
		answerTwo.style.backgroundColor = "yellow";
		answerTwo.style.border = "yellow";
		document.getElementById("A2").style.backgroundColor = "yellow";

    answerOne.style.color = "red";
    answerOne.style.backgroundColor = "black";
    answerOne.style.border = "black";
    document.getElementById("A1").style.backgroundColor = "black";

    answerThree.style.color = "red";
    answerThree.style.backgroundColor = "black";
    answerThree.style.border = "black";
    document.getElementById("A3").style.backgroundColor = "black";

    answerFour.style.color = "red";
		answerFour.style.backgroundColor = "black";
		answerFour.style.border = "black";
		answerFour.disabled = true;
		document.getElementById("A4").style.backgroundColor = "black";

		responseButton.innerHTML = sentence;
		responseButton.style.color = "yellow";
		startButton.innerHTML = "Optime!  Next Question!";
		startButton.disabled = false;


	//	unHideResponseNext();



	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerTwoAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerTwo.style.color = "red";
		answerTwo.style.backgroundColor = "black";
		answerTwo.style.border = "black";
		answerTwo.disabled = true;
		document.getElementById("A2").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}
}

function clickedAnswerThree(){



	if (checkAnswers[2][1] == true){

		correctAnswerAudio();
		//clickedCorrectAnswerThreeAudio();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		//timeleft = 15;
		answerThree.style.backgroundColor = "yellow";
		answerThree.style.border = "yellow";
		document.getElementById("A3").style.backgroundColor = "yellow";

    answerOne.style.color = "red";
    answerOne.style.backgroundColor = "black";
    answerOne.style.border = "black";
    document.getElementById("A1").style.backgroundColor = "black";

    answerTwo.style.color = "red";
    answerTwo.style.backgroundColor = "black";
    answerTwo.style.border = "black";
    document.getElementById("A2").style.backgroundColor = "black";

    answerFour.style.color = "red";
    answerFour.style.backgroundColor = "black";
    answerFour.style.border = "black";
    answerFour.disabled = true;
    document.getElementById("A4").style.backgroundColor = "black";


		responseButton.innerHTML = sentence;

		responseButton.style.color = "yellow";
		startButton.innerHTML = "Optime!  Next Question!";
		startButton.disabled = false;


		//unHideResponseNext();



	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerThreeAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerThree.style.color = "red";
		answerThree.style.backgroundColor = "black";
		answerThree.style.border = "black";
		answerThree.disabled = true;
		document.getElementById("A3").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

}



function clickedAnswerFour(){



	if (checkAnswers[3][1] == true){


		correctAnswerAudio();
		//clickedCorrectAnswerFourAudio;
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		//responseButton.disabled = true;
		//timeleft = 15;
		answerFour.style.backgroundColor = "yellow";
		answerFour.style.border = "yellow";
		document.getElementById("A4").style.backgroundColor = "yellow";

    answerOne.style.color = "red";
    answerOne.style.backgroundColor = "black";
    answerOne.style.border = "black";
    document.getElementById("A1").style.backgroundColor = "black";

    answerTwo.style.color = "red";
		answerTwo.style.backgroundColor = "black";
		answerTwo.style.border = "black";
    document.getElementById("A2").style.backgroundColor = "black";

    answerThree.style.color = "red";
    answerThree.style.backgroundColor = "black";
    answerThree.style.border = "black";
    document.getElementById("A3").style.backgroundColor = "black";




		responseButton.innerHTML = sentence;

		responseButton.style.color = "yellow";

    responseButton.style.color = "yellow";
		startButton.innerHTML = "Optime!  Next Question!";
		startButton.disabled = false;


		//unHideResponseNext();




	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerFourAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerFour.style.color = "red";
		answerFour.style.backgroundColor = "black";
		answerFour.style.border = "black";
		answerFour.disabled = true;
		document.getElementById("A4").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}


}
