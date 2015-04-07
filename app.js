function HackerStuff($scope, $http) {
  $http.get('./data.json').success(function(data) {
    $scope.hack = data.hack;
  });

  $http.get('http://api.lehighvalleytech.org/lvhack15/').success(function(data){
    //fun math stuff, to make a stacked progress bar
	  var progress = [];

	  if(data.ticket.progress > 100){
		  data.ticket.progress = 100;
	  }

	  if(data.money.progress > 100){
		  data.money.progress = 100;
	  }

	  if(data.ticket.progress > data.money.progress){
		  progress.push({
			  type: 'money',
			  value: data.money.progress,
			  class: 'progress-bar-warning'
		  });

		  progress.push({
			  type: 'ticket',
			  value: data.ticket.progress - data.money.progress,
			  class: 'progress-bar-info'
		  });
	  } else {
		  progress.push({
			  type: 'ticket',
			  value: data.ticket.progress,
			  class: 'progress-bar-info'
		  });

		  progress.push({
			  type: 'money',
			  value: data.money.progress - data.ticket.progress,
			  class: 'progress-bar-warning'
		  });
	  }

	  $scope.progress = progress;
	  console.log(progress);
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