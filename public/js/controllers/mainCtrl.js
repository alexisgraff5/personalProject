angular.module('nixonClone')
.controller('mainCtrl', function( $scope, mainService ) {

  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  var login = document.getElementById('exit');

  // When the user clicks on the button, open the modal
  btn.onclick = () => {
      modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = () => {
      modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = event => {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  };

  $scope.loginUser = () => {
    mainService.loginUser($scope.emailLogin, $scope.passwordLogin).then(function(response) {
      $scope.user = response.data[0];
      console.log(response);
      mainService.setUser($scope.user);
      if (response.data.length > 0) {
        modal.style.display = "none";
      } else {
        swal({
  title: "Error!",
  text: "Incorrect email or password. Please try again.",
  type: "error",
  confirmButtonText: "Cool"
});
      }

    });
  };

  $scope.registerUser = () => {
    console.log("Fired login");
    mainService.registerUser($scope.user).then(function(response) {
      $scope.user = response.data[0];
      swal({
        title: "Registered!",
        text: "Thank you for registering, please login to continue",
        type: "success",
        confirmButtonText: "Cool"
});
    });
  };

});
