
  angular.module('inspinia').service('debtService', function () {
var uid=0;


    var debt = [

      {
        "id": "595b216f97a5e5907c86152b",
        "rate": 29,
        "amount": 481397,
        "endDate": "Thu Aug 10 1978 03:39:48 GMT+0800 (Malay Peninsula Standard Time)",
        "startDate": "Fri Dec 15 2006 09:27:41 GMT+0800 (Malay Peninsula Standard Time)"
      },
      {
        "id": "595b216f97a5e5907c12345",
        "rate": 29,
        "amount": 481397,
        "endDate": "Thu Aug 10 1978 03:39:48 GMT+0800 (Malay Peninsula Standard Time)",
        "startDate": "Fri Dec 15 2006 09:27:41 GMT+0800 (Malay Peninsula Standard Time)"
      }
    ];



    console.log("debt: ", debt);


    this.save = function (deb) {
            if (deb.id == null) {
                //if this is new deb, add it in debt array
                deb.id = uid++;
                debt.push(deb);
                  console.log("deb: ", deb);
            } else {
                //for existing deb, find this deb using id
                //and update it.
                for (i in debt) {
                    if (debt[i].id == deb.id) {
                        debt[i] = deb;
                        console.log("deb: ", deb);
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
    });
