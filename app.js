function HackerStuff($scope, $http) {
  $http.get('./data.json').success(function(data) {
    $scope.hack = data.hack;
    console.log(data.hack);
  });
  
  $scope.offset = function(index, total, span){
	if((total*span - ((index+1)*span)) > 12){
	  return; //not last line
	}
	
	//only offset the first item of the last line
	if((index)%(12/span)){
		return;
	}
	
	//find empty spans
	var empty = total%(12/span);
	if(empty == 0){
	  return;
	}
	
	return 'offset'+((12-(empty*span))/2);
  };
}