
$(document).ready(function () {

  var postContainer = $(".postContainer")


  var posts = [];



  getData();

  function getData() {
    $.get("api/posts", function (data) {
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
        commentString += '<p class="card p-2 m-1">' + post.Comments[i].User.username + ":  " + post.Comments[i].comment + '</p>'
      }
  
  
  
  
  
  
      var $newInputRow = $(
        `
            <div class="col-lg mb-4">
                <div class="card h-100">
                <img class="card-img-top" src="${post.imageURL}" alt="">
                <div class="card-body">
                <h2 class="card-title caption">${post.User.username}:    ${post.title}</h2>
                <p class="card-text"> ${commentString}</p>
                </div>
                <div class="card-footer">
                <div class="input-group">
                    
                    <input type="text" class="form-control" aria-label="With textarea" style="border: orange 2px solid;"></input>
                    <button type="button" class="btn" style="background-color: orange">Comment</button>
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