$(function() {
	$('#search').keyup(function(){
		$.ajax({
			type: "POST",
			url:"/celebrity/search",
			data: {
				'search_text' : $('#search').val(),
				'csrfmiddlewaretoken': $("input[name=csrfmiddlewaretoken]").val()
		},
			sucess: searchSuccess,
			dataType: 'html'
		});
	});
});
function searchSuccess(data, textStatus, jqXHR)
{
	$('#search=results').html(data);
}