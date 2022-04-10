var skip = document.getElementById("skip");
var score = document.getElementById("score");
var totscore = document.getElementById("totscore");
var medal = document.getElementById("medal");
var i = 0;
var count = 0;
var scorecount =0;
var time = 0;
var SET = document.querySelectorAll(".set");
var Answer = document.querySelectorAll(".set .answer input")

// skip.addEventListener("click", function() {
//     step();
//     time = 10
// });

Answer.forEach( function (AnswerSingle) {
    AnswerSingle.addEventListener("click", function(event){ setTimeout(function(){
        step();
        time = 10;
        var valid = event.target.getAttribute("valid");
        console.log('working');
        if (valid == "valid"){
            scorecount += 2;
            score.innerHTML = scorecount;
            totscore.innerHTML = scorecount;
        }
        else{
            scorecount -= 1;
            score.innerHTML = scorecount;
            totscore.innerHTML = scorecount;
        }
		if (scorecount>8) {
           
            medal.innerHTML = "Gold";
            var url = 'pics/gold.jpg';
 
            var image = new Image();
            image.src = url;
            document.getElementById('badge').appendChild(image.url);
		}else if (scorecount>5) {
            medal.innerHTML = "Silver";
            var url = 'pics/silver.jpg';
 
            var image = new Image();
            image.src = url;
            document.getElementById('badge').appendChild(image.url);
            
		}else if(scorecount>0){
            medal.innerHTML = "Bronze";
            var url = 'pics/bronze.jpg';
 
            var image = new Image();
            image.src = url;
            document.getElementById('badge').appendChild(image.url);
		}
    },500)})
});

function step(){
    i += 1;
    for (var x = 0; x < SET.length; x++){
        SET[x].className = "set";
    }
    SET[i].className = "set active";
    if (count == 5){
        skip.style.display = "none";
        clearInterval(durationtime);
        countdown.innerHTML = 0;
    }
}
