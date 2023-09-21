const form = document.querySelector('form');
const answer = document.querySelector('#answer');
const qs = document.querySelector('.box');
const wOrW = document.querySelector('.wOrW');
const showScore = document.querySelector('.score');
const qnum =document.querySelector('.qnum');
const numBtn = document.querySelectorAll('.number');
const numDisp = document.querySelector('.number-display')



let qnumber = 1;
let res;
let score = 0;
let maxQs = 10;

showScore.textContent = `Your Score Is : ${score} / ${maxQs}`

initSum();
getInput();

function getInput(){
   
    form.addEventListener('submit' , (e) =>{
     e.preventDefault();
         
    if (Number(answer.value) == res){
            score++;
            qnumber++;
            console.log('correct' , `Score = ${score}`);
            showScore.textContent = `Your Score Is : ${score} / ${maxQs}`
            initSum();
        }  else {
            qnumber++;
            initSum();
        }      
    })
}

function initSum(){
    
    if (qnumber < maxQs+1){

        form.reset();
        let sum1=Math.round(Math.random()*12);
        let sum2=Math.round(Math.random()*12);
        const result=sum1*sum2;
        qs.textContent = `${sum1} X ${sum2}`;
        qnum.innerText = `Question Number : ${qnumber} / ${maxQs}`
        res = result;
        checkSum(sum1 , sum2);
        
    } else if (qnumber >= maxQs+1) {
      
        popup();
    }
}

function checkSum(sum1 ,sum2){
    if (sum1 ===0 || sum2 === 0){
        console.log(`check sum1 ${sum1} , check sum2 ${sum2}`);
        initSum();
    }
}

function popup(){
    //orm.removeEventListener('submit');
    const popup = document.querySelector('.popup-wrapper');
    popup.style.display='flex';
    popup.querySelector('.popup-content').innerText =`You Scored ${score} / ${maxQs}`


    document.querySelector('#resetBtn').addEventListener('click', ()=>{
        resetQuiz();
        popup.style.display="none";
    })
}

function resetQuiz(){
     qnumber = 1;
    
     score = 0;
     maxQs = 10;
     showScore.textContent = `Your Score Is : ${score} / ${maxQs}`
    initSum();
  
}
