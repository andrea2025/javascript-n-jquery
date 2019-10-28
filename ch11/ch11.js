$('.accordion').on('click', '.accordion-control', function(e){ // When clicked
    e.preventDefault();                    
    $(this)                                
      .next('.accordion-panel')            
      .not(':animated')                    
      .slideToggle();                     
  });