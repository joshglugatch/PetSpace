
var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dluhydvkn/upload'
var CLOUDINARY_UPLOAD_PRESET = 'hcqzg87z'


var imgPreview = document.getElementById('img-preview');
var fileUpload = document.getElementById('file-upload');

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
            axios({
                url: "/api/posts",
                method: "POST",
                data: {
                    title: "imgtest",
                    animal: "dog",
                    UserId: 1,
                    imageURL: res.data.secure_url
                }  
            }).then(function(res){
                console.log(res)
            }).catch(function(err){
                console.log(err)
            });           

    }).catch(function(err){
    console.log(err)
    });

});
