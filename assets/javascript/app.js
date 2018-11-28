$(document).ready(function () {

    //questions
    var questionArray = ["What QB led the Browns to three AFC championship games during the 1980's?", "Which Browns player was voted to the Pro Bowl every year that he played?", "What was the nickname for the 1980 Cleveland Browns?", "What Browns player fumbled just before scoring what might have been the winning touchdown in the 1987 AFC Championship game?", "Who was the first Cleveland Brown enshrined in the Pro Football Hall of Fame?", "Which Browns QB held the NFL record for most consecutive completed passes without an interception, until December 26, 2010, when Tom Brady set a new record?", "How many games did the Browns win during the three seasons from 1996-1998?", "How many first-round draft picks did the Browns have between 2012 and 2018?"];

    //answers
    var answerArray = [["Otto Graham", "Vinny Testaverde", "Brian Sipe", "Bernie Kosar"], ["Otto Graham", "Joe Thomas", "Ozzie Newsome", "Jim Brown"], ["Kardiac Kids", "Comeback Kids", "Orange Crush", "Orange Wave"], ["Ozzie Newsome", "Webster Slaughter", "Earnest Byner", "Bernie Kosar"], ["Jim Brown", "Otto Graham", "Marion Motley", "Paul Brown"], ["Otto Graham", "Bernie Kosar", "Brady Quinn", "Mike Phipps"], ["5", "7", "14", "0"], ["10", "5", "13", "7"]];

    //correct answers
    var correctAnswer = ["Bernie Kosar", "Jim Brown", "Kardiac Kids", "Earnest Byner", "Otto Graham", "Bernie Kosar", "0", "13"];

    //correct answer fun facts
    var correctAnswerInfo = ["You're correct! <br> <br> Quarterback Bernie Kosar, who the Browns drafted in 1985, led the team to three AFC Championship games in the late 1980s but lost each time to the Denver Broncos.", "You're correct! <br> <br> Brown is the only player in NFL history to average over 100 rushing yards per game for his career.", "You're correct! <br> <br> Due to their penchant for having games decided in the final moments, the team was nicknamed the Kardiac Kids.", "You're correct! <br> <br>Just before crossing the goal line, Byner was hit by cornerback Jeremiah Castille, who stripped the ball and then fell on the fumble to preserve the win and assure Denver of its second straight AFC title and a trip to Super Bowl XXII.", "You're correct! <br> <br> Having won seven championships in 10 seasons and reached the championship game in every year he played, Graham is regarded by sportswriters as one of the greatest winners of all time.", "You're correct! <br> <br> In 1990 and 1991, Kosar set a league record by throwing 308 consecutive passes without an interception, which stood for almost two decades.", "You're correct! <br> <br> After Art Modell moved the team to Baltimore, there were three years of suspension before the Browns started play again in 1999 under new owner Al Lerner.", "You're correct! <br> <br> From 2012 to 2018, the Cleveland Browns collected 13 first-round draft picks."];

    //incorrect answer display
    var incorrectAnswerInfo = ["Sorry, you're wrong! <br> <br> The correct answer is Bernie Kosar, who the Browns drafted in 1985.", "Sorry, you're wrong! <br> <br> The correct answer is Jim Brown, who is the only player in NFL history to average over 100 rushing yards per game for his career.", "Sorry, you're wrong! <br> <br> Due to their penchant for having games decided in the final moments, the team was nicknamed the Kardiac Kids.", "Sorry, you're wrong! <br> <br>It was Earnest Byner who was hit by cornerback Jeremiah Castille, who stripped the ball and then fell on the fumble to preserve the win for Denver.", "Sorry, you're wrong! <br> <br> The correct answer is Otto Graham, who won seven championships in 10 seasons and reached the championship game in every year he played.", "Sorry, you're wrong! <br> <br> In 1990 and 1991, it was Bernie Kosar that set a league record by throwing 308 consecutive passes without an interception, which stood for almost two decades.", "Sorry, you're wrong! <br> <br> After Art Modell moved the team to Baltimore, there were three years of suspension before the Browns started play again in 1999 under new owner Al Lerner.", "Sorry, you're wrong! <br> <br> From 2012 to 2018, the Cleveland Browns collected 13 first-round draft picks."];

    //correct image display
    var correctImage = ["<img class='gif' src='https://media.giphy.com/media/3ohhwv7ECyvHRqDWkU/giphy.gif' height='200px' width='400px'>", "<img class='gif' src='https://media.giphy.com/media/y1S51KbB8BcKQ/giphy.gif' height='200px' width='400px'>", "<img class='gif' src='https://media.giphy.com/media/3LKsNtFkdU8A0aNk51/giphy.gif' height='200px' width='400px'>", "<img class='gif' src='https://media.giphy.com/media/4HtLaI9ZW9mL2mN2kW/giphy.gif' height='200px' width='400px'>", "<img class='gif' src='https://media.giphy.com/media/3FQolxq6b1kuXjmL0o/giphy.gif' height='200px' width='400px'>", "<img class='gif' src='https://media.giphy.com/media/j9UtP3FpyTGth736UR/giphy.gif' height='200px' width='400px'>", "<img class='gif' src='https://media.giphy.com/media/3oxHQsn4iKGF1WZrYQ/giphy.gif' height='200px' width='400px'>", "<img class='gif' src='https://media.giphy.com/media/RN96WHKThqODSLu64b/giphy.gif' height='200px' width='400px'>"]

    //incorrect image display
    var incorrectImage = ["<img class='gif' src='https://media.giphy.com/media/4GZZHFSIudeyXQRPqo/giphy.gif' height='200px' width='400px'>", "<img class='gif' src='https://media.giphy.com/media/3ohhwsgvH7cdLq1dfO/giphy.gif' height='200px' width='400px'>", "<img class='gif' src='https://media.giphy.com/media/1wpN7qx1onStZGZqsS/giphy.gif' height='200px' width='400px'>", "<img class='gif' src='https://media.giphy.com/media/2A0M2S6sqaLGJsOnDv/giphy.gif' height='200px' width='400px'>", "<img class='gif' src='https://media.giphy.com/media/l0MYsr8vxTRlb8CZi/giphy.gif' height='200px' width='400px'>", "<img class='gif' src='https://media.giphy.com/media/l3vR6rraIKItRVtM4/giphy.gif' height='200px' width='400px'>", "<img class='gif' src='https://media.giphy.com/media/5aWCuDb2DMFb3pK8LB/giphy.gif' height='200px' width='400px'>", "<img class='gif' src='https://media.giphy.com/media/dQpbz3zOa6pFG0K6dP/giphy.gif' height='200px' width='400px'>"]
    
    //time is up display
    var outOfTimeInfo = ["You're out of time buddy boy! <br> <br> The correct answer is Bernie Kosar, who the Browns drafted in 1985.", "You're out of time buddy boy! <br> <br> The correct answer is Jim Brown, who is the only player in NFL history to average over 100 rushing yards per game for his career.", "You're out of time buddy boy! <br> <br> Due to their penchant for having games decided in the final moments, the team was nicknamed the Kardiac Kids.", "You're out of time buddy boy! <br> <br>It was Earnest Byner who was hit by cornerback Jeremiah Castille, who stripped the ball and then fell on the fumble to preserve the win for Denver.", "You're out of time buddy boy! <br> <br> The correct answer is Otto Graham, who won seven championships in 10 seasons and reached the championship game in every year he played.", "You're out of time buddy boy! <br> <br> In 1990 and 1991, it was Bernie Kosar that set a league record by throwing 308 consecutive passes without an interception, which stood for almost two decades.", "You're out of time buddy boy! <br> <br> After Art Modell moved the team to Baltimore, there were three years of suspension before the Browns started play again in 1999 under new owner Al Lerner.", "You're out of time buddy boy! <br> <br> From 2012 to 2018, the Cleveland Browns collected 13 first-round draft picks."];

    //array selector
    var questionCounter = 0;

    //timer count
    var count = 30;
    var intervalId;

    //final screen vars
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    //questions HTML
    var gameHTML = $(".questionBox");

    //start game button click function
    $(".button").click(function () {

        //hide button
        $(".button").hide();

        //call start game function
        countDown();
        startGame();        
    });

    //answer click function
    $("body").on("click", ".answer", function (event) {

        selectedAnswer = $(this).text();
        

        //correct answer
        if (selectedAnswer === correctAnswer[questionCounter]) {

            //correct answer function
            correctChoice();
            
        }
        //incorrect answer
        else {

            //incorrect answer function
            incorrectChoice();
            
        }
    });

    //30 second countdown function
    function countDown() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        count--

        $("#timer").html(count);

        if (count === 0) {

            clearInterval(intervalId);

            outOfTime();
        }
    }

    //correct answer function
    function correctChoice() {
        
        //increase correct counter
        correct++

        //hide questions
        $(gameHTML).hide();

        //display answer box
        $(".answerBox").show();

        //display message
        $("#message").html(correctAnswerInfo[questionCounter]);

        //display image
        $("#image").html(correctImage[questionCounter]);

        //call wait function
        setTimeout(wait, 7000);
    }

    //incorrect answer function
    function incorrectChoice() {
        
        //increase incorrect counter
        incorrect++

        //hide questions
        $(gameHTML).hide();

        //display answer box
        $(".answerBox").show();

        //display message
        $("#message").html(incorrectAnswerInfo[questionCounter]);

        //display image
        $("#image").html(incorrectImage[questionCounter]);

        //call wait function
        setTimeout(wait, 7000);
    }

    //wait function
    function wait() {

        //increase questionCounter to go through arrays
        if (questionCounter < 7) {
            questionCounter++;

            //hide answer box
            $(".answerBox").hide();

            //reset timer
            clearInterval(intervalId);
            count = 30;

            //start timer start game

            countDown();
            startGame();

        } else {
            //stop timer
            clearInterval(intervalId);

            //display final screen
            finalScreen();
        }
    }

    function finalScreen() {

        //hide answer box
        $(".answerBox").hide();

        //display final screen
        $(".finalScreen").show();

        //display final stats and restart button
        $("#stats").html("Game Over!");
        $("#correct").html("Correct Answers: " + correct + "<br>");
        $("#incorrect").html("Incorrect Answers: " + incorrect + "<br>");
        $("#unanswered").html("Unanswered Questions: " + unanswered + "<br>");
        $(".rebtn").show();

        //restart button click function
        $(".rebtn").click(function () {

            //hide button
            $(".rebtn").hide();

            //hide final screen
            $(".finalScreen").hide();

            //reset timer and stats
            clearInterval(timer);
            count = 30;
            correct = 0;
            incorrect = 0;
            unanswered = 0;
            questionCounter = 0;

            //call start game function
            countDown();
            startGame();
        });
    }

    //start game function
    function startGame() {

        //display game
        $(gameHTML).show();

        $("#timer").html(count);

        //display question
        $("#statement").html(questionArray[questionCounter]);
        //display answers
        $("#answerOne").html(answerArray[questionCounter][0]);
        $("#answerTwo").html(answerArray[questionCounter][1]);
        $("#answerThree").html(answerArray[questionCounter][2]);
        $("#answerFour").html(answerArray[questionCounter][3]);
    }

    // out of time function
    function outOfTime() {
        //increase unanswered counter
        unanswered++

        //hide questions
        $(gameHTML).hide();

        //display answer box
        $(".answerBox").show();

        //display message
        $("#message").html(outOfTimeInfo[questionCounter]);

        //display image
        $("#image").html(incorrectImage[questionCounter]);

        //call wait function
        setTimeout(wait, 7000);
    }
});
