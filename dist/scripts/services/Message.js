(function() {
    function Message($firebaseArray, $cookies) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        this.myMessages = {};
        
        return {
            getByRoomId: function(roomId) {
                return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
            },
            send: function(newMessage) {
                // return messages.$add(newMessage);
                messages.$add( { content: newMessage, username: $cookies.get('blocChatCurrentUser') });
                // STUDY FIREBASE ADD
            }
        };
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();