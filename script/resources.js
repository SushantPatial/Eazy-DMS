function sendmail(){
    


  var Body='Hello';

  Email.send({
    SecureToken:"060f8a24-0719-4a45-8dda-6bdd4f395e98",
				
    To: 'sushantpatial18@gmail.com',
    From: "patial.sushant12345@gmail.com",
    Subject: "New message on contact from ",
    Body: Body
  }).then(
    message =>{
      if(message=='OK'){
      alert('Your mail has been send. Thank you for connecting.');
      }
      else{
        console.error (message);
        alert('There is error at sending message. ')
        
      }

    }
  );
}