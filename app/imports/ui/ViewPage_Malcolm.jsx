import React, { Component } from 'react';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

// Displays the contents of a single entry
export class ViewPage_Malcolm extends Component {
    constructor(props) {
        super(props);

        // Retrieve the contents of the current entry
        let id = props.id;
        Meteor.call('entries.get', id, (err, res) => {
            console.log(`entries.get - err = ${err}, res = ${res}`);
            if (res) {
                this.setState({entryContents: res.text, entry: res});
            } else {
                console.log(err);
            }
        });

        // Initialize the current entry to null, and the contents to be empty
        // (so until the contents are retrieved, the page will act like it's an empty entry)
        this.state = { entryContents: '', entry: null };

        this.goToEditEntry = this.goToEditEntry.bind(this);
    }

    // Directs the user to the "Edit Entry" page for this entry
    goToEditEntry() {
        console.log(this.state.entry);
        FlowRouter.go('edit', {_id: this.state.entry._id});
    }

    render() {
        return (
            <div>
              <h2>View Entry</h2>
              <h4>{this.state.entry ? this.state.entry.creationDate.toString() : 'Date goes here, usually'}</h4>
              <div className="container">
                  <p>{this.state.entry ? this.state.entry.text : ''}</p>
                  <button type="submit" className="btn btn-outline-primary" onClick={this.goToEditEntry}>Edit</button> 
              </div>
            </div>
        );
    }
}
