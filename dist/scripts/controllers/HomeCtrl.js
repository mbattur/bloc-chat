(function() {
    function HomeCtrl(Room, Message, $modal) {
        this.rooms = Room.all;
        this.currentRoom = null;
        this.messages = null;

        this.setRoom = function(room){
            this.currentRoom = room;
            this.messages = Room.getMessages(room);
        };
        
        this.newModal = function() {
            $modal.open({
                templateUrl: 'templates/room.html',
                controller: 'RoomsCtrl',
                size: 'sm'
            });
        };
        
        this.changeRoom = function(room) {
            this.room = room;
        };
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$modal', HomeCtrl]);
})();