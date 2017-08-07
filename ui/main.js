var button = document.getElementById('counter');
button.onclick = function(){
   //make a request to the counter endpoint
   var request = new XMLHttpRequest();
  //CREATE a request
   //capture and store it in a variable
   request.onreadystatechange = function(){
       if(request.readyState === XMLHttpRequest.DONE){
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

//Submit Name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //make request to server and send name
    var names = ['name1','name2','name3','name4'];
    var list='';
    for (var i=0; i<names.length; i++){
        list += '<li>' + names[i] + '</li>'; 
    }
    var ul = document.getElementById('nameList');
    ul.innerHTML = list;
    //capture names and render as a list
};