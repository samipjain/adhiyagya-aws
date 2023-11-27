function Remove(id) {
	jQuery('#'+id).removeClass('error');
    jQuery('#error_'+id).html('');
}

function Remove1(id) {
	jQuery('#'+id).removeClass('error1');
    jQuery('#error_'+id).html('');
}



jQuery(document).ready(function(){
	
	randomString();

	jQuery("#frm-volunteer").click(function(){
		
		var v_name				= jQuery("#v_name").val();
		
		var v_email				= jQuery("#v_email").val();
		
		var v_address			= jQuery("#v_address").val();
		
		var v_city				= jQuery("#v_city").val();
		
		var v_message			= jQuery("#v_message").val();
		
		var site_url		= jQuery("#site_url").val();

		var regex = /^[a-zA-Z ]*$/;

		var emailRegex = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);

		var valid = emailRegex.test(v_email);
		
		if (v_name == "") {
			jQuery('#v_name').addClass('error');
			jQuery('#error_v_name').html('Please Enter Name.');
			jQuery("#v_name").focus();
			return false;

		}

		else if (!regex.test(v_name)) {

			 jQuery('#v_name').addClass('error');
			 jQuery('#error_v_name').html('Please Enter Valid Name.');
			 jQuery("#v_name").focus();

			return false;

		}
		
		else if (v_email == "") {

			 jQuery('#v_email').addClass('error');
			 jQuery('#error_v_email').html('Please Enter Email.');
			 jQuery("#v_email").focus(); 
			 return false;

		}

		else if (!valid) {

			 jQuery('#v_email').addClass('error');
			 jQuery('#error_v_email').html('Please Enter Valid Email.');
			 jQuery("#v_email").focus();
			 return false;

		}

		else if (v_address == "") {

			 jQuery('#v_address').addClass('error');
			 jQuery('#error_v_address').html('Please Enter Contact Address.');
			 jQuery("#v_address").focus(); 
			 return false;

		}
		
		else if (v_city == "") {

			 jQuery('#v_city').addClass('error');
			 jQuery('#error_v_city').html('Please Enter City.');
			 jQuery("#v_city").focus(); 
			 return false;

		}
		
		else if (v_message == "") {

			 jQuery('#v_message').addClass('error');
			 jQuery('#error_v_message').html('Please Enter Message.');
			 jQuery("#v_message").focus();
			 return false;

		}
		
		else

		{

			jQuery.ajax({
				
				beforeSend: function () {
					jQuery("#load-volunteer-img").css("display", "inline-block");
					//alert("hello");
				},
				
				type	: "POST",

				url		: ""+site_url+"/volunteer-code.php",

				data	: jQuery('#frm-volunteer').serialize(),

					success: function (res) {
						
						//alert(jQuery('#enquiry-frm').serialize());
						
						jQuery("#v_name").val("");
		
						jQuery("#v_email").val("");
		
						jQuery("#v_address").val("");
		
						jQuery("#v_city").val("");
		
						jQuery("#v_message").val("");
						
					
						//jQuery("#frm-volunteer").css( { "display":"none" } );
						jQuery('#succ-franchise').addClass('succ-franch-thank');
						jQuery("#succ-franchise").html("Thank you for enquiry. We will contact you shortly.");
						
							jQuery('#success_volunteer').addClass('success_message');
							jQuery("#success_volunteer").html("Volunteer Added Successfully.");
						
					},
					complete: function() {
						jQuery("#load-volunteer-img").css("display", "none");
					},
					

			});

			return false;

		}

	});
	
	
	jQuery("#frm-contact").click(function(){
		
		var c_name				= jQuery("#c_name").val();
		
		var c_email				= jQuery("#c_email").val();
		
		var c_mobile			= jQuery("#c_mobile").val();
		
		var cntct_captcha_val	= jQuery("#cntct_captcha_val").val();
		
		var captcha_txt1		= jQuery("#captcha_txt1").val();
		
		var site_url		= jQuery("#site_url").val();

		var regex = /^[a-zA-Z ]*$/;

		var emailRegex = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);

		var valid = emailRegex.test(c_email);
		
		if (c_name == "") {
			jQuery('#c_name').addClass('error');
			jQuery('#error_c_name').html('Please Enter Name.');
			jQuery("#c_name").focus();
			return false;

		}

		else if (!regex.test(c_name)) {

			 jQuery('#c_name').addClass('error');
			 jQuery('#error_c_name').html('Please Enter Valid Name.');
			 jQuery("#c_name").focus();

			return false;

		}
		
		else if (c_email == "") {

			 jQuery('#c_email').addClass('error');
			 jQuery('#error_c_email').html('Please Enter Email.');
			 jQuery("#c_email").focus(); 
			 return false;

		}

		else if (!valid) {

			 jQuery('#c_email').addClass('error');
			 jQuery('#error_c_email').html('Please Enter Valid Email.');
			 jQuery("#c_email").focus();
			 return false;

		}
		
		else if (c_mobile == "") 

		{

			 jQuery('#c_mobile').addClass('error');
			 jQuery('#error_c_mobile').html('Please Enter Mobile No.');
			 jQuery("#c_mobile").focus();
			 return false;

		}

		else if (isNaN(c_mobile)) 

		{

			 jQuery('#c_mobile').addClass('error');
			 jQuery('#error_c_mobile').html('Please Enter Valid Mobile No.');
			 jQuery("#c_mobile").focus(); 
			 return false;

		}

		else if (c_mobile.length<10) 

		{

			 jQuery('#c_mobile').addClass('error');
			 jQuery('#error_c_mobile').html('Please Enter Valid 10 Digits Mobile No.');
			 jQuery("#c_mobile").focus();
			 return false;

		}
		
		
		
		else if (cntct_captcha_val == "") {
			 jQuery('#cntct_captcha_val').addClass('error');
			 jQuery('#error_cntct_captcha_val').html('Please Enter Captcha Code.');
			 jQuery("#cntct_captcha_val").focus();
			 return false;

		}
		else if (cntct_captcha_val != captcha_txt1) {
			 jQuery('#cntct_captcha_val').addClass('error');
			 jQuery('#error_cntct_captcha_val').html('Please Enter Valid Captcha Code.');
			 jQuery("#cntct_captcha_val").focus();
			 return false;
		}
		
		else

		{

			jQuery.ajax({
				
				beforeSend: function () {
					jQuery("#load-contact-img").css("display", "inline-block");
					//alert("hello");
				},
				
				type	: "POST",

				url		: ""+site_url+"/contact-code.php",

				data	: jQuery('#frm-contact').serialize(),

					success: function (res) {
						
						//alert(jQuery('#enquiry-frm').serialize());
						
							jQuery("#c_name").val("");
		
							jQuery("#c_email").val("");
							
							jQuery("#c_mobile").val("");
							
							
							
							jQuery("#cntct_captcha_val").val("");
						
						
							jQuery('#contact-message').addClass('success_message');
							jQuery("#contact-message").html("Thank you for contacting us.");
						
					},
					complete: function() {
						jQuery("#load-contact-img").css("display", "none");
					},
					

			});

			return false;

		}

	});
	
	
	
	
	
	jQuery("#newsletter-submit").click(function(){
		
		var newsletter		= jQuery("#newsletter").val();
		var ajax_url		= jQuery("#ajax_url").val();
		
		var emailRegex = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);
		var valid = emailRegex.test(newsletter);
		
		if (newsletter == "") {
				
			jQuery("#error_newsletter").html("");
			jQuery("#success_newsletter").html("");
			 jQuery('#newsletter').addClass('field_error');
			 jQuery('#error_newsletter').html('Please Enter Email.');
			 jQuery("#newsletter").focus(); 
			 return false;

		}

		else if (!valid) {
			jQuery("#error_newsletter").html("");
			jQuery("#success_newsletter").html("");
			 jQuery('#newsletter').addClass('field_error');
			 jQuery('#error_newsletter').html('Please Enter Valid Email.');
			 jQuery("#newsletter").focus();
			 return false;

		}
		else

		{

			jQuery.ajax({
				
				
				beforeSend: function () {
					
					jQuery("#load-newsletter-img").css("display", "inline-block");
				},

				type	: "POST",

				url		: ""+ajax_url+"/newsletter-code.php",

				data	: jQuery('#frm-newsletter').serialize(),

					success: function (res) {
						
						if(res=="err"){
							jQuery("#success_newsletter").html("");
							jQuery("#newsletter").val("");
							jQuery('#success_newsletter').removeClass('success_message');
							jQuery("#error_newsletter").html("Already Subscribed.");
							
						}
						else {
						//
							jQuery("#newsletter").val("");
							jQuery("#error_newsletter").html("");
							jQuery('#success_newsletter').addClass('success_message');
							jQuery("#success_newsletter").html("Subscribed Successfully.");

						//jQuery('#success_newsletter').delay(3000).fadeOut('slow');	
						}
					},
					complete: function() {
						jQuery("#load-newsletter-img").css("display", "none");
					},

			});

			return false;

		}
	});
	
	
	jQuery('.number_only').keydown(function(event) {
                // Allow special chars + arrows 
                if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 
                    || event.keyCode == 27 || event.keyCode == 13 
                    || (event.keyCode == 65 && event.ctrlKey === true) 
                    || (event.keyCode >= 35 && event.keyCode <= 39)){
                        return;
                }else {
                    // If it's not a number stop the keypress
                    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                        event.preventDefault(); 
                    }   
                }
     });


});

function randomString() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var string_length = 6;
    var randomstring = '';
    for (var i=0; i<string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum,rnum+1);
        jQuery("#captcha_txt1").val(randomstring);
    }
}



