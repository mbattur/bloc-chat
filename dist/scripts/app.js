(function() {
    angular
        .module("blocChat", ["firebase"])
        .controller("ChatCtrl", function($scope, $firebaseArray) {
            var ref = firebase.database().ref().child("messages");
            $scope.messages = $firebaseArray(ref);
        });
})();