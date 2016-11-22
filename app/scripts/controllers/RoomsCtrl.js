(function() {
    function RoomsCtrl(Room, $uibModal) {
        this.roomService = Room.all;
    
        this.newModal = function() {
            $uibModal.open({
                templateUrl: '/templates/room.html',
                controller: 'RoomsCtrl as room'
            });
        };
    }
  
    angular
        .module('blocChat')
        .controller('RoomsCtrl', ['Room', '$uibModal', RoomsCtrl]);
})();