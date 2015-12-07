var href = window.location.href.split('id=')[1];
$.ajax({
	url 	: 'sys/input_view.php',
	method	: 'GET',
	data 	: {
		id 	: href,
	}
}).done(function(msg){
	var data = JSON.parse(msg);
	
	//DATA MASUKKAN
	$('#prj_name').text(data.nama_proyek)
	$('#nama_proyek').text(data.nama_proyek)
	$('#propinsi').text(data.provinsi)
	$('#lpse').text(data.lpse)
	$('#komite').text(data.komite)
	$('#kode_proyek').text(data.kode_proyek)
	$('#mulai').text(data.mulai)
	$('#provider').text(data.provider)
	$('#budget').text(data.budget)
	$('#cost').text(data.cost)
	$('#kategori').text(data.kategori)
	$('#kota').text(data.kota)
	$('#skpd').text(data.skpd)
	$('#agent').text(data.agent)
	$('#sumber_dana').text(data.sumber_dana)
	$('#selesai').text(data.selesai)
	$('#npwp').text(data.npwp)
	$('#estimtion').text(data.estimtion)
	$('#keterangan').text(data.keterangan)
	// console.log(data.
})