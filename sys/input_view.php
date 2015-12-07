<?php
include 'connect_db.php';
if (@isset($_GET['id'])) {
	$id = $_GET['id'];



	// $name 		= $query['id']
	// $prov 		= $query['nama_proyek']
	// $lpse		= $query['provinsi']
	// $komite		= $query['lpse']
	// $code 		= $query['komite']
	// $start 		= $['']
	// $provider 	=
	// $budget		=
	// $cost 		=
	// $category 	=
	// $kota 		=
	// $skpd 		=
	// $agent 		=
	// $smbr_dana 	=
	// $end 		=
	// $npwp 		=
	// $est 		=
	// $file 		=
	// $photo  	=

	$query = mysql_fetch_array(mysql_query("SELECT * FROM data_pembangunan WHERE id='$id'"));
	// echo "<pre>";
	// for($i=0;$i<=count($query);$i++){
	// 	if
	// }
	print_r(json_encode($query));
}