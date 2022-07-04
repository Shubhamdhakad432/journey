function SendMail() {
  var x = {
    form_name: document.getElementById("name").value,
    form_phone: document.getElementById("phone").value,
    form_mail: document.getElementById("email").value,
    form_message: document.getElementById("message").value,
  };
  emailjs.send("service_610b92l", "template_mbx7u1n", x).then(function (res) {
    alert(message + " Sent Successfully On ~" + res.status);
  });
}
