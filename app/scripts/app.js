(function() {
    
    var config = {
            apiKey: "AIzaSyDU6Aq_WZifqTT_j00rtQkaWve4HSPoFj8",
            authDomain: "bloc-chat-e343a.firebaseapp.com",
            databaseURL: "https://bloc-chat-e343a.firebaseio.com",
            storageBucket: "bloc-chat-e343a.appspot.com",
            messagingSenderId: "645889349732"
        };
    firebase.initializeApp(config);

    angular
        .module('blocChat', ["firebase"])
        .controller('MyCtrl', function($firebaseObject) {
            const rootRef = firebase.database().ref().child('angular');
            const ref = rootRef.child('object');
            this.object = $firebaseObject(ref);
        });
})();