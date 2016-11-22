(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        
        var roomService = {};
        
        roomService.all = rooms;
        
        roomService.addRoom = function(roomName) {
            rooms.$add({
                name: roomName
            });
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();