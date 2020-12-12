import React, { Component } from 'react';

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
        this.getSuccessIcon = this.getSuccessIcon.bind(this);
        this.getSaveSuccessBox = this.getSaveSuccessBox.bind(this);
    }

    handleSubmit() {
        // TODO: Request server to update contents of entry
        Meteor.call('entries.setText', this.props.id, this.state.entryContents, (err, res) => {
            console.log(`called entries.setText; err = ${err}, res = ${res}`);
            if (res) {
                // Success editing, send us to the edit page
                console.log("Successfully saved!");
                this.setState({saved: true});
                console.log(res);
            } else {
                // Failed I guess, send us to the bad page
                console.log("Failed to save");
                this.setState({saved: false, errorMsg: err});
                console.log(err);
            }
        });

        // TODO: Redirect to the view page
        console.log("try to submit it");
    }

    handleContentsChanged(event) {
        this.setState({entryContents: event.target.value});
    }

    getSuccessIcon() {
        return (
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
        );
    }

    getErrorIcon() {
        return (
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-exclamation-diamond-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
            </svg>
        );
    }

    getSaveSuccessBox() {
        // if (!this.state.error) return (<div></div>);
        console.log(this.state.saved);
        if (typeof this.state.saved !== 'undefined') {
            if (this.state.saved)
                return (
                    <div className="alert alert-success" role="alert">
                        {this.getSuccessIcon()} <strong>Success</strong> - Journal entry saved
                    </div>
                );
            else if (!this.state.saved)
                return (
                    <div className="alert alert-error" role="alert">
                        {this.getErrorIcon()} <strong>Error</strong> - {this.state.errorMsg}
                    </div>
                );
        } else {
            return (<div></div>);
        }
    }

    render() {
        
        return (
            <div>
              <h2>Edit Entry</h2>
              <h4>{this.state.entry ? this.state.entry.creationDate.toString() : 'Date goes here, usually'}</h4>
              {this.getSaveSuccessBox()}
              <div className="container">
                  <textarea value={this.state.entryContents ? this.state.entryContents : ''} onChange={this.handleContentsChanged} className="form-control"/>
                  <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Save</button> 
              </div>
            </div>
        );
    }
}
