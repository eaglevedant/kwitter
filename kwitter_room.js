
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDEEFPwkO8ghvwOuFVTykdGFnNlOlk2hRE",
      authDomain: "chat-app-by-vedant.firebaseapp.com",
      databaseURL: "https://chat-app-by-vedant-default-rtdb.firebaseio.com",
      projectId: "chat-app-by-vedant",
      storageBucket: "chat-app-by-vedant.appspot.com",
      messagingSenderId: "76598222855",
      appId: "1:76598222855:web:86d935440483bee0034aa2"
    };
    firebase.initializeApp(firebaseConfig);


function addRoom(){
 room_name=document.getElementById("room_name").value ;
 firebase.database().ref("/").child(room_name).update({
       purpose:"starting function to add room name message by :vedant  "
 })
 localStorage.setItem("room_name",room_name);
 window.location="kwitter_page.html"
}



    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names); 
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;

      //End codei
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room",room);
 window.location="kwitter_page.html"
}

function logout(){
      localStorage.removeItem(user_name);
      localStorage.removeItem(room_name);
window.location="index.html";
}





































