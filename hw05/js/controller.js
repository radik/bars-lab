'use strict';

/* Controllers */

var fastshop = angular.module('fastshop', []);

fastshop.controller('ItemList', function($scope) {

    var addItems = [];
    var items = [
      {
        "name": "15.6 [Home] Ноутбук DNS (0164783) (HD)",
        "price": "20 490 руб.",
        "img": "src/img/1.jpg"
      },
      {
        "name": "17.3 [Gamer] Ноутбук DNS (0801153) (HD+)",
        "price": "33 990 руб.",
        "img": "src/img/2.jpg"
      },
      {
        "name": "Компьютер DNS Prestige XL [0800795]",
        "price": "59 990 руб.",
        "img": "src/img/3.jpg"
      },
      {
        "name": "ПО Microsoft  Windows 8.1 Русская версия DVD (ВОХ) [WN7-00937]",
        "price": "6 090 руб.",
        "img": "src/img/4.jpg"
      },
      {
        "name": "15.6 [Home] Ноутбук DNS (0164783) (HD)",
        "price": "20 490 руб.",
        "img": "src/img/1.jpg"
      },
      {
        "name": "17.3 [Gamer] Ноутбук DNS (0801153) (HD+)",
        "price": "33 990 руб.",
        "img": "src/img/2.jpg"
      },
      {
        "name": "Компьютер DNS Prestige XL [0800795]",
        "price": "59 990 руб.",
        "img": "src/img/3.jpg"
      },
      {
        "name": "ПО Microsoft Windows 8.1 Русская версия DVD (ВОХ) [WN7-00937]",
        "price": "6 090 руб.",
        "img": "src/img/4.jpg"
      },
      {
        "name": "15.6 [Home] Ноутбук DNS (0164783) (HD)",
        "price": "20 490 руб.",
        "img": "src/img/1.jpg"
      },
      {
        "name": "17.3 [Gamer] Ноутбук DNS (0801153) (HD+)",
        "price": "59 990 руб.",
        "img": "src/img/2.jpg"
      },
      {
        "name": "Компьютер DNS Prestige XL [0800795]",
        "price": "59 990 руб.",
        "img": "src/img/3.jpg"
      },
      {
        "name": "ПО Microsoft Windows 8.1 Русская версия DVD (ВОХ) [WN7-00937]",
        "price": "6 090 руб.",
        "img": "src/img/4.jpg"
      },
    ];
    $scope.items = items;
    $scope.addItems = addItems;
    $scope.commonAmount = 0;

    $scope.addThing = function(item) {
      var price = item.price.replace('руб.', ' ');
      price = price.replace('\ ', '');
      $scope.items.splice($scope.items.indexOf(item),1);
      $scope.addItems.push(item);
      $scope.commonAmount += +price;
    };
    $scope.deleteThing = function(item) {
      var price = item.price.replace('руб.', ' ');
      price = price.replace('\ ', '');
      $scope.commonAmount -= +price;
      $scope.addItems.splice($scope.addItems.indexOf(item),1);
      $scope.items.push(item);
    }
  });