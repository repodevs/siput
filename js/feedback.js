$(document).ready(function() {

	function sendFeedback(){

		var data = $('#feedback-form').serialize();

		console.log(data);

		$.ajax({
			url: 'sys/feedback.php',
			type: 'POST',
			// dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
			data: data,
		})
		.done(function(msg) {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});

	}
	
});