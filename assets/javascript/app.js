$(document).ready(function () {

    var questionArray = ["What QB led the Browns to three AFC championship games during the 1980's?", "Which Browns player was voted to the Pro Bowl every year that he played?"];
    var answerArray = [["Otto Graham", "Vinny Testaverde", "Brian Sipe", "Bernie Kosar"], ["Otto Graham", "Joe Thomas", "Ozzie Newsome", "Jim Brown"]];
    var correctAnswer = ["Bernie Kosar", "Jim Brown"];
    var questionCounter = 0;

    //start game button click function
    $(".button").click(function () {
        $(".button").hide();
        startGame();
    });

    //answer click function
    $(".answer").click(function() {
        selectedAnswer = $(this).text();
        if (selectedAnswer === correctAnswer[questionCounter]) {
            // alert("correct!")
            correctAnswer();

        }
        else {
            alert("wrong!")
        }
    });

    //30 second countdown function
    function countDown() {
        var count = 30;

        var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

        function timer() {
            count--;
            if (count <= 0) {
                clearInterval(counter);
                //counter ended, do something here
                
            }

            
            document.getElementById("timer").innerHTML = "" + count;
        };
    }

    //start game function
    function startGame() {
        //display game
        $(".questionBox").show();
        //start countdown
        countDown();
        //display question
        $("#statement").html(questionArray[questionCounter]);
        //display answers
        $("#answerOne").html(answerArray[questionCounter][0]);
        $("#answerTwo").html(answerArray[questionCounter][1]);
        $("#answerThree").html(answerArray[questionCounter][2]);
        $("#answerFour").html(answerArray[questionCounter][3]);
    }

    //correct answer function
    function correctAnswer() {
        
    }




    //out of time function
    // function outOfTime(){
    //     $("#message").html("")
    // }



});

