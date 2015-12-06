var kota = [];
kota.push(["Jakarta Barat","Jakarta Pusat","Jakarta Selatan","Jakarta Timur","Jakarta Utara","Kepulauan Seribu"]);
kota.push(["Bangkalan","Banyuwangi","Batu","Kabupaten Blitar","Kota Blitar","Bojonegoro","Bondowoso","Gresik","Jember","Jombang","Kabupaten Kediri","Kota Kediri","Lamongan","Lumajang","Kabupaten Madiun","Kota Madiun","Magetan","Kabupaten Malang","Kota Malang","Kabupaten Mojokerto","Kota Mojokerto","Nganjuk","Ngawi","Pacitan","Pamekasan","Kabupaten Pasuruan","Kota Pasuruan","Ponorogo","Kabupaten Probolinggo","Kota Probolinggo","Sampang","Sidoarjo","Situbondo","Sumenep","Surabaya","Trenggalek","Tuban","Tulungagung"]);
kota.push(["Banjarnegara","Banyumas","Batang","Blora","Boyolali","Brebes","Cilacap","Demak","Grobogan","Jepara","Karanganyar","Kebumen","Kendal","Klaten","Kudus","Magelang","Pati","Kabupaten Pekalongan","Kota Pekalongan","Pemalang","Purbalingga","Purworejo","Rembang","Salatiga","Kabupaten Semarang","Kota Semarang","Sragen","Sukoharjo","Surakarta (Solo)","Kabupaten Tegal","Kota Tegal","Temanggung","Wonogiri","Wonosobo"]);
kota.push(["Provinsi Jawa Barat","Kabupaten Bandung","Kabupaten Bandung Barat","Kabupaten Bekasi","Kabupaten Bogor","Kabupaten Ciamis","Kabupaten Cianjur","Kabupaten Cirebon","Kabupaten Garut","Kabupaten Indramayu","Kabupaten Karawang","Kabupaten Kuningan","Kabupaten Majalengka","Kabupaten Purwakarta","Kabupaten Subang","Kabupaten Sukabumi","Kabupaten Sumedang","Kabupaten Tasikmalaya","Kota Bandung","Kota Banjar","Kota Bekasi","Kota Bogor","Kota Cimahi","Kota Cirebon","Kota Depok","Kota Sukabumi","Kota Tasikmalaya"]);
kota.push(["Bantul","Gunung Kidul","Kulon Progo","Sleman","Kota Yogyakarta"]);

$(document).ready(function(){
	var modal = $('.modal-body');
	for(var i=0; i<kota.length; i++){
		for(var j=0; j<kota[i].length; j++){
			modal.eq(i).append('<button type="button" class="btn btn-default" style="margin: 1px 3px;">'+kota[i][j]+'</button>');
		}
	}


	$('.btn.btn-default').on('click', function(){
		$(this).toggleClass('btn btn-primary');
	})
})