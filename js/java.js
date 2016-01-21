$(function(){

  var myFirebase = new Firebase("https://blazing-torch-8042.firebaseio.com/");
  var $chatWindow = $(".chat-window");
  var $userInput = $("input");
  var userName = prompt("choose a username");




  myFirebase.on("child_added",function(snapshot){
    var chatData = snapshot.val();

    $chatWindow.append("<p>" + chatData.user + ": " + chatData.message + "</p>");

  });

  $(".btn-success").click(function(){
    var $userText = $userInput.val();

    if($userText !== ""){
      myFirebase.push({user: userName, message: $userText});
    }

    $userInput.val("");
  });
});
