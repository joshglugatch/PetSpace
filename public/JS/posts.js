
$(document).ready(function() {

  var postContainer = $(".postContainer")
  var posts = [];
  
  getData();
  
  function getData() {
    $.get("api/posts", function(data){
        posts = data
        
        console.log(data)
        initializeRows()
    })
   
  }
  
  function initializeRows(){
    
    postContainer.empty();
      var rowsToAdd = [];
     
  
      for(var i=0; i<posts.length; i++){
          rowsToAdd.push(createNewRow(posts[i]));
            
      }
      console.log(rowsToAdd)
      postContainer.prepend(rowsToAdd)
     
  }
  
  function createNewRow(post) {
    console.log(post)
    var commentString = "";
  for(var i=0; i < post.Comments.length;i++){
    commentString += '<p>'+ post.Comments[i].comment+ '</p>'
  }
  
      var $newInputRow = $(
        `
        <div class="col-md-12">
            <div class="card h-100 mb-4"alt="">
            <button type="button" class="btn btn-default" data-toggle="modal" data-target="#exampleModal">
            <img src="${post.imageURL}" width="500" /></button>
            <div class="card-body">
              <h2 class="card-title text-center">${post.User.username} : ${post.title}</h2>
              <div class="card-text"> ${commentString} </div>
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
      
  })