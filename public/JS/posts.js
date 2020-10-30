$(document).ready(function() {

var $postContainer = (".postContainer")

var posts = [];

getPosts();

function initializeRows(){
    $postContainer.empty();
    var rowsToAdd = [];
    for(var i=0; i<posts.length; i++){
        rowsToAdd.push(createNewRow(posts[i]))
    }
    $postContainer.prepend(rowsToAdd)
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
        post.User.name,
        "</span>",
        "<input type='text' class='edit' style='display: none;'>",
        "<button class='delete btn btn-danger'>x</button>",
        "<button class='complete btn btn-primary'>✓</button>",
        "</li>"
      ].join("")
    );

    $newInputRow.find("button.delete").data("id", todo.id);
    $newInputRow.find("input.edit").css("display", "none");
    $newInputRow.data("todo", todo);
    if (todo.complete) {
      $newInputRow.find("span").css("text-decoration", "line-through");
    }
    return $newInputRow;
  }

})