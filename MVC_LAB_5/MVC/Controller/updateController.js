import * as api from "../Model/MovieAPI.js"

import { app } from "./controller.js";

app.controller("updateController", ($scope) => {

  $scope.updatedMovie = {};
  
  $scope.updateMovie = () => {
    api.updateById($scope.updatedMovie, $scope.updatedMovie.id).then(() => {
      console.log("Updated!");
    });
  };

});  