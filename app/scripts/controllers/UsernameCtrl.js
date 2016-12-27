(function() {
    function UsernameCtrl($modalInstance, $cookies) {
        this.submit = function() {
            if(this.text) {
                console.log(this.text);
                $cookies.blocChatCurrentUser = this.text;
                $modalInstance.close();
            }
        };
    }
    
    angular
        .module('blocChat')
        .controller('UsernameCtrl', ['$modalInstance', '$cookies', UsernameCtrl]);
})();