$(document).ready(function () {
    //questions
    var questionArray = ["What QB led the Browns to three AFC championship games during the 1980's?", "Which Browns player was voted to the Pro Bowl every year that he played?", "What was the nickname for the 1980 Cleveland Browns?", "What Browns player fumbled just before scoring what might have been the winning touchdown in the 1987 AFC Championship game?", "Who was the first Cleveland Brown enshrined in the Pro Football Hall of Fame?", "Which Browns QB held the NFL record for most consecutive completed passes without an interception, until December 26, 2010, when Tom Brady set a new record?", "How many games did the Browns win during the three seasons from 1996-1998?", "How many first-round draft picks did the Browns have between 2012 and 2018?"];
    //answers
    var answerArray = [["Otto Graham", "Vinny Testaverde", "Brian Sipe", "Bernie Kosar"], ["Otto Graham", "Joe Thomas", "Ozzie Newsome", "Jim Brown"], ["Kardiac Kids", "Comeback Kids", "Orange Crush", "Orange Wave"], ["Ozzie Newsome", "Webster Slaughter", "Earnest Byner", "Bernie Kosar"], ["Jim Brown", "Otto Graham", "Marion Motley", "Paul Brown"], ["Otto Graham", "Bernie Kosar", "Brady Quinn", "Mike Phipps"], ["5", "7", "14", "0"], ["10", "5", "13", "7"]];
    //correct answers
    var correctAnswer = ["Bernie Kosar", "Jim Brown", "Kardiac Kids", "Earnest Byner", "Otto Graham", "Bernie Kosar", "0", "13"];

    var correctAnswerInfo = ["You're correct! <br> <br> Quarterback Bernie Kosar, who the Browns drafted in 1985, led the team to three AFC Championship games in the late 1980s but lost each time to the Denver Broncos.", "You're correct! <br> <br> Brown is the only player in NFL history to average over 100 rushing yards per game for his career.", "You're correct! <br> <br> Due to their penchant for having games decided in the final moments, the team was nicknamed the Kardiac Kids.", "You're correct! <br> <br>Just before crossing the goal line, Byner was hit by cornerback Jeremiah Castille, who stripped the ball and then fell on the fumble to preserve the win and assure Denver of its second straight AFC title and a trip to Super Bowl XXII.", "You're correct! <br> <br> Having won seven championships in 10 seasons and reached the championship game in every year he played, Graham is regarded by sportswriters as one of the greatest winners of all time.", "You're correct! <br> <br> In 1990 and 1991, Kosar set a league record by throwing 308 consecutive passes without an interception, which stood for almost two decades.", "You're correct! <br> <br> After Art Modell moved the team to Baltimore, there were three years of suspension before the Browns started play again in 1999 under new owner Al Lerner.", "You're correct! <br> <br> From 2012 to 2018, the Cleveland Browns collected 13 first-round draft picks."];

    var incorrectAnswerInfo = ["Sorry, you're wrong! <br> <br> Quarterback Bernie Kosar, who the Browns drafted in 1985, led the team to three AFC Championship games in the late 1980s but lost each time to the Denver Broncos.", "Sorry, you're wrong! <br> <br> Brown is the only player in NFL history to average over 100 rushing yards per game for his career.", "Sorry, you're wrong! <br> <br> Due to their penchant for having games decided in the final moments, the team was nicknamed the Kardiac Kids.", "Sorry, you're wrong! <br> <br>Just before crossing the goal line, Byner was hit by cornerback Jeremiah Castille, who stripped the ball and then fell on the fumble to preserve the win and assure Denver of its second straight AFC title and a trip to Super Bowl XXII.", "Sorry, you're wrong! <br> <br> Having won seven championships in 10 seasons and reached the championship game in every year he played, Graham is regarded by sportswriters as one of the greatest winners of all time.", "Sorry, you're wrong! <br> <br> In 1990 and 1991, Kosar set a league record by throwing 308 consecutive passes without an interception, which stood for almost two decades.", "Sorry, you're wrong! <br> <br> After Art Modell moved the team to Baltimore, there were three years of suspension before the Browns started play again in 1999 under new owner Al Lerner.", "Sorry, you're wrong! <br> <br> From 2012 to 2018, the Cleveland Browns collected 13 first-round draft picks."];
    
    var questionCounter = 0;

    var count = 30;


    //questions HTML
    var gameHTML = $(".questionBox");

    //start game button click function
    $(".button").click(function () {
        //hide button
        $(".button").hide();
        //call start game function
        startGame();
        countDown();
    });

    //answer click function
    $("body").on("click", ".answer", function (event) {

        selectedAnswer = $(this).text();

        //correct answer
        if (selectedAnswer === correctAnswer[questionCounter]) {
            // alert("correct!")
            correctChoice();

        }
        //incorrect answer
        else {
            // alert("wrong!")
            incorrectChoice();
        }
    });

    //30 second countdown function
    function countDown() {
        clearInterval(timer);
        setInterval(timer, 1000); //1000 will  run it every 1 second

        function timer() {
            count--;
            if (count <= 0) {
                clearInterval(timer);
                //counter ended, do something here

            }


            document.getElementById("timer").innerHTML = "" + count;
        };
    }

    //correct answer function
    function correctChoice() {
        // alert("good job homie");
        

        //hide questions
        $(gameHTML).hide();

        //display answer box
        $(".answerBox").show();

        //display message
        $("#message").html(correctAnswerInfo[questionCounter]);

        //call wait function
        setTimeout(wait, 7000);
    }

    //incorrect answer function
    function incorrectChoice() {
        // alert("You wrong homie");

        //hide questions
        $(gameHTML).hide();

        //display answer box
        $(".answerBox").show();

        //display message
        $("#message").html(incorrectAnswerInfo[questionCounter]);

        //call wait function
        setTimeout(wait, 7000);

    }

    //wait function
    function wait() {
        if (questionCounter < 7) {
            questionCounter++;
            $(".answerBox").hide();

            clearInterval(timer);
            
            countDown();
            
            startGame();
            
        } else {
            alert("Game Over!");
        }
    }

    //start game function
    function startGame() {
        //display game
        $(gameHTML).show();

        //display question
        $("#statement").html(questionArray[questionCounter]);
        //display answers
        $("#answerOne").html(answerArray[questionCounter][0]);
        $("#answerTwo").html(answerArray[questionCounter][1]);
        $("#answerThree").html(answerArray[questionCounter][2]);
        $("#answerFour").html(answerArray[questionCounter][3]);
    }





    //out of time function
    // function outOfTime(){
    //     $("#message").html("")
    // }



});

