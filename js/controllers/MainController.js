app.controller('MainController', ['$scope', function($scope) {
    $scope.move = {
      icon: 'img/move.jpg',
      title: 'MOVE',
      developer: 'MOVE, Inc.',
      price: 0.99
    };
  
    $scope.shutterbugg = {
      icon: 'img/shutterbugg.jpg',
      title: 'Shutterbugg',
      developer: 'Chico Dusty',
      price: 2.99
    };
  
    $scope.gameboard = {
      icon: 'img/gameboard.jpg',
      title: 'Gameboard',
      developer: 'Armando P.',
      price: 1.99
    };
    
    $scope.apps = [
      {
        icon: 'img/move.jpg',
        title: 'MOVE',
        developer: 'MOVE, Inc',
        price: 0.99
      },
      {
        icon: 'img/shutterbugg.jpg',
        title: 'Shutterbugg',
        developer: 'Chico Dusty',
        price: 2.99
      },
      {
        icon: 'img/gameboard.jpg',
        title: 'ROGUE',
        developer: 'ROGUE, Inc',
        price: 19.99
      },
      {
        icon: 'img/forecast.jpg',
        title: 'NOBull',
        developer: 'NOBull, Inc',
        price: 12.99
      }
    ]
  }]);