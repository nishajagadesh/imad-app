//var button = document.getElementById('counter');
//button.onclick = function(){
   //make a request to the counter endpoint
  // var request = new XMLHttpRequest();
  //CREATE a request
   //capture and store it in a variable
   //request.onreadystatechange = function(){
     //  if(request.readyState === XMLHttpRequest.DONE){
        //Take some action   
       // if(request.status ===200){
         //   var counter = request.responseText;
           // var span = document.getElementById('count');
            //span.innerHTML = counter.toString();
//        }
 //      }
       //Not yet done
 //  };
   //render the variable in the correct span
  // counter = counter +1;

  
  //MAKE a request
  //request.open('GET','http://mailnisha96.imad.hasura-app.io/counter', true);
  //request.send(null);
//};

//Submit Name
//var nameInput = document.getElementById('name');
//var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
   var request = new XMLHttpRequest();
  //CREATE a request
   //capture and store it in a variable
   request.onreadystatechange = function(){
     if(request.readyState === XMLHttpRequest.DONE){
       //Take some action   
         if(request.status ===200){
            console.log('user logged in');
            alert('Logged in successfully');
         } else {
            if(request.status === 403){
                alert('username/password is incorrect');
            } 
            else {
                alert('something went wrong on the server');
            }
         }
     };

var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
console.log(username);
console.log(password);
request.open('POST', 'http://mailnisha96.imad.hasura-app.io/login', true);
request.setRequestHeader('Content-Type', 'application/json', 
request.send(JSON.stringify({username: username, password: password}));