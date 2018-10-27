(function () {
    'use strict';

    angular
        .module('todoApp', [])
        .component('todo', {
            controller: function () {
                console.log('Hello from controller');

            },
            templateUrl: 'app/templates/todo.html'
        });
})();