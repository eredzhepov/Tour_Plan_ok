$(document).ready(function(){
var menuButton = document.querySelector(".menu-button")
menuButton.addEventListener('click', function(){
  document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible")
})
var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

  keyboard: {
    enabled: true,
  },

})
var reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },


});

var modalButton = $("[data-togle=modal]");
var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);


  function openModal() {
    var  modalOverlay = $(".modal__overlay");
    var  modalDialog = $(".modal__dialog");
    var  modalDialog = $(".modal__dialog");
  
  modalOverlay.addClass("modal__overlay--visible");
  modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault()
    var  modalOverlay = $(".modal__overlay");
    var  modalDialog = $(".modal__dialog");
    var  modalDialog = $(".modal__dialog");
  
  modalOverlay.removeClass("modal__overlay--visible");
  modalDialog.removeClass("modal__dialog--visible");
  }

$(document).keydown(function(event) { 
  if (event.keyCode === 27) { 
    closeModal(event);
  }
});
// обработка форм

  $(".footer__form").validate({
  errorClass: "invalid",
  messages: {
    
    name: {
      required: "Please specify your name",
      minlength: "More than two characters"
    },
    email: {
      required: "Enter email address to contact you",
      email: "Example for email name@domain.com",
    },
    // email_sub: {
    //   required: "We need your email address to contact you",
    //   email: "Your email address must be in the format of name@domain.com",
    // },
    phone: {
      required: "Enter your phone please!",
      minlength: "Enter the full number"
    },
} 
}); 

  $(".modal__form").validate({
  errorClass: "invalid1",
  messages: {
    
    name: {
      required: "Please specify your name",
      minlength: "More than two characters"
    },
    email: {
      required: "Enter email address to contact you",
      email: "Example for email name@domain.com",
    },
    // email_sub: {
    //   required: "We need your email address to contact you",
    //   email: "Your email address must be in the format of name@domain.com",
    // },
    phone: {
      required: "Enter your phone please!",
      minlength: "Enter the full number"
    },
} 
}); 

$(".subscribe__form").validate({
  errorClass: "invalid__sub",
  messages: {
    email_sub: {
      required: "Enter email address to contact you",
      email: "Example for email name@domain.com",
    },
  }
}); 

$(".phone").each(function() {
$(this).mask('+7(999) 000-00-00');
});

AOS.init(); 
$("img.lazyload").lazyload();

const map = document.querySelector('.map-wrapper');
map.addEventListener('mouseover', function() {
  map.insertAdjacentHTML('afterBegin', '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6019.893337434509!2d28.917411693070047!3d41.02642270915646!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x747454786c259160!2sDoubleTree%20by%20Hilton%20Istanbul%20Topkapi!5e0!3m2!1sru!2sus!4v1607597130259!5m2!1sru!2sus" allowfullscreen="1" aria-hidden="false" tabindex="0" class="map"></iframe>');
});
});