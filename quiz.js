const form = document.querySelector('form');
const answer = document.querySelector('#answer');
const qs = document.querySelector('.box');
const wOrW = document.querySelector('.wOrW');
const showScore = document.querySelector('.score');
const qnum =document.querySelector('.qnum');
let qnumber = 1;
let res;
let score = 0;

initSum();
getInput();
    
function  getInput(){
   
    form.addEventListener('submit' , (e) =>{
     e.preventDefault();
         
    if (Number(answer.value) == res){
        wOrW.textContent = 'correct';
            score++;
            qnumber++;
            showScore.textContent = `Your Score Is : ${score}`
            wOrW.textContent= 'correct'
            initSum();
        }  else {
            wOrW.textContent= 'incorrect'
            qnumber++;
            initSum();
        }                    
})}

function initSum(){
    form.reset();
    let sum1=Math.round(Math.random()*12);
    let sum2=Math.round(Math.random()*12);
    const result=sum1*sum2;
    qs.textContent = `${sum1} X ${sum2}`;
    qnum.innerText = `Question Number : ${qnumber}`
    res = result;
    checkSum(sum1 , sum2);
}

function checkSum(sum1 ,sum2){
    if (sum1 ===0 || sum2 === 0){
        console.log(`check sum1 ${sum1} , check sum2 ${sum2}`);
        initSum();
    }
}