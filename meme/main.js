const butt = document.querySelector(".generate-meme-btn") ;   
const title = document.querySelector(".meme-title") ;  
const memeImage = document.querySelector(".meme-generator img");


 async function genratememe(){ 
        //const url = https://meme-api.com/gimme/wholesomememes ; 
        const response = await fetch("https://meme-api.com/gimme/wholesomememes");
var data = await response.json();
//console.log(data);
title.innerHTML = data.title ;  
memeImage.setAttribute("src",data.url) ;
document.querySelector(".meme-author").innerHTML = data.author ;
}
butt.addEventListener('click',genratememe) ; 