(function() {
    function LandingCtrl(Room) {
        this.heroTitle = "Let the chating begin!"
        
        // this.rooms = [];
        // for (var i=0; i < 5; i++) {
        //     this.rooms.push(angular.copy(topicBasketball));
        // }
        this.rooms = Room.all;
    }
    
    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room', LandingCtrl]);
})();