var firebaseConfig = {
    apiKey: "AIzaSyCd9a9KY-kypof98srwDCCYyeDp1fsquXg",
    authDomain: "kwitter-project-d8b97.firebaseapp.com",
    databaseURL: "https://kwitter-project-d8b97-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-d8b97",
    storageBucket: "kwitter-project-d8b97.appspot.com",
    messagingSenderId: "409024183743",
    appId: "1:409024183743:web:6db99d3486df85b091f50a"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
    room_name = localStorage.getItem("roomname");
    user_name = localStorage.getItem("username");
    

    console.log("room name"+room_name);
    console.log("user name"+user_name);

    function logout(){
        localStorage.removeItem("roomname");
        localStorage.removeItem("username");
        window.location = "index.html";
    }

    function send(){
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
           username: user_name,
           message: msg,
           like: 0
        });
        document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;



}}); });}