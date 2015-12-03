<?php
session_start(); // Memulai Session
include 'connect_db.php';
if (isset($_GET['submit'])) {
	if (empty($_GET['user']) || empty($_GET['pass'])) {
			die("user or pass is invalid");
	}
	else
	{
		// Variabel user dan pass
		$user=$_GET['user'];
		$pass=$_GET['pass'];
		// Membangun koneksi ke database
		// Mencegah MySQL injection 
		$user = stripslashes($user);
		$pass = stripslashes($pass);
		$user = mysql_real_escape_string($user);
		$pass = mysql_real_escape_string($pass);
		// SQL query untuk memeriksa apakah karyawan terdapat di database?
		$query = mysql_query("select * from users where username='$user' AND password='$pass'");
		$rows  = mysql_num_rows($query);
			if ($rows == 1) {
				// header("location: profile.php"); // Mengarahkan ke halaman profil
				while($data = mysql_fetch_array($query))
				{
					$_SESSION['name'] = $data['fullname'];
					$_SESSION['admin'] = $data['admin'];
				}
				print_r($_SESSION);
			}else{
				die("user atau pass belum terdaftar");
			}
		mysql_close($connection); // Menutup koneksi
	}
}
?>