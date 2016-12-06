(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref();
        var rooms = $firebaseArray(ref.child('rooms'));
        var messages = $firebaseArray(ref.child('messages'));
        
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
                return $firebaseArray(messages.orderByChild('roomid').equalTo(room.$id));
            }
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();