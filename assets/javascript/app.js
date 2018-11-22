$(document).ready(function () {
    //questions
    var questionArray = ["What QB led the Browns to three AFC championship games during the 1980's?", "Which Browns player was voted to the Pro Bowl every year that he played?"];
    //answers
    var answerArray = [["Otto Graham", "Vinny Testaverde", "Brian Sipe", "Bernie Kosar"], ["Otto Graham", "Joe Thomas", "Ozzie Newsome", "Jim Brown"]];
    //correct answers
    var correctAnswer = ["Bernie Kosar", "Jim Brown"];

    var correctAnswerInfo = ["You're correct! <br> <br> Quarterback Bernie Kosar, who the Browns drafted in 1985, led the team to three AFC Championship games in the late 1980s but lost each time to the Denver Broncos.", "You're correct! <br> <br> Brown is the only player in NFL history to average over 100 rushing yards per game for his career."]
    
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
            alert("wrong!")
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
        setTimeout(wait, 4000);
    }

    //wait function
    function wait() {
        if (questionCounter < 1) {
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

