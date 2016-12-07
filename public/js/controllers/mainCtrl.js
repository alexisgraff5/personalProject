angular.module('nixonClone')
.controller('mainCtrl', function( $scope, mainService, $location ) {

  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  };

  $scope.loginUser = function() {
    console.log("Fired login");
    mainService.loginUser($scope.email, $scope.password).then(function(response) {
      $scope.user = response.data[0];
      mainService.setUser($scope.user);
    });
  };

});
