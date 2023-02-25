const questions=[{
    'que' : 'Which of the following is mark up language ?',
    'a' : 'HTML',
    'b' : 'CSS',
    'c' : 'JavaScript',
    'd' : 'PHP',
    'Correct' : 'a'
},
{
    'que' : 'When was JavaScript launched ?',
    'a' : '1996',
    'b' : '1995',
    'c' : '1997',
    'd' : '1998',
    'Correct' : 'b'
},
{'que' : 'CSS stands for ? ?',
'a' : 'Cascading style sheet',
'b' : 'Concurrent style sheet',
'c' : 'Cascading styling sheet',
'd' : 'cascade style sheet',
'Correct' : 'a'
}
]
let index=0;
let right=0,wrong=0;
let total=questions.length;
const quesBox=document.getElementById("quesBox1")
const optioninputs=document.querySelectorAll('.options')
const loadQuestions=()=>{
    if(index==total){
        return endQuiz();
    }
    reset();
    const data=questions[index]
    //console.log(data)
    quesBox.innerText=` ${index+1}) ${data.que}`;
    optioninputs[0].nextElementSibling.innerText=data.a;
    optioninputs[1].nextElementSibling.innerText=data.b;
    optioninputs[2].nextElementSibling.innerText=data.c;
    optioninputs[3].nextElementSibling.innerText=data.d;
}
const submitQuiz=()=>{
    const data=questions[index]
    const ans=getAnswer()
    if(ans==data.Correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestions();
    //return;

}

var answer;
const getAnswer=()=>{
    let answer;
    optioninputs.forEach((item)=>{
        if(item.checked){
            answer= item.value;
        }
        
    
})
return answer;
}
const reset=()=>{
    optioninputs.forEach((item)=>{
        item.checked=false;
        }
    )
        
    
}
const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <h3>Thank you for Playing the Quiz</h3>
    <h2>${right}/${total} are correct.</h2>
    `
}



loadQuestions();
