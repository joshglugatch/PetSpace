$(document).ready(function () {
    
    $(document).on("click", ".commentBtn", function(event) {
        event.preventDefault();
        var commentText = $(".commentText" + $(this).data("id")).val();
        console.log(commentText)
        var thisID = this.dataset.id;
        
        

        
            $.get("/api/user_data").then(function(data) {
                var newComment = {
                    comment: commentText,
                    PostId: thisID,
                    UserId: data.id
                }

                $.post("/api/comment", newComment)
    
            .then(function(data) {
                $(".commentText" + $(this).data("id")).val("");
                location.reload();
                console.log(data);
                 });

            });
          
        
        

    })
    

    $.get("/api/user_data").then(function(data) {
        $("#currentUser").text(data.username);
      });
});
