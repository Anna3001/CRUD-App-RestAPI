import * as api from "../Model/MovieAPI.js"

import { app } from "./controller.js";

app.controller("getController", ($scope, dataService, reloadService) => {

  $scope.IDdata = {};

  $scope.getById = () => {
    api.getMovieById($scope.IDdata.id).then((movies) => {
      dataService.setMovies(movies);
      reloadService.reloadController("tableController");
    });
  };

  $scope.TDdata = {};

  $scope.getByTD = () => {
    api.getMoviesByTD($scope.TDdata.title, $scope.TDdata.director).then((movies) => {
      dataService.setMovies(movies);
      reloadService.reloadController("tableController");
    });
  };

});
