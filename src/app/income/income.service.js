
  angular.module('inspinia').service('incomeService', function () {
var uid=0;


    var income = [

     {
          "id": "595b216fd1a0274bede58d4a",
        "annual": 40000,
        "endDate": "2017",
        "startDate": "2029"
      },

      {   "id": "595b216fd1a0274bede5845b4",
      "annual": 100000,
      "endDate": "2017",
      "startDate": "2039"
     }
    ];



    console.log("income: ", income);


    this.save = function (inc) {
            if (inc.id == null) {
                //if this is new inc, add it in income array
                inc.id =  guid();
                console.log("income: ", income);
                income.push(inc);
                  console.log("inc: ", inc);
            } else {
                //for existing inc, find this inc using id
                //and update it.
                for (i in income) {
                    if (income[i].id == inc.id) {
                        income[i] = inc;
                        console.log("inc: ", inc);
                    }
                }
            }

              console.log("income: ", income);
        }

        //simply search income list for given id
        //and returns the inc object if found
        this.get = function (id) {
            for (i in income) {
                if (income[i].id == id) {
                    return income[i];
                }
            }

        }

        //iterate through income list and delete
        //inc if found
        this.delete = function (id) {
            for (i in income) {
                if (income[i].id == id) {
                    income.splice(i, 1);
                }
            }
        }

        //simply returns the income list
        this.list = function () {
            return income;
        }

        function guid() {
    function _p8(s) {
        var p = (Math.random().toString(16)+"000000000").substr(2,8);
        return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;
    }
    return _p8() + _p8(true) + _p8(true) + _p8();
}
    });
