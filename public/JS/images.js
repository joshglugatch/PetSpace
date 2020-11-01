
var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dluhydvkn/upload'
var CLOUDINARY_UPLOAD_PRESET = 'hcqzg87z'


var imgPreview = document.getElementById('img-preview');
var fileUpload = document.getElementById('file-upload');


var createBtn = document.querySelector('.btn-deep-orange');
var link;

fileUpload.addEventListener('change', function(event){
var file = event.target.files[0];
var formData = new FormData();
formData.append('file', file)
formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
//console.log(file)

    axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
    }).then(function(res){
    console.log(res)
    imgPreview.src = res.data.secure_url      
    link = res.data.secure_url      

    createBtn.addEventListener("click", function(event){

        axios.get('/api/user_data').then(data => {
            console.log(data)
            var thisID = data.data.id
            var animal = document.getElementById('inputGroupSelect04').value;
            var caption = document.getElementById('orangeForm-name').value;

            axios({
                url: "/api/posts",
                method: "POST",
                data: {
                    title: caption,
                    animal: animal,
                    UserId: thisID,
                    imageURL: res.data.secure_url
                }  
            }).then(function(res){
                console.log(res)
                location.reload();
            }).catch(function(err){
                console.log(err)
            });   
        });       
    })
    
         

    }).catch(function(err){
    console.log(err)
    });
    
});