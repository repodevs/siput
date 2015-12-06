$(document).ready(function() {
	var user = getCookie('username').replace(/\+/g, ' ');
	
	$('#sendFeed').on('click', function(){
		var message = $('#inMsg').val();
		if(message.trim()!=''){	
			var feed = '				<li class="from_user left">'
										+'<a href="#" class="avatar"><img src="img/message_avatar1.png"/></a>'
											+'<div class="message_wrap"> <span class="arrow"></span>'
												+'<div class="info"> <a class="name">'+user+'</a> <span class="time">1 minutes ago</span>'
													+'<div class="options_arrow">'
														+'<div class="dropdown pull-right"> <a class="dropdown-toggle " id="dLabel" role="button" data-toggle="dropdown" data-target="#" href="#"> <i class=" icon-caret-down"></i> </a>'
															+'<ul class="dropdown-menu " role="menu" aria-labelledby="dLabel">'
																+'<li><a href="#"><i class="icon-star icon-large"></i> Favorit</a></li>'
																+'<li><a href="#"><i class="icon-share-alt icon-large"></i> Reply</a></li>'
																+'<li><a href="#"><i class="icon-remove icon-large"></i>  Report</a></li>'
															+'</ul>'
														+'</div>'
													+'</div>'
												+'</div>'
												+'<div class="text">'+message+'</div>'
											+'</div>'
										+'</li>';
			$('#messages_layout').prepend(feed);
			$('#inMsg').val('');
		}
	});
});