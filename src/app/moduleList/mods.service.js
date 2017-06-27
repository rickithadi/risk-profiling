angular.module('inspinia').service('modService', function () {
    //to create unique contact id
    var uid = 1;
//var contacts=dataService.fac;

    //contacts array to hold list of all contacts
    var modules = [{
  //   id: 0,
      "mod_id": "594a289f8c456c81de53bdaa",
      "mod_type": "invest",
      "initialAmt": 12872,
      "term": 28,
      "targetAmt": 8.745201481937362e+21
    },
    {
      "mod_id": "594a289ff612da9d78eccf3d",
      "mod_type": "debt",
      "initialAmt": 46740,
      "term": 19,
      "targetAmt": 3.7482125446658654e+21
    },  {
        "mod_id": "594a289f2e83a6bef7d99e9c",
        "mod_type": "debt",
        "initialAmt": 43703,
        "term": 17,
        "targetAmt": 2.935955977766451e+21
      },
      {
        "mod_id": "594a289f5d85d129238511ce",
        "mod_type": "debt",
        "initialAmt": 13769,
        "term": 8,
        "targetAmt": 3.057235711243136e+21
      }
  ];
console.log("modules: ",modules);
    //save method create a new contact if not already exists
    //else update the existing object
    this.save = function (mod) {
      console.log("added");
        if (mod.id == null) {
            //if this is new contact, add it in contacts array
            mod.id = uid++;
            modules.push(mod);
        } else {
            //for existing contact, find this contact using id
            //and update it.
            for (i in modules) {
                if (modules[i].id == mod.id) {
                    modules[i] = mod;
                }
            }
        }

    }

    //simply search contacts list for given id
    //and returns the contact object if found
    this.get = function (mod_id) {
              for (i in modules) {
            if (modules[i].mod_id == mod_id) {
              console.log("view complete");
              console.log(modules[i]);
                    var cash = modules[i].initialAmt;
                     var rate=5;
                     var term=modules[i].term;
                   updateDataG=[];
                      for (var i = 0; i < term; i++) {
                      //console.log("cash1:",cash);
                      cash = cash * rate / 100 + cash;
                      console.log("cash:", cash);
                      updateDataG.push(cash);

                    }
                    console.log("array to update:", updateDataG);
return updateDataG;
                  //  $scope.infoChart_options.series[0].data = updateDataG;
                  }
                return modules[i];

            }
        }



    //iterate through contacts list and delete
    //contact if found
    this.delete = function (mod_id) {
        for (i in modules) {
            if (modules[i].mod_id == mod_id) {
                modules.splice(i, 1);
            }
        }
    }

    //simply returns the contacts list
    this.list = function () {
        return modules;
    }
});
