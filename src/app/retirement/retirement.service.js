angular.module('inspinia').service('retireService', function() {
  var age = 20; //private data
  var name ="jo";
  var income = 6000;
  var percentage = 70;

  function setName(v_name) {
    name = v_name;
    console.log(name);
  }
  function getName() {
    console.log('name', name);
    return name;
  }
  // function setIncome(v_income) {
  //   income = v_income;
  //   console.log(income);
  // }
  // function getIncome() {
  //   console.log('income', income);
  //   return income;
  // }
  function setPercentage(v_percentage) {
    percentage = v_percentage;
    console.log(percentage);
  }
  function getPercentage() {
    console.log('percentage', percentage);
    return percentage;

  }

  return {
    getName: getName,
    setName: setName,
    // getIncome: getIncome,
    // setIncome: setIncome,
    getPercentage: getPercentage,
    setPercentage: setPercentage

  }
})
