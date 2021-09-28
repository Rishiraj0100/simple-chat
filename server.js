<!DOCTYPE html>
<html>
<head>
  <title>Chat - The intellect</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
  <script src="https://code.jquery.com/jquery-3.2.1.min.js" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
  <script src="/socket.io/socket.io.js"></script>
</head>
<body>
<div class="container">
    <br>
    <div id="messages">

    </div>
    <div class="jumbotron">
        <textarea id = "message" class="form-control" placeholder="Your Message Here" rows="1"></textarea>
        <button id="send" class="btn btn-success">Send</button>
    </div>
</div>
<script>
   var socket = io();
    $(() => {
        $("#send").click(()=>{
            sendMessage({msg: $("#message").val()});
        })

        getMessages()
    })

    socket.on('message', addMessages)

    function addMessages(message){
        $("#messages").append(`<h4> ${message.username} </h4> <p> ${message.message} </p>`)
    }

    function getMessages(){
      $.get('https://beta.intellecttech1.repl.co/api/messages', (data) => {
        data.forEach(addMessages);
      })
    }

    function sendMessage(message){
      $.post("https://beta.intellecttech1.repl.co/api/messages", message)
    }
</script>
</body>
</html>
