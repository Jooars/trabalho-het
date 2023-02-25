function keyPressed(evt){
   evt = evt || window.event;
   var key = evt.keyCode || evt.which;
   return String.fromCharCode(key); 
}

document.onkeypress = function(evt) {
   var str = keyPressed(evt);

   if (str == "a" || str == "A") {
      console.log("Essa tecla deve VOLTAR os slides")
   }

   if (str == "d" || str == "D") {
      console.log("Essa tecla de AVANÇAR os slides")
   }
};