function HackerStuff($scope, $http) {
  $http.get('./data.json').success(function(data) {
    $scope.hack = data.hack;
  });

  $http.get('http://api.lehighvalleytech.org/lvhack15/').success(function(data){
    $scope.progress = data;
  });
  
  $scope.offset = function(index, total, span){
    var lines = Math.ceil(total*span/12);
    var line  = Math.ceil(((index+1)*span)/12);
	if(line < lines){
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
	
	return 'col-md-offset-'+Math.round((12-(empty*span))/2);
  };
}