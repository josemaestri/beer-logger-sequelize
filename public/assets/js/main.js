$(document).ready(function() {
  $(".btn-drink").on("click", function(event) {
    var id = $(this).data("id");
    // Send the PUT request.
    $.ajax("/beers/update/" + id, {
      type: "PUT",
      data: {consumed:true}
    }).then(
      function() {
        
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});