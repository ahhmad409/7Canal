(function ($) {
  "use strict";

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
})(jQuery);

const allLinks = document.querySelectorAll(".downloadLink").forEach((link) => {
  link.addEventListener("click", () => {
    const downloadButton = document.getElementById("downloadBtn");

    const a = document.createElement("a");
    a.textContent = "Submit & Download";
    a.classList.add("btn", "btn-primary");
    a.setAttribute("id", "downloadBtn");
    a.setAttribute("type", "button");
    a.setAttribute("href", "#");
    document.querySelector(".modal-footer").replaceChild(a, downloadButton);

    a.addEventListener("click", () => {
      const name = document.getElementById("inputName");
      const email = document.getElementById("inputEmail");
      const contact = document.getElementById("inputContact");

      console.log(`Name: ${name} \nEmail: ${email} \nContact: ${contact}`);

      if (!name.value || !email.value || !contact.value) {
        a.setAttribute("href", "#");
        Swal.fire({
          title: "Please Enter All Fields",
          confirmButtonText: "OK",
        });
        return;
      }

      const validEmail =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (email.value.match(validEmail)) {
      } else {
        a.setAttribute("href", "#");

        Swal.fire({
          title: "Please check your email again!",
          confirmButtonText: "OK",
        });
        return;
      }

      const validPhone = "^([0-9()/+ -]*)$";
      if (contact.value.match(validPhone)) {
      } else {
        a.setAttribute("href", "#");

        Swal.fire({
          title: "Please check your phone number!",
          confirmButtonText: "OK",
        });
        return;
      }

      // a.setAttribute("download", "download");

      // FOR PRODUCTION
      if (link.textContent == "Brochure")
        a.setAttribute("href", "./downloads/7Canal Brochure.pdf");
      else if (link.textContent == "3D Walkthrough")
        a.setAttribute("href", "./downloads/7-Canal-walkthrough.mp4");
      else if (link.textContent == "Price Lists") {
        a.setAttribute("download", "Price List");
        a.setAttribute("href", "./downloads/price-list.jpeg");
      } else if (link.textContent == "Construction Update")
        a.setAttribute("href", "#");
      else if (link.textContent == "Layouts") a.setAttribute("href", "#");
      else if (link.textContent == "Floor Plans")
        a.setAttribute("href", "./downloads/floor-plans.pdf");

      // FOR DEMO
      // if (link.textContent == "Brochure")
      //   a.setAttribute("href", "./daonlod.jpg");
      // else if (link.textContent == "3D Walkthrough")
      //   a.setAttribute("href", "./daonlod.jpg");
      // else if (link.textContent == "Price Lists")
      //   a.setAttribute("href", "./daonlod.jpg");
      // else if (link.textContent == "Construction Update")
      //   a.setAttribute("href", "./daonlod.jpg");
      // else if (link.textContent == "Layouts")
      //   a.setAttribute("href", "./daonlod.jpg");
      // else if (link.textContent == "Floor Plans")
      //   a.setAttribute("href", "./daonlod.jpg");
    });
  });
});

// to handle dropdownof bootstrap and make it open when hovering instead of clicking on it, for reference check below link
// https://www.tutorialrepublic.com/faq/how-to-open-bootstrap-dropdown-menu-on-hover-rather-than-click.php#:~:text=Answer%3A%20Use%20the%20jQuery%20hover,using%20the%20CSS%20and%20jQuery.
$(document).ready(function () {
  $(".dropdown").hover(function () {
    var dropdownMenu = $(this).children(".dropdown-menu");
    if (dropdownMenu.is(":visible")) {
      dropdownMenu.parent().toggleClass("open");
    }
  });
});
