angular.module('inspinia').service('modService', function () {
    //to create unique contact id
    var uid = 1;
//var contacts=dataService.fac;
console.log(modules);
    //contacts array to hold list of all contacts
    var modules = [{
        id: 0,
        'name': 'Viral',
            'email': 'hello@gmail.com',
            'phone': '123-2343-44'
    },








  ];
console.log(modules);
    //save method create a new contact if not already exists
    //else update the existing object
    this.save = function (mod) {
      console.log("workiung");
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
    this.get = function (id) {
        for (i in modules) {
            if (modules[i].id == id) {
                return modules[i];
            }
        }

    }

    //iterate through contacts list and delete
    //contact if found
    this.delete = function (id) {
        for (i in modules) {
            if (modules[i].id == id) {
                modules.splice(i, 1);
            }
        }
    }

    //simply returns the contacts list
    this.list = function () {
        return modules;
    }
});
