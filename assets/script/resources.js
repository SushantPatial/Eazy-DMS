function sendmail(){
    


  var Body='Hello';

  Email.send({
    SecureToken:"d31d5b48-c70e-4f1e-9880-9f8c4425413b",
				
    To: 'patial.sushant12345@gmail.com',
    From: "sushantpatial18@gmail.com",
    Subject: "New message on contact from",
    Body : "And this is the body",
    Attachments : [
    {
      name : "smtpjs.png",
      path : "https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png"
    }]
  }).then(
    message => alert(message)
  );
}