function HackerStuff($scope, $http) {
  $http.get('/data.json').success(function(data) {
    $scope.hack = data.hack;
    console.log(data.hack);
  });
}