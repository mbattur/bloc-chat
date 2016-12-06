(function() {
    function Room($firebaseArray) {
        var roomsRef = firebase.database().ref().child("rooms");
        var messagesRef = firebase.database().ref().child("messages");
        var rooms = $firebaseArray(roomsRef);
        var messages = $firebaseArray(messagesRef);
        
        return {
            all: rooms,
            
            create: function(room){
                return rooms.$add(room);
            },
            
            addMessage: function(userName, content, room) {
                messages.$add({
                    username: userName,
                    content: content,
                    sent_at: firebase.database.ServerValue.TIMESTAMP,
                    roomid: room.$id
                });
            },
            
            getMessages: function(room){
                return $firebaseArray(messagesRef.orderByChild('roomid').equalTo(room.$id));
            }
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();