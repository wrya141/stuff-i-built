const r=document.querySelectorAll("button");




    r.forEach(function(r) {
    r.addEventListener("click", function(){
        var x=this.innerHTML;
     makesound(x);
     banime(x);
     });
  });

    
        document.addEventListener("keydown", function(event){
            
         makesound(event.key);
         banime(event.key);
        });



function makesound(x){
    switch (x){
        case "w":
            var aud=new Audio("sounds/tom-1.mp3");
            aud.play();
            break;
            case "a":
            var aud=new Audio("sounds/tom-2.mp3");
            aud.play();
            break;
            case "s":
            var aud=new Audio("sounds/tom-3.mp3");
            aud.play();
            break;
            case "d":
            var aud=new Audio("sounds/tom-4.mp3");
            aud.play();
            break;
            case "j":
            var aud=new Audio("sounds/crash.mp3");
            aud.play();
            break;
                                case "k":
                                    var aud=new Audio("sounds/kick-bass.mp3");
                                    aud.play();
                                    break;
                                    case "l":
                                        var aud=new Audio("sounds/snare.mp3");
                                        aud.play();
                                        break;

      default:
      }
}



function banime(c){
var acti=document.querySelector("."+c);
acti.classList.add("pressed");
setTimeout(function(){
   acti.classList.remove("pressed"); 
},500);

}
  //var m=new Audio("sounds/tom-1.mp3");
   // m.play();




