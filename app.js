const user_input = document.getElementById('input-box');
const check = document.getElementById('submit-btn');
const messageArea = document.getElementById('info-message');
const congrats = document.getElementById('congrats');
const attemptMsg = document.getElementById('attemptMsg');
const uranswertMsg = document.getElementById('uranswertMsg');
const statusMsg = document.getElementById('statusMsg');
const easy = document.getElementById('easy');
const medium = document.getElementById('medium');
const hard = document.getElementById('hard');
const levelBox = document.getElementById('level-box');
congrats.style.display = "none"

var limit;
let attempt = 0;
var answer; //Math.trunc(Math.random()*limit);


function checkLevel(){
    if(attempt == 0){
        if(easy.checked == true){limit = 10;} 
        if(medium.checked == true){limit = 100;}
        if(hard.checked == true) {limit = 1000;}
        answer = Math.trunc(Math.random()*limit);
    }
}

if(attempt != 0){
    levelBox.style.display = 'none';
}

const ATTEMPT_LIMIT = 5;
function showInput(){
    congrats.style.display = "none"
    if(isNaN(user_input.value) || (user_input.value ==''))
    {
        statusMsg.textContent = 'Not correct input form';
        statusMsg.style.backgroundColor = 'red'
        console.log('not correct input form');
    }
    else{
        
        levelBox.style.display = 'none';
        console.log('correct')
        attempt += 1;
        if(attempt < ATTEMPT_LIMIT){
            if(user_input.value == answer){
                statusMsg.style.backgroundColor = 'green';
                levelBox.style.display = 'block';
                attempt = 0;
                statusMsg.textContent = 'congrats!! \nPlay again';
                console.log('congrats!!');
                congrats.style.display = "block"
            }
            else{
                console.log('sorry'); 
                if(user_input.value < answer){
                    statusMsg.style.backgroundColor = 'yellow'
                    statusMsg.textContent = 'go higher';
                    console.log('go higher')
                }
                else{
                    statusMsg.style.backgroundColor = '#2a9df4';
                    console.log('go lower');
                    statusMsg.textContent = 'go lower';
                }
            }      
        }
        else{
            attempt = 0;
            //answer = Math.trunc(Math.random()*100);
            statusMsg.style.backgroundColor = 'red';
            statusMsg.textContent = 'sorry you are out of attempts';
            console.log('exceed attempt limit')
        }
        
    }
    
    uranswertMsg.textContent = `${user_input.value}`
    attemptMsg.textContent = `${ATTEMPT_LIMIT - attempt}`;
    console.log('you input: ', user_input.value)
    console.log('attempt: ', attempt);
    user_input.value = '';
    console.log(`level is ${limit}`);
    console.log(`answer is ${answer}`);

}



function checkOut(){
        check.textContent = 'Check'
}

check.addEventListener('click', checkLevel);
check.addEventListener('click', showInput);


function randomChangeColor(){
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    messageArea.style.backgroundColor = `rgb(${r},${g},${b})`;
}

messageArea.addEventListener('dblclick', randomChangeColor);
