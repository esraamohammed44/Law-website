function toggleMenu() {
  const menu = document.querySelector(".dropdown-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}
function closeMenu()
{
  const close=document.getElementById("menuu")
  menuu.style.display="none"
}

document.addEventListener("DOMContentLoaded", function () {
  var carousel = document.getElementById("myCarousel");
  carousel.addEventListener("slide.bs.carousel", function (event) {
    var indicators = document.querySelectorAll(".carousel-indicators button");
    indicators.forEach(function (indicator) {
      indicator.classList.remove("active");
    });
    var activeIndex = event.to;
    indicators[activeIndex].classList.add("active");
  });
});


$(document).ready(function(){
    $('#carouselExampleIndicators').carousel({
        interval: 5000 // التوقيت بالميلي ثانية (هنا 5000 ميلي ثانية تعني 5 ثوانٍ)
    });
});

//slider
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000, // Change slide every 3 seconds
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
});

//section 13
var swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
  },
});

//contact us

document.getElementById("submitButton").addEventListener("click", function () {
  var companyName = document.getElementById("companyName").value;
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  var whatsappLink =
    "https://wa.me/966500518950?text=اسم الشركة: " +
    companyName +
    "%0D%0Aالاسم الكامل: " +
    fullName +
    "%0D%0Aعنوان البريد الإلكتروني: " +
    email +
    "%0D%0Aرقم الهاتف: " +
    phone;

  window.open(whatsappLink);
});

//arrow up
let spanElement=document.querySelector('.up');
window.onscroll=function(){
    if(window.scrollY > 500){
        spanElement.classList.add('show')
    }else{
        spanElement.classList.remove('show')
    }
}

spanElement.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};


//animation
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
const scrollRevealOption1 = {
  distance: "50px",
  origin: "top",
  duration: 1000,
};
const scrollRevealOption2 = {
  distance: "50px",
  origin: "right",
  duration: 1000,
};
const scrollRevealOption3 = {
  distance: "50px",
  origin: "left",
  duration: 1000,
};
ScrollReveal().reveal(".anim1", { ...scrollRevealOption });
ScrollReveal().reveal(".anim2", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".anim3", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".anim4", { ...scrollRevealOption, delay: 1400 });
ScrollReveal().reveal(".anim5", { ...scrollRevealOption, delay: 1800 });
ScrollReveal().reveal(".anim6", { ...scrollRevealOption, delay: 2100 });
ScrollReveal().reveal(".anim7", { ...scrollRevealOption, delay: 2500 });
ScrollReveal().reveal(".anim8", { ...scrollRevealOption, delay: 2900 });
ScrollReveal().reveal(".anim9", { ...scrollRevealOption, delay: 3300 });
ScrollReveal().reveal(".x1", { ...scrollRevealOption });
ScrollReveal().reveal(".x2", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".x3", { ...scrollRevealOption, delay: 800 });
ScrollReveal().reveal(".x4", { ...scrollRevealOption, delay: 1100 });
ScrollReveal().reveal(".x5", { ...scrollRevealOption, delay: 1400 });
ScrollReveal().reveal(".x6", { ...scrollRevealOption, delay: 1700 });

ScrollReveal().reveal(".left", {
  ...scrollRevealOption3,
  interval: 600,
});
ScrollReveal().reveal(".right", {
  ...scrollRevealOption2,
  interval: 600,
});
ScrollReveal().reveal(".messageRight", {
  ...scrollRevealOption2,
  delay: 500,
});
ScrollReveal().reveal(".messageLeft", {
  ...scrollRevealOption3,
  delay: 500,
});
ScrollReveal().reveal(".messageCenter", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".section4Right", {
  ...scrollRevealOption2,
  delay: 500,
});
ScrollReveal().reveal(".section4Left", {
  ...scrollRevealOption3,
  delay: 500,
});
ScrollReveal().reveal(".xy", {
  ...scrollRevealOption2,
  delay: 500,
});
ScrollReveal().reveal(".xyz", {
  ...scrollRevealOption3,
  delay: 500,
});
ScrollReveal().reveal(".yy", {
  ...scrollRevealOption2,
  delay: 500,
});
ScrollReveal().reveal(".xx", {
  ...scrollRevealOption3,
  delay: 500,
});
ScrollReveal().reveal(".register__btn", { ...scrollRevealOption, delay: 1000 });

document.getElementById("submitButton").addEventListener("click", function() {
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var service = document.getElementById("service").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  // Simple form validation
  if (!fullName || !email || !phone || !service || !subject || !message) {
      alert("يرجى ملء جميع الحقول.");
      return;
  }

  // Construct the message
  var messageText = "الاسم الكامل: " + fullName + "%0D%0A" +
                    "عنوان البريد الإلكتروني: " + email + "%0D%0A" +
                    "رقم الهاتف: " + phone + "%0D%0A" +
                    "اختيار نوع الخدمة: " + service + "%0D%0A" +
                    "عنوان الموضوع: " + subject + "%0D%0A" +
                    "رسالة: " + message;

  // Create WhatsApp link with pre-filled message
  var whatsappLink = "https://wa.me/966500518950?text=" + encodeURIComponent(messageText);
  
  // Open WhatsApp chat with the pre-filled message
  window.open(whatsappLink);
});
