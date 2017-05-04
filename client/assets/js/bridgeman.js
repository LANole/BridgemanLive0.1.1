"use strict"; 
$(document).ready(function(){

  $(".panel-body a").on('click', function(event) {

    event.preventDefault();
    var hash = this.hash;
      
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 1000)
  });
  
})﻿



   