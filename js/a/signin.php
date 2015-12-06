<?php
session_start(); // Memulai Session
include 'connect_db.php';
$error = false;
if (isset($_GET['submit'])) {
	if (empty($_GET['user']) || empty($_GET['pass'])) {
			$error = "user or pass is invalid";
	}
	else
	{
		// Variabel user dan pass
		$user=$_GET['user'];
		$pass=$_GET['pass'];

		// Mencegah MySQL injection 
		$user = stripslashes($user);
		$pass = stripslashes($pass);
		$user = mysql_real_escape_string($user);
		$pass = mysql_real_escape_string($pass);

		$query = mysql_query("select * from users where username='$user' AND password='$pass'");
		$rows  = mysql_num_rows($query);
			if ($rows == 1) {

				while($data = mysql_fetch_array($query))
				{
					$_SESSION['admin'] = 1;
					setcookie('username', $data['fullname'], time() + (86400 * 30), "/");
					echo "1";
				}
			}else{
				$error = "user atau pass belum terdaftar";
			}
	}
		mysql_close($connection); // Menutup koneksi
		if($error) echo $error;
}
?>