<?php
session_start(); // Memulai Session
include 'connect_db.php';

function anti_sql($value) {

	return mysql_real_escape_string(($value));
}

// INSERT DATA
if (isset($_POST['input_pembangunan'])) {

	$nama_proyek = anti_sql($_POST['nama_proyek']);
	$provinsi = anti_sql($_POST['provinsi']);
	$lpse = anti_sql($_POST['lpse']);
	$komite = anti_sql($_POST['komite']);
	$kode_proyek = anti_sql($_POST['kode_proyek']);
	$mulai = anti_sql($_POST['mulai']);
	$provider = anti_sql($_POST['provider']);
	$budget = anti_sql($_POST['budget']);
	$cost = anti_sql($_POST['cost']);
	$kategori = anti_sql($_POST['kategori']);
	$kota = anti_sql($_POST['kota']);
	$skpd = anti_sql($_POST['skpd']);
	$agent = anti_sql($_POST['agent']);
	$sumber_dana = anti_sql($_POST['sumber_dana']);
	$selesai = anti_sql($_POST['selesai']);
	$npwp = anti_sql($_POST['npwp']);
	$estimation = anti_sql($_POST['estimation']);
	$lampiran = (($_FILES['lampiran']));
	$photo = (($_FILES['photo']));
	$keterangan = anti_sql($_POST['keterangan']);

	$q = mysql_query("INSERT INTO data_pembangunan VALUES(
		'',
		'$nama_proyek',
		'$provinsi',
		'$lpse',
		'$komite',
		'$kode_proyek',
		'$mulai',
		'$provider',
		'$budget',
		'$cost',
		'$kategori',
		'$kota',
		'$skpd',
		'$agent',
		'$sumber_dana',
		'$selesai',
		'$npwp',
		'$estimation',
		'$lampiran',
		'$photo',
		'$keterangan'

		)");

	if ($q) {
		$qry = mysql_fetch_array(mysql_query("SELECT * FROM data_pembangunan LIMIT 1"));
		$id = $qry['id'];
		header("Location: /post.html?id=$id");
	} else {
		print "Error bro".mysql_error();
		die();
	}
 
}
else {
	header('Location: /');
	print "Ngopo bro ?";
}
?>