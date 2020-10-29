
$(document).ready(function() {
    // Getting references to our form and input
    var signUpForm = $("form.signup");
    var usernameInput = $("input#username-input");
    var passwordInput = $("input#password-input");
  
    signUpForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        username: usernameInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.username || !userData.password) {
        return;
      }
      signUpUser(userData.username, userData.password);
      usernameInput.val("");
      passwordInput.val("");
    });
    function signUpUser(username, password) {
      $.post("/api/signup", {
        username: username,
        password: password
      })
        .then(function(data) {
          window.location.replace("/members");
        })
        .catch(handleLoginErr);
    }
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });