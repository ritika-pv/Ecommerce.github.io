

// Code By Webdevtrick ( https://webdevtrick.com )
class StickyNavigation {
	
	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70;
		let self = this;
		$('.navs').click(function() { 
		self.onTabClick(event, $(this)); 
		});
		$(window).scroll(() => { this.onScroll(); });
		$(window).resize(() => { this.onResize(); });
	}
	
	onTabClick(event, element) {
		event.preventDefault();
		let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
		$('html, body').animate({ scrollTop: scrollTop }, 600);
	}
	
	onScroll() {
		this.checkTabContainerPosition();
    this.findCurrentTabSelector();
	}
	
	onResize() {
		if(this.currentId) {
		this.setSliderCss();
		}
	}
	
	checkTabContainerPosition() {
		let offset = $('.nav-items').offset().top + $('.nav-items').height() - this.tabContainerHeight;
		if($(window).scrollTop() > offset) {
		$('.items-container').addClass('items-container--top');
		} 
		else {
		$('.items-container').removeClass('items-container--top');
		}
	}
	
	findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		$('.navs').each(function() {
		let id = $(this).attr('href');
		let offsetTop = $(id).offset().top - self.tabContainerHeight;
		let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
		if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
		newCurrentId = id;
		newCurrentTab = $(this);
		}
		});
		if(this.currentId != newCurrentId || this.currentId === null) {
		this.currentId = newCurrentId;
		this.currentTab = newCurrentTab;
		this.setSliderCss();
		}
	}
	
	setSliderCss() {
		let width = 0;
		let left = 0;
		if(this.currentTab) {
		width = this.currentTab.css('width');
		left = this.currentTab.offset().left;
		}
		$('.bottom-slider').css('width', width);
		$('.bottom-slider').css('left', left);
	}
	
}
new StickyNavigation();




/*deals of the day*/

$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i=0;i<3;i++) {
    next=next.next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  }
});







/*PRODUCT  PAGE*/
$(document).ready(function(){
  // jquery code here
  
});







$(".sidebar-dropdown > a").click(function() {
  $(".sidebar-submenu").slideUp(200);
  if (
    $(this)
      .parent()
      .hasClass("active")
  ) {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .next(".sidebar-submenu")
      .slideDown(200);
    $(this)
      .parent()
      .addClass("active");
  }
});

$("#close-sidebar").click(function() {
  $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
  $(".page-wrapper").addClass("toggled");
});










// Animations initialization
    new WOW().init();
    
    
    
    
    
    
 $(document).ready(function(){
    $("#click1").click(function(){
       
    }) ;  
 });
    
  
    
 






 //  JavaScript for disabling form submissions if there are invalid fields
      (function() {
        'use strict';

        window.addEventListener('load', function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('needs-validation');

          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
          });
        }, false);
      })();
      
