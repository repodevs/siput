
<?php
$username = "root";
$password = "";
$hostname = "localhost";

// $username = "repodevg_siput";
// $password = "siputqweasd123";
// $hostname = "localhost"; 

//connection to the database
$dbhandle = mysql_connect($hostname, $username, $password) or die("Unable to connect to MySQL");
//select a database to work with
$selected = mysql_select_db("pembangunan",$dbhandle) or die("Could not select examples");
// echo "Connected to MySQL<br>";
?>