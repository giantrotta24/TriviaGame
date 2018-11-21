$(document).ready(function () {

    var questionArray;
    var answerArray;

    function countDown() {
        var count = 30;

        var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

        function timer() {
            count--;
            if (count <= 0) {
                clearInterval(counter);
                console.log("success")
                //counter ended, do something here

                startGame();
            }

            
            document.getElementById("timer").innerHTML = "Time Remaining: " + count;
        };
    }


    $(".button").click(function () {
        $(".button").hide();
        startGame();
    })

    function startGame() {
        countDown();
    }







});

