var app = angular.module('generalModule');
app.service('loginModal', function($modal, $rootScope) {

    function assignCurrentUser(user) {
        $rootScope.currentUser = user;
        return user;
    }


    return function() {
        var instance = $modal.open({
            templateUrl:"views/login.html",
            controller: 'LoginModalCtrl',
            controllerAs: 'LoginModalCtrl'
        });
        return instance.result.then(assignCurrentUser);
    }
});
