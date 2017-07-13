angular.module('inspinia').service('retireService', function() {
  var age; //private data
  var name = "";
  var income;
  var retIncome;
  var retAge;
  var retDuration;
  var percentage = 70;

  function setName(v_name) {
    name = v_name;
    console.log(name);
  }
  function getName() {
    console.log('name', name);
    return name;
  }
  function setIncome(v_income) {
    income = v_income;
    console.log(income);
  }
  function getIncome() {
    console.log('income', income);
    return income;
  }
  function setRetIncome(v_retIncome) {
    retIncome = v_retIncome;
    console.log(retIncome);

  }
  function getRetIncome() {
    console.log('retire income', retIncome);
    return retIncome;
  }
  function setPercentage(v_percentage) {
    percentage = v_percentage;
    console.log(percentage);
  }
  function getPercentage() {
    console.log('percentage', percentage);
    return percentage;

  }

  function setDuration(v_duration) {
    duration = v_duration;
    console.log(duration);
  }
  function getDuration() {
    console.log('duration', duration);
    return duration;

  }

  function setAge(v_age) {
    age = v_age;
    console.log(age);
  }
  function getAge() {
    console.log('age', age);
    return age;
  }

  function setRetAge(v_retAge) {
    retAge = v_retAge;
    console.log(retAge);
  }
  function getRetAge() {
    console.log('retAge', retAge);
    return retAge;
  }

  return {
    getName: getName,
    setName: setName,
    getIncome: getIncome,
    setIncome: setIncome,
    getPercentage: getPercentage,
    setPercentage: setPercentage,
    getRetIncome: getRetIncome,
    setRetIncome: setRetIncome,
    getDuration: getDuration,
    setDuration: setDuration,
    getAge: getAge,
    setAge: setAge,
    getRetAge: getRetAge,
    setRetAge: setRetAge

  }
});
