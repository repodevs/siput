$(document).ready(function(){
	var username = fullname = ktp = email = password = password2 = false;

	//standart form valida

	//FIELD username ON blur
	$('#username').on('blur', function(){
		username = $(this).val();
		$.ajax({
			method 	: 'POST',
			url		: 'js/signup.php',
			data 	: {
				submit : 'cekuser',
				user 	: username
			}
		}).done(function(msg){
			if(msg.trim() != '1'){
				$('#username').next().text(msg);
				username = false;
			}
		});
	})

	//FIELD username ON blur
	$('.login').on('focus', function(){
		$(this).next().text('');
	})

	//validate Nama lengkap
	$('#fullname').on('blur', function(){
		fullname = $(this).val();
		if (fullname.search(/[0-9]/) > 0) {
			$(this).next().text("Gunakan nama asli !");
			fullname = false;
		}
	})

	//validate email
	$('#email').on('blur', function(){
		email = $(this).val()
		var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		if(!re.test(email)){
			$(this).next().text('Format email yang anda masukkan kurang tepat !');
			email = false;
		}
	})


	//validate Nama lengkap
	$('#ktp').on('blur', function(){
		ktp = $(this).val();
		if (ktp.search(/[a-zA-Z]/) > 0) {
			$(this).next().text("No. KTP Kurang Benar !");
			ktp = false;
		}
	})


	//validate password
	$('#password').on('blur', function(){
		password = $(this).val();
		errors = [];

		if (password.length < 9) {
			errors.push("* Password Anda harus minimal 8 karakter.");
		}
		if (password.search(/[a-z]/i) < 0) {
			errors.push("* Password Anda harus mengandung setidaknya satu huruf.");
		}
		if (password.search(/[0-9]/) < 0) {
			errors.push("* Password Anda harus mengandung setidaknya satu digit.");
		}

		if (errors.length > 0) {
			$(this).next().text(errors.join("\n\t"));
		}
	})
	

	//validate confirm password
	$('#confirm_password').on('blur', function(){
		password2 = $(this).val();
		if(password2 != $('#password').val()){
			$(this).next().text('Password tidak cocok !');
			password2 = false;
		}
	})

	$('#signup').on('click', function(){
		var data = {
			username  : username,
			fullname  : fullname,
			ktp 	  : ktp,
			email 	  : email,
			password  : password
		}
		console.log(data)
		if(username && fullname && ktp && email  && password && password2){
			$.ajax({
				method 	: 'POST',
				url 	: 'js/signup.php',
				data 	: {
					username  : username,
					fullname  : fullname,
					ktp 	  : ktp,
					email 	  : email,
					password  : password,
					submit 	  : 'nyubmit'
				}
			}).done(function(msg){
				if(msg.trim()=='1'){
					alert('Register sukses... silahkan login !')
					window.location.href = 'login.html';
				}else{
					alert(msg);
				}
			})
		}
	})

})