      $(function() {
		$("#fname_error_message").hide();
		 $("#lname_error_message").hide();
         $("#email_error_message").hide();
         $("#phone_error_message").hide();
         $("#ptitle_error_message").hide();
         $("#cservice_error_message").hide();
         $("#Message_error_message").hide();

         var error_fname = false;
		 var error_Sname = false;
      	 var error_email = false;
         var error_phone = false;
         var error_ptitle = false;
         var error_cservice = false;
         var error_Message = false;



         $("#form_fname").focusout(function(){
            check_fname();
         });
         $("#form_sname").focusout(function() {
            check_sname();
         });
         $("#form_email").focusout(function() {
            check_email();
         });
         $("#form_phone").focusout(function() {
            check_phone();
         });
		 $("#form_ptitle").focusout(function() {
            check_ptitle();
         });
		 $("#form_cservice").focusout(function() {
            check_cservice();
         });
         $("#form_Message").focusout(function() {
            check_Message();
         });
         function check_fname() {
            var pattern = /^[a-zA-Z]*$/;
            var fname = $("#form_fname").val();
            if (pattern.test(fname) && fname !== '') {
               $("#fname_error_message").hide();
               $("#form_fname").css("border-bottom","2px solid #34F458");
            } else {
               $("#fname_error_message").html(alert("First name must be filled out"));
               $("#fname_error_message").show();
               $("#form_fname").css("border-bottom","2px solid #F90A0A");
               error_fname = true;
            }
         }
         function check_sname() {
            var pattern = /^[a-zA-Z]*$/;
            var sname = $("#form_sname").val()
            if (pattern.test(sname) && sname !== '') {
               $("#sname_error_message").hide();
               $("#form_sname").css("border-bottom","2px solid #34F458");
            } else {
               $("#sname_error_message").html(alert("Last name must be filled out"));
               $("#sname_error_message").show();
               $("#form_sname").css("border-bottom","2px solid #F90A0A");
               error_fname = true;
            }
         }
		 function check_ptitle() {
            var pattern = /^[a-zA-Z]*$/;
            var ptitle = $("#form_ptitle").val();
            if (pattern.test(ptitle) && ptitle !== '') {
               $("#ptitle_error_message").hide();
               $("#form_ptitle").css("border-bottom","2px solid #34F458");
            } else {
               $("#ptitle_error_message").html(alert("project title must be filled out"));
               $("#ptitle_error_message").show();
               $("#form_ptitle").css("border-bottom","2px solid #F90A0A");
               error_ptitle = true;
            }
         }
         function check_Message() {
            var pattern = /^[a-zA-Z]*$/;
            var Message = $("#form_Message").val()
            if (pattern.test(Message) && Message !== '') {
               $("#Message_error_message").hide();
               $("#form_Message").css("border-bottom","2px solid #34F458");
            } else {
               $("#Message_error_message").html(alert("Message must be filled out"));
               $("#Message_error_message").show();
               $("#form_Message").css("border-bottom","2px solid #F90A0A");
               error_fname = true;
            }
         }

		 function check_phone() {
            var pattern = /^([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})*$/;
            var phone = $("#form_phone").val()
            if (pattern.test(phone) && phone !== '') {
               $("#phone_error_message").hide();
               $("#form_phone").css("border-bottom","2px solid #34F458");
            } else {
               $("#phone_error_message").html(alert("Phone number must be filled out"));
               $("#phone_error_message").show();
               $("#form_phone").css("border-bottom","2px solid #F90A0A");
               error_fname = true;
            }
         }
		
         function check_email() {
            var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            var email = $("#form_email").val();
            if (pattern.test(email) && email !== '') {
               $("#email_error_message").hide();
               $("#form_email").css("border-bottom","2px solid #34F458");
            } else {
               $("#email_error_message").html(alert("email must be filled out"));
               $("#email_error_message").show();
               $("#form_email").css("border-bottom","2px solid #F90A0A");
               error_email = true;
            }
         }
         
         $("#form").submit(function() {
         error_fname = false;
		 error_Sname = false;
      	 error_email = false;
         error_phone = false;
         error_ptitle = false;
         error_cservice = false;
         error_Message = false;

            check_fname();
            check_sname();
            check_email();
			check_phone();
            check_ptitle();
            check_cservice();
            check_Message();
			
            if (error_fname === false && error_sname === false && error_email === false && error_phone === false && error_ptitle === false && error_cservice === false && error_Message === false) {
               alert("<div class='alert alert-success'>Contact message sent successfully.</div>");
               return true;
            } else {
               alert("<div class='alert alert-danger'>Contact message not sent.</div>");
               return false;
            }
         });
      });


      // const scriptURL = 'https://script.google.com/macros/s/AKfycbz76F_45ckvAE1w1UUZQh2R3TvdLitU4z2WvZ6gfqQtO6sxbiSSheuRBcH6zLyG48Ms/exec'
      // const form = document.forms['google-sheet']
      
      // form.addEventListener('submit', e => {
      //     e.preventDefault()
      //     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      //     .then(response => $("#form_alerts").html("<div class='alert alert-success'>Contact message sent successfully.</div>"))
      //     .catch(error => $("#form_alerts").html("<div class='alert alert-danger'>Contact message not sent.</div>"))
      // })

    


       