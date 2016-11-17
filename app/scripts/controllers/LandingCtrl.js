(function() {
    function LandingCtrl() {
        this.heroTitle = "Let the chating begin!"
        
        this.rooms = [];
        for (var i=0; i < 5; i++) {
            this.rooms.push(angular.copy(topicBasketball));
        }
    }
    
    angular
        .module('blocChat')
        .controller('LandingCtrl', LandingCtrl);
})();