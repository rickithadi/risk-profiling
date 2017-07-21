angular.module('inspinia').service('retireService', function() {
  var vm = this
  vm.age = 20; //private data
  vm.name = "";
  vm.income = 5000;
  vm.retIncome = 0;
  vm.retAge = 50;
  vm.duration = 15;
  vm.percentage = 70;
  vm.goal = 0;
  vm.initialAmt = 10000;
  vm.monthlyAmt = 100;

  function setName(v_name) {
    vm.name = v_name;
    console.log(vm.name);
  }
  function getName() {
    console.log('name', vm.name);
    return vm.name;
  }
  function setIncome(v_income) {
    vm.income = v_income;
    console.log(vm.income);
  }
  function getIncome() {
    console.log('income', vm.income);
    return vm.income;
  }
  function setGoal(v_goal) {
    vm.goal = v_goal;
    console.log(vm.goal);
  }
  function getGoal() {
    console.log('goal', vm.goal);
    return vm.goal;
  }
  function setRetIncome(v_retIncome) {
    vm.retIncome = v_retIncome;
    console.log(vm.retIncome);

  }
  function getRetIncome() {
    console.log('retire income', vm.retIncome);
    return vm.retIncome;
  }
  function setPercentage(v_percentage) {
    vm.percentage = v_percentage;
    console.log(vm.percentage);
  }
  function getPercentage() {
    console.log('percentage', vm.percentage);
    return vm.percentage;

  }

  function setDuration(v_duration) {
    vm.duration = v_duration;
    console.log(vm.duration);
  }
  function getDuration() {
    console.log('duration', vm.duration);
    return vm.duration;

  }

  function setAge(v_age) {
    vm.age = v_age;
    console.log(vm.age);
  }
  function getAge() {
    console.log('age', vm.age);
    return vm.age;
  }

  function setRetAge(v_retAge) {
    vm.retAge = v_retAge;
    console.log(vm.retAge);
  }
  function getRetAge() {
    console.log('retAge', vm.retAge);
    return vm.retAge;
  }

  function setinitialAmt(v_initialAmt) {
    vm.initialAmt = v_initialAmt;
    console.log(vm.initialAmt);
  }
  function getinitialAmt() {
    console.log('initial amount:', vm.initialAmt);
    return vm.initialAmt;
  }
  function setmonthlyAmt(v_monthlyAmt) {
    vm.monthlyAmt = v_monthlyAmt;
    console.log(vm.monthlyAmt);
  }
  function getmonthlyAmt() {
    console.log('monthly deposit', vm.monthlyAmt);
    return vm.monthlyAmt;
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
    setRetAge: setRetAge,
    getGoal: getGoal,
    setGoal: setGoal,
    getinitialAmt: getinitialAmt,
    setinitialAmt: setinitialAmt,
    getmonthlyAmt: getmonthlyAmt,
    setmonthlyAmt: setmonthlyAmt

  }
});
