import * as api from "../Model/MovieAPI.js"

import { app } from "./controller.js";

app.controller("addController", ($scope) => {

  $scope.newMovie = {};
  
  $scope.addMovie = () => {
    api.createMovie($scope.newMovie).then(() => {
      console.log("Added!");
    });
  };

});