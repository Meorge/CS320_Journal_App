import React, { Component } from 'react';
import { JournalEntryCollection } from '/imports/api/JournalEntryCollection';

export class EditPage extends Component {
    constructor(props) {
        super(props);

        let id = props.id;

        // TODO: Get the contents of the entry from the ID
        Meteor.call('entries.get', id, (err, res) => {
            console.log(`entries.get - err = ${err}, res = ${res}`);
            if (res) {
                this.setState({entryContents: res.text, entry: res});
            } else {
                console.log(err);
            }
        });

        // TODO: Assign the entry contents to the state

        this.state = { entryContents: '', entry: null };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleContentsChanged = this.handleContentsChanged.bind(this);
    }

    handleSubmit() {
        // TODO: Request server to update contents of entry
        Meteor.call('entries.setText', this.props.id, this.state.entryContents, (err, res) => {
            console.log(`called entries.setText; err = ${err}, res = ${res}`);
            if (res) {
                // Success editing, send us to the edit page
                console.log("Successfully saved!");
                console.log(res);
            } else {
                // Failed I guess, send us to the bad page
                console.log("Failed to save");
                console.log(err);
            }
        });

        // TODO: Redirect to the view page
        console.log("try to submit it");
    }

    handleContentsChanged(event) {
        this.setState({entryContents: event.target.value});
    }

    render() {
        
        return (
            <div>
              <h2>Edit Entry</h2>
              <h4>{this.state.entry ? this.state.entry.creationDate.toString() : 'Date goes here, usually'}</h4>
              <form onSubmit={this.handleSubmit}>
                  <textarea value={this.state.entryContents ? this.state.entryContents : ''} onChange={this.handleContentsChanged} className="form-control"/>
                  <button type="submit" className="btn btn-primary">Save</button> 
              </form>
            </div>
        );
    }
}
