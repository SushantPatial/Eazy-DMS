function sendmail(){
    


  var Body='Hello';

  Email.send({
    SecureToken:"b8344be3-0b41-4854-ac1b-1f3e5927e97c",
				
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