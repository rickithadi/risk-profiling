
  angular.module('inspinia').service('debtService', function () {
var uid=0;


    var debt = [

      {
        "id": "595b216f97a5e5907c86152b",
        "rate": 29,
        "amount": 481397,
        "endDate": "2017",
        "startDate": "2039"
      },
      {
        "id": "595b216f97a5e5907c12345",
        "rate": 29,
        "amount": 481397,
        "endDate": "2017",
        "startDate": "2039"
      },
      {
        "id": "595b216f97a5e369",
        "rate": 29,
        "amount": 481397,
        "endDate": "2017",
        "startDate": "2039"
      }
    ];



    console.log("debt: ", debt);


    this.save = function (deb) {
            if (deb.id == null) {
                //if this is new deb, add it in debt array
                deb.id =  guid();
                debt.push(deb);
                  console.log("new deb: ", deb);
            } else {
                //for existing deb, find this deb using id
                //and update it.
                for (i in debt) {
                    if (debt[i].id == deb.id) {
                        debt[i] = deb;
                        console.log("existing deb: ", deb);
                    }
                }
            }

              console.log("debt: ", debt);
        }

        //simply search debt list for given id
        //and returns the deb object if found
        this.get = function (id) {
            for (i in debt) {
                if (debt[i].id == id) {
                    return debt[i];
                }
            }

        }

        //iterate through debt list and delete
        //deb if found
        this.delete = function (id) {
            for (i in debt) {
                if (debt[i].id == id) {
                    debt.splice(i, 1);
                }
            }
        }

        //simply returns the debt list
        this.list = function () {
            return debt;
        }


        this.getValues = function(id) {
          console.log("oifjqf",data);
}

        function guid() {
    function _p8(s) {
        var p = (Math.random().toString(16)+"000000000").substr(2,8);
        return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;
    }
    return _p8() + _p8(true) + _p8(true) + _p8();
}
    });
