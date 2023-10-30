// var clutter = "";
// for(var i = 1; i<=40; i++){
// clutter += `<div class="bubble">5</div>`;
// }
// document.querySelector("#pbtm").innerHTML = clutter; 
/// making  Bubbles  
let bottom =  document.querySelector("#pbtm") ;
for (var i = 1; i <= 40; i++) {
 // clutter += `<div class="bubble">5</div>`; 
 let k = document.createElement('div') ;  
 k.className = "bubble"; 
 k.innerHTML =  Math.floor(Math.random() * 10);
 bottom.appendChild(k);
}
// making timer 
var timer = 10 ; 
let hit = 0 ; 
let score = 0 ;   
function runtimer(){ 
       var time = setInterval(function() { 
            if(timer>0){ 
                
                      timer--; 
                      document.querySelector("#timer").textContent = timer; 
                    
            } 
            else {  
               
                       Swal.fire({
                        title: 'Wow! You have Done Great',
                       // text: 'Click OK to continue.',
                        icon : "suceess ",
                        confirmButtonText: 'Lets play new game'
                      });
                clearInterval(time) ; 
                let audio = new Audio("ReelAudio-84305.mp3") ; // lowercase 'audio' here
                audio.play() ; 
            }
       },1000)  ;
} 
runtimer() ; 

bottom.addEventListener('click',function(e){ 
      if(timer>0){
        if(e.target.className == "bubble"){
         score+=  Number(e.target.innerHTML)  ; 
         document.querySelector("#score").textContent = score ;  
         hit++ ;    
         document.querySelector("#hit").textContent = hit ; 
           // Change the color of the bubble to red
           e.target.style.backgroundColor = 'orange';
      
           let audio = new Audio("audio_oclick.mp3") ;
           audio.play() ;
        }
}
})

