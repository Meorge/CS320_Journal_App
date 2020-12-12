import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { JournalEntryCollection } from '../api/JournalEntryCollection';
import PropTypes from 'prop-types';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

class ListPage_Malcolm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('entries:', this.props.entries);
        return (
            <div>
              <h2>My Entries</h2>
              <div className="container">
                  {this.props.entries.map((a) => <ListPageItem_Malcolm entry={a} key={a._id} />)}
              </div>
            </div>
        );
    }
}

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
                    <a onClick={() => { FlowRouter.go('view', {_id: this.props.entry._id}); }} className="btn btn-primary stretched-link">View</a>
                </div>
            </div>
        );
    }
}

ListPage_Malcolm.propTypes = {
    entries: PropTypes.array,
    loading: PropTypes.bool
};

const ListPageContainer_Malcolm = withTracker(() => {
    const handle = Meteor.subscribe('entries.getAllForUser');
    const loading = !handle.ready();
    const entries = JournalEntryCollection.find({ ownerId: Meteor.userId() }).fetch();

    return { entries, loading };
})(ListPage_Malcolm);

export default ListPageContainer_Malcolm;