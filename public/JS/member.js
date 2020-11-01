$(document).ready(function() {
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.username);
  });
});

$(function () {
  $("#dropdown a").click(function () {
      $("#AdvancedSearch .selection").text(''+$(this).text());
  });
});

