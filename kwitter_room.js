var firebaseConfig = {
    apiKey: "AIzaSyCd9a9KY-kypof98srwDCCYyeDp1fsquXg",
    authDomain: "kwitter-project-d8b97.firebaseapp.com",
    databaseURL: "https://kwitter-project-d8b97-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-d8b97",
    storageBucket: "kwitter-project-d8b97.appspot.com",
    messagingSenderId: "409024183743",
    appId: "1:409024183743:web:6db99d3486df85b091f50a"
  };

firebase.initializeApp(firebaseConfig);

function addroom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
           purpose: "Adding Room Name"
     });

     localStorage.setItem("Roomname",room_name);
 

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
//Start code
     console.log("room_name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML += row;
//End code
});});}
getData();
function redirectToroomname(name){
console.log(name);
localStorage.setItem("Roomname",name);
window.location = "kwitter_page.html";
}
function logout() {
localStorage.removeItem("username");
localStorage.removeItem("roomname");
window.location = "index.html";
}




