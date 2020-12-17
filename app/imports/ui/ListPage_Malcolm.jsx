import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { JournalEntryCollection } from '../api/JournalEntryCollection';
import PropTypes from 'prop-types';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

// This page displays a list of the user's entries
class ListPage_Malcolm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('entries:', this.props.entries);
        return (
            <div>
              <h2>My Entries</h2>
              <a onClick={() => { FlowRouter.go('createNew'); }} className="btn btn-primary">Create New Entry</a>
              <div className="container">
                  {this.props.entries.map((a) => <ListPageItem_Malcolm entry={a} key={a._id} />)}
              </div>
            </div>
        );
    }
}

// Single item in the list of entries
class ListPageItem_Malcolm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.entry.creationDate.toString()}</h5>
                    <p className="card-text">{this.props.entry.text}</p>
                    <a onClick={() => { FlowRouter.go('view', {_id: this.props.entry._id}); }} className="btn btn-primary">View</a>
                    <a onClick={() => { Meteor.call('entries.delete', this.props.entry._id); }} className="btn btn-danger">Delete</a>
                </div>
            </div>
        );
    }
}

// States what properties/arguments the ListPage_Malcolm object expects
ListPage_Malcolm.propTypes = {
    entries: PropTypes.array,
    loading: PropTypes.bool
};

// Handles the asynchronous process of loading the entries belonging to the current user
const ListPageContainer_Malcolm = withTracker(() => {
    const handle = Meteor.subscribe('entries.getAllForUser');
    const loading = !handle.ready();
    const entries = JournalEntryCollection.find({ ownerId: Meteor.userId() }).fetch();

    return { entries, loading };
})(ListPage_Malcolm);

export default ListPageContainer_Malcolm;