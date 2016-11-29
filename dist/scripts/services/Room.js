(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref();
        var rooms = $firebaseArray(ref.child('rooms'));
        
        return {
            all: rooms,
            
            create: function(room){
                return rooms.$add(room);
            }
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();