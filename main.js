const openNav = () => {
  // Show shader
  $("#shader").fadeIn(500)
    
  // Show mobile nav
  $("#mobile-nav").removeClass("mobile-nav__inactive")
  $("#mobile-nav").addClass("mobile-nav__active")
  $("#mobile-nav").animate({
    width: "70%"
  }, 500)
}

const closeNav = () => {
  // Hide shader
  $("#shader").fadeOut(500);
    
  // Hide mobile nav
  $("#mobile-nav").animate({
    width: "0%"
  }, 500, () => {
    $("#mobile-nav").removeClass("mobile-nav__active")
    $("#mobile-nav").addClass("mobile-nav__inactive")
  })
}

$(() => {
  // Open mobile nav
  $(".icon-menu").click(() => {
    openNav();
  });

  // Close mobile nav with close img
  $(".icon-menu-close").click(() => {
    closeNav();
  });

  // Close mobile nav if shader is clicked 
  $("#shader").click(() => {
    closeNav();
  })
})