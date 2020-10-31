
$(document).ready(function () {

    var postContainer = $(".postContainer")
  
  
    var posts = [];
  
  
  
    getData();
  
    function getData() {
      $.get("api/posts/other", function (data) {
        posts = data
  
        console.log(data)
        initializeRows()
      })
  
    }
  
    function initializeRows() {
  
      postContainer.empty();
      var rowsToAdd = [];
  
  
      for (var i = 0; i < posts.length; i++) {
        rowsToAdd.push(createNewRow(posts[i]));
  
      }
      console.log(rowsToAdd)
      postContainer.prepend(rowsToAdd)
  
    }
  
    function createNewRow(post) {
      console.log(post)
      var commentString = "";
      for (var i = 0; i < post.Comments.length; i++) {
        commentString += '<p class="commentStr">' + post.Comments[i].User.username + ":  " + post.Comments[i].comment + '</p>'
      }
  
  
  
  
  
  
      var $newInputRow = $(
  
        `
          <div class="row">
          <div class="col-lg mb-4">
          <div class="card h-100">
            <img class="card-img-top img-fluid" src="${post.imageURL}" alt="">
            <div class="card-body">
              <h2 class="card-title">${post.User.username} : ${post.title}</h2>
              <div class="card-text"> ${commentString} </div>
            </div>
            <div class="card-footer">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"></span>
                </div>
                <textarea class="form-control" aria-label="With textarea"></textarea>
                <button type="button" class="btn btn-outline-primary likeBtn">LIKE POST!</button>
              </div>
            </div>
          </div>
        </div>
        </div>
          `
      )
      $newInputRow.data("post", post);
      return $newInputRow;
    };
  
  })