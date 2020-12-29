function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "gajulavarsha359@gmail.com",
        Password: "Learn#9u",
        To: "diycarve@gmail.com",
        From: "gajulavarsha359@gmail.com",
        Subject: "Hiii akka",
        Body: "I want panipuri",
    }).then(
        message => alert("mail sent successfully")
    );
}