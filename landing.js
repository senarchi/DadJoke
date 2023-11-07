const btn = document.querySelector(".btn");
const text=document.querySelector(".text");
document.addEventListener('DOMContentLoaded',getJoke);

btn.addEventListener("click",getJoke)


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