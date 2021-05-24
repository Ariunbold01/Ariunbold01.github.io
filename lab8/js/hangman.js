
let questions = ['Монгол улсын нийслэл ?', 'Дэлхий дээрх хамгийн том амьтан ?', 'Монгол улсын ерөнхийлөгч ?', 'Дэлхийн 2 аар дайн хэдэн онд болсон бэ?', '5+3+2=??'];
let answers = ['улаанбаатар', 'халим', 'баттулга', '1945', '10'];
let timer = document.querySelector('.timer-text');
let questionDOM = document.querySelector('.question');
let answer = document.querySelector("#answer");
Timer();

function Timer() {
    time = 10;

    count = setInterval(function () {
        if (time > 0) {
            time--;
            timer.innerText = `${time}`;
        }
        if (time == 0) {
            setTimeout(function(){ alert("You lose");  }, 500);
            clearInterval(interval);
        }
    }, 1000);
}
