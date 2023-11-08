const btn = document.querySelector(".btn");
const text=document.querySelector(".text");
const speech = document.querySelector(".speak");
const language = document.getElementById('languageSelector');
document.addEventListener('DOMContentLoaded',getJoke);

btn.addEventListener("click",getJoke);
speech.addEventListener('click',speakJoke);
language.addEventListener('change',updateText);


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
    const selectedLanguage= language.value;
    console.log(selectedLanguage);
    console.log(joke);
    const speech = new SpeechSynthesisUtterance();
    speech.text= joke;
    speech.lang= selectedLanguage;

    const voices= window.speechSynthesis.getVoices();
    const voiceForLanguage= voices.find(voice=> voice.lang == selectedLanguage);
    if(voiceForLanguage){
        console.log('Yes');
        speech.voice = voiceForLanguage;
    }
    console.log(voices);
    speech.voices= voices[0];
    window.speechSynthesis.speak(speech);
}

function updateText(){
    const selectedLanguageText= language.value;
    console.log('selectedLanguageText',selectedLanguageText)
    text.lang = selectedLanguageText;
}