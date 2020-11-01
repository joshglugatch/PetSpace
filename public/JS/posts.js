
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
      commentString += '<p class="commentStr">' + post.Comments[i].User.username + ":  " + post.Comments[i].comment + '</p>'
    }

    var $newInputRow = $(

      `
      <div class="row">
      <div class="col-md-4 clearfix  d-md-block">
        <div class="card mb-2">
          <div class="avatar-wrapper">
            <img class="card-img-top mx-auto" style="width: 200px;" src="https://github.com/joshglugatch/PetSpace/blob/main/public/images/newLogo_petSpace.png?raw=true" width="500" height="300" alt="" data-toggle="modal" data-target="#basicExampleModal3">
          <div class="upload-button">
        <img class="card-img-top img-fluid" src="${post.imageURL}" alt="">
        <div class="card-body">
          <h2 class="card-title text-center">${post.User.username} : ${post.title}</h2>
          <p class="card-text"> ${commentString}</p>
        </div>
        <div class="card-footer">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Comment</span>
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

})
