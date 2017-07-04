angular.module('inspinia')
// .service('dataService', function () {
//     //to create unique contact id
//     var uid = 1;
// //var contacts=dataService.fac;
//
//     //contacts array to hold list of all contacts
//     var users = [{
//   "id":1,
//   "debt":100,
//   "Dtime":20,
//   "income":500,
//   "Irate":4,
//   "Drate":6];
// });
// .service('addService', function (dataService) {
//     //save method create a new contact if not already exists
//     //else update the existing object
//     this.save = function (user) {
//       console.log("added");
//         if (user.id == null) {
//             //if this is new contact, add it in contacts array
//             user.id = uid++;
//             users.push(user);
//         } else {
//             //for existing contact, find this contact using id
//             //and update it.
//             for (var i=0;  i < users.length; i++) {
//                 if (users[i].id == user.id) {
//                     users[i] = user;
//                 }
//             }
//         }
//
//     }});
//
//
//
//
//
// .service('deleteService', function (dataService) {
//     //iterate through contacts list and delete
//     //contact if found
//     this.delete = function (user_id) {
//         for (i in users) {
//             if (users[i].user_id == user_id) {
//                 users.splice(i, 1);
//             }
//         }
//     }});
//
// .service('listService', function (dataService) {
//     //simply returns the contacts list
//     this.list = function () {
//         return users;
//     }
// });
.service('ContactService', function () {
    //to create unique contact id
    var uid = 1;

    //contacts array to hold list of all contacts
    var contacts = [{
        id: 0,
        'name': 'Viral',
            'email': 'hello@gmail.com',
            'phone': '123-2343-44'
    }];

    //save method create a new contact if not already exists
    //else update the existing object
    this.save = function (contact) {
        if (contact.id == null) {
            //if this is new contact, add it in contacts array
            contact.id = uid++;
            contacts.push(contact);
        } else {
            //for existing contact, find this contact using id
            //and update it.
            for (i in contacts) {
                if (contacts[i].id == contact.id) {
                    contacts[i] = contact;
                }
            }
        }

    }

    //simply search contacts list for given id
    //and returns the contact object if found
    this.get = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                return contacts[i];
            }
        }

    }

    //iterate through contacts list and delete
    //contact if found
    this.delete = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                contacts.splice(i, 1);
            }
        }
    }

    //simply returns the contacts list
    this.list = function () {
        return contacts;
    }
});
