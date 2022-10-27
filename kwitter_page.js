//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyBY1Unpakm2F74IbuTlluPRQ_lT1IuOzjw",
      authDomain: "kwitter-695c1.firebaseapp.com",
      databaseURL: "https://kwitter-695c1-default-rtdb.firebaseio.com",
      projectId: "kwitter-695c1",
      storageBucket: "kwitter-695c1.appspot.com",
      messagingSenderId: "261820029777",
      appId: "1:261820029777:web:a4b6343715c5a4a0319170"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username")
room_name = localStorage.getItem("roomname")

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location = "index.html";
}

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            Name:username,
            Message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}