//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBNzAreCv_Rq7O5BikiO-CzyJR-IDP6Cwk",
    authDomain: "quitter-53da1.firebaseapp.com",
    databaseURL: "https://quitter-53da1.firebaseio.com",
    projectId: "quitter-53da1",
    storageBucket: "quitter-53da1.appspot.com",
    messagingSenderId: "1094086464830",
    appId: "1:1094086464830:web:c7fd88abe1e0da6fec886f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();