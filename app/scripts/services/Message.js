(function() {
    function Message($firebaseArray, $cookies) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        return {
            getByRoomId: function(roomId) {
                return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
            },
            send: function(newMessage, currentRoom) {
                console.log(newMessage);
                console.log(currentRoom.$id);
                console.log($cookies.blocChatCurrentUser);
                messages.$add({ 
                    content: newMessage, 
                    roomId: currentRoom.$id, 
                    username: $cookies.blocChatCurrentUser,
                    sentAt: Date.now()
                });
            }
        };
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();