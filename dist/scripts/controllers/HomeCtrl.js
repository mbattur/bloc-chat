(function() {
    function HomeCtrl(Room, Message, $modal, $cookies) {
        this.rooms = Room.all;
        this.currentRoom = null;
        this.messages = null;

        this.setRoom = function(room){
            this.currentRoom = room;
            this.messages = Message.getByRoomId(room.$id);
        };
        
        this.send = function() {
            Message.send(this.text, this.currentRoom);
            this.text = '';
        };

        this.newModal = function() {
            $modal.open({
                templateUrl: 'templates/room.html',
                controller: 'RoomsCtrl',
                size: 'sm'
            });
        };
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$modal', '$cookies', HomeCtrl]);
})();