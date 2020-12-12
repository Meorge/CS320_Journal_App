import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import {getElementById} from "domutils";
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { JournalEntryCollection } from '../api/JournalEntryCollection';

export class ListEntries extends Component {
    constructor(props) {
        super(props);
        let entriesList = JournalEntryCollection.find().fetch(); //
        console.log(entriesList); // show entries
        //.user() will pull the whole profile so need to specify only pull entries list
        //Maybe next step should be getting profiles created with entries then finish this page?
        console.log("User Record Returned: ", userRecord); //Test. This should return null because there is no logged in user at this time
    }
    render() {
        return (
            <div>
                <h2> Your Entries </h2>
            </div>
        );
    }
}