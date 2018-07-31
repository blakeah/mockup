// add class="thumb to <a>"
$(document).ready (function() {
   $('button.thumb').click(function(event){
		   event.preventDefault();
		   var content = $('.modal-body');
		   var title = $(this).attr("title");
			   $('.modal-title').html(title);
				   content.html("text");
			   $(".modal-profile").modal({show:true});
	   });
});
