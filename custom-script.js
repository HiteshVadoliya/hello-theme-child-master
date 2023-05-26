jQuery(document).ready(function(){
	
	console.log("in");
	
});



(function($){

	$(document).on('keyup','#form-field-to_zip',function(e) {
		$('#result_to').html('');
		$('#state').val('');
		var searchField = $('#form-field-to_zip').val();
		var expression = new RegExp(searchField, "i");
		$.getJSON('data.json', function(data) {
			$.each(data, function(key, value){
				if (value.name.search(expression) != -1 || value.zipcode.search(expression) != -1)
				{
				$('#result_to').append('<li class="list-group-item link-class">'+value.zipcode+' | <span class="text-muted">'+value.name+'</span></li>');
				}
			});   
		});
	});
		
		

	$(document).on('keyup','#form-field-to_zip',function(e) {
		$('#result_to').on('click', 'li', function() {
			var click_text = $(this).text().split('|');				
			$('#form-field-to_zip').val($.trim(click_text[0]));
			$("#result_to").html('');
		});
	});

	$(document).on('keyup','#form-field-from_zip',function(e) {
		$('#result_from').html('');
		$('#state').val('');
		var searchField = $('#form-field-from_zip').val();
		var expression = new RegExp(searchField, "i");
		$.getJSON('data.json', function(data) {
			$.each(data, function(key, value){
				if (value.name.search(expression) != -1 || value.zipcode.search(expression) != -1)
				{
				$('#result_from').append('<li class="list-group-item link-class">'+value.zipcode+' | <span class="text-muted">'+value.name+'</span></li>');
				}
			});   
		});
	});
		
		

	$(document).on('keyup','#form-field-from_zip',function(e) {
		$('#result_from').on('click', 'li', function() {
			var click_text = $(this).text().split('|');				
			$('#form-field-from_zip').val($.trim(click_text[0]));
			$("#result_from").html('');
		});
	});

	

})(jQuery);