import { Meteor } from 'meteor/meteor';
import { defaultEntry, JournalEntryCollection } from '/imports/api/JournalEntryCollection';
import '/imports/api/users';


Meteor.startup( () => {
    if (JournalEntryCollection.find().count() === 0) {
        Meteor.call('entries.createNew');
    }
});
