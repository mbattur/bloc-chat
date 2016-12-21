(function() {
    function HomeCtrl(Room, Message, $cookies, $modal) {
        this.rooms = Room.all;
        this.currentRoom = null;
        this.messages = null;

        this.setRoom = function(room){
            this.currentRoom = room;
            this.messages = Message.getByRoomId(room.$id);
        };
        
        this.send = function() {
            this.newMessage.roomId = this.currentRoom.$id;
            this.newMessage.username = $cookies.blocChatCurrentUser;
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