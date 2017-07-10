
  angular.module('inspinia').service('expensesService', function () {
var uid=0;


    var expenses = [

     {
          "id": "595b216fd1a0274bede58d4a",
        "annual": 2000,
        "endDate": "2017",
        "startDate": "2039"
      },

      {   "id": "595b216fd1a0123456",
      "annual": 300,
      "endDate": "2017",
      "startDate": "2030"
     }
    ];



    console.log("expenses: ", expenses);


    this.save = function (expense) {
            if (expense.id == null) {
                //if this is new expense, add it in expenses array
                expense.id =  guid();
                console.log("expenses: ", expenses);
                expenses.push(expense);
                  console.log("expense: ", expense);
            } else {
                //for existing expense, find this expense using id
                //and update it.
                for (i in expenses) {
                    if (expenses[i].id == expense.id) {
                        expenses[i] = expense;
                        console.log("expense: ", expense);
                    }
                }
            }

              console.log("expenses: ", expenses);
        }

        //simply search expenses list for given id
        //and returns the expense object if found
        this.get = function (id) {
            for (i in expenses) {
                if (expenses[i].id == id) {
                    return expenses[i];
                }
            }

        }

        //iterate through expenses list and delete
        //expense if found
        this.delete = function (id) {
            for (i in expenses) {
                if (expenses[i].id == id) {
                    expenses.splice(i, 1);
                }
            }
        }

        //simply returns the expenses list
        this.list = function () {
            return expenses;
        }

        function guid() {
    function _p8(s) {
        var p = (Math.random().toString(16)+"000000000").substr(2,8);
        return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;
    }
    return _p8() + _p8(true) + _p8(true) + _p8();
}
    });
