//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//랜덤번호가 < 유저번호 Down!!!
//랜덤번호가 >유저번호 Up!!!
//Reset버튼을 누르면 게임이 리셋된다.
//5번의 기회를 다쓰면 게임이 끝난다.(더이상 추측불가, 버튼이 disable)
//유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다.
//유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깍지 않는다.
//유저가 숫자 입력후 재입력할때 알아서 숫자가 지워지게 하는 것.
//유저가 숫자를 맞추면 go 버튼이 없어지게 한다.
//기회를 다 날리면 gameover가 된다.

let computerNum="0"
let playButton = document.getElementById("play-button")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let chances = 3
let gameOver = false
let chanceArea = document.getElementById("chance-area")
let history=[]
let anSwer = document.getElementById("answer")
let numHistory = document.getElementById("number-history")

playButton.addEventListener("click",play)
resetButton.addEventListener("click",reset)
userInput.addEventListener("focus",function(){userInput.value=""})

function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1
    console.log("정답",computerNum)
    anSwer.textContent=`정답:${computerNum}`
}



function play(){
    let userValue =userInput.value
    if(userValue<1 || userValue>100){
        resultArea.textContent="1과 100사이 숫자를 입력해주세요."
return;
    }


if(history.includes(userValue)){
    resultArea.textContent="이미 입력한 숫자입니다. 다른 숫자를 입력해주세요."
return
}


chances--;
chanceArea.textContent=`남은기회 :${chances}번`
numHistory.textContent=`[${history}]`

if(chances <= 0 && userValue != computerNum){
resultArea.textContent="Game Over"
gameOver=true
}

else if(userValue<computerNum){
    resultArea.textContent="위로!"
}else if(userValue>computerNum){
    resultArea.textContent="아래로!"
}else{
    resultArea.textContent="정답!"
    gameOver=true
}

history.push(userValue)
console.log(history)



if(chances <1){
    gameOver=true
    
}
if(gameOver==true){
    playButton.disabled = true
    
}
}
function reset(){
    userInput.value=""
    pickRandomNum()
    resultArea.textContent="마시기 싫으면 맞춰라"
    playButton.disabled = false
    gameOver = false
    chances = 3
    chanceArea.textContent=`남은기회 :${chances}번`
    history=[]
    numHistory.textContent=`[${history}]`
}

pickRandomNum()