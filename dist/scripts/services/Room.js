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
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();