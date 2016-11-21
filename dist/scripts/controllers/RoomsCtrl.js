(function() {
  function RoomsCtrl(Room, $uibModal) {
    this.chatRooms = Room.all;
    
  }

  angular
    .module('blocChat')
    .controller('RoomsCtrl', ['Room', '$uibModal', RoomsCtrl]);

})();