$(document).ready(function() {

var postContainer = $(".postContainer")
var commentContainer = $(".commentContainer")

var posts = [];
var comments = [];

getPosts();


function initializeRows(){
    postContainer.empty();
    var rowsToAdd = [];
    for(var i=0; i<posts.length; i++){
        rowsToAdd.push(createNewRow(posts[i]))
    }
    postContainer.prepend(rowsToAdd)
}

function initializeComments(){
    commentContainer.empty();
    var commentsToAdd = [];
    for(var i=0; i<comments.length; i++){
        commentsToAdd.push(createNewComment(comments[i]))
    }
    commentContainer.prepend(commentsToAdd)
}

function getPosts() {
    $.get("api/posts", function(data){
        posts = data
        console.log(posts[0].id)
        console.log(data)
        initializeRows()

        $.get(`api/comments/${posts[0].id}`, function(newdata){
          comments = newdata
          
          console.log(newdata)
          initializeComments()
      })
    
    })
}

// function getComments() {
//   $.get(`api/comments/2`, function(data){
//       comments = data
      
//       console.log(data)
//       initializeComments()
//   })
// }

function createNewRow(post) {
    var $newInputRow = $(
      `
      <div class="col-lg mb-4">
      <div class="card h-100">
        <img class="card-img-top" src="${post.imageURL}" alt="">
        <div class="card-body">
          <h2 class="card-title">${post.User.username} : ${post.title}</h2>
          <div class="card-text commentContainer">Comments ${post.id} </div>
        </div>
        <div class="card-footer">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"></span>
            </div>
            <textarea class="form-control" aria-label="With textarea"></textarea>
            <button type="button" class="btn btn-outline-primary">LIKE POST!</button>
          </div>
        </div>
      </div>
    </div>

      `
    )
    $newInputRow.data("post", post);
    return $newInputRow;
  };
    
    

    function createNewComment(comment) {
      var $newInputComment = $(
        `
        <p>${comments[0].comment}</p>
  
        `
      );
    
    $newInputComment.data("comment", comment);
    return $newInputComment
  }

})