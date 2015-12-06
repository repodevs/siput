<?php
session_start(); // Memulai Session
include 'connect_db.php';
$error = false;
if (isset($_GET['submit'])) {
	if($_GET['submit']=='cekuser'){
		if (empty($_GET['user'])) {
			$error = "username salah !";
		}else{
		// Variabel user dan pass
			$user=$_GET['user'];

		// Mencegah MySQL injection 
			$user = stripslashes($user);
			$user = mysql_real_escape_string($user);


			$query = mysql_query("select * from users where username='$user'");
			$rows  = mysql_num_rows($query);
			if ($rows != 1) {
				echo '1';
			}else{
				$error = "Username sudah terdaftar !";
			}
		}
	mysql_close($connection); // Menutup koneksi
	if($error) echo $error;
}elseif($_GET['submit']=='nyubmit'){

	$username 	= $_GET['username'];
	$fullname 	= $_GET['fullname'];
	$ktp		= $_GET['ktp'];
	$email		= $_GET['email'];
	$password	= $_GET['password'];

	if ($username && $fullname && $ktp && $email && $password){
		// Variabel user dan pass

		// Mencegah MySQL injection 
		function bungkus($string){
			$value = stripslashes($string);
			$value = mysql_real_escape_string($value);
			return $value;
		}


		$username 	= bungkus($username);
		$fullname 	= bungkus($fullname);
		$ktp		= bungkus($ktp);
		$email		= bungkus($email);
		$password	= bungkus($password);

		$query = mysql_query("INSERT INTO users VALUES('','$username', '$password', '$fullname', '$ktp', '$email', '0')");
		echo $query;
	}
}
}
?>