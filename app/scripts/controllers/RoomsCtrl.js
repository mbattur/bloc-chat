(function() {
    function RoomsCtrl(Room, $uibModal) {
        // this.rooms = Room.all;
    }
  
    angular
        .module('blocChat')
        .controller('RoomsCtrl', ['Room', RoomsCtrl]);
})();