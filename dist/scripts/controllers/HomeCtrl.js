(function() {
    function HomeCtrl(Room) {
        this.rooms = Room.all;
        
        this.newModal = function() {
            $modal.open({
                templateUrl: '/templates/room.html',
                controller: 'RoomsCtrl as room'
            });
        };
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$modal', HomeCtrl]);
})();