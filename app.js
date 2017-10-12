angular.module('app', ['ngAnimate', 'ngMessages']);

angular.module('app').controller('mainCtrl', function ($scope, $filter) {

});

angular.module('app').directive('userQuestionnaire', function () {
    return {
        templateUrl: 'userQuestionnaire.html',
        restrict: 'E',
        controller: function ($scope, $filter) {

            $scope.direction = 1;

            $scope.userQuestionnaire = {
                userId: 1,
                userName: 'John Smith',
                questions: [
                    {
                        questionId: 1,
                        text: 'What is your name?',
                        category: ['pii', 'pci'],
                        type: 'text',
                        placeholder: 'Name',
                        isRequired: true,
                        answer: null
                    },
                    {
                        questionId: 2,
                        text: 'What is your email address?',
                        category: ['pii'],
                        type: 'text',
                        placeholder: 'Email',
                        isRequired: true,
                        answer: null
                    },
                    {
                        questionId: 3,
                        text: 'Are you going for lunch?',
                        category: ['pii', 'pci'],
                        type: 'select',
                        options: [
                            'Perhaps',
                            'Definately Not',
                            'Maybe'
                        ],
                        placeholder: null,
                        isRequired: false,
                        answer: null
                    },
                    {
                        questionId: 4,
                        text: 'Is it true?',
                        category: ['pii'],
                        type: 'boolean',
                        options: ['Yes', 'No'],
                        placeholder: 'true or false',
                        isRequired: false,
                        answer: null
                    },
                    {
                        questionId: 5,
                        text: 'Are you happy?',
                        category: ['pii', 'pci'],
                        type: 'select',
                        options: [
                            'Perhaps',
                            'Definately Not',
                            'Maybe'
                        ],
                        placeholder: null,
                        isRequired: false,
                        answer: null
                    },
                    {
                        questionId: 6,
                        text: 'Did it occur?',
                        category: ['pii'],
                        type: 'boolean',
                        options: ['Yes', 'No'],
                        placeholder: 'true or false',
                        isRequired: true,
                        answer: null
                    },
                    {
                        questionId: 7,
                        text: 'Are you happy?',
                        category: ['pii', 'pci'],
                        type: 'select',
                        options: [
                            'Perhaps',
                            'Definately Not',
                            'Maybe'
                        ],
                        placeholder: null,
                        isRequired: false,
                        answer: null
                    },
                    {
                        questionId: 8,
                        text: 'Are you happy?',
                        category: ['pii', 'pci'],
                        type: 'select',
                        options: [
                            'Perhaps',
                            'Definately Not',
                            'Maybe'
                        ],
                        placeholder: null,
                        isRequired: false,
                        answer: null
                    },
                    {
                        questionId: 9,
                        text: 'Are you happy?',
                        category: ['pii', 'pci'],
                        type: 'select',
                        options: [
                            'Perhaps',
                            'Definately Not',
                            'Maybe'
                        ],
                        placeholder: null,
                        isRequired: false,
                        answer: null
                    },
                    {
                        questionId: 10,
                        text: 'Are you happy?',
                        category: ['pii', 'pci'],
                        type: 'select',
                        options: [
                            'Perhaps',
                            'Definately Not',
                            'Maybe'
                        ],
                        placeholder: null,
                        isRequired: true,
                        answer: null
                    }
                    
                ]
            }

            $scope.categories = [
                'pii',
                'piisensitive',
                'phi',
                'pci',
                'pciprohibited',
                'financial'
            ]

            $scope.currentPage = 0;
            $scope.questionsPerPage = 4;

            var calculateProgressPercentage = function() {
                var maxPages = $filter('number')($scope.userQuestionnaire.questions.length / $scope.questionsPerPage, 0);
                var currentPage = $scope.currentPage + 1;
                return percentage = currentPage/maxPages * 100
            }

            $scope.progress = function() {
                return calculateProgressPercentage();
            }

            $scope.next = function () {
                $scope.direction = 1;
                $scope.currentPage = $scope.currentPage + 1;
            }

            $scope.previous = function () {
                $scope.direction = 0;
                $scope.currentPage = $scope.currentPage - 1;
            }

            $scope.save = function() {
                
            }
        }
    }
})