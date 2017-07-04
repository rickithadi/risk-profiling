angular.module('inspinia').service('userService', function() {
  //to create unique contact id
  var uid = 1;
  //var contacts=dataService.fac;

  //contacts array to hold list of all contacts
  var users = [
    {

        user_id: 0,

        "debt": {
          "id": "595b216f97a5e5907c86152b",
        "rate": 29,
        "amount": 481397,
        "endDate": "Thu Aug 10 1978 03:39:48 GMT+0800 (Malay Peninsula Standard Time)",
        "startDate": "Fri Dec 15 2006 09:27:41 GMT+0800 (Malay Peninsula Standard Time)"
    },
      "income" : {
        "id": "595b216fd1a0274bede58d4a",
        "annual": 287585
      },
      "expenses" : {
        "id": "595b216fe19d17aa8ffc17c9",
        "amount": 261503,
        "recurring": true
      },
      "investment" : {
        "id": "595b216fec37e386a43c4c35",
        "rate": 16,
        "initialAmount": 208923,
        "targetAmount": 180680,
        "endDate": "Fri Dec 16 2011 01:48:17 GMT+0800 (Malay Peninsula Standard Time)",
        "startDate": "Thu Mar 10 1994 08:46:38 GMT+0800 (Malay Peninsula Standard Time)"
      }

    }, {

      user_id: 1,

      "debt": {
        "id": "595b216f97a5e5907c86152b",
        "rate": 29,
        "amount": 481397,
        "endDate": "Thu Aug 10 1978 03:39:48 GMT+0800 (Malay Peninsula Standard Time)",
        "startDate": "Fri Dec 15 2006 09:27:41 GMT+0800 (Malay Peninsula Standard Time)"
      },
      "income": {
        "id": "595b216fd1a0274bede58d4a",
        "annual": 287585
      },
      "expenses": {
        "id": "595b216fe19d17aa8ffc17c9",
        "amount": 261503,
        "recurring": true
      },
      "investment": {
        "id": "595b216fec37e386a43c4c35",
        "rate": 16,
        "initialAmount": 208923,
        "targetAmount": 180680,
        "endDate": "Fri Dec 16 2011 01:48:17 GMT+0800 (Malay Peninsula Standard Time)",
        "startDate": "Thu Mar 10 1994 08:46:38 GMT+0800 (Malay Peninsula Standard Time)"
      }}

      , {

        user_id: 3,

        "debt": {
          "id": "595b216f97a5e5907c86152b",
          "rate": 29,
          "amount": 481397,
          "endDate": "Thu Aug 10 1978 03:39:48 GMT+0800 (Malay Peninsula Standard Time)",
          "startDate": "Fri Dec 15 2006 09:27:41 GMT+0800 (Malay Peninsula Standard Time)"
        },
        "income": {
          "id": "595b216fd1a0274bede58d4a",
          "annual": 287585
        },
        "expenses": {
          "id": "595b216fe19d17aa8ffc17c9",
          "amount": 261503,
          "recurring": true
        },
        "investment": {
          "id": "595b216fec37e386a43c4c35",
          "rate": 16,
          "initialAmount": 208923,
          "targetAmount": 180680,
          "endDate": "Fri Dec 16 2011 01:48:17 GMT+0800 (Malay Peninsula Standard Time)",
          "startDate": "Thu Mar 10 1994 08:46:38 GMT+0800 (Malay Peninsula Standard Time)"
        }}

        , {

          user_id: 4,

          "debt": {
            "id": "595b216f97a5e5907c86152b",
            "rate": 29,
            "amount": 481397,
            "endDate": "Thu Aug 10 1978 03:39:48 GMT+0800 (Malay Peninsula Standard Time)",
            "startDate": "Fri Dec 15 2006 09:27:41 GMT+0800 (Malay Peninsula Standard Time)"
          },
          "income": {
            "id": "595b216fd1a0274bede58d4a",
            "annual": 287585
          },
          "expenses": {
            "id": "595b216fe19d17aa8ffc17c9",
            "amount": 261503,
            "recurring": true
          },
          "investment": {
            "id": "595b216fec37e386a43c4c35",
            "rate": 16,
            "initialAmount": 208923,
            "targetAmount": 180680,
            "endDate": "Fri Dec 16 2011 01:48:17 GMT+0800 (Malay Peninsula Standard Time)",
            "startDate": "Thu Mar 10 1994 08:46:38 GMT+0800 (Malay Peninsula Standard Time)"
          }}


    
  ];

  console.log("users: ", users);
  //save method create a new contact if not already exists
  //else update the existing object
  this.save = function(user) {
    console.log("added", user);
    if (user.user_id == null) {
      console.log("its a new contact");
      //if this is new contact, add it in contacts array
      user.user_id = uid++;
      users.push(user);
    } else {
      console.log("its an existing contact");
      //for existing contact, find this contact using id
      //and update it.
      for (var i = 0; i < users.length; i++) {
        if (users[i].id == user.user_id) {
          users[i] = user;
        }
      }
    }

  }

  //simply search contacts list for given id
  //and returns the contact object if found
  this.get = function(user_id) {
    for (var j = 0; j < users.length; j++) {
      if (users[j].user_id == user_id) {
        return users[i];
      }
    }

  }

  //iterate through contacts list and delete
  //contact if found
  this.delete = function(user_id) {
    for (var e = 0; e < users.length; e++) {
      if (users[e].user_id == user_id) {
        users.splice(e, 1);
      }
    }
  }

  //simply returns the contacts list
  this.list = function() {
    return users;
  }
});
