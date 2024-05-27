$(document).ready(function(){
  $('.team-active').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: true, // ENSURE SLICK'S DRAGGABILITY
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});
document.addEventListener('DOMContentLoaded', function() {
  // Get all elements with the class 'slicknav_menu'
  const slicknavMenus = document.querySelectorAll('.slicknav_menu');

  // Create an object to store the count of each slicknav_menu element
  const menuCounts = {};

  // Loop through each slicknav_menu element
  slicknavMenus.forEach((menu, index) => {
      // Get the text content of the element
      const menuText = menu.textContent;

      // Log the text content and index for debugging
      console.log('Menu text:', menuText, 'Index:', index);

      // Check if the menuText already exists in the menuCounts object
      if (menuCounts[menuText]) {
          // If it exists, hide the current menu element
          console.log('Duplicate menu found:', menuText);
          menu.style.display = 'none';
      } else {
          // If it doesn't exist, add it to the menuCounts object with a count of 1
          menuCounts[menuText] = 1;
      }
  });
});

