$(document).ready(function() {

var postContainer = $(".postContainer")

var posts = [];

getPosts();

function initializeRows(){
    postContainer.empty();
    var rowsToAdd = [];
    for(var i=0; i<posts.length; i++){
        rowsToAdd.push(createNewRow(posts[i]))
    }
    postContainer.prepend(rowsToAdd)
}

function getPosts() {
    $.get("api/posts", function(data){
        posts = data
        initializeRows()
    })
}

function createNewRow(post) {
    var $newInputRow = $(
      [
        "<li class='list-group-item todo-item'>",
        "<img src='" + post.imageURL+ "'>",
        "<span>",
        post.title,
        "<br>",
        post.User.name,
        "</span>",
        "</li>"
      ].join("")
    );

    
    $newInputRow.data("post", post);
    return $newInputRow;
  }

})