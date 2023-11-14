import * as api from "../Model/MovieAPI.js"
export const app = angular.module("App", []);

var start = 0;

app.service("reloadService", function ($rootScope) {
  this.reloadController = function (controllerName) {
    $rootScope.$broadcast("reloadController", {
      controllerName: controllerName,
    });
  };
});

app.service("dataService", function () {
  var sharedData = { movies: [] };

  return { getMovies: function () { return sharedData.movies; },
           setMovies: function (movies) { sharedData.movies = movies; } 
  };
});

app.controller("tableController", ($scope, $rootScope, dataService, reloadService) => {
  start = 0;  
  getMovies(dataService, reloadService);

  $rootScope.$on("reloadController", function (event, args) {
    $scope.movies = dataService.getMovies();
  });
});

app.controller("tableButtonsController",($scope, reloadService, dataService) => {
  
  $scope.next = () => {
    start += 7;
    getMovies(dataService, reloadService);
  };

  $scope.back = () => {
    if (start - 7 >= 0) {
      start = start - 7;
      getMovies(dataService, reloadService)
    }
  };
}
);

export function getMovies(dataService, reloadService) {
  api.getAllMovies(start)
    .then((movies) => {
      dataService.setMovies(movies);
      reloadService.reloadController("tableController");
    })
    .catch((error) => {
      console.error("ERROR:", error);
    });
}

