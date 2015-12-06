var kota = [];
kota.push(["Jakarta Barat","Jakarta Pusat","Jakarta Selatan","Jakarta Timur","Jakarta Utara","Kepulauan Seribu"]);
kota.push(["Provinsi Jawa Barat","Kabupaten Bandung","Kabupaten Bandung Barat","Kabupaten Bekasi","Kabupaten Bogor","Kabupaten Ciamis","Kabupaten Cianjur","Kabupaten Cirebon","Kabupaten Garut","Kabupaten Indramayu","Kabupaten Karawang","Kabupaten Kuningan","Kabupaten Majalengka","Kabupaten Purwakarta","Kabupaten Subang","Kabupaten Sukabumi","Kabupaten Sumedang","Kabupaten Tasikmalaya","Kota Bandung","Kota Banjar","Kota Bekasi","Kota Bogor","Kota Cimahi","Kota Cirebon","Kota Depok","Kota Sukabumi","Kota Tasikmalaya"]);
kota.push(["Banjarnegara","Banyumas","Batang","Blora","Boyolali","Brebes","Cilacap","Demak","Grobogan","Jepara","Karanganyar","Kebumen","Kendal","Klaten","Kudus","Magelang","Pati","Kabupaten Pekalongan","Kota Pekalongan","Pemalang","Purbalingga","Purworejo","Rembang","Salatiga","Kabupaten Semarang","Kota Semarang","Sragen","Sukoharjo","Surakarta (Solo)","Kabupaten Tegal","Kota Tegal","Temanggung","Wonogiri","Wonosobo"]);
kota.push(["Bangkalan","Banyuwangi","Batu","Kabupaten Blitar","Kota Blitar","Bojonegoro","Bondowoso","Gresik","Jember","Jombang","Kabupaten Kediri","Kota Kediri","Lamongan","Lumajang","Kabupaten Madiun","Kota Madiun","Magetan","Kabupaten Malang","Kota Malang","Kabupaten Mojokerto","Kota Mojokerto","Nganjuk","Ngawi","Pacitan","Pamekasan","Kabupaten Pasuruan","Kota Pasuruan","Ponorogo","Kabupaten Probolinggo","Kota Probolinggo","Sampang","Sidoarjo","Situbondo","Sumenep","Surabaya","Trenggalek","Tuban","Tulungagung"]);
kota.push(["Bantul","Gunung Kidul","Kulon Progo","Sleman","Kota Yogyakarta"]);

$(document).ready(function(){
	var modal = $('.modal-body');
	for(var i=0; i<kota.length; i++){
		for(var j=0; j<kota[i].length; j++){
			modal.eq(i).append('<button type="button" class="modali btn btn-default" style="margin: 2px 5px;">'+kota[i][j]+'</button>');
		}
	}


	$('.modali.btn').on('click', function(){
		var ini = $(this).attr('class');
		if(/default/.test(ini)){
			$(this).removeClass('btn-default');
			$(this).addClass('btn-primary');
		}else{
			$(this).removeClass('btn-primary');
			$(this).addClass('btn-default');
		}
	})


// POSTINGAN FILTER
var post = '						<li>'
									+'<div class="news-item-date"> <span class="news-item-day">28</span> <span class="news-item-month">Apr</span> </div>'
										+'<div class="news-item-detail"> <a href="post.html" class="news-item-title" target="_blank">Perbaikan Jalan Tol Jakarta–Cikampek</a>'
											+'<p class="news-item-preview"> Jalan Tol Jakarta-Cikampek adalah sebuah jalan tol dari Cawang menuju Cikampek. Panjang jalan tol ini adalah 73 kilometer. Jalan tol ini melintasi Kota Jakarta Timur, Kota dan Kabupaten Bekasi, Kabupaten Karawang, dan Purwakarta. Jalan tol ini mulai dioperasikan semenjak tahun 1988 setelah Jalan Tol Jagorawi pada tahun 1978 dan Jalan Tol Jakarta-Merak pada tahun 1984. </p>'
										+'</div>'
									+'</li>'
									+'<li>'
										+'<div class="news-item-date"> <span class="news-item-day">11</span> <span class="news-item-month">Jan</span> </div>'
										+'<div class="news-item-detail"> <a href="post.html" class="news-item-title" target="_blank">Proyek Pembangunan Gedung kantor Pusat Bea dan Cukai Jakarta Timur</a>'
											+'<p class="news-item-preview">Pembangunan Gedung Kalimantan dilakukan karena kapasitas gedung yang lama tidak mencukupi. Kapasitas gedung lama yang dibangun pada 1966 idealnya menampung 900 orang. Saat ini, jumlah pegawai di sana sudah 1.200 orang.</p>'
										+'</div>'
									+'</li>';

	$('.save').on('click', function(){
		var searching = $(this).parent().prev().find('.btn-primary').map(function(){
			return $(this).text();
		}).get();
		searching
		$('#search').text('Search : '+searching.join(', '));
		$('.news-items').html(post);

	})
});
