var firebaseConfig = {
      apiKey: "AIzaSyCL7XfYwIV90j3UShO0mryn2Jicyb7i2sU",
      authDomain: "kwitter-40e90.firebaseapp.com",
      databaseURL: "https://kwitter-40e90-default-rtdb.firebaseio.com",
      projectId: "kwitter-40e90",
      storageBucket: "kwitter-40e90.appspot.com",
      messagingSenderId: "30880183498",
      appId: "1:30880183498:web:8cb5ca2cc438b0a16eb033"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
      room_name=document.getElementById("roomName").value;
      localStorage.setItem("room_name",room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      window.location="kwitter_page.html"
}
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name -" + Room_names);
      row="<div class='room_name' id='"+Room_names+"' onclick='redirectToRoomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

function redirectToRoomname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}