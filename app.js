angular.module('app', ['ngAnimate']);

angular.module('app').controller('mainCtrl', function ($scope) {
    
});

angular.module('app').filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});

angular.module('app').directive('userQuestionnaire', function () {
    return {
        templateUrl: 'userQuestionnaire.html',
        restrict: 'E',
        controller: function ($scope) {

            $scope.questions = [
                {
                    'questionId': 1,
                    'text': 'What is your name?',
                    'category': ['pii', 'pci'],
                    'type': 'text',
                    'placeholder' : 'Name',
                    'required': true
                },
                {
                    'questionId': 2,
                    'text': 'What is your email address?',
                    'Category': ['pii'],
                    'type': 'text',
                    'placeholder' : 'Email',
                    'Required': true
                },
                {
                    'questionId': 3,
                    'text': 'Are you going for lunch?',
                    'category': ['pii', 'pci'],
                    'type': 'select',
                    'options' : [
                        'Perhaps',
                        'Definately Not',
                        'Maybe'
                    ],
                    'placeholder' : null,
                    'required': false
                },
                {
                    'questionId': 4,
                    'text': 'Is it true?',
                    'category': ['pii'],
                    'type': 'boolean',
                    'options' : ['Yes', 'No'],
                    'placeholder' : 'true or false',
                    'required': false
                }
            ]

            $scope.categories = [
                'pii',
                'piisensitive',
                'phi',
                'pci',
                'pciprohibited',
                'financial'
            ]

            $scope.currentPage = 0;
            $scope.pageSize = 2;
        }
    }
})