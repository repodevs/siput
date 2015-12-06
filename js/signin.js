$(function () {
	jQuery.support.placeholder = false;
	test = document.createElement('input');
	if('placeholder' in test) jQuery.support.placeholder = true;
	if (!$.support.placeholder) {
		$('.field').find ('label').show ();
	}
});

//VALIDATION ON SUBMIT
$(document).ready(function(){
	$('#submit').on('click', function(){
		var user = $('#username').val();
		var pass = $('#password').val();

		$.ajax({
			method 	: "POST",
			url  	: 'js/login.php',
			data 	: {
				submit 	: 'submit',
				user 	: user,
				pass 	: pass
			}
		}).done(function(msg){
			if(msg=='1'){
				window.location.href = 'index.html';
			}else{
				alert(msg);
			}
		})
	})
})