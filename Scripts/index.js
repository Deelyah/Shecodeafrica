var getMobileMenu = document.getElementById("mobile_hamburger");
var largerMenu = document.getElementById("hamburger2");
var mobileDropdown = document.getElementById("dropdown1");
var largerDropdown = document.getElementById("dropdown2");

getMobileMenu.addEventListener("click", () => {
  if (mobileDropdown.className == "closed") {
    mobileDropdown.setAttribute("class", "visible")
  } 
  else if (mobileDropdown.className == "visible") {
    mobileDropdown.setAttribute("class", "notVisible");
  } else {
    mobileDropdown.setAttribute("class", "visible")
  }
});

largerMenu.addEventListener("click", () => {
  if (largerDropdown.className == "closed") {
    largerDropdown.setAttribute("class", "visible");
  }
  else if (largerDropdown.className == "visible") {
    largerDropdown.setAttribute("class", "notVisible");
  } else {
    largerDropdown.setAttribute("class", "visible")
  }
});



// to enable the slick carousel library for #our reach
$(".inner_slide").slick({
  slidesToShow: 2,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 970,
      settings: {
        slidesToShow: 1,
      }
    }]
})

// to enable the slick carousel library for #what people say
$(".avatar").slick({
  slidesToShow: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  
})
