(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        return {
            getByRoomId: function (roomId) {
            ref.orderByChild('roomId').equalTo('-KXl1GDd7Fv64hmY8GkO').on('value', function(snapshot) {
                console.log(snapshot.val());
            });
            }
        };
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();