'use strict';

/**
 * @ngdoc service
 * @name itsFrontendApp.workItemService
 * @description
 * # workItemService
 * Service in the itsFrontendApp.
 */
 angular.module('itsFrontendApp')
 .factory('workItemService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var workItems = [{
    	number: 0,
    	description: 'Fix javascript autocomplete',
    	status: 'ON_BACKLOG',
    	users: [{
    		'number': 101,
    		'firstname': 'Betty',
    		'lastname': 'Miller',
    		'username': 'bmiller15',
    		'team-number': 1
    	}]
    }, {
    	number: 1,
    	description: 'Install sublime package manager',
    	status: 'DONE',
    	users: [{
    		'number': 101,
    		'firstname': 'Betty',
    		'lastname': 'Miller',
    		'username': 'bmiller15',
    		'team-number': 1
    	}]
    }, {
    	number: 2,
    	description: 'Fix backend server',
    	status: 'IN_PROGRESS',
    	users: [{
    		'number': 103,
    		'firstname': 'Emma',
    		'lastname': 'Aga',
    		'username': 'Bar',
    		'team-number': 1
    	},{
    		'number': 102,
    		'firstname': 'Gustav',
    		'lastname': 'Evert',
    		'username': 'eds',
    		'team-number': 1
    	},{
    		'number': 109,
    		'firstname': 'Per',
    		'lastname': 'Os',
    		'username': 'Wan',
    		'team-number': 1
    	}]
    }, {
    	number: 3,
    	description: 'Drink tea',
    	status: 'IN_PROGRESS',
    	users: [{
    		'number': 104,
    		'firstname': 'Tom',
    		'lastname': 'Fa',
    		'username': 'tomasd123',
    		'team-number': 1
    	}]
    }, {
    	number: 4,
    	description: 'Fight a dragon',
    	status: 'ON_BACKLOG',
    	users: [{
    		'number': 105,
    		'firstname': 'Klark',
    		'lastname': 'Do',
    		'username': 'klark123',
    		'team-number': 1
    	},{
    		'number': 106,
    		'firstname': 'Eva',
    		'lastname': 'Green',
    		'username': 'ev2',
    		'team-number': 1
    	}]
    }];
    var users = [{
    	'number': 105,
    	'firstname': 'Klark',
    	'lastname': 'Do',
    	'username': 'klark123',
    	'team-number': 1
    },{
    	'number': 106,
    	'firstname': 'Eva',
    	'lastname': 'Green',
    	'username': 'ev2',
    	'team-number': 1
    },{
    	'number': 104,
    	'firstname': 'Tom',
    	'lastname': 'Fa',
    	'username': 'tomasd123',
    	'team-number': 1
    },{
    	'number': 103,
    	'firstname': 'Emma',
    	'lastname': 'Aga',
    	'username': 'Bar',
    	'team-number': 1
    },{
    	'number': 102,
    	'firstname': 'Gustav',
    	'lastname': 'Evert',
    	'username': 'eds',
    	'team-number': 1
    },{
    	'number': 109,
    	'firstname': 'Per',
    	'lastname': 'Os',
    	'username': 'Wan',
    	'team-number': 1
    },{
    	'number': 101,
    	'firstname': 'Betty',
    	'lastname': 'Miller',
    	'username': 'bmiller15',
    	'team-number': 1
    }];

    return {
    	getAllWorkItems: function() {
    		return workItems;
    	},
    	removeWorkItem: function(workItem) {
    		workItems.splice(workItems.indexOf(workItem), 1);
    	},
    	getWorkItemsByStatus: function(status) {
    		var workItemsByStatus = [];

    		for (var i = 0; i < workItems.length; i++) {
    			if (workItems[i].status === status) {
    				workItemsByStatus.push(workItems[i]);
    			}
    		}
    		return workItemsByStatus;
    	},
    	getworkItemById: function(workItemId) {
    		for (var i = 0; i < workItems.length; i++) {
    			if (workItems[i].id === parseInt(workItemId)) {
    				return workItemId[i];
    			}
    		}
    		return null;
    	},
    	getAllUsers: function() {
    		return users;
    	},
        getAllUsersToSelect: function(toRemove){
            var usersToselect = users;
            for( var i=usersToselect.length - 1; i>=0; i--){

                for( var j=0; j<toRemove.length; j++){
                    if(usersToselect[i]){
                        console.log( j + ' ' + usersToselect[i].firstname);
                    }

                //console.log(toRemove[j].firstname);
                    if(usersToselect[i] && (usersToselect[i].firstname === toRemove[j].firstname)){
                      console.log( i + ' ' + j + ' ' + usersToselect[i].firstname);
                      usersToselect.splice(i, 1);
                    }
                }
            }
            console.log('my array in workItem is ' + usersToselect.length);
          return usersToselect;
      }
  };
});
