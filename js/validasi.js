$(document).ready(function(){
	/**
	* FORM VALIDASI
	* SEND TO validasi.php 
	* @query {string} user
	* @query {string} pass
	* @receive {array} data
	*/
	var user = $('#user');
	var pass = $('#pass');

	$('#submit').on('click', function(){
		$.ajax({
			method 	: 'POST',
			url 	: 'validasi.php',
			data	: {
				user : user,
				pass : pass
			}
		}).done(function(msg){
			var data = JSON.parse(msg);
			if(data.status==true){
	 			document.cookie="user="+data.fullname+";";
			}
		})
	})
})