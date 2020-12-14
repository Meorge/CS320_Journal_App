import { Mongo } from 'meteor/mongo';

export const JournalEntryCollection = new Mongo.Collection('entries');

/*
Fields/things we need
- ID (built in)
- Owner
- People with edit permissions
- People with view permissions
- Creation date
- Text
*/

export const createDefaultEntry = () => {
    let entry = {
        ownerId: '',
        editPermIds: [],
        viewPermIds: [],
        creationDate: new Date(),
        text: 'This is a test journal entry.'
    };
    return entry;
};


if (Meteor.isServer) {
    Meteor.publish('entries.getAllForUser', function() {
        console.log("get all entries for logged in user");
        if (!Meteor.user()) {
            console.log("No user is logged in!");
            throw Error("User is not logged in");
        }

        let allEntries = JournalEntryCollection.find({ownerId: Meteor.userId()});
        return allEntries;
    });
}


Meteor.methods({
    'entries.createNew' () {
        console.log("create new entry!");
        if (!Meteor.user()) {
            console.log("No user is logged in!");
            throw Error("User is not logged in");
        }
        let newEntry = createDefaultEntry();
        newEntry.ownerId = Meteor.userId();

        let id = JournalEntryCollection.insert(newEntry);
        console.log(`id is ${id}`);
        return id;
    },

    'entries.isOwner' (entryId) {
        console.log('see if user can access this entry');
        if (!Meteor.user()) {
            console.log("No user is logged in!");
            return false;
        }
        
        let entry = JournalEntryCollection.findOne({_id: entryId});

        if (!entry) {
            console.log(`entry with ID ${entryId} wasn't found`);
            return false;
        }

        console.log(`Entry found: ${entry._id}, ${entry.text}`);

        // TODO: Ensure that the logged in user is authorized to view
        // the text

        if (entry.ownerId != Meteor.userId()) {
            console.log(`This entry belongs to ${entry.ownerId} but the logged in user is ${Meteor.userId()}`);
            return false;
        }

        return true;
    },


    'entries.get' (entryId) {
        console.log('get text for entry');
        if (!Meteor.user()) {
            console.log("No user is logged in!");
            throw Error("User is not logged in");
        }
        
        let entry = JournalEntryCollection.findOne({_id: entryId});

        if (!entry) {
            console.log(`entry with ID ${entryId} wasn't found`);
            throw Error("Unable to find entry with given ID");
        }

        console.log(`Entry found: ${entry._id}, ${entry.text}`);

        // TODO: Ensure that the logged in user is authorized to view
        // the text

        if (entry.ownerId != Meteor.userId()) {
            console.log(`This entry belongs to ${entry.ownerId} but the logged in user is ${Meteor.userId()}`);
            throw Error("Logged in user does not have permission to view this entry");
        }

        return entry;
    },

    'entries.setText' (entryId, newText) {
        console.log('set text for entry');
        if (!Meteor.user()) {
            console.log("No user is logged in!");
            throw Error("User is not logged in");
        }
        
        let entry = JournalEntryCollection.findOne({_id: entryId});

        if (!entry) {
            console.log(`entry with ID ${entryId} wasn't found`);
            throw Error("Unable to find entry with given ID");
        }

        console.log(`Entry found: ${entry._id}, ${entry.text}`);
        
        // TODO: Ensure that the logged in user is authorized to view
        // the text

        // Set entry contents
        return JournalEntryCollection.update({_id: entryId}, {
            '$set': { 'text': newText }
        });

    }
})