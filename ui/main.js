var button = document.getElementById('counter');
button.onclick = function(){
   //make a request to the counter endpoint
   var request = new XMLHttpRequest();
  //CREATE a request
   //capture and store it in a variable
   request.onreadystatechange = function(){
       if(request.readystate === XMLHttpRequest.DONE){
        //Take some action   
        if(request.status ===200){
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
       }
       //Not yet done
   };
   //render the variable in the correct span
  // counter = counter +1;

  
  //MAKE a request
  request.open('GET','http://mailnisha96.imad.hasura-app.io/counter', true);
  request.send(null);
};