import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import '/imports/api/users';

import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

FlowRouter.route('/beep/', {
  name: 'index',
  action() {
    this.render('main');
  }
});

FlowRouter.route('*', {
  action() {
    console.log("not found 404 lol");
    this.render('notFound');
  }
});

// function insertLink({ title, url }) {
//   LinksCollection.insert({title, url, createdAt: new Date()});
// }

// Meteor.startup(() => {
//   // If the Links collection is empty, add some data.
//   if (LinksCollection.find().count() === 0) {
//     insertLink({
//       title: 'Do the Tutorial',
//       url: 'https://www.meteor.com/tutorials/react/creating-an-app'
//     });

//     insertLink({
//       title: 'Follow the Guide',
//       url: 'http://guide.meteor.com'
//     });

//     insertLink({
//       title: 'Read the Docs',
//       url: 'https://docs.meteor.com'
//     });

//     insertLink({
//       title: 'Discussions',
//       url: 'https://forums.meteor.com'
//     });
//   }
// });
