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
            var myUser = $cookies.getObject('blocChatCurrentUser');
            console.log(myUser);
            if(this.text && this.currentRoom) {
                Message.send(myUser, this.text, this.currentRoom);
                this.text = '';
            }
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