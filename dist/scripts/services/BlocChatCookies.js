(function() {
    function BlocChatCookies($cookies, $modal) {
        
        var currentUser = $cookies.get('blocChatCurrentUser');
        
        if (!currentUser || currentUser === '') {
            $modal.open({
                templateUrl: 'templates/username.html',
                controller: 'UsernameCtrl as user',
                backdrop: 'static',
                keyboard: false
            });
        }
    }
    
    angular
        .module('blocChat')
        .run(['$cookies', '$modal', BlocChatCookies]);
})();