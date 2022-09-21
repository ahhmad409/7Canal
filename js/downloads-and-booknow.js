function sendEmail4() {
  debugger;
  var Obj = {
    subject: "Submit and Download",
    message:
      "<html><b>This person wants to get in touch with you!</p><h3>Name:</b><strong>" +
      $("#inputName").val() +
      "</strong><h3> Email:</h3><strong>" +
      $("#inputEmail").val() +
      "</strong><h3> Contact:</h3><strong>" +
      $("#inputContact").val() +
      "</strong>                      <br></br></html>",
  };
  $.ajax({
    url: "https://einvoicing.000webhostapp.com/index.php",
    type: "POST",
    data: Obj,
    success: function (data) {
      console.log(data);
      ShowToastr();
    },
  });
}
