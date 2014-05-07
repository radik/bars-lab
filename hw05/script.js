var shopApp = angular.module('shopApp', []);

shopApp.controller('shopList', function ($scope) {
    $scope.items = [
        {
            id: 1,
            name: '15.6" [Home] Ноутбук DNS (0164783) (HD)',
            price: '20 490 руб.',
            img: 'src/img/1.jpg',
            class: '',
            ammount: 1
        },
        {
            id: 2,
            name: '17.3" [Gamer] Ноутбук DNS (0801153) (HD+)',
            price: '33 990 руб.',
            img: 'src/img/2.jpg',
            class: '',
            ammount: 1
        },
        {
            id: 3,
            name: 'Компьютер DNS Prestige XL [0800795]',
            price: '59 990 руб.',
            img: 'src/img/3.jpg',
            class: 'hh',
            ammount: 1
        },
        {
            id: 4,
            name: 'ПО Microsoft " Windows 8.1 " Русская версия DVD (ВОХ) [WN7-00937]',
            price: '6 090 руб.',
            img: 'src/img/4.jpg',
            class: '',
            ammount: 1
        },
        {
            id: 5,
            name: '15.6" [Home] Ноутбук DNS (0164783) (HD)',
            price: '20 490 руб.',
            img: 'src/img/1.jpg',
            class: '',
            ammount: 1
        },
        {
            id: 6,
            name: '17.3" [Gamer] Ноутбук DNS (0801153) (HD+)',
            price: '33 990 руб.',
            img: 'src/img/2.jpg',
            class: '',
            ammount: 1
        },
        {
            id: 7,
            name: 'Компьютер DNS Prestige XL [0800795]',
            price: '59 990 руб.',
            img: 'src/img/3.jpg',
            class: 'hh',
            ammount: 1
        },
        {
            id: 8,
            name: 'ПО Microsoft " Windows 8.1 " Русская версия DVD (ВОХ) [WN7-00937]',
            price: '6 090 руб.',
            img: 'src/img/4.jpg',
            class: '',
            ammount: 1
        },
        {
            id: 9,
            name: '15.6" [Home] Ноутбук DNS (0164783) (HD)',
            price: '20 490 руб.',
            img: 'src/img/1.jpg',
            class: '',
            ammount: 1
        },
        {
            id: 10,
            name: '17.3" [Gamer] Ноутбук DNS (0801153) (HD+)',
            price: '33 990 руб.',
            img: 'src/img/2.jpg',
            class: '',
            ammount: 1
        },
        {
            id: 11,
            name: 'Компьютер DNS Prestige XL [0800795]',
            price: '59 990 руб.',
            img: 'src/img/3.jpg',
            class: 'hh',
            ammount: 1
        },
        {
            id: 12,
            name: 'ПО Microsoft " Windows 8.1 " Русская версия DVD (ВОХ) [WN7-00937]',
            price: '6 090 руб.',
            img: 'src/img/4.jpg',
            class: '',
            ammount: 1
        }
    ];
    
    $scope.cart = [];
    $scope.cartSum = 0;
    
    $scope.add = function(item){
        var i,
            bool = false;
        for(i = 0, l = $scope.cart.length; i < l && !bool; i++){
            bool = bool || $scope.cart[i].id === item.id;
        }
        
        if(bool){
            $scope.cart[--i].ammount++;
        } else {
            $scope.cart.push(item);
        }
        $scope.cartSum += parseInt(item.price);
    };
    
    $scope.remove = function(item){
        var i,
            bool = false;
        for(i = 0, l = $scope.cart.length; i < l && !bool; i++){
            bool = bool || $scope.cart[i].id === item.id;
        }
        
        if(bool){
            if($scope.cart[--i].ammount > 1){
                $scope.cart[i].ammount--;
            } else {
                $scope.cart = $scope.cart.slice(0,i).concat($scope.cart.slice(i+1,$scope.cart.length));
            }
            $scope.cartSum -= parseInt(item.price);
        }s
    };
    
    function parseInt(){
        return arguments[0].replace(/[^0-9]/g, '') * 1;
    }
});

