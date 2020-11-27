import React, { Component } from 'react';

export class EditPage extends Component {

    constructor(props) {
        super(props);

        console.log(props);

        let id = props.id;

        // TODO: Get the contents of the entry from the ID
        // TODO: Assign the entry contents to the state

        this.state = { entryContents: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleContentsChanged = this.handleContentsChanged.bind(this);
    }

    handleSubmit() {
        // TODO: Request server to update contents of entry
        // TODO: Redirect to the view page
        console.log("submit it");
    }

    handleContentsChanged(event) {
        this.setState({entryContents: event.target.value});
        console.log(`contents were changed to ${event.target.value}`);
    }

    render() {
        return (
            <div>
              <h2>Edit Entry</h2>
              <h4>November 26, 2020 at 7:02 PM</h4>
              <form onSubmit={this.handleSubmit}>
                  <textarea value={this.state.entryContents} onChange={this.handleContentsChanged} className="form-control"/>
                  <button type="submit" className="btn btn-primary">Save</button> 
              </form>
            </div>
        );
    }
}
