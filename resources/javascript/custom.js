
document.addEventListener("DOMContentLoaded", function() { 
    const carousel = document.querySelector(".carousel"); 
    const arrowBtns = document.querySelectorAll(".wrapper i"); 
    const wrapper = document.querySelector(".wrapper"); 
  
    const firstCard = carousel.querySelector(".card"); 
    const firstCardWidth = firstCard.offsetWidth; 
  
    let isDragging = false, 
        startX, 
        startScrollLeft, 
        timeoutId; 
  
    const dragStart = (e) => {  
        isDragging = true; 
        carousel.classList.add("dragging"); 
        startX = e.pageX; 
        startScrollLeft = carousel.scrollLeft; 
    }; 
  
    const dragging = (e) => { 
        if (!isDragging) return; 
      
        // Calculate the new scroll position 
        const newScrollLeft = startScrollLeft - (e.pageX - startX); 
      
        // Check if the new scroll position exceeds  
        // the carousel boundaries 
        if (newScrollLeft <= 0 || newScrollLeft >=  
            carousel.scrollWidth - carousel.offsetWidth) { 
              
            // If so, prevent further dragging 
            isDragging = false; 
            return; 
        } 
      
        // Otherwise, update the scroll position of the carousel 
        carousel.scrollLeft = newScrollLeft; 
    }; 
  
    const dragStop = () => { 
        isDragging = false;  
        carousel.classList.remove("dragging"); 
    }; 
  
    const autoPlay = () => { 
      
        // Return if window is smaller than 800 
        if (window.innerWidth < 800) return;  
          
        // Calculate the total width of all cards 
        const totalCardWidth = carousel.scrollWidth; 
          
        // Calculate the maximum scroll position 
        const maxScrollLeft = totalCardWidth - carousel.offsetWidth; 
          
        // If the carousel is at the end, stop autoplay 
        if (carousel.scrollLeft >= maxScrollLeft) return; 
          
        // Autoplay the carousel after every 2500ms 
        timeoutId = setTimeout(() =>  
            carousel.scrollLeft += firstCardWidth, 2000); 
    }; 
  
    carousel.addEventListener("mousedown", dragStart); 
    carousel.addEventListener("mousemove", dragging); 
    document.addEventListener("mouseup", dragStop); 
    wrapper.addEventListener("mouseenter", () =>  
        clearTimeout(timeoutId)); 
    wrapper.addEventListener("mouseleave", autoPlay); 
  
    // Add event listeners for the arrow buttons to  
    // scroll the carousel left and right 
    arrowBtns.forEach(btn => { 
        btn.addEventListener("click", () => { 
            carousel.scrollLeft += btn.id === "left" ?  
                -firstCardWidth : firstCardWidth; 
        }); 
    }); 
}); 

document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.nav-link');
    tabLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        // Remove 'show' and 'active' classes from all tab-panes
        document.querySelectorAll('.tab-pane').forEach(pane => {
          pane.classList.remove('show', 'active');
        });

        // Add 'show' and 'active' classes to the clicked tab's pane
        target.classList.add('show', 'active');

        // Remove 'active' class from all nav links
        tabLinks.forEach(link => {
          link.classList.remove('active');
        });

        // Add 'active' class to the clicked nav link
        this.classList.add('active');
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const menuElements = document.querySelectorAll('.slicknav_menu');
    console.log(menuElements)
  
    // Check if there are at least two menus (needed for targeting the second)
    if (menuElements.length >= 2) {
      const secondMenu = menuElements[1]; // Get the second element
  
      // Remove the second menu
      secondMenu.parentNode.removeChild(secondMenu);
    }
  });
  