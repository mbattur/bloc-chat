(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();