var myApp = angular.module('myApp', []);

myApp.controller('ItemsListCtrl', function ($scope) {
    $scope.items = [
        {'name': 'какой-то ноут',
            'price': 3000,
                'img' : 'src/img/1.jpg'},
        {'name': 'другой ноут',
            'price': 2000,
                'img' : 'src/img/2.jpg'},
        {'name': 'другой другой ноут',
            'price': 10000,
                'img' : 'src/img/3.jpg'}
    ];
	$scope.itemsBasket = [];	
	$scope.push = function(item){
		$scope.itemsBasket.push(angular.copy(item));
		$scope.price+=item.price;
	}
	$scope.pop = function(item){
		var index = $scope.itemsBasket.indexOf(item);
		$scope.itemsBasket.splice(index,1)
		$scope.price-=item.price;
	}
    $scope.price = 0;
});
