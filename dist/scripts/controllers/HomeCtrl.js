(function() {
    function HomeCtrl(Room, $modal) {
        this.rooms = Room.all;
        
        this.newModal = function() {
            $modal.open({
                templateUrl: 'templates/room.html',
                controller: 'RoomsCtrl',
                size: 'sm'
            });
        };
        
        this.changeRoom = function() {
            console.log('room was clicked!');
        };
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$modal', HomeCtrl]);
})();