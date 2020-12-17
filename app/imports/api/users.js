import { data } from 'jquery';
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base';


Meteor.methods({
    'user.register' (userData) {
        Accounts.createUser({
            username: userData.username,
            password: userData.password
        });
    }
});
