$(document).ready(function() {
  $("#trigger").click(function(event) {
    event.stopPropagation();

    $(".dropdown-content").toggle();
  });

  $(document).click(function() {
    $(".dropdown-content").hide();
  });
});


$(document).ready(function() {
  $("#trigger1").click(function(event) {
    event.stopPropagation();

    $(".dropdown-content1").toggle();
  });

  $(document).click(function() {
    $(".dropdown-content1").hide();
  });
});
