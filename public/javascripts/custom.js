 $(document).ready(function(){
  			$('.bxslider').bxSlider({
					auto:true,
					responsive:true
			});
			var bn_wd = $(".banner_top").width();
			$(".banner_top").css({"marginLeft":-bn_wd/2});
			var bn_hd = $(".banner_top").height();
			$(".banner_top").css({"marginTop":-bn_hd/2});
			
			
			 $(".project_slider").owlCarousel({
				 autoPlay:true,
				 pagination:false,
    			  items : 3, //10 items above 1000px browser width
    			  itemsDesktop : [1000,1], //5 items between 1000px and 901px
    			  itemsDesktopSmall : [900,2], // 2 items betweem 900px and 601px
     			 itemsTablet: [600,1], //1 items between 600 and 0;
     			 itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option 
	 			 responsive : true
			});
			$(".gallery_slider").owlCarousel({
				 autoPlay:true,
				 pagination:true,
				 navigation:true,
				 items : 3,
				 itemsDesktop : [1199,3],
				 itemsDesktopSmall : [979,3]
			});
			
			$(".light-gallery").lightGallery({
			 showThumbByDefault:true,
             addClass:'showThumbByDefault',
			 controls         : true,  // Whether to display prev/next buttons.
             hideControlOnEnd : false, // If true, prev/next button will be hidden on first/last image.
			 thumbWidth : 70,
 			});
			
			$(".mobile-menu-icon").click(function(){
				$(".adhiyagya_menu").slideToggle();
				$(this).toggleClass("mobile-menu-icon-active");
			});			
		});