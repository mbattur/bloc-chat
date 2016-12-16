(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        
        return {
            getByRoomId: function (roomId) {
                return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
            },
            send: function(newMessage) {
                // Send method logic
            }
        };
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();