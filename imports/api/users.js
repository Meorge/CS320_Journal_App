import { data } from 'jquery';
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base';

console.log("in users.js");
Meteor.methods({
    'user.register' (userData) {
        Accounts.createUser({
            username: userData.username,
            password: userData.password
        });
    }
});
