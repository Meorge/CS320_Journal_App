import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { JournalEntryCollection } from '../api/JournalEntryCollection';
import PropTypes from 'prop-types';

class ListPage_Malcolm extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        this.state.entries.stop();
    }

    render() {
        console.log('entries:', this.props.entries);
        return (
            <div>
              <h2>My Entries</h2>
              <div className="container">
                  beep boop test
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
    const handle = Meteor.subscribe('entries.getAllForuser');
    const loading = !handle.ready();
    const entries = JournalEntryCollection.find({ ownerId: Meteor.userId() }).fetch();

    return { entries, loading };
})(ListPage_Malcolm);

export default ListPageContainer_Malcolm;