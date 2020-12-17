import { Mongo } from 'meteor/mongo';

// Creates or finds the database collection for entries
export const JournalEntryCollection = new Mongo.Collection('entries');

/*
Fields/things we need
- ID (built in)
- Owner
- Creation date
- Text
*/


// Blank default entry (aka the data structure declaration)
export const createDefaultEntry = () => {
    let entry = {
        ownerId: '',
        creationDate: new Date(),
        text: ''
    };
    return entry;
};


if (Meteor.isServer) {
    // Create function to get entries for the logged in user
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
    // Creates a new entry and assigns it to the logged in user
    'entries.createNew' () {
        console.log("create new entry!");

        // If no user is logged in, throw an error
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

    // Checks if a given entry belongs to the logged in user
    'entries.isOwner' (entryId) {
        console.log('see if user can access this entry');

        // If no user is logged in, throw an error
        if (!Meteor.user()) {
            console.log("No user is logged in!");
            return false;
        }
        
        // Locate the entry
        let entry = JournalEntryCollection.findOne({_id: entryId});

        // If no entry exists, the logged in user can't access it
        if (!entry) {
            console.log(`entry with ID ${entryId} wasn't found`);
            return false;
        }

        console.log(`Entry found: ${entry._id}, ${entry.text}`);

        // If the entry's owner is not the logged in user, they
        // can't access it
        if (entry.ownerId != Meteor.userId()) {
            console.log(`This entry belongs to ${entry.ownerId} but the logged in user is ${Meteor.userId()}`);
            return false;
        }

        // The entry exists and the logged in user is the owner,
        // so they can access it
        return true;
    },

    // Gets the contents of an entry
    'entries.get' (entryId) {
        console.log('get text for entry');

        // If no user is logged in, throw an error
        if (!Meteor.user()) {
            console.log("No user is logged in!");
            throw Error("User is not logged in");
        }
        
        // Locate the entry
        let entry = JournalEntryCollection.findOne({_id: entryId});

        // If no entry exists, the logged in user can't access it
        if (!entry) {
            console.log(`entry with ID ${entryId} wasn't found`);
            throw Error("Unable to find entry with given ID");
        }

        console.log(`Entry found: ${entry._id}, ${entry.text}`);

        // If the entry's owner is not the logged in user, they
        // can't access it
        if (entry.ownerId != Meteor.userId()) {
            console.log(`This entry belongs to ${entry.ownerId} but the logged in user is ${Meteor.userId()}`);
            throw Error("Logged in user does not have permission to view this entry");
        }

        // The entry exists and the logged in user is the owner,
        // so they can access it
        return entry;
    },

    // Sets the contents of an entry
    'entries.setText' (entryId, newText) {
        console.log('set text for entry');

        // If no user is logged in, throw an error
        if (!Meteor.user()) {
            console.log("No user is logged in!");
            throw Error("User is not logged in");
        }
        
        // Locate the entry
        let entry = JournalEntryCollection.findOne({_id: entryId});

        // If no entry exists, the logged in user can't modify it
        if (!entry) {
            console.log(`entry with ID ${entryId} wasn't found`);
            throw Error("Unable to find entry with given ID");
        }

        console.log(`Entry found: ${entry._id}, ${entry.text}`);

        // Set entry contents
        return JournalEntryCollection.update({_id: entryId}, {
            '$set': { 'text': newText }
        });
    },

    // Delete an entry
    'entries.delete' (entryId) {
        console.log('delete entry');

        // If no user is logged in, throw an error
        if (!Meteor.user()) {
            console.log("No user is logged in!");
            throw Error("User is not logged in");
        }
        
        // Locate the entry
        let entry = JournalEntryCollection.findOne({_id: entryId});

        // If no entry exists, the logged in user can't modify it
        if (!entry) {
            console.log(`entry with ID ${entryId} wasn't found`);
            throw Error("Unable to find entry with given ID");
        }

        console.log(`Entry found: ${entry._id}, ${entry.text}`);

        // Delete the entry
        return JournalEntryCollection.remove({_id: entryId});
    },

})