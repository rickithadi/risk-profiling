angular.module('inspinia').controller('retireController', function ($scope) {



  $scope.slider_init_options = {
  				min : 0,
  				max : 1000000,
  				from : 0,
  				step: 5000,
  				type : 'single',
  				prefix : "$ ",
  				maxPostfix : "+",
  				prettify : false,
  				grid : true,
  				hasGrid : true,
  				onFinish : onfinish
  			};


  function onfinish(data) {
  	if(data.input.attr('id') == 'slider_init')
  	{
  		console.log('slider_init:' + data.from);

  	}

  // RUN YOUR CODE HERE
  }





})
