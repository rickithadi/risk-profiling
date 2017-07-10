angular.module('inspinia').service('investmentService', function () {
    //to create unique contact id
    var uid = 1;
//var contacts=dataService.fac;

    //contacts array to hold list of all contacts
    var investments = [{
  //   id: 0,
      "investment_id": "594a289f8c456c81de53bdaa",
        "rate":4,
      "initialAmt": 12000,
      "term": 28,
      "targetAmt": 50000
    },
    {
      "investment_id": "594a289ff612da9d78eccf3d",
            "rate":4,
      "initialAmt": 46740,
      "term": 19,
      "targetAmt": 300000
    },  {
        "investment_id": "594a289f2e83a6bef7d99e9c",
      "rate":4,
        "initialAmt": 3000,
        "term": 17,
        "targetAmt": 20000
      },
      {
        "investment_id": "594a289f5d85d129238511ce",
            "rate":4,
        "initialAmt": 13769,
        "term": 8,
        "targetAmt": 20000
      }
  ];
console.log("investments: ",investments);
    //save method create a new contact if not already exists
    //else update the existing object
    this.save = function (investment) {
      console.log("added");
        if (investment.id == null) {
            //if this is new contact, add it in contacts array
            investment.id =  guid();
            investments.push(investment);
            console.log("new investment,",investment);
        } else {
            //for existing contact, find this contact using id
            //and update it.
            for (var i=0;  i < investments.length; i++) {
                if (investments[i].id == investment.id) {
                    investments[i] = investment;
                }
            }
        }

    }

    //simply search contacts list for given id
    //and returns the contact object if found
    this.get = function (investment_id) {
      console.log("inside get ",investments);
                      console.log("investments.length", investments.length);
              for (var i=0;  i < investments.length; i++) {
                console.log(i);
                console.log("i ",investments[i].investment_id);
                console.log(" ",investment_id);
            if (investments[i].investment_id == investment_id) {
              console.log("view complete");
              console.log(investments[i]);
                    var cash = investments[i].initialAmt;
                     var rate= investments[i].rate;
                     var term=investments[i].term;
                     console.log("skip");
                   updateDataG=[];
                      for (var j = 0; j < term; j++) {
                      //console.log("cash1:",cash);
                      cash = cash * rate / 100 + cash;
                      console.log("cash:", cash);
                      updateDataG.push(cash);

                    }
                    console.log("array to update:", updateDataG);
return updateDataG;
                  //  $scope.infoChart_options.series[0].data = updateDataG;
                  }

            }
              return null;
        }



    //iterate through contacts list and delete
    //contact if found
    this.delete = function (investment_id) {
        for (i in investments) {
            if (investments[i].investment_id == investment_id) {
                investments.splice(i, 1);
            }
        }
    }

    //simply returns the contacts list
    this.list = function () {
        return investments;
    }

    function guid() {
function _p8(s) {
    var p = (Math.random().toString(16)+"000000000").substr(2,8);
    return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;
}
return _p8() + _p8(true) + _p8(true) + _p8();
}
});
