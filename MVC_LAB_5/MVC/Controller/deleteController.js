import * as api from "../Model/MovieAPI.js"

import { app } from "./controller.js";

app.controller("deleteController", ($scope) => {

  $scope.IDdata = {};

  $scope.deleteById = () => {
    api.deleteById($scope.IDdata).then(() => {
      console.log("Deleted!");
    });
  };
});