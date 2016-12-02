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
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$modal', HomeCtrl]);
})();