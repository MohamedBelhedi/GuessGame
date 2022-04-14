
        const wort=document.querySelector(".wort")
        const wort2=document.querySelector(".wort2")
        var versuche=document.querySelector(".versuch")
        var btn=document.querySelector(".btn1")
        var versuche=0
        // bild.style.display = 'none'
        
        
       
        // const RateNummer=Number(12)

        //attempt tries setzen if attempt 5 wort.innertext="du hast verloren " und location.reload mit timeout
   function stargame() {
       

    
    while(true){
    
        var message=prompt('Gib eine Zahl zwischen 0 und 11')
        var bild=document.querySelector(".bild1")
        var bild2=document.querySelector(".bild2")
      
      
        
      

        // var message=document.querySelector(".input").target.value
        var body=document.querySelector("body")
        const RateNummer=Math.floor((Math.random() * 10) + 1)
        // const RateNummer=Number(12)
        if(message===RateNummer)
    {
         

        document.querySelector('.wort').innerText=message+' Richtig gewonnen 😋'
        wort.style.fontSize="50px"
        wort.style.textAlign="center"
        wort.style.color="red"
        wort.style.verticalAlign = "bottom"
        body.style.backgroundColor="blue"
        btn.style.display="none";
        console.log(RateNummer);
        // bild2.style.display="initial"

        setTimeout(function(){ 


            
          
            location.reload();
            return true;
      
        



},3000)
break;

      

      
    
    
     
        // TimeOut setzen
    }
   
    if(versuche===3)
    {
        
//     var x = document.createElement("IMG");
//   x.setAttribute("src", "https://ichef.bbci.co.uk/news/976/cpsprodpb/C4C7/production/_118257305_ce33056a-d3fc-4ba3-a302-c454ed819808.jpg");
//   x.setAttribute("width", "304");
//   x.setAttribute("height", "228");
// //   x.style.marginBottom="200px";
//   x.style.marginLeft="50px";
//   x.style.position = "realtive";
//   x.style.objectFit = "cover"
//   x.style.marginTop = "10px"
 
// //   x.style.padding="200px";
  
  
//     document.body.appendChild(x);
    btn.style.display="none";
    
       
        wort.innerText= versuche +' Versuche durch leider verloren versuche es noch einmal '
        wort.style.marginLeft="100px";
        wort.style.textAlign="center";
        bild1.style.display="initial"
        
        
        
        setTimeout(function(){ 
       
        
        location.reload();
        
        
       



        


},10000)

break;
    }

function ergebnis1(){wort.innerText='Zu Hoch Tiefer gehen als '+ message
wort.style.fontSize="50px"
wort.style.marginLeft="200px"
wort.style.textAlign="center"
wort.style.color="red"
wort.style.verticalAlign = "bottom"
versuche++
wort2.innerText="noch Versuche"+versuche+"von 3" //diese Zeile Code löschen
wort2.style.color="yellow"
wort2.style.fontSize="20px"
wort2.style.position="relative"
wort2.style.textAlign="center"
wort2.style.marginLeft="200px"
wort2.style.fontSize="50px"
}
function ergebnis2(){
    wort.innerText='Zu Tief höher gehen als '+ message
        wort.style.fontSize="50px"
        wort.style.marginLeft="200px"
        wort.style.textAlign="center"
        wort.style.color="blue"
        wort.style.verticalAlign = "bottom"
        versuche++
        wort2.innerText="noch Versuche "+versuche+"von 3" //dise Zeile Code löschen

        wort2.style.color="yellow"
        wort2.style.fontSize="20px"
        wort2.style.position="relative"
        wort2.style.textAlign="center"
        wort2.style.position="relative"
        wort2.style.marginLeft="200px"
        wort2.style.fontSize="50px"

}
     if(message>RateNummer){
      
        ergebnis1();


    }
    else if(message<RateNummer){
        
              ergebnis2();  


    }

    
    // else
    
    // {

    //     alert('Nochmal Raten du Sack')
        
        
      
        
    // }



}


};


function quitgame(){

var message=confirm("Willst du das spiel wirklich beenden")


if(message)
{
    
    window.close();



}else
{
    location.reload();
}


};


let button=document.querySelectorAll("button");
let body2=document.querySelector("body");

button.forEach((node) => {
    node.addEventListener("click",stargame)
    button[1].addEventListener("click",quitgame)
});

let colorVal=document.querySelector("input")

function changBG()
{

body2.style.background=colorVal.value




}


colorVal.addEventListener("input",changBG)



    // message.eval(wort);
// noch bitte mit 4 versuchen 

// wenn nummer > größer oder kleiner dann alert schreiben mit zu hoch oder zu niedrig
