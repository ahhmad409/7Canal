const bookBtn = document.getElementById("book-btn");

bookBtn.addEventListener("click", () => {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const apartments = document.getElementById("apartments");
  const message = document.getElementById("message");

  if (
    !name.value ||
    !email.value ||
    !phone.value ||
    !apartments.value ||
    !message.value
  ) {
    Swal.fire({
      title: "Please Enter All Fields",
      confirmButtonText: "OK",
    });
    return;
  }

  var Obj = {
    subject: "Booking Inquiry",
    message:
      "<html><b>This person wants to get in touch with you!</p><h3>Name:</b><strong>" +
      $("#name").val() +
      "</strong><h3> Phone:</h3><strong>" +
      $("#phone").val() +
      "</strong><h3> Email:</h3><strong>" +
      $("#email").val() +
      "</strong><h3> Want to book:</h3><strong>" +
      $("#apartments option:selected").text() +
      "</strong><h3> Message:</h3><strong>" +
      $("#message").val() +
      "</strong><br></br></html>",
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

  name.value = "";
  email.value = "";
  phone.value = "";
  apartments.value = "";
  message.value = "";
});
