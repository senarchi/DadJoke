const btn = document.querySelector(".btn");
const text=document.querySelector(".text");
const speech = document.querySelector(".speak");

//document.addEventListener('DOMContentLoaded',getJoke);

btn.addEventListener("click",getJoke);
speech.addEventListener('click',speakJoke);



async function getJoke(){
    const data= await fetch ('https://icanhazdadjoke.com/',{
        headers:{
            'Accept':'application/json'
        }
    })

    const formatData=await data.json();
    console.log(formatData);
    text.innerHTML=formatData.joke;
}

function speakJoke(){
    const joke= text.innerHTML;
   
   
    console.log(joke);
    const speech = new SpeechSynthesisUtterance();
    speech.text= joke;
   

    const voices= window.speechSynthesis.getVoices();
    
    window.speechSynthesis.speak(speech);
}

