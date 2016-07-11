var app = angular.module('onlineStore', ['ngRoute']);

console.log('Angular is working');

//Routes//

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: '/templates/clothing-index.html',
      controller: 'ClothingIndexCtrl'
    })
    .when('/clothing/:id', {
      templateUrl: '/templates/clothing-show.html',
      controller: 'ClothingShowCtrl'
    })
    .when('/checkout', {
      templateUrl: '/templates/checkout.html',
      controller: 'CheckoutCtrl'
    });
    // $locationProvider
    //   .html5mode({
    //   enabled: true,
    //   requireBase: false
    // });
});

app.controller('ClothingIndexCtrl', function($scope, ClothingService){
      $scope.clothing = ClothingService.query();
    });

app.controller('ClothingShowCtrl', function($scope, ClothingService, $routeParams){
  $scope.clothes = ClothingService.get($routeParams.id);
});

app.controller('CheckoutCtrl', function($scope, ClothingService, $routeParams){
  $scope.clothes = ClothingService.get($routeParams.id);
});


app.factory('ClothingService', function($http){
  var ClothingService = {};
  ClothingService.$inject = ['$http', '$scope'];

  ClothingService.query = function(){
    return All_Clothing
    // $http
    //   .get('')
    //   .then(function(response){
    //     return response.data
    //   });
  };

  ClothingService.get = function(id){
    var id = parseInt(id);
    return All_Clothing.find(function(clothes){
      return clothes.id == id;
    });
    // $http
    //   .get('' + id)
    //   .then(function(response){
    //     return response.data;
    //   });
  }

  // ClothingService.add = function(id){
  //
  // }
  return ClothingService;
})


All_Clothing = [
  {
    "id": 35788,
    "name": "Henley T",
    "img": "http://www.shopderbyjeans.com/image/cache/data/products/prd-img-dir/TS-CUMBRIA-LILAC-79-C-870x1110.jpg",
    "price": "$49.99"
  },
  {
    "id": 4576,
    "name": "Sun Dress",
    "img": "http://aelida.com/wp-content/uploads/2012/09/Floral-Sun-Dresses.jpg",
    "price": "$24.99"
  },
  {
    "id": 55232,
    "name": "Crew T",
    "img": "http://images.asos-media.com/inv/media/3/7/0/5/2135073/charcoalmarl/image1xxl.jpg",
    "price": "$19.99"
  },
  {
    "id": 3532,
    "name": "Henley T",
    "img": "http://www.shopderbyjeans.com/image/cache/data/products/prd-img-dir/TS-CUMBRIA-LILAC-79-C-870x1110.jpg",
    "price": "$49.99"
  },
  {
    "id": 4532,
    "name": "Sun Dress",
    "img": "http://aelida.com/wp-content/uploads/2012/09/Floral-Sun-Dresses.jpg",
    "price": "$24.99"
  },
  {
    "id": 557,
    "name": "Crew T",
    "img": "http://images.asos-media.com/inv/media/3/7/0/5/2135073/charcoalmarl/image1xxl.jpg",
    "price": "$19.99"
  },
  {
    "id": 3565,
    "name": "Henley T",
    "img": "http://www.shopderbyjeans.com/image/cache/data/products/prd-img-dir/TS-CUMBRIA-LILAC-79-C-870x1110.jpg",
    "price": "$49.99"
  },
  {
    "id": 454,
    "name": "Sun Dress",
    "img": "http://aelida.com/wp-content/uploads/2012/09/Floral-Sun-Dresses.jpg",
    "price": "$24.99"
  },
  {
    "id": 554,
    "name": "Crew T",
    "img": "http://images.asos-media.com/inv/media/3/7/0/5/2135073/charcoalmarl/image1xxl.jpg",
    "price": "$19.99"
  },
  {
    "id": 354,
    "name": "Henley T",
    "img": "http://www.shopderbyjeans.com/image/cache/data/products/prd-img-dir/TS-CUMBRIA-LILAC-79-C-870x1110.jpg",
    "price": "$49.99"
  },
  {
    "id": 455,
    "name": "Sun Dress",
    "img": "http://aelida.com/wp-content/uploads/2012/09/Floral-Sun-Dresses.jpg",
    "price": "$24.99"
  },
  {
    "id": 123,
    "name": "Crew T",
    "img": "http://images.asos-media.com/inv/media/3/7/0/5/2135073/charcoalmarl/image1xxl.jpg",
    "price": "$19.99"
  }
];
