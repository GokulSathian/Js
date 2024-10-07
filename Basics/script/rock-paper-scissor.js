let score = JSON.parse(localStorage.getItem('score')) || {
    "Win":0
    ,"Loose":0
    ,"Draw":0
        };

let eventId=''
let autoFlag=false

document.querySelector('.js-rockbutton').addEventListener('click', () => {
    playGame('Rock');
});

document.querySelector('.js-paperbutton').addEventListener('click', () => {
    playGame('Paper');
});

document.querySelector('.js-scissorbutton').addEventListener('click', () => {
    playGame('Scissors');
}); 



document.querySelector('.js-resetbutton').addEventListener(
    'click',() =>{
        score.Draw=0;
        score.Loose=0;
        score.Win=0;
        localStorage.removeItem('score')
        document.querySelector('.js-score').innerHTML= `Win: ${score.Win} Loose: ${score.Loose} Draw: ${score.Draw}`
        document.querySelector('.js-result').innerHTML = '';
        document.querySelector('.js-move').innerHTML = '';
    }
);

document.querySelector('.js-autoplaybutton').addEventListener('click',()=>{
    if(!autoFlag){
        eventId= setInterval(()=>{
            let playerMove=pickComputerMove();
            playGame(playerMove)
        },1000)
        autoFlag =true
        document.querySelector('.js-autoplaybutton').innerText="Stop Autoplay"
    }
    else {
        clearInterval(eventId);
        autoFlag =false
        document.querySelector('.js-autoplaybutton').innerText="Autoplay"
    }

})


function playGame(playerMove){
    const computerMove=pickComputerMove();
    let result=''
    document.querySelector('.js-move').innerHTML= `You 
<img src="images/${playerMove}.png" class="icon">
<img src="images/${computerMove}.png" class="icon">
Computer`;
    

    if (playerMove==='Scissors'){
        if (computerMove==='Rock'){
            result='Loose'
            score.Loose += 1
        }
        else if (computerMove==='Paper'){
            result='Win'
            score.Win+=1
            }
        else if (computerMove==='Scissors'){
            result ='Draw'
            score.Draw+=1
        }
    }
    else if  (playerMove==='Rock'){
        if (computerMove==='Rock'){
            result ='Draw'
            score.Draw+=1
        }
        else if (computerMove==='Paper'){
            result='Loose'
            score.Loose+= 1
            }
        else if (computerMove==='Scissors'){
            result='Win'
            score.Win+=1
        }
    }
    else if (playerMove==='Paper'){
        if (computerMove==='Rock'){
            result='Win'
            score.Win+=1
        }
        else if (computerMove==='Paper'){
            result ='Draw'
            score.Draw+=1
            }
        else if (computerMove==='Scissors'){
            result='Loose'
            score.Loose += 1
        }
    }
    localStorage.setItem('score',JSON.stringify(score));

    document.querySelector('.js-result').innerHTML= `${result}`         

    document.querySelector('.js-score').innerHTML= `Win: ${score.Win} Loose: ${score.Loose} Draw: ${score.Draw}`
}

function pickComputerMove(){
    const randomMove=Math.random();
    let computerMove='';
    if (randomMove>0 && randomMove<1/3){
    computerMove='Rock';
    }
    else if (randomMove>1/3 && randomMove<2/3){
    computerMove='Paper';
    }
    else if (randomMove>2/3 && randomMove<1){
    computerMove='Scissors';
    }
    return computerMove;
}




