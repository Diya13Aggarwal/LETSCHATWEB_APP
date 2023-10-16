//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCL7XfYwIV90j3UShO0mryn2Jicyb7i2sU",
    authDomain: "kwitter-40e90.firebaseapp.com",
    databaseURL: "https://kwitter-40e90-default-rtdb.firebaseio.com",
    projectId: "kwitter-40e90",
    storageBucket: "kwitter-40e90.appspot.com",
    messagingSenderId: "30880183498",
    appId: "1:30880183498:web:8cb5ca2cc438b0a16eb033"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button_tag="<button class='btn btn-warning' id='"+firebase_message_id+"' value="+like+" onclick='updateLike(this.id);'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>&nbsp; Like: "+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button_tag+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
 } });  }); }
getData();
function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
function updateLike(message_id){
    console.log("clicked on like button-"+message_id);
    button_id=message_id;
    likes=document.getElementById(button_id).value;
    console.log("number of likes "+likes);
    updateLikes=Number(likes)+1;
    console.log(updateLikes);
    firebase.database().ref(room_name).child(message_id).update({
        like : updateLikes
    });
}